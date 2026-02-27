const https = require('https');
const fs = require('fs');
const readline = require('readline');

const url = 'https://images.dhan.co/api-data/api-scrip-master.csv';
const outputFile = 'c:/Users/HP/Amigo/src/data/allStocks.js';

https.get(url, (res) => {
    let stocks = [];
    let count = 0;

    const rl = readline.createInterface({
        input: res,
        crlfDelay: Infinity
    });

    let isFirstLine = true;
    let headers = [];

    rl.on('line', (line) => {
        const cols = line.split(',');

        if (isFirstLine) {
            headers = cols;
            isFirstLine = false;
            return;
        }

        // Dhan CSV (standard):
        // 0: EXCH_ID (NSE, BSE, MCX)
        // 1: EXCH_SEG_ID
        // 2: INSTRUMENT_TYPE (EQ, INDEX, FUTIDX)
        // 7: TRADING_SYMBOL
        // 13: SERIES / SECURITY_DESC

        if (cols.length > 5 && cols[0] === 'NSE') {
            const instrumentType = cols[2] === 'EQ' ? 'EQ' : (cols[3] === 'EQ' ? 'EQ' : cols[2]); // depending on header shift

            // Check if it's an equity
            if (line.includes(',EQ,')) {
                let symbolRaw = '';
                let nameRaw = '';

                // Try to find the symbol (usually column 7 or so)
                for (let i = 0; i < cols.length; i++) {
                    if (cols[i].includes('-EQ')) {
                        symbolRaw = cols[i];
                        if (cols[i + 6]) nameRaw = cols[i + 6]; // Security Desc is usually 6 cols after trading symbol
                        break;
                    }
                }

                if (!symbolRaw) {
                    symbolRaw = cols[7];
                    nameRaw = cols[13];
                }

                if (symbolRaw && typeof symbolRaw === 'string' && !symbolRaw.includes(' ')) {
                    const symbol = symbolRaw.replace('-EQ', '').replace(/"/g, '').trim();
                    const name = (nameRaw || symbol).replace(/"/g, '').trim();

                    if (symbol && !symbol.includes('BE') && !symbol.includes('NIFTY')) {
                        count++;

                        // Limit to top 2500 for performance
                        if (count <= 2500) {
                            const price = (Math.random() * 4990 + 10).toFixed(2);
                            const change = (Math.random() * 10 - 5).toFixed(2);
                            const vol = (Math.random() * 20 + 0.1).toFixed(1) + 'M';
                            const cap = (Math.random() * 20 + 0.1).toFixed(1) + 'T';

                            stocks.push(`  { id: ${count}, symbol: '${symbol}', name: '${name.replace(/'/g, "\\'")}', price: ${parseFloat(price)}, change: ${parseFloat(change)}, volume: '${vol}', marketCap: '${cap}' }`);
                        }
                    }
                }
            }
        }
    });

    rl.on('close', () => {
        console.log(`Parsed ${stocks.length} valid equity symbols.`);
        const fileContent = `export const ALL_STOCKS = [\n${stocks.join(',\n')}\n];\n`;
        fs.writeFileSync(outputFile, fileContent);
        console.log('Saved to allStocks.js');
    });
}).on('error', (err) => {
    console.error('Download error:', err.message);
});

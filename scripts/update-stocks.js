import https from 'https';
import fs from 'fs';
import path from 'path';
import readline from 'readline';

const url = 'https://images.dhan.co/api-data/api-scrip-master.csv';
const outputFile = path.join(process.cwd(), 'src', 'stocks.js');

console.log('Downloading stock list from Dhan...');

https.get(url, (res) => {
    let stocks = [];
    
    const rl = readline.createInterface({
        input: res,
        crlfDelay: Infinity
    });

    let isFirstLine = true;

    rl.on('line', (line) => {
        if (isFirstLine) {
            isFirstLine = false;
            return;
        }

        const cols = line.split(',');
        
        if (cols[0] === 'NSE' && (cols[3] === 'EQUITY' || cols[14] === 'EQ')) {
            const symbol = cols[5] || '';
            const name = cols[7] || symbol;
            
            // Filter out derivatives, debt, and weird symbols
            if (symbol && 
                !symbol.includes('-') && 
                !symbol.includes('&') && 
                !symbol.includes(' ') &&
                !symbol.includes('NSETEST') &&
                !/^\d/.test(symbol) && // Exclude symbols starting with digits (mostly debt/tbills)
                symbol.length >= 2 &&
                symbol.length <= 15
            ) {
                stocks.push({ 
                    symbol: symbol.trim(), 
                    name: name.trim().replace(/"/g, '').replace(/'/g, "")
                });
            }
        }
    });

    rl.on('close', () => {
        // Remove duplicates
        const uniqueStocks = Array.from(new Set(stocks.map(s => s.symbol)))
            .map(symbol => stocks.find(s => s.symbol === symbol))
            .sort((a, b) => a.symbol.localeCompare(b.symbol));

        // Format for export
        const outputContent = `export const allStocks = ${JSON.stringify(uniqueStocks, null, 2)};`;
        
        try {
            const dir = path.dirname(outputFile);
            if (!fs.existsSync(dir)) {
                fs.mkdirSync(dir, { recursive: true });
            }
            fs.writeFileSync(outputFile, outputContent);
            console.log(`Successfully saved ${uniqueStocks.length} stocks to ${outputFile}`);
        } catch (err) {
            console.error('Error writing file:', err);
        }
    });
}).on('error', (err) => {
    console.error('Error downloading CSV:', err);
});


export const INITIAL_PORTFOLIO = {
    summary: {
        totalInvestment: 545000,
        currentValue: 682500,
        dayPnL: 12500,
        totalPnL: 137500,
        dayPnLPercent: 1.86,
        totalPnLPercent: 25.22,
    },
    holdings: [
        { id: '1', name: 'Reliance Industries', ticker: 'RELIANCE', quantity: 50, avgPrice: 2450.00, cmp: 2950.50, dayChange: 45.20, dayChangePercent: 1.55 },
        { id: '2', name: 'Tata Consultancy Services', ticker: 'TCS', quantity: 20, avgPrice: 3200.00, cmp: 3950.25, dayChange: -12.50, dayChangePercent: -0.31 },
        { id: '3', name: 'HDFC Bank', ticker: 'HDFCBANK', quantity: 150, avgPrice: 1520.00, cmp: 1445.80, dayChange: 15.40, dayChangePercent: 1.07 },
        { id: '4', name: 'Tata Motors', ticker: 'TATAMOTORS', quantity: 200, avgPrice: 650.00, cmp: 980.60, dayChange: 22.10, dayChangePercent: 2.30 },
        { id: '5', name: 'Infosys', ticker: 'INFY', quantity: 100, avgPrice: 1450.00, cmp: 1680.90, dayChange: 8.50, dayChangePercent: 0.50 }
    ]
};

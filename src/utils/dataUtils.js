
const generateSparklineData = () => {
    let value = 100;
    return Array.from({ length: 7 }, () => {
      value += (Math.random() - 0.5) * 5; 
      return +value.toFixed(2);
    });
  };
  
 
  const sampleData = [
    {
      id: 1,
      name: 'Bitcoin',
      symbol: 'BTC',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Bitcoin.svg/1200px-Bitcoin.svg.png',
      price: 93759.48,
      percentChange1h: 0.43,
      percentChange24h: 0.93,
      percentChange7d: 11.11,
      marketCap: 1861618902186,
      volume24h: 43874950947,
      supply: '19.85M BTC',
      chart: '/chart-btc.svg',
      sparkline: generateSparklineData(),
    },
    {
      id: 2,
      name: 'Ethereum',
      symbol: 'ETH',
      logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-lBuqDXSiFE_McY-voa9YFoRqRJYzFcOghQ&s',
      price: 1802.46,
      percentChange1h: 0.6,
      percentChange24h: 3.21,
      percentChange7d: 13.68,
      marketCap: 217581279327,
      volume24h: 23547469307,
      supply: '120.71M ETH',
      chart: '/chart-eth.svg',
      sparkline: generateSparklineData(),
    },
   
    {
        id: 3,
        name: 'Teather',
        symbol: 'USDT',
        logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGcttVBhyCMnl1e_iNaaK7Z6GRz5WZTlDc3g&s',
        price: 1.00,
        percentChange1h: 0.00,
        percentChange24h: 0.00,
        percentChange7d: 0.04,
        marketCap: 145320022085,
        volume24h: 92288882007,
        supply: '145.27B USDT',
        chart: '/chart-eth.svg',
        sparkline: generateSparklineData(),
      },
      {
        id: 4,
        name: 'XRP',
        symbol: 'XRP',
        logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbEZShrI4dZzTiwz3WaW0Gv0xZgOb4rIlt-g&s',
        price: 2.22,
        percentChange1h: 0.46,
        percentChange24h: 0.54,
        percentChange7d: 6.18,
        marketCap: 130073814966,
        volume24h: 5131481941,
        supply: '58.39B XRP',
        chart: '/chart-eth.svg',
        sparkline: generateSparklineData(),
      },
      {
        id: 5,
        name: 'BNB',
        symbol: 'BNB',
        logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGre46NhQhAcxJ5V0EanBAZDw-c28rdPkxaQ&s',
        price: 606.65,
        percentChange1h: 0.09,
        percentChange24h: 1.20,
        percentChange7d: 3.73,
        marketCap: 85471956947,
        volume24h: 1874281784,
        supply: '140.89M BNB',
        chart: '/chart-eth.svg',
        sparkline: generateSparklineData(),
      },

      {
        id: 6,
        name: 'Solana',
        symbol: 'SOL',
        logo: 'https://logowik.com/content/uploads/images/solana1243.logowik.com.webp',
        price: 151.51,
        percentChange1h: 0.53,
        percentChange24h: 1.26,
        percentChange7d: 14.74,
        marketCap: 78381958631,
        volume24h: 4881674486,
        supply: '517.31M SOL',
        chart: '/chart-eth.svg',
        sparkline: generateSparklineData(),
      },
      {
        id:7,
        name:'Litecoin',
        symbol:'LTC',
        logo:'https://www.creativefabrica.com/wp-content/uploads/2021/06/16/Cryptocurrency-Litecoin-Logo-Graphics-13458855-1.jpg',
        price: 92.45,
        percentChange1h: 0.12,
        percentChange24h: 0.45,
        percentChange7d: 5.67,
        marketCap: 66123456789,
        volume24h: 1234567890,
        supply: '66.75M LTC',
        chart: '/chart-eth.svg',
        sparkline: generateSparklineData(),
      },
      {
        id:8,
        name:'Cardano',
        symbol:'ADA',
        logo:'https://img.freepik.com/free-vector/cardano-blockchain-cryptocurrency-logo-vector-open-source-finance-concept_53876-126022.jpg?semt=ais_hybrid&w=740',
        price: 1.23,
        percentChange1h: 0.08,
        percentChange24h: 0.32,
        percentChange7d: 4.56,
        marketCap: 45678901234,
        volume24h: 9876543210,
        supply: '45.00B ADA',
        chart: '/chart-eth.svg',
        sparkline: generateSparklineData(),
      },

      {
        id:9,
        name:'Polkadot',
        symbol:'DOT',
        logo:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZlFCbGT8TySHKk1FDCar3cGly5kO0dnTxBg&s',
        price: 25.67,
        percentChange1h: 0.20,
        percentChange24h: 0.75,
        percentChange7d: 3.45,
        marketCap: 23456789012,
        volume24h: 3456789012,
        supply: '1.10B DOT',
        chart: '/chart-eth.svg',
        sparkline: generateSparklineData(),
      },

      {
        id:10,
        name:'Chainlink',
        symbol:'LINK',
        logo:'https://logowik.com/content/uploads/images/chainlink-link-icon8862.logowik.com.webp',
        price: 28.90,
        percentChange1h: 0.15,
        percentChange24h: 0.60,
        percentChange7d: 4.20,
        marketCap: 12345678901,
        volume24h: 2345678901,
        supply: '467.00M LINK',
        chart: '/chart-eth.svg',
        sparkline: generateSparklineData(),
      }
         
  ];
  
  // Return initial crypto data
  export function getInitialCryptoData() {
    return sampleData;
  }
  
  // update price and sparkline
  export function getRandomUpdatedAsset(asset) {
    const newPrice = +(asset.price * (1 + (Math.random() - 0.5) / 50)).toFixed(2);
    const newSparkline = Array.isArray(asset.sparkline)
      ? [...asset.sparkline.slice(1), newPrice]
      : generateSparklineData();
  
    return {
      ...asset,
      price: newPrice,
      percentChange1h: +(Math.random() * 2 - 1).toFixed(2),
      percentChange24h: +(Math.random() * 4 - 2).toFixed(2),
      volume24h: Math.floor(asset.volume24h * (1 + (Math.random() - 0.5) / 10)),
      sparkline: newSparkline,
    };
  }
  
  
  
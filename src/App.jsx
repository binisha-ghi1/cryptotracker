import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateAsset, setSort, setFilter } from './store/slices/cryptoSlice';
import { getRandomUpdatedAsset } from './utils/dataUtils';
import SparklineChart from './components/SparklineChart';

const App = () => {
  const dispatch = useDispatch();
  const { assets, sortKey, sortOrder, filter } = useSelector(state => state.crypto);

  useEffect(() => {
    const interval = setInterval(() => {
      const assetToUpdate = assets[Math.floor(Math.random() * assets.length)];
      const updated = getRandomUpdatedAsset(assetToUpdate);
      dispatch(updateAsset(updated));
    }, 1500);
    return () => clearInterval(interval);
  }, [dispatch, assets]);

  const handleSort = key => dispatch(setSort(key));
  const handleFilter = e => dispatch(setFilter(e.target.value.toLowerCase()));

  let filteredAssets = assets.filter(a =>
    a.name.toLowerCase().includes(filter) || a.symbol.toLowerCase().includes(filter)
  );

  if (sortKey) {
    filteredAssets = [...filteredAssets].sort((a, b) => {
      const valA = a[sortKey];
      const valB = b[sortKey];
      if (sortOrder === 'asc') return valA > valB ? 1 : -1;
      else return valA < valB ? 1 : -1;
    });
  }

  return (
    <div className="p-4 bg-gray-100   flex-wrap">
      <h1 className="text-3xl font-bold mb-4 mt-4 text-teal-800 text-center  font-[cursive]">Crypto Tracker</h1>
      <input 
        type="text"
        onChange={handleFilter}
        placeholder="Search by name or symbol....."
        className="p-2 mb-4 border rounded w-full text-gray-800"
      />
      <div className="overflow-auto">
        <table className="min-w-full text-sm text-left">
          <thead>
            <tr>
              {['SN.No:', 'Logo', 'Name', 'Symbol', 'price', 'percentChange1h', 'percentChange24h', 'percentChange7d', 'marketCap', 'volume24h', 'supply', 'chart'].map((key, i) => (
                <th
                  key={i}
                  className="px-2 py-1 cursor-pointer hover:underline"
                  onClick={() => key !== 'Logo' && key !== 'chart' && key !== 'SN.No:' && handleSort(key)}
                >
                  {key === 'price' ? 'Price' :
                   key === 'percentChange1h' ? '1h %' :
                   key === 'percentChange24h' ? '24h %' :
                   key === 'percentChange7d' ? '7d %' :
                   key === 'marketCap' ? 'Market Cap' :
                   key === 'volume24h' ? 'Volume (24h)' :
                   key === 'supply' ? 'Circulating Supply' :
                   key === 'chart' ? '7 Days Chart' : key}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {filteredAssets.map((asset, idx) => (
              <tr key={asset.id} className="border-t">
                <td className="px-8 py-1 font-bold text-sm">{idx + 1}.</td>
                <td className="px-2 py-2"><img src={asset.logo} alt={asset.symbol} className="w-12 h-10" /></td>
                <td className="px-2 py-1 font-semibold">{asset.name}</td>
                <td className="px-2 py-1 font-bold text-gray-600">{asset.symbol}</td>
                <td className="px-2 py-1">${asset.price.toLocaleString()}</td>
                <td className={`px-2 py-1 ${asset.percentChange1h >= 0 ? 'text-green-600' : 'text-red-600'}`}>{asset.percentChange1h}%</td>
                <td className={`px-2 py-1 ${asset.percentChange24h >= 0 ? 'text-green-600' : 'text-red-600'}`}>{asset.percentChange24h}%</td>
                <td className={`px-2 py-1 ${asset.percentChange7d >= 0 ? 'text-green-600' : 'text-red-600'}`}>{asset.percentChange7d}%</td>
                <td className="px-2 py-1">${asset.marketCap.toLocaleString()}</td>
                <td className="px-2 py-1">${asset.volume24h.toLocaleString()}</td>
                <td className="px-2 py-1 font-bold text-gray-600">{asset.supply}</td>
                <td className="px-2 py-1"><SparklineChart data={asset.sparkline} /></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default App;


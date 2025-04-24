import { createSlice } from '@reduxjs/toolkit';
import { getInitialCryptoData } from '../../utils/dataUtils';

const initialState = {
  assets: getInitialCryptoData(),
  sortKey: null,
  sortOrder: 'asc',
  filter: '',
};

const cryptoSlice = createSlice({
  name: 'crypto',
  initialState,
  reducers: {
    updateAsset(state, action) {
      const updated = action.payload;
      const index = state.assets.findIndex(a => a.id === updated.id);
      if (index !== -1) state.assets[index] = updated;
    },
    setSort(state, action) {
      if (state.sortKey === action.payload) {
        state.sortOrder = state.sortOrder === 'asc' ? 'desc' : 'asc';
      } else {
        state.sortKey = action.payload;
        state.sortOrder = 'asc';
      }
    },
    setFilter(state, action) {
      state.filter = action.payload.toLowerCase();
    },
  },
});

export const { updateAsset, setSort, setFilter } = cryptoSlice.actions;
export default cryptoSlice.reducer;
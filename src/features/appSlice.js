import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';




export const appSlice = createSlice({
  name: 'app',
  initialState:{
     channelId:null,
     channelName:null,
   },
  reducers: {
    setChannelId: (state,action) => {
      state.value = action.payload;
    },
  },
});

export const { setChanelId } = appSlice.actions;
export const selectChanelId = (state) => state.app.channelId;
export const selectChannelName = (state) => state.app.channelName;

export default appSlice.reducer;

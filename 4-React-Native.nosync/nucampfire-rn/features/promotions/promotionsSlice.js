import { mapImageURL } from "../../utils/mapImageURL";
import { db } from "../../firebase.config";
import { collection, getDocs } from "firebase/firestore";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// import { baseUrl } from "../../shared/baseUrl";

export const fetchPromotions = createAsyncThunk(
  "promotions/fetchPromotions",
  async () => {
    const querySnapshot = await getDocs(collection(db, "promotions"));
    const promotions = [];
    querySnapshot.forEach((doc) => {
      promotions.push(doc.data());
    });
    return promotions;
  }
);

const promotionsSlice = createSlice({
  name: "promotions",
  initialState: { isLoading: true, errMess: null, promotionsArray: [] },
  reducers: {},
  extraReducers: {
    [fetchPromotions.pending]: (state) => {
      state.isLoading = true;
    },
    [fetchPromotions.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.errMess = null;
      state.promotionsArray = mapImageURL(action.payload);
    },
    [fetchPromotions.rejected]: (state, action) => {
      state.isLoading = false;
      state.errMess = action.error ? action.error.message : "Fetch failed";
    },
  },
});

export const promotionsReducer = promotionsSlice.reducer;

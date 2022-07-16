import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import clients, { thunkHandler } from "../../services/api";
import { toast } from "react-toastify";

const initialState: any = {
  status: "idle",
  characters: null,
  character: null,
};

export const getAllCharacters: any = createAsyncThunk(
  "breakingBad/getAllCharacters",
  (_, thunkAPI) => {
    const response = thunkHandler(
      clients.default.client({
        method: "GET",
        url: "/characters"
      }),
      thunkAPI
    );
    return response;
  }
);

export const getSelectedCharacters: any = createAsyncThunk(
  "breakingBad/getSelectedCharacters",
  ({ id }: any, thunkAPI) => {
    const response = thunkHandler(
      clients.default.client({
        method: "GET",
        url: `/characters/${id}`
      }),
      thunkAPI
    );
    return response;
  }
);

export const breakingBadSlice: any = createSlice({
  name: "breakingBad",
  initialState,
  reducers: {
  },
  extraReducers: {
    [getAllCharacters.pending]: (state: any) => {
      state.status = "loading";
    },
    [getAllCharacters.fulfilled]: (state: any, action: any) => {
      const actionState = action.payload;
      state.status = "succeeded";
      state.characters = actionState;
    },
    [getAllCharacters.rejected]: (state: any, action: any) => {
      state.status = "failed";
      toast.error(action?.payload?.data?.message);
    },
    [getSelectedCharacters.pending]: (state: any) => {
      state.status = "loading";
    },
    [getSelectedCharacters.fulfilled]: (state: any, action: any) => {
      const [actionState] = action.payload;
      state.status = "succeeded";
      state.character = actionState;
    },
    [getSelectedCharacters.rejected]: (state: any, action: any) => {
      state.status = "failed";
      toast.error(action?.payload?.data?.message);
    }
  },
});

export default breakingBadSlice.reducer;

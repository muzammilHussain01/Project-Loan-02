import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  access: [],
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setAccess: (state, action) => {
      state.access = action.payload;
    },
  },
});

export const { setAccess } = userSlice.actions;
export default userSlice.reducer;

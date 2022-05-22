import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  name: 'alex',
  password: 'qwerty',
  loggedIn: false,
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    logIn(state, action) {
      state.loggedIn = action.payload;
    }
  },
});

export const { logIn } = userSlice.actions;
export default userSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "user",
  initialState: {
    id: "",
    fisrtname: "",
    lastname: "",
    username: "",
    password: "",
  },
  reducers: {
    login: (state, action) => {
      console.log(action.payload);
      const data = {
        token: action.payload.data.token,
        username: action.payload.data.user.username,
        id: action.payload.data.user._id,
        lastname: action.payload.data.user.lastname,
        firstname: action.payload.data.user.firstname,
      };
      state = data;
      return data;
      // console.log(action.payload);
    },
  },
});

export const { login } = authSlice.actions;
export default authSlice.reducer;

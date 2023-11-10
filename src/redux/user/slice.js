import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  users: [],
  loading: false,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    createUser: (state, action) => {
      return {
        ...state,
        user: {
          name: action.payload.name,
          email: action.payload.email,
        },
      };
    },

    logoutUser: (state) => {
      return {
        ...state,
        user: null,
      };
    },

    addAddress: (state, action) => {
      return {
        ...state,
        user: {
          ...state.user,
          address: {
            location: action.payload.location,
            number: action.payload.number,
          },
        },
      };
    },

    deleteAddress: (state) => {
      return {
        ...state,
        user: {
          ...state.user,
          address: null,
        },
      };
    },

    fetchUsers: (state, action) => {
      return {
        ...state,
        users: [],
        loading: true,
      };
    },

    fetchUsersSuccess: (state, action) => {
      return {
        ...state,
        users: action.payload,
        loading: false,
      };
    },

    fetchUsersFailure: (state) => {
      return {
        ...state,
        users: [],
        loading: false,
      };
    },
  },
});

export const {
  createUser,
  logoutUser,
  addAddress,
  deleteAddress,
  fetchUsers,
  fetchUsersSuccess,
  fetchUsersFailure,
} = userSlice.actions;
export default userSlice.reducer;

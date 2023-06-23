import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  form: {
    email: "",
    password: "",
  },
};

export const addNewCar = createAsyncThunk(
  "example/addNewCar",
  async (_, { getState }) => {
    const { example } = getState();
    console.log(example);
  }
);

export const exampleSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    updateForm: (state, action) => {
      state.form[action.payload.type] = action.payload.value;
    },
  },
});

// Action creators are generated for each case reducer function
export const { updateForm } = exampleSlice.actions;

export default exampleSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";

const pageSlice = createSlice({
  name: "pageReducer",
  initialState: { settings: {}, schema: [], number: 0 },
  reducers: {
    updateSettings(state, action) {
      state.settings = action.payload;
    },
    updateSchema(state, action) {
      state.schema = action.payload;
    },
  },
});

const pageSelector = {
  settings: (state) => state?.[pageSlice.name]?.settings,
  schema: (state) => state?.[pageSlice.name]?.pageSchema,
};

const pageActions = pageSlice.actions;

export { pageSelector, pageActions };
export default pageSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";

const pageSlice = createSlice({
  name: "pageReducer",
  initialState: { controlId: null, settings: {}, schema: [], number: 0 },
  reducers: {
    updateControlId(state, action) {
      state.controlId = action.payload;
    },
    updateSettings(state, action) {
      state.settings = action.payload;
    },
    updateSchema(state, action) {
      state.schema = action.payload;
    },
  },
});

const pageSelector = {
  controlId: (state) => state?.[pageSlice.name]?.controlId,
  settings: (state) => state?.[pageSlice.name]?.settings,
  schema: (state) => state?.[pageSlice.name]?.schema,
};

const pageActions = pageSlice.actions;

export { pageSelector, pageActions };
export default pageSlice.reducer;

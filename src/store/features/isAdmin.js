import { createSlice } from '@reduxjs/toolkit'

export const adminRedux = createSlice({
  name: 'admin',
  initialState: {
    value: false,
  },
  reducers: {
    load: (state) => {
      state.value = true
    },
    unload: (state) => {
        state.value = false
    }
  },
})

// Action creators are generated for each case reducer function
export const { load, unload } = adminRedux.actions

export default adminRedux.reducer
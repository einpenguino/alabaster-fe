import { createSlice } from '@reduxjs/toolkit'

export const userProfile = createSlice({
  name: 'user',
  initialState: {
    value: null,
  },
  reducers: {
    store: (state, value) => {
      state.value = value.payload
    },
    clear: (state) => {
        state.value = null
    }
  },
})

// Action creators are generated for each case reducer function
export const { store, clear } = userProfile.actions

export default userProfile.reducer
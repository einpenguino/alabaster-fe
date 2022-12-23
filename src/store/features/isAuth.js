import { createSlice } from '@reduxjs/toolkit'
// import { UseAuth } from '../../components/auth'

export const authRedux = createSlice({
  name: 'auth',
  initialState: {
    value: false,
  },
  reducers: {
    login: (state) => {
      // console.log(document.cookie)
      state.value = true
    },
    logout: (state) => {
        state.value = false
    }
  },
})

// Action creators are generated for each case reducer function
export const { login, logout } = authRedux.actions

export default authRedux.reducer
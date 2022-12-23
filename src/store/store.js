import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './features/counterSlice'
import authRedux from './features/isAuth'
import userProfile from './features/userProfileStore'
import adminRedux from './features/isAdmin'

export default configureStore({
  reducer: {
    auth : authRedux,
    profile : userProfile,
    isadmin : adminRedux
  },
})
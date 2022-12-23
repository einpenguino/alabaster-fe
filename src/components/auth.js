// import { useNavigate } from 'react-router-dom'
import {useSelector, useDispatch} from 'react-redux'
import {login, logout} from '../store/features/isAuth'

export const isAuth = async () => {
    // const navigate = useNavigate()
    // const authStatus = useSelector((state) => state.auth.value)
    const options = {
        method : 'POST',
        credentials: "include",
        // credentials:'same-origin',
        headers :{
          'Content-Type': 'application/json',
          // 'Access-Control-Allow-Origin':'*'
        }
    }
    // console.log('isAuth triggered')
try{
    if(!document.cookie){
        // navigate('/login')
        return false
    }else{
    console.log(options)
    const response = await fetch(`${process.env.REACT_APP_EXPRESS_URL}/auth`, options)
    return response.status
    // console.log(response)
    // if (response.status === 200){
    //     return true
    // } else {
    //     return false
    // }
    }
}catch(e){
    console.log(e)
}
}
// export const isAuth = async () => {
//     const navigate = useNavigate()
//     const options = {
//         method : 'POST',
//         credentials: "include",
//         // credentials:'same-origin',
//         headers :{
//           'Content-Type': 'application/json',
//           // 'Access-Control-Allow-Origin':'*'
//         }
//     }
// try{
//     if(!document.cookie){
//         navigate('/login')
//     }else{
//     console.log(options)
//     const response = await fetch(`${process.env.REACT_APP_EXPRESS_URL}/auth`, options)
//     console.log(response)
//     if (response.status === 200){
//         return true
//     }
//     }
// }catch(e){
//     console.log(e)
// }
// }
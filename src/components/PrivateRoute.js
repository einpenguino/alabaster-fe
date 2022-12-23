import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
// import { useAuth } from '../hooks/isAuth';

// import { history } from '_helpers';

export { PrivateRoute };

function PrivateRoute({ children }) {
    // const { user: authUser } = useSelector(x => x.auth);
    // let authUser = false
    const auth = useSelector((state) => state.auth.value)
    console.log(`Private Route auth status : ${auth}`)
    // const validity = document.cookie.split('=')[0] === 'alabaster'
    // console.log(`Private Route Validity : ${validity}`)
    if (!auth) {
        // not logged in so redirect to login page with the return url
        // return <Navigate to="/login" state={{ from: history.location }} />
        return <Navigate to="/login"/>
    }

    // authorized so return child components
    return children;
}
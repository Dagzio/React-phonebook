const { useSelector } = require("react-redux")
const { Navigate } = require("react-router-dom")
const { selectIsLoggedIn } = require("redux/selectors")


const PrivateRoute = ({children}) => {
    const userIsLoggedIn = useSelector(selectIsLoggedIn)
    return userIsLoggedIn? children : <Navigate to='/login' />
};

export default PrivateRoute;
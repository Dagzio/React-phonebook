import { useNavigate } from "react-router-dom";

const Navigation = () => {
    const navigate = useNavigate();


    return <div>
        <button type="button" onClick={()=>{navigate("/register")}}>Sign Up</button>
        <button type="button" onClick={()=>{navigate("/login")}}>Log in</button>
    </div>
}

export default Navigation;
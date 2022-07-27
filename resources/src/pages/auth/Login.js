import { useEffect, useState, useContext} from 'react';
import axios from "axios";
import { LoginContext } from '../../context/LoginContext';
import { useNavigate} from 'react-router-dom'
import Loader from '../../components/Loader';
import '../../css/pages/Login.css'

function Login() {
    const [credentials, setCredentials] = useState({phone:'', password:''});
    const [errors, setErrors] = useState({});
    const [isLoading, setIsLoading] = useState(false);
    const {baseUrl, setUser, setIsAuthenticated} = useContext(LoginContext);
    const navigate = useNavigate()

    const handleChange = (e) =>{
        const {name, value} = e.target
        setCredentials({
            ...credentials,
            [name]: value
        })
    }

    const login = (e) =>{
        e.preventDefault()
        
        if(!credentials.phone.trim()){
            setErrors({phone: "Phone is required"})

            return

        }

        if (!credentials.password) {
            setErrors({password: "Password is required"})
            return
        } else if (credentials.password.length < 6) {
            setErrors({password: "Password needs to be 6 characters or more"})

            return
        }else{
            setErrors({password: ""});
        }

        setIsLoading(true)

        axios(
            {
                url: baseUrl+"login",
                method: 'post',
                data:{phone: credentials.phone, password: credentials.password},
                headers: {
                    "Content-Type": "application/json",
                }    
            }
        ).then(response => {
            localStorage.setItem("auth_token", response.data.success.token);
            setIsAuthenticated(true);
            getUser(response.data.success.token);

         })  .catch(err => {
             setIsLoading(false)
         });
    }
    
    const getUser = (token) =>{
        axios(
            {
                url: baseUrl+"user/details",
                method: 'get',
                headers: {
                    "Content-Type": "application/json",
                    "Authorization":"Bearer "+token
                }    
            }
        ).then(response => {
            console.log(response.data.success)
            setUser(response.data.success.user);
            localStorage.setItem("user", JSON.stringify(response.data.success.user))
            setIsLoading(false);
            navigate("/dashboard");

         })  .catch(err => {
             setIsLoading(false)
         });
    }

   return (
    <div className="login-main-content">
        {
            isLoading ? <Loader loadMsg="Signing you in, please wait..." /> :
        <div>
        <h1>Welcome to <span style={{color: '#5baa46'}}>pickFresh</span></h1>
            <span>Enter your information to gain access <br/> to your sales management tool
            </span>
            <form method="post" onSubmit={login}>  
                {/* {errors.message && <p style={{fontSize:12, color:'red'}}>{errors.message}</p>} */}
                <div className="form-inputs">
                    <div className="form-controls">
                        <label htmlFor="phone" className="form-label">
                            Phone
                        </label>
                        <input
                        id="phone" className="form-input"
                            type="tel"
                            name="phone"
                            className="form-input"
                            placeholder="Enter your phone"
                            value={credentials.phone}
                            onChange={handleChange}
                            />
                            {errors.phone && <p>{errors.phone}</p>}
                    </div>
                    <div className="form-controls">
                        <label htmlFor="password" className="form-label">
                            Password
                        </label>
                        <input
                            id="password"
                            type="password"
                            name="password"
                            className="form-input"
                            placeholder="Enter your password"
                            value={credentials.password}
                            onChange={handleChange}
                            />
                            {errors.password && <p>{errors.password}</p>}
                    </div>
                    <button 
                        type="submit"
                        className="btn form-input-btn">
                            Login to adEng
                        </button>
                        {/* <span className="form-input-login-link">
                            Dont have an account? Register <Link to="/registration"> here</Link>
                        </span> */}
                </div>
            </form>
        </div>
        }
    </div>
  )
}

export default Login;

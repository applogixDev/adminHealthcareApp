import React, {useState,useContext} from "react";
import './styles.css';
import Input from "../components/Input";
import Button from "../components/Button";
import axios from 'axios';
import {toast} from 'react-toastify';
import { useNavigate} from 'react-router-dom';
import { UserContext } from '../context';


const Login = ({history}) =>{

  const[email,setEmail] = useState('');
  const[password,setPassword] = useState('');
  const[state,setState] = useContext(UserContext);
  const navigate = useNavigate();

  const handleClick = async (e) => {
    // console.log(`email and password`,email,password);
    // return;
    try{
      e.preventDefault();
      const {data} = await axios.post("http://localhost:3031/api/login",{
        
        email,
        password
      });
      console.log(data);
     
      if(data.error)
      {
        toast.error(data.error)
      }
      else
      {
       
        setEmail('');
        setPassword('');
        setState(data);
        localStorage.setItem('auth',JSON.stringify(data));
        toast.success('login successfull');
        navigate('/');
      };
    
     
    }
    catch(err)
    {
      toast(err.response.data);

      console.log(`error is`,err.response.data);
    }
    
  }

    return(
        
           <div className="container-fluid m-4 p-4">
      <div className="row align-items-center">
        <div className="col-md-6 m-auto">
          <div className="card text-center shadow">
            <div className="card-header h3 bg-box-text bg-box">Login</div>
            <div className="card-body">
            <h1 className="pt-2 h3 heading-text">Login to your account </h1>
                    <div className="form-group">
                      
                       <Input label="Email" value={email} setValue={setEmail} type="email"/>
                       <Input label="Password" value={password} setValue={setPassword} type="password"/>

                       <div className="d-grid">
                        <Button handleClick={handleClick} type="primary"  text="Login"/>
                       </div>
                       
                    </div>
                    <div className="card-footer text-dark">
              <div className='row mt-3'>
                <div className='col-md-6'>
              <span>  Not Yet Registered - <a href='/register' className=''>Register Here</a></span>
              </div>

              <div className='col-md-6'>
               <span>Forgot Password - <a href='/forgotpassword' className=''>Click To Reset</a></span>
               </div>
              </div>

              </div>

                  </div>

                  {/* <div className="row">
                     <pre>{JSON.stringify({name,email,password})}</pre>
                  </div> */}
              </div>
          </div>

        </div>
        </div>
    );
}

export default Login;
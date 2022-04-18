import React, {useState, useContext} from "react";
import './styles.css';
import Input from "../components/Input";
import Button from "../components/Button";
import axios from 'axios';
import {toast} from 'react-toastify';
import { useNavigate} from 'react-router-dom';
import { UserContext } from '../context';


const Register = ({history}) =>{
  const[firstName,setFirstName] = useState('');
  const[lastName,setLastName] = useState('');
  const[email,setEmail] = useState('');
  const[password,setPassword] = useState('');
  const[state,setState] = useContext(UserContext);
  const navigate = useNavigate();

  const handleClick = async (e) => {
    try{
      e.preventDefault();
      const {data} = await axios.post("http://localhost:3031/api/register",{
        firstName,
        lastName,
        email,
        password
      });
      console.log(data);
     
      
        setFirstName('');
        setLastName('');
        setEmail('');
        setPassword('');
        toast(`Hi ${data.user.name},registration is successful,please login`);
        setState(data);
        localStorage.setItem('auth',JSON.stringify(data));
        navigate('/');
      
     
     
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
            <div className="card-header h3 bg-box-text bg-box">Register</div>
            <div className="card-body">
            <h1 className="pt-2 h3 heading-text">Create an account </h1>
                    <div className="form-group">
                       <Input className="labels-bg" label="First Name" value={firstName} setValue={setFirstName} type="text"/>
                       <Input className="labels-bg" label="Last Name" value={lastName} setValue={setLastName} type="text"/>
                       <Input label="Email" value={email} setValue={setEmail} type="email"/>
                       <Input label="Password" value={password} setValue={setPassword} type="password"/>

                       <div className="d-grid">
                        <Button handleClick={handleClick} type="primary"  text="Register"/>
                       </div>
                       
                    </div>

                  </div>
                  <div className="card-footer text-dark">Already Registered? <span><a href='/login' className=''> Login</a></span></div>

                  {/* <div className="row">
                     <pre>{JSON.stringify({name,email,password})}</pre>
                  </div> */}
              </div>
          </div>
          </div>

        </div>
    );
}

export default Register;
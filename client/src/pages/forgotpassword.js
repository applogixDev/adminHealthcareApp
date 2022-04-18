import {useState, useContext, useEffect} from 'react';
import Input from "../components/Input";
import axios from 'axios';
import {toast} from 'react-toastify';
import {SyncOutlined} from '@ant-design/icons';


import { useNavigate} from 'react-router-dom';
import { validateEmail } from '../utils/Validate_Email';


const ForgotPassword = () => {
   
    const[email,setEmail] = useState('');
    const[loading,setLoading] = useState(false);
    const navigate = useNavigate();

    



 


    const handleClick = async (e) =>{

      
        
          e.preventDefault();
         if(!validateEmail(email.trim()))
         {

          toast.error('Invalid email format')
         }
         else
         {
           toast.success('Reset password link is sent')
         }
        
      
       
       }
        
      
        
      
  
      

    
  return (
    <div className="container-fluid m-4 p-4">
      <div className="row align-items-center">
        <div className="col-md-4 m-auto">
          <div className="card text-center shadow">
            <div className="card-header h3 bg-box-text bg-box">Forgot Password</div>
            <div className="card-body">
            <h1 className="pt-2 h3 heading-text">Enter you email to get reset link </h1>
                    

                    <div className="form-group pt-2">
                      
                       <Input label="Email" value={email} setValue={setEmail} onChange={(e)=> setEmail(e.target.value)} type="email" required/>
                       
                       <div className="d-grid">
                         <button onClick={handleClick} className='btn btn-primary buttons text-white'>
                           Reset
                         </button>
                       </div>
                       
                    </div>
            </div>
           

          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;

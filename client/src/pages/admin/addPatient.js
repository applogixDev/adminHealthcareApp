import { useContext, useState, useEffect } from "react";
// import { Context } from "../../context";
import Input from "../../components/Input";
import axios from 'axios';
import {SyncOutlined} from '@ant-design/icons';
import {toast} from 'react-toastify';
import { useNavigate } from "react-router-dom";

import '../styles.css';

const AddPatient = () => {
  let navigate = useNavigate();
    const[loading,setLoading] = useState(false);
    const[firstName,setFirstName]=useState('');
    const[lastName,setLastName]=useState('');
    const[age,setAge]=useState('');
    const[contactNumber,setContactNumber]=useState('');
    const[emerContactNum,setEmerContactNum]=useState('');
    const[email,setEmail]=useState('');
    const[gender,setGender]=useState('');
    const[dob,setDob]=useState('');
    const[registerNumber,setRegisterNumber]=useState('');
    const[houseNumber,setHouseNumber]=useState('');
    const[street,setStreet]= useState('');
    const[city,setCity]=useState('');
    const[state,setState]=useState('');
    const[postcode,setPostCode]=useState('');
    let [submit, setSubmit] = useState(false);
    // const {
    //     state:{user}
    // } = useContext(Context);
   
    const handleClick = async (e) =>{
        try{
            setLoading(true);
            e.preventDefault();
            const{data}=await axios.post(`http://localhost:3031/api/createpatient`,{
                firstName,lastName,age,contactNumber,emerContactNum,email,gender,dob,registerNumber,houseNumber,street,city,state,postcode
            })
            toast.success('Details added successfully');
            setSubmit(true);
        }
        catch(err)
        {
          toast(err.response.data);

          console.log(`error is`,err.response.data);
        }
    }
    return (
      <>
        {submit ? (
          navigate("/dashboard")
        ) : (
        <>
        {/* <pre>{JSON.stringify({firstName,lastName,age,contactNumber,emerContactNum,email,gender,dob,
        registerNumber,houseNumber,street,city,state,postcode})}</pre> */}
        <div className="container-fluid m-4 p-4">
        <div className="row align-items-center">
          <div className="col-md-6 m-auto">
            <div className="card text-center shadow">
              <div className="card-header h3 bg-box-text bg-box">Add Bio</div>
              <div className="card-body">
              <h1 className="pt-2 h3 heading-text">Add Patient details </h1>
                      
  
                      <div className="form-group pt-2">
                        
                         <Input label="First Name" value={firstName} setValue={setFirstName} onChange={(e)=> setFirstName(e.target.value)} type="text" required/>
                         <Input label="Last Name" value={lastName} setValue={setLastName} onChange={(e)=> setLastName(e.target.value)} type="text" required/>
                         <Input label="Age" value={age} setValue={setAge} onChange={(e)=> setAge(e.target.value)} type="text" required/>
                         <Input label="Contact Number" value={contactNumber} setValue={setContactNumber} onChange={(e)=> setContactNumber(e.target.value)} type="text" required/>
                         <Input label="Emergency Contact Number" value={emerContactNum} setValue={setEmerContactNum} onChange={(e)=> setEmerContactNum(e.target.value)} type="text" required/>
                         <Input label="Email" value={email} setValue={setEmail} onChange={(e)=> setEmail(e.target.value)} type="text" required/>
                         <Input label="Gender" value={gender} setValue={setGender} onChange={(e)=> setGender(e.target.value)} type="text" required/>
                         <Input label="DOB" value={dob} setValue={setDob} onChange={(e)=> setDob(e.target.value)} type="text" required/>
                         <Input label="Register Number" value={registerNumber} setValue={setRegisterNumber} onChange={(e)=> setRegisterNumber(e.target.value)} type="text" required/>
                         <Input label="House Number" value={houseNumber} setValue={setHouseNumber} onChange={(e)=> setHouseNumber(e.target.value)} type="text" required/>
                         <Input label="Street" value={street} setValue={setStreet} onChange={(e)=> setStreet(e.target.value)} type="text" required/>
                         <Input label="City" value={city} setValue={setCity} onChange={(e)=> setCity(e.target.value)} type="text" required/>
                         <Input label="State" value={state} setValue={setState} onChange={(e)=> setState(e.target.value)} type="text" required/>
                         <Input label="Post Code" value={postcode} setValue={setPostCode} onChange={(e)=> setPostCode(e.target.value)} type="text" required/>
  
                         <div className="d-grid">
                         
                           <button onClick={handleClick} className='btn btn-md btn-primary' disabled={ !firstName || !lastName ||!age||!contactNumber||!emerContactNum ||!email || !gender ||!dob ||!registerNumber||!houseNumber ||!street || !city|| !state || !postcode||loading}>
                             {loading ? <SyncOutlined spin />: "Submit"}
                           </button>
                         </div>
                         
                      </div>
              </div>
             
  
  
            </div>
          </div>
        </div>
      </div>
      </>
      

    )
  

}
</>)}
export default AddPatient;
import { useContext, useState, useEffect } from "react";
// import { Context } from "../../context";
import Input from "../../components/Input";
import axios from 'axios';
import {SyncOutlined} from '@ant-design/icons';
import {toast} from 'react-toastify';
import { useParams, useNavigate } from "react-router-dom";

import '../styles.css';

const ViewPatient = () => {
  let patientId = useParams().id;
  let[patient,setPatient] = useState({});
  let navigate = useNavigate();
    
  useEffect(()=>{
    getPatient();
  },[patientId])

   const getPatient = () =>{

    
       let url = `http://localhost:3031/api/patients/${patientId}`
       axios.get(url).then((res)=>{
          setPatient(res.data);
          console.log(res.data);
        }).catch((error)=>{
          toast(error.response.data);

      console.log(`error is`, error.response.data);

        })


    
      
     

   }
    
    return (
      <>
       
        {/* <pre>{JSON.stringify(patient)}</pre> */}
        <div className="container-fluid m-4 p-4">
        <div className="row align-items-center">
          <div className="col-md-9 m-auto">
            <div className="card text-center shadow">
              <div className="card-header h3 bg-box-text bg-box">View Bio</div>
              <div className="card-body">
              <h1 className="pt-2 h3 heading-text"> Patient details </h1>


              <div className="col-md-12 mt-4">



<ul className="list-group">
  <li className="list-group-item"><span className="text-dark fw-bold">First Name: </span> {patient.firstName}</li>

  <li className="list-group-item list-group-item-primary"><span className="text-dark fw-bold">Last Name: </span> {patient.lastName}</li>
  <li className="list-group-item list-group-item-secondary"><span className="text-dark fw-bold">Age: </span> {patient.age}</li>
  <li className="list-group-item list-group-item-success"><span className="text-dark fw-bold">Gender: </span> {patient.gender}</li>
  <li className="list-group-item list-group-item-danger"><span className="text-dark fw-bold">Email: </span> {patient.gender}</li>
  <li className="list-group-item list-group-item-warning"><span className="text-dark fw-bold">DOB: </span> {patient.dob}</li>
  <li className="list-group-item list-group-item-info"><span className="text-dark fw-bold">Contact Number: </span> {patient.contactNumber}</li>
  <li className="list-group-item list-group-item-light"><span className="text-dark fw-bold">Emergerncy Contact Number: </span> {patient.emerContactNum}</li>
  <li className="list-group-item list-group-item-dark"><span className="text-dark fw-bold">Address: </span> {patient.houseNumber},{patient.street},{patient.city},{patient.state},{patient.postcode}</li>
</ul>
</div>
                      
  
                     
              </div>
             
  
  
            </div>
          </div>
        </div>
      </div>
      </>
      

    )
  

}

export default ViewPatient;
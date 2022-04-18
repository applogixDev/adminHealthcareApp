import { useState, useEffect } from "react";
import { useParams, useNavigate} from'react-router-dom';
import Input from "../../components/Input";
import axios from 'axios';
import {toast} from 'react-toastify';
import '../styles.css';

const UpdatePatient = () => {
  let patientId = useParams().id;
  let navigate = useNavigate();
 

  const[contactNumber,setContactNumber] = useState("");
  const[emerContactNum,setEmerContactNum] = useState("");
  const[email,setEmail] = useState("");
  const[houseNumber,setHouseNumber] = useState("");
  const[street,setStreet] = useState("");
  const[city,setCity] = useState("");
  const[state,setState] = useState("");
  const[postcode,setPostcode] = useState("");

 let [submit, setSubmit] = useState(false);
  
  useEffect(() => {
 
    loadPatientInfo();
  }, [patientId]);
  
  const loadPatientInfo = async () => {
    const {data} = await axios.get(`http://localhost:3031/api/patients/${patientId}`)
    
    setContactNumber(data.contactNumber);
    setEmerContactNum(data.emerContactNum);
    setEmail(data.email);
    setHouseNumber(data.houseNumber);
    setStreet(data.street);
    setCity(data.city);
    setState(data.state);
    setPostcode(data.postcode);
    //console.log(data);
  }

  let updateInput = (event) => {
   
    setContactNumber({
      ...contactNumber,
      [event.target.name]: event.target.value,
    })

    setEmerContactNum({
      ...emerContactNum,
      [event.target.name]: event.target.value,
    })

    setEmail({
      ...email,
      [event.target.name]: event.target.value,
    })

    setHouseNumber({
      ...houseNumber,
      [event.target.name]: event.target.value,
    })

    setStreet({
      ...street,
      [event.target.name]: event.target.value,
    })

    setCity({
      ...city,
      [event.target.name]: event.target.value,
    })

    setState({
      ...state,
      [event.target.name]: event.target.value,
    })

    setPostcode({
      ...postcode,
      [event.target.name]: event.target.value,
    })
  };

  let submitPatient =  (event) => {
    
      event.preventDefault();
      let dataUrl = `http://localhost:3031/api/patients/${patientId}`
    
    
       axios.put(dataUrl,{contactNumber,emerContactNum,email,houseNumber,street,city,state,postcode})
       .then((res)=>{
         setSubmit(true);
       }).catch((error)=>{

        toast(error.response.data);

        console.log(`error is`,error.response.data);

       })
    
     
    
  };

  return (
    <>
      {submit ? (
        navigate("/dashboard")
      ) : (
        <>
          {/* <pre>{JSON.stringify({contactNumber,emerContactNum,email,houseNumber,city,state,postcode})}</pre> */}
          <div className="container-fluid m-4 p-4">
        <div className="row align-items-center">
          <div className="col-md-6 m-auto">
            <div className="card text-center shadow">
              <div className="card-header h3 bg-box-text bg-box">Update</div>
              <div className="card-body">
              <h1 className="pt-2 h3 heading-text">Update Patient details </h1>
                  <form
                    onSubmit={submitPatient}
                    className="border border-dark m-2"
                  >
                    <div className="form-group m-3">
                      <Input
                        label="Contact Number"
                        value={contactNumber}
                        setValue={setContactNumber}
                        onChange={updateInput}
                        type="text"
                        required
                      />
                      <Input
                        label="Emergency Contact Number"
                        value={emerContactNum}
                        setValue={setEmerContactNum}
                        onChange={updateInput}
                        type="text"
                        required
                      />

                      <Input
                        label="Email"
                        value={email}
                        setValue={setEmail}
                        onChange={updateInput}
                        type="text"
                        required
                      />

                      <Input
                        label="House Number"
                        value={houseNumber}
                        setValue={setHouseNumber}
                        onChange={updateInput}
                        type="text"
                        required
                      />

                      <Input
                        label="Street"
                        value={street}
                        setValue={setStreet}
                        onChange={updateInput}
                        type="text"
                        required
                      />

                      <Input
                        label="City"
                        value={city}
                        setValue={setCity}
                        onChange={updateInput}
                        type="text"
                        required
                      />

                      <Input
                        label="State"
                        value={state}
                        setValue={setState}
                        onChange={updateInput}
                        type="text"
                        required
                      />

                      <Input
                        label="Post Code"
                        value={postcode}
                        setValue={setPostcode}
                        onChange={updateInput}
                        type="text"
                        required
                      />

                      <div className="d-grid">
                        <button
                          
                          className="btn btn-md btn-primary">
                          
                        Submit
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
          </div>
        </>
      )}
    </>
  );

};

export default UpdatePatient;

import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";
import "../styles.css";

const Dashboard = () => {
  let [patients, setPatients] = useState([]);
  let [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    getAllPatients();
  }, []);

  let getAllPatients = () => {
    let patUrl = "http://localhost:3031/api/patients";
    axios
      .get(patUrl)
      .then((res) => {
        setPatients(res.data);
      })
      .catch((error) => {
        toast(error.response.data);

        console.log(`error is`, error.response.data);
        setErrorMessage(error.response.data);
      });
  };

  const handleDeletePatient = (patientId) => {
    let dataUrl = `http://localhost:3031/api/patients/${patientId}`;

    axios
      .delete(dataUrl)
      .then((res) => {
        getAllPatients();
      })
      .catch((error) => {
        toast(error.response.data);

        console.log(`error is`, error.response.data);
      });
  };

  return (
    <>
      {/* <pre>{JSON.stringify(patients)}</pre> */}
      <div className="container mt-3 bg-light">
        <div className="row">
          <div className="col">
            <h3 className="text-center pt-2 h3 heading-text">
              Manage Patients
            </h3>
            <div className="m-3 p-2 text-center">
              <p className="lead h3 bg-box-text bg-box">
                Add / Delete / Edit / View Patient details
              </p>
            </div>
          </div>
        </div>

        <div className="row mt-3">
          <div className="col">
            <div className="card text-center shadow">
              {patients.length > 0 ? (
                <>
                  {patients.map((patient) => {
                    return (
                      <div className="card m-2 p-2" key={patient._id}>
                        <div className="card-body">
                          <h5 className="card-title"></h5>

                      


                          <div className="list-group">

                            <a
                              href="#"
                              className="list-group-item list-group-item-action"
                              aria-current="true"
                            >
                              <div className="d-flex w-100 justify-content-between">
                                <h5 className="mb-1">
                                 <span className="text-primary">Name:</span> {patient.firstName} {patient.lastName}
                                </h5>
                                <h5 className="mb-1">
                                 <span className="text-success">Age:</span> {patient.age} 
                                </h5>
                                <h5 className="mb-1">
                                 <span className="text-warning">Gender:</span> {patient.gender} 
                                </h5>
                                <h5 className="mb-1">
                                 <span className="text-info">Contact Number:</span> {patient.contactNumber} 
                                </h5>
                                <h5 className="mb-1">
                                 <span className="text-danger">Email:</span> {patient.email} 
                                </h5>
                               
                              </div>
                              <p className="m-1 h5">
                               <span className="text-secondary">Registered on: </span> {patient.registeredOn}
                                
                              </p>
                              <p className="m-1 h5">
                              
                                <span className="text-secondary">Register Number:</span> {patient.registerNumber}
                              </p>

                              <div>

                              

                          <Link
                to={`/viewpatient/${patient._id}`}
                className="btn btn-info m-3"
              >
                View
              </Link>
                          <Link
                            to={`/patients/${patient._id}`}
                            className="btn btn-warning  m-3"
                          >
                            Update
                          </Link>
                          <button
                            onClick={handleDeletePatient.bind(
                              this,
                              patient._id
                            )}
                            className="btn btn-danger  m-3"
                          >
                            Delete
                          </button>
                          </div>
                              
                            </a>
                            
                           
                          </div>
                         
                        </div>
                      </div>
                    );
                  })}
                </>
              ) : (
                <></>
              )}
              <tbody></tbody>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;

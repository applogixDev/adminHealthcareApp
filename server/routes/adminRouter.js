import express from 'express';

const router =  express.Router();

import {patients,patient,createPatient, updatePatient, deletePatient} from '../controllers/adminController';



//get all patients
router.get("/patients",patients);

//get single patient
router.get("/patients/:id",patient);

//post create patient
router.post('/createpatient', createPatient);

//put update patient
router.put("/patients/:id", updatePatient);

//delete patient
router.delete("/patients/:id",deletePatient)


 module.exports = router;
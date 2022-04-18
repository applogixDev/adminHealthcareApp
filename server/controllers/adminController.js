
import Patient from "../models/patient";

//get all patients
export const patients = async (req,res) =>{

    try{
        let patients = await Patient.find();
        res.status(200).json(patients);
    } catch(error)
    {
        console.error(error);
        res.status(500).json({
            error: error.message,
        });
    }

}

//get single patient
export const patient = async(req,res)=>{

    let pateintId = req.params.id;

    try{
      let patients = await Patient.findById(pateintId);
      res.status(200).json(patients);
    }
    catch(error)
    {
      console.error(error);
      res.status(500).json({
          error: error.message
      })
    }
}

//post create patient
export const createPatient = async(req,res)=>{
    let newPatient = {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        age:req.body.age,
        contactNumber: req.body.contactNumber,
        emerContactNum: req.body.emerContactNum,
        email: req.body.email,
        gender: req.body.gender,
        dob:req.body.dob,
        registerNumber: req.body.registerNumber,
        registeredOn: req.body.registeredOn,
        houseNumber: req.body.houseNumber,
        street: req.body.street,
        city: req.body.city,
        state: req.body.state,
        postcode: req.body.postcode
    }
    try{
        //verify patient already exists
       let patient = await Patient.findOne({email:newPatient.email});
       if(patient)
       {
           return res.status(400).json({
               msg: "Patient exists already with given email"
           })
       }
       //save to db if does not exist
       patient = new Patient(newPatient);
       patient = await patient.save();

       res.status(201).json({
           result: "Patient Added Successfully",
           patient: patient
       })
    }catch(error)
    {
      console.error(error);
      res.status(500).json({
          error: error.message
      })
    }

}

//put update patient
export const updatePatient = async(req,res)=>{

    let patientId = req.params.id;

    let updatePatient = {
       
        contactNumber: req.body.contactNumber,
        emerContactNum: req.body.emerContactNum,
        email: req.body.email,
        houseNumber: req.body.houseNumber,
        street: req.body.street,
        city: req.body.city,
        state: req.body.state,
        postcode: req.body.postcode
    };
    try{
          //check if patient does not exists
          let patient = await Patient.findById(patientId);
          if(!patient)
          {
              return res.status(400).json({
                  msg: "Patient Does Not Exist"
              })
          }
          //update db
          patient = await Patient.findByIdAndUpdate(
              patientId,
              {
                  $set: updatePatient,
              },
              {new:true}
          );
          res.status(201).json({
              result: "Patient Data Updated Successfully",
              patient: patient
          })

    }
    catch(error)
    {
      console.error(error);
      res.status(500).json({
          error: error.message
      })
    }

}


//delete patient
export const deletePatient = async(req,res)=>{

    let patientId = req.params.id;

    try{
        //check if patient does not exists
        let patient = await Patient.findById(patientId);
         if(!patient)
         {
             return res.status(400).json({
                 msg: "Patient Does Not Exist"
             })
         }

         //delete from db
         patient = await Patient.findByIdAndDelete(patientId);

         res.status(200).json({
             msg: "Patient Deleted Successfully",
             patientId : patientId
         })

  } catch(error)
  {
     console.error(error);
     res.status(500).json({
         error: error.message
     })
  }
  
}


import mongoose from 'mongoose';

const {Schema} = mongoose;

const patientSchema = new Schema({
    firstName:{
        type:String,
        trim:true,
        required:true
    },
    lastName:{
        type:String,
        trim:true,
        required:true
    },
    age:{
        type:Number,
        trim:true,
        required:true
    },
    contactNumber:{
        type:Number,
        trim:true,
        required:true
    },
    emerContactNum:{
        type:Number,
        trim:true,
        required:true
    },
    email: {
        type:String,
        trim:true,
        required:true,
        unique:true
    },
    gender:{
        type:String,
        trim:true,
        required:true
    },
    dob:{
        type:String,
        trim:true,
        required:true
    },
    registerNumber:{
        type:Number,
        trim:true,
        required:true
    },
    registeredOn: {
        type: Date,
        default:Date.now()
    },
    houseNumber:{
        type:String,
        trim:true,
        required:true
    },
    street:{
        type:String,
        trim:true,
        required:true
    },
    city:{
        type:String,
        trim:true,
        required:true
    },
    state:{
        type:String,
        trim:true,
        required:true
    },
    postcode:{
        type:String,
        trim:true,
        required:true
    }


})

export default mongoose.model('Patient',patientSchema);
import mongoose from 'mongoose';
const {Schema} = mongoose;

const userSchema = new Schema({
    firstName:{
        type: String,
        trim:true,
        required:true,
    },
    lastName:{
        type: String,
        trim:true,
        required:true,
    },
    email:{
        type: String,
        trim:true,
        required:true,
        unique:true
    },
    password:{
        type: String,
        required:true,
        min: 6,
        max: 15
    },
    picture:{
        type: String,
        default:'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png'
    },
    role:{
        type: [String],
        default: ["Patient"],
        enum:["Patient","Doctor","Admin"]
    }

},{timestamps:true}
);

export default mongoose.model('User',userSchema);
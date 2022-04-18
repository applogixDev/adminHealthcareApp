import { BrowserRouter as Router, Routes, Route  } from 'react-router-dom';
import {ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from "./components/Navbar";

import Register from './pages/Register';
import Login from './pages/Login';
import Home from './pages/Home';

//protected routes
import AuthRoute from './components/routes/AuthRoute';
import Dashboard from './pages/patient/Dashboard';
import AddPatient from './pages/admin/addPatient';
import UpdatePatient from './pages/admin/updatePatient';
import ForgotPassword from './pages/forgotpassword';
import ViewPatient from './pages/admin/viewPatient';




function App() {
  return (
    <div className="App">
      <Router>
        <>
      <Navbar />
      <ToastContainer position='top-center'/>
      <Routes>
          <Route  exact path='/' element={<Home/>}/> 
         <Route exact path='/register' element={<Register/>}/>
         <Route exact path='/login' element={<Login/>}/>
         <Route exact path='/forgotpassword' element={<ForgotPassword/>}/>
         <Route exact path='/dashboard' element={ <Dashboard /> }/>
         <Route exact path='/addpatient' element={ <AddPatient /> }/>
         <Route exact path="/patients/:id" element={<UpdatePatient/>}/>
         <Route exact path="/viewpatient/:id" element={<ViewPatient/>}/>
       

         {/* protected route */}
         
         <Route 
         element = {
           <AuthRoute>
             
           </AuthRoute>
         }
       
         />

      <Route 
         element = {
           <AuthRoute>
            
           </AuthRoute>
         }
       
         />

<Route 
         element = {
           <AuthRoute>
            
           </AuthRoute>
         }
         path='/dashboard'
         />

<Route 
         element = {
           <AuthRoute>
            
           </AuthRoute>
         }
         path='/basic'
         />

<Route 
         element = {
           <AuthRoute>
            
           </AuthRoute>
         }
         
         />

<Route 
         element = {
           <AuthRoute>
            
           </AuthRoute>
         }
        
         />

         {/* end of protected route */}
      </Routes>
      </>
      </Router>
     
    </div>
  );
}

export default App;

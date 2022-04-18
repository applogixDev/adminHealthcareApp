export const validatePassword = (password) =>{

     const regex = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/
  
    return regex.test(String(password))
 
 }
 
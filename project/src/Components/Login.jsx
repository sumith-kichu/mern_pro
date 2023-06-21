import React, { useState } from 'react'
import { useNavigate} from 'react-router-dom'
import axios from 'axios'

const Login = () => {
  let[email,setEmail]=useState("")
 let[password,setPassword]=useState("")

 let obj={
  
  email:email,
  password:password,
 }
  
  let navigate = useNavigate()
  function clicked(){
    console.log(email,password);

         axios.post('http://localhost:5000/logindata',obj)
    .then((res)=>{
      console.log(res.data);
      if(res.data){
        
        
        alert('login true')
      }else{
        alert ('user not found')
      }
  })
}
  return (
  
    
    <div style={{ position: 'fixed', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', }}>
    <div className="je2-sign-up-dialog">
       
       <div className="js-sign-up-form">
         <div className="je2-sign-up-dialog__content">
           <div className="je2-sign-up-dialog__content__first-step js-first-step _visible">
            
           

                  
               
               <div className="je2-sign-up-dialog__content-form__field">
                 <input onChange={(e)=>setEmail(e.target.value)} className="je2-input" type="email" placeholder="Email" name="email" required style={{width:'120%',height:'30px'}} />
               </div>
               <div className="je2-sign-up-dialog__content-form__field">
                 <input onChange={(e)=>setPassword(e.target.value)} className="je2-input" type="password" placeholder="Password" name="password" required style={{width:'120%',height:'30px',marginTop:'10px'}} />
                 <div className="js-error-message _hidden">
                 </div>
               </div>
               
              

              
             
               <div className="je2-sign-up-dialog__content-form__continue">
                 <div className="je3-spinner">
                 </div>
                 <button onClick={clicked} type='submit' className="je2-button _black js-save"style={{marginTop:'10px'}}>
                   <span>
                     log in
                   </span>
                 </button>
               </div>
             
           </div>
           
           
         </div>
         <div className="je2-sign-up-dialog__footer" onClick={()=>navigate('/signin')}>
           <p style={{color:'blue'}}>no acoount_-?<a  className="js-sign-in je2-link">sign in</a></p>
         </div>
       </div>
     </div>
   </div>
  );
};

export default Login;


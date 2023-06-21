import React,{ useState } from 'react'
import { useNavigate} from 'react-router-dom'
import axios from 'axios'

function Signup() {
  let[name,setName]=useState("")
  let[email,setEmail]=useState("")
  let[pass,setPass]=useState("")
  let[ph,setPh]=useState()
 
   
 let obj={
   name,
   mail:email,
   pass:pass,
   ph:ph,
 }
 
   let navigate = useNavigate()
   function clicked(){
     console.log(name,email,pass,ph);
     axios.post('http://localhost:5000/signinData',obj).then((res)=>{
       console.log(res.data);
     })
   }
   return (
     <div style={{ position: 'fixed', top: '50%', left: '50%', transform: 'translate(-50%, -50%)',}}>
      <div className="je2-sign-up-dialog">
 
         <div className="js-sign-up-form">
           <div className="je2-sign-up-dialog__content">
             <div className="je2-sign-up-dialog__content__first-step js-first-step _visible">
              
             

                
                 <div className="je2-sign-up-dialog__content-form__field">
                   <input onChange={(e)=>setName(e.target.value)} type="text"  className="je2-input"  placeholder="Name" required style={{width:'120%',height:'30px'}} />
                 </div>
                 <div className="je2-sign-up-dialog__content-form__field">
                   <input onChange={(e)=>setEmail(e.target.value)} className="je2-input" type="email" placeholder="Email" name="email" required  style={{width:'120%',height:'30px',marginTop:'10px'}}/>
                 </div>
                 <div className="je2-sign-up-dialog__content-form__field">
                   <input onChange={(e)=>setPass(e.target.value)} className="je2-input" type="password" placeholder="Password" name="password" required style={{width:'120%',height:'30px',marginTop:'10px'}}/>
                   <div className="js-error-message _hidden">
                   </div>
                 </div>
                 <div className="je2-sign-up-dialog__content-form__field">
                   <input onChange={(e)=>setPh(e.target.value)} className="je2-input" type="number" placeholder="Phone" name="phone"style={{width:'120%',height:'30px',marginTop:'10px'}} />
                   <div className="js-error-message _hidden">
                   </div>
                 </div> 
                
 
                
               
                 <div className="je2-sign-up-dialog__content-form__continue">
                   <div className="je3-spinner">
                   </div>
                   <button type='submit' onClick={clicked} className="je2-button _black js-save" style={{marginTop:'5vh'}}>
                     <span>
                       SignUp
                     </span>
                   </button>
                 </div>
     
             </div>
             
             
           </div>
           <div className="je2-sign-up-dialog__footer" onClick={()=>navigate('/login')}>
             <p style={{color:'black'}}>Already a member?<a  className="js-sign-in je2-link">Log in</a></p>
           </div>
         </div>
       </div>
     </div>
   )
 }
 
 export default Signup

import { useState } from "react";
import Axios from "axios";

function Login() {
   const [username, setUsername] = useState("");
   const [password, setPassword] = useState("");

   const login = () => {
      Axios.post("http://localhost:3000/auth/login", {
         username,
         password,
      }).then((response) => {
         console.log(response);
      });
   }

   const register = () => {
      if(username === "" || password === "") {
         alert("Please fill all fields");
      } else {
         Axios.post("http://localhost:3000/auth/register", {
            username,
            password
         }, { withCredentials: true }).then(res => {
            console.log(res);
         }).catch(err => {
         });
      }
   }

   return (
      <div className="container">
         <div className="row" style={ { marginTop: "20vh" } }>
            <div className="col-md-3 col-sm-1"></div>
            <div className="col-md-6 col-sm-10 container">
               <div className="row" style={ { marginBottom: "20px" } }>
                  <div className="col-12 text-center">
                     <h1>Login</h1>
                  </div>
               </div>
               <div className="row" style={ { marginBottom: "20px" } }>
                  <div className="col-2"></div>
                  <div className="col-8 text-center">
                     <form>
                        <label className="form-label">Nombre de usuario:</label>
                        <input type="text" className="form-control" style={ { marginBottom: "20px" } } onChange={(e) => {setUsername(e.target.value)}}/>
                        <label className="form-label">Contraseña:</label>
                        <input type="password" className="form-control" onChange={(e)=>setPassword(e.target.value)}/>
                     </form>
                  </div>
               </div>
               <div className="row">
                  <div className="col-6 text-center">
                     <button className="btn btn-primary" onClick={login}>
                        Login
                     </button>
                  </div>
                  <div className="col-6 text-center">
                     <button className="btn btn-primary" onClick={register}>
                        Register
                     </button>
                  </div>
               </div>
            </div>
            <div className="col-md-3 col-sm-1"></div>
         </div>
      </div>
   )
}

export default Login;
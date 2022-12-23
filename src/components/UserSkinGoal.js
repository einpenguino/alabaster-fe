import React, { useEffect, useState } from 'react';
import {Link} from 'react-router-dom'
import {useNavigate} from 'react-router-dom';
import { Authenticate } from './authTest';


function UserSkinGoal() {

  const [skintype, setSkinType] = useState('')
  const [isSensitive, setSensitivity] = useState('')
  const [skingoal, setSkinGoal] = useState('')

  const form = {skintype , isSensitive, skingoal}

   const navigate = useNavigate();

    const handleSubmit = (e) =>{
    e.preventDefault();
     navigate("/UserRegime")


  }

    return (
    <div className="UserSkinGoal">
      <header className="UserSkinGoal"> 
       
      <ul>
        <li>
        <Link to="/">
            Home
        </Link>
        </li>
       </ul>  
       <Authenticate></Authenticate>

       <div>
         <h1></h1>
        <form onSubmit={handleSubmit}>
          <p>My Skin Type is :</p>
          
            <input 
             type="radio"
             checked={skintype === "Dry"}
             value = "Dry"
             onChange = {(e) => setSkinType(e.target.value)}
            />
             <label>Dry</label>

            <br></br>
           
             <input 
             type="radio"
             checked={skintype === "Oily"}
             value = "Oily"
             onChange = {(e) => setSkinType(e.target.value)}
            />
             <label>Oily</label>

            <br></br>

            <input 
             type="radio"
             checked={skintype === "Combination"}
             value = "Combination"
             onChange = {(e) => setSkinType(e.target.value)}
            />
             <label>Combination</label>

            <br></br>

             <input 
             type="radio"
             checked={skintype === "Normal"}
             value = "Normal"
             onChange = {(e) => setSkinType(e.target.value)}
            />
             <label>Normal</label>

            <br></br>

            <p>Is my Skin Sensitive :</p>
            <input 
             type="radio"
             checked={isSensitive === "true"}
             value = "true"
             onChange = {(e) => setSensitivity(e.target.value)}
            />
            <label>Yes</label>   

               <br></br>

             <input 
             type="radio"
             checked={isSensitive === "false"}
             value = "false"
             onChange = {(e) => setSensitivity(e.target.value)}
            />
            <label>No</label>

             <br></br>


             <p>My Skin Goal is :</p>
            <input 
             type="radio"
             checked={skingoal === "RB"}
             value = "RB"
             onChange = {(e) => setSkinGoal(e.target.value)}
            />
            <label>Reduce Breakout</label>   

            <br></br>

             <input 
             type="radio"
             checked={skingoal === "TH"}
             value = "TH"
             onChange = {(e) => setSkinGoal(e.target.value)}
            />
            <label>Target Hyperpigmentation</label>   

             <br></br>

             <input 
             type="radio"
             checked={skingoal === "H"}
             value = "H"
             onChange = {(e) => setSkinGoal(e.target.value)}
            />
            <label>Hydration</label>   

             <br></br>

             <input 
             type="radio"
             checked={skingoal === "AA"}
             value = "AA"
             onChange = {(e) => setSkinGoal(e.target.value)}
            />
            <label>Anti-Aging</label>   

             <br></br>

          <input type="submit" value="Next" />
        </form>
       </div>

      </header>
    </div>
  );
}


export default UserSkinGoal;
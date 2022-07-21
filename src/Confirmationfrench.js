import React from "react";
import {useNavigate } from "react-router-dom";
import Button from '@mui/material/Button';
import Col from "react-bootstrap/esm/Col";
import Row from 'react-bootstrap/Row';




function ConfirmationFrench(){

    const navigate = useNavigate();

    
    return (
        <div>
<Row>

<p class="text-white bg-dark p-3 text-center  fw-bolder fst-italic">DOCTORS RECOMMAND AT LEAST 2 TIMES PER WEEK OF PHYSICAL ACTIVITY</p>
<Col>




<img class="sevenphotoo" 
    
src = "./image/confirmationu.png"/>


<p class="text-center fs-5"
style={{marginTop:100}}
>  Votre réservation est confirmée. Vous recevrez un e-mail dans les plus brefs délais pour poursuivre les procédures suivantes </p>

<p class="text-center fs-5"
style={{marginTop:20}}
>  Si vous avez des questions, envoyez-nous un e-mail ou appelez-nous sur notre numéro de téléphone </p>

<Button onClick ={()=>{
navigate("/aboutfrench")
}}
style={{ backgroundColor: 'black',  marginLeft: '20rem',marginTop:50}}
variant = "contained"
>Back</Button>

</Col>

<Col>
<Row>
<p class="text-center fs-1 fw-bold">RÉSERVATION CONFIRMÉE</p>
<img class="sevenphoto" src = "./image/greenimage.png"/>
</Row>



</Col>

</Row>
     

   






        </div>
    )

}   

export default ConfirmationFrench;
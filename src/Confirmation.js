import React from "react";
import {useNavigate } from "react-router-dom";
import Button from '@mui/material/Button';
import Col from "react-bootstrap/esm/Col";
import Row from 'react-bootstrap/Row';




function Confirmation(){

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
>  Your reservation is confirmed. You'll receive an email as soon as possible to continue with the next procedures </p>

<p class="text-center fs-5"
style={{marginTop:20}}
>  If you have any questions, please send us an email or call us on our phone number </p>

<Button onClick ={()=>{
navigate("/")
}}
style={{ backgroundColor: 'black', marginLeft: '20rem',marginTop:50}}
variant = "contained"
>Back</Button>

</Col>

<Col>
<Row>
<p class="text-center fs-1 fw-bold">RESERVATION CONFIRMED</p>
<img class="sevenphoto" src = "./image/greenimage.png"/>
</Row>



</Col>

</Row>
     

   






        </div>
    )

}   

export default Confirmation;
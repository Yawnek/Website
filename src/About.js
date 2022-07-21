import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from '@mui/material/Button';
import FormControl from '@mui/material/FormControl';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from "@mui/material/FormControlLabel";
import TextField from '@mui/material/TextField';
import FilledInput from '@mui/material/FilledInput';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Autocomplete from '@mui/material/Autocomplete';
import { useRef } from "react";

import DatePicker from "react-datepicker";
import { BrowserRouter as Route, Router, Routes} from "react-router-dom";
import "react-datepicker/dist/react-datepicker.css";

import React, { useState } from "react";

import {useNavigate } from "react-router-dom";

import ScrollToTop from "./ScrollToTop";




const options = ['NTRP', 'UTR','ATP','ITF'];

const genders = ['Male','Female','Other'];

const names = ['Juan Mendez','John McLaren','Karla Bergm', 'Robert Dubois','Mamadou Ougande','Mokito Nakamura','Xin Jiping','Klavoris Dimitri'];

const courts = ['Court 1','Court 2','Court 3' ,'Court 4' ,'Court 5' ,'Court 6','Court 7','Court 8','Court 9','Court 10','Court 11'];













function About() {


  const teacher = useRef(null);
  const court = useRef(null);
  const racket = useRef(null);
  const reserve = useRef(null);
  const skills = useRef(null);
  const book = useRef(null);
  const bookcourt = useRef(null);


  const scrollToSection = (elementRef) => {
      window.scrollTo({
          top: elementRef.current.offsetTop,
          behavior:'smooth',
      }) ;
  };

  const navigate = useNavigate();

  const [Cdate, setDate] = useState(new Date().toLocaleDateString('fr-FR'));



  const [value, setValue] = React.useState(options[0]);
  const [inputValue, setInputValue] = React.useState('');

  const [valueGender, setValueGender] = React.useState(genders[0]);
  const [inputValueGender, setInputValueGender] = React.useState('');
  
  const [valueNames, setValueNames] = React.useState(names[0]);
  const [inputValueNames, setInputValueNames] = React.useState('');

  const [valueCourts, setValueCourts] = React.useState(courts[0]);
  const [inputValueCourts, setInputValueCourts] = React.useState('');




  return (

    
    
    
    
    

    <div className="App">

<ScrollToTop/>




<div>
    <ul>
        <li onClick = {()=> scrollToSection(teacher)} className="link"> Teachers </li>
        <li onClick = {()=> scrollToSection(court)} className="link">Courts </li>
        <li onClick = {()=> scrollToSection(racket)} className="link">Rackets </li>
        <li onClick = {()=> scrollToSection(bookcourt)} className="link"> Book Court</li>
        <li onClick = {()=> scrollToSection(reserve)} className="link"> Meet other members</li>
        <li onClick = {()=> scrollToSection(skills)} className="link"> Skills</li>
        <li onClick = {()=> scrollToSection(book)} className="link"> Book teacher</li>



    </ul>
</div>


<p class="text-white bg-dark p-3 text-center  fw-bolder fst-italic">DOCTORS RECOMMEND AT LEAST 2 TIMES PER WEEK OF PHYSICAL ACTIVITY</p>


    <div >
      <Row>
        <Col>
            <p class="text fs-3"> Welcome to Ottawa Tennis Club</p>
            <p class="text fs-3" >One of the best clubs in ottawa</p>

            <p class="text fs-3" >More than 500 members from all ages and all levels</p>  
            
            <Button onClick ={()=>{
    navigate("/aboutfrench")
}}
style={{ backgroundColor: 'black', marginTop: 100, marginBottom: 50, padding: 10}}
variant = "contained"
>Passer au français</Button>

                </Col>
        <Col >

        <Col>
        <img   className="photo"  src = "./image/tennisman_redshirt.png" />      </Col>

        </Col>
      </Row>

      <Row>
        <Col>
        <img className="photoo"src = "./image/tenniswoman_yellowshirt.png"/>

        </Col>

        <Col>
        <p  style={{marginTop:50}}
        class="text fs-3"> Fit for indoor players and outdoor players</p>
                <p class="text fs-3">  Located in downtown : 547 Kent Street  K09 NU7 </p>
                <p class="text fs-3">  Call us at : 613-695-5847 </p>


        </Col>

      </Row>



    </div>

    <p ref={teacher} class="text-white bg-dark p-3 text-center  fw-bolder fst-italic">DOCTORS RECOMMAND AT LEAST 2 TIMES PER WEEK OF PHYSICAL ACTIVITY</p>

    <div >

    <Row>
    <p class="text-center fs-1"> Our main teachers</p>
        <Col>

                <img className="secondphoto  " src = "./image/federer.png" />
                <p class="text fs-3"> NADAL FEDERER</p>
                <p class="text fs-5" >  </p>
                <p class="text fs-5" >Serve</p>
                <p class="text fs-5" >Strategy</p>
                <p class="text fs-5" >  Shots </p>
                <p class="text fs-5" >Internal/External Rotations</p>
        </Col >
        <Col>
                <img className="secondphotoo  " src = "./image/shot.png" />
                <p class="text fs-3"> Novak Djokovic</p>
                <p class="text fs-5" > </p>
                <p class="text fs-5" >Backhand</p>
                <p class="text fs-5" >Forehand </p>
                <p class="text fs-5" >Overhead</p>
                <p class="text fs-5" >Box Jump</p>

        </Col>
        <Col>
                <img className="secondphotooo  " src = "./image/fist.png" />
                <p class="text fs-3"> Serena Williams</p>
                <p class="text fs-5" >Bench Press </p>
                <p class="text fs-5" >Lateral Lunge</p>
                <p class="text fs-5" >Medicine Ball Slam</p>
          
        </Col>

      </Row>
    </div>

    <p   ref ={court} class="text-white bg-dark p-3 text-center  fw-bolder fst-italic">DOCTORS RECOMMEND AT LEAST 2 TIMES PER WEEK OF PHYSICAL ACTIVITY</p>

    <div className ="reserve">
      <p class="text-center fs-1">Type of courts</p>
      <Row>
      <Col>
                <img class="thirdphoto  " src = "./image/insidecourt.png" alt ="tennisman"/>
                <p class="text fs-3"> Indoor Court</p>
                <p class="text fs-5" >Low net stretched across the centre </p>
                <p class="text fs-5" >Can be used to play both doubles and singles matches.</p>
        </Col >
        <Col>
                <img class="thirdphotoo  " src = "./image/outsidecourt.png" alt ="tennisman"/>
                <p class="text fs-3">Outdoor court</p>
                <p class="text fs-5" >Can be used to play both doubles and singles matches.</p>
                <p class="text fs-5" >Low net stretched across the centre </p>
                <p class="text fs-5" > Closed at night and when the weather is bad </p>


              

                


        </Col>
        <Col>
                <img class="thirdphotoo  " src = "./image/trainingcourt.png" alt ="tennisman"/>
                <p class="text fs-3"> The wall</p>
                <p class="text fs-5" >Good for beginners</p>
                <p class="text fs-5" > One of the best way to improve </p>
                <p class="text fs-5" >The best way to master the basics</p>

        </Col>

      </Row>

      

    </div>

    <p ref={racket}class="text-white bg-dark p-3 text-center  fw-bolder fst-italic">DOCTORS RECOMMEND AT LEAST 2 TIMES PER WEEK OF PHYSICAL ACTIVITY</p>

    <div>
    <p style={{ marginTop: 30}}
     class="text-center fs-1">Type of rackets</p>
      <Row>
      <Col>
                <img class ="fourthphoto"  src = "./image/racket.png" alt ="tennisman"/>
                <p class="text fs-5" >Ultimate Control Racket</p>
                <p class="text fs-5" >Advanced to Intermediate </p>
                <p class="text fs-5" >Heavy weight (over 300g)</p>
                <p class="text fs-5" >98 sq in. head size and below</p>
                <p class="text fs-5" >  22mm beam width and below </p>
                <p style={{  marginBottom: 50}}
                class="text fs-5" > Very head-light balance</p>


        </Col >
        <Col> 
                <img class ="fourthphotoo"  src = "./image/racket.png" alt ="tennisman"/>
                <p class="text fs-5" >  Powerful Control Racket </p>
                <p class="text fs-5" >Advanced to Intermediate</p>
                <p class="text fs-5" >Medium weight (280 to 300g) </p>
                <p class="text fs-5" >98 to 102 sq in. head size</p>
                <p class="text fs-5" >22 to 24mm beam width</p>
                <p class="text fs-5" >  Slight head-light balance </p>


        </Col>
        <Col>
                <img class ="fourthphotooo"  src = "./image/racket.png" alt ="tennisman"/>
                <p class="text fs-5" >  Lightweight Power Racket </p>
                <p class="text fs-5" >Beginner to Intermediate</p>
                <p class="text fs-5" >Light weight (Below 280g) </p>
                <p class="text fs-5" >Over 102 sq in. head size</p>
                <p class="text fs-5" >25mm beam width and above</p>
                <p class="text fs-5" > Even to head-heavy balance </p>
        </Col>

      </Row>


      <p  ref={bookcourt}
      class="text-white bg-dark p-3 text-center  fw-bolder fst-italic">DOCTORS RECOMMEND AT LEAST 2 TIMES PER WEEK OF PHYSICAL ACTIVITY</p>

    <div>



    <Row>

        
        <Col>

        <p class="text fs-3 fw-bold">Reserve a court</p>

        <DatePicker
    dateFormat="dd/MM/yyyy"
    
    value={Cdate}
    onChange={(date) => {
      const d = new Date(date).toLocaleDateString('fr-FR');
      console.log(d);
      setDate(d);
    }}/>

<img className="eightphoto  " src = "./image/c.png" />


        </Col >

        <Col>
           <div className="create">
        

           <p class="text fs-3 fw-bold">Enter your details</p>

        <Row>
        <p class="text fs-5" >First name</p>
        </Row>
        <Row>
        <TextField id="filled-basic" label="Please enter first name" variant="filled" margin="dense" />
        </Row>
        <Row>
        <p class="text fs-5" >Last name</p>
        </Row>
        <Row>
        <TextField id="filled-basic" label="Please enter last name" variant="filled" margin="dense" />
        </Row>

        <Row>
        <p class="text fs-5" >Email adress</p>
        </Row>
        <Row>
        <TextField id="filled-basic" label="Please enter your adress email" variant="filled" margin="dense" />
        </Row>

        <Row>
        <p class="text fs-5" >Age</p>
        <TextField id="filled-basic" label="Please enter your age" variant="filled" margin="dense" />

        </Row>

        <Row>
        <p class="text fs-5" >Member ID</p>
        <TextField id="filled-basic" label="Please enter your member ID" variant="filled" margin="dense" />

        </Row>

        <Button onClick ={()=>{
    navigate("/confirmation")
}}
style={{  backgroundColor: 'black', marginTop: 10, marginBottom: 50, padding: 10}}
variant = "contained"
>Reserve</Button>
      

      
    </div>
        </Col >

    </Row>

    </div>
      

    </div>


    <p ref={reserve}class="text-white bg-dark p-3 text-center  fw-bolder fst-italic">DOCTORS RECOMMEND AT LEAST 2 TIMES PER WEEK OF PHYSICAL ACTIVITY</p>

    <p  class="text-center fs-1">Meet up with our members</p>

    <Row>

      <Col>

      <p class="text fs-3 fw-bold">Enter your details</p>

      <Row>
      <p class="text fs-5" >First name</p>
      </Row>
      <Row>
      <TextField style={{ marginLeft: '1rem'}} id="filled-basic" label="Please enter first name" variant="filled" margin="dense" />
      </Row>
      <Row>
      <p class="text fs-5" >Last name</p>
      </Row>
      <Row>
      <TextField style={{ marginLeft: '1rem'}} id="filled-basic" label="Please enter last name" variant="filled" margin="dense" />
      </Row>
   
      <Row>
      <p class="text fs-5" >Email adress</p>
      </Row>
      <Row>
      <TextField style={{ marginLeft: '1rem'}}  id="filled-basic" label="Please enter email adress" variant="filled" margin="dense" />
      </Row>

      <Row>
      <p class="text fs-5" >Age</p>
      <TextField style={{ marginLeft: '1rem',marginBottom:50}} id="filled-basic" label="Please enter your age" variant="filled" margin="dense" />

      </Row>
  

      


      </Col>


      <Col>
      <p class="text fs-3 fw-bold"> Tennis skill level </p>


      <div>
      <br />
      <Autocomplete
        style={{ marginLeft: '4rem'}}
        options={options}
        sx={{ width: 300 }}
        renderInput={(params) => <TextField {...params} label="Level" />}
      />


<br />
<p class="text fs-3 fw-bold"> Gender </p>

      <Autocomplete
        style={{ marginLeft: '4rem'}}
        options={genders}
        sx={{ width: 300 }}
        renderInput={(params) => <TextField {...params} label="Gender" />}
      />
    </div>


    

      </Col>

      <Col>
      <p class="text fs-3 fw-bold"> Free time </p>

      <>
  <DatePicker
    dateFormat="dd/MM/yyyy"
    
    value={Cdate}
    onChange={(date) => {
      const d = new Date(date).toLocaleDateString('fr-FR');
      console.log(d);
      setDate(d);
    }}
  
    
    
  />

<Button onClick ={()=>{
    navigate("/confirmation")
}}
style={{  backgroundColor: 'black', marginTop: 300, padding: 10}}
variant = "contained"
>Reserve</Button>


 </>
 
    
      
      </Col>


    </Row>


    <p ref={skills}class="text-white bg-dark p-3 text-center  fw-bolder fst-italic">DOCTORS RECOMMEND AT LEAST 2 TIMES PER WEEK OF PHYSICAL ACTIVITY</p>
    <p class="text-center fs-1">All skills you can learn at our school and many other more</p>

    <div>

    <Row>

      <Col>
      <img class="fifthphoto  " src = "./image/forehand.png" alt ="tennisman"/>
      <p class="text fs-5" >Forehand</p>
      </Col>

      <Col>
      <img class="fifthphotoo  " src = "./image/backhand.png" alt ="tennisman"/>
      <p class="text fs-5" >Backhand</p>
      </Col>

      <Col>
      <img class="fifthphotooo  " src = "./image/serve.png" alt ="tennisman"/>
      <p class="text fs-5" >Serve</p>
      </Col>

    </Row>

    <Row>

    <Col>
      <img class="fifthphotoooo " src = "./image/volley.png" alt ="tennisman"/>
      <p class="text fs-5" > Volley </p>
      </Col>

      <Col>
      <img class="fifthphotoooooo  " src = "./image/slice.png" alt ="tennisman"/>
      <p class="text fs-5" >Slice</p>
      </Col>

      <Col>
      <img class="fifthphotoooooo  " src = "./image/overhead.png" alt ="tennisman"/>
      <p class="text fs-5" >Overhead</p>
      </Col>


    </Row>

    </div>


   
    <p ref={book} class="text-white bg-dark p-3 text-center  fw-bolder fst-italic">DOCTORS RECOMMEND AT LEAST 2 TIMES PER WEEK OF PHYSICAL ACTIVITY</p>




    <div >

    <p class="text-center fs-1">Book with a teacher in a specific court</p>


    <Row>
        <Col>
        <Col>
        <p class="text-center fs-1">Teachers available</p>

                <Autocomplete
                style={{ marginTop: 10, marginBottom: 50, marginLeft: '10rem'}}
                options={names}
                sx={{ width: 300 }}
                renderInput={(params) => <TextField {...params} label="Names" />}
  />
        </Col>

                    
                
        <Col>
        <p class="text-center fs-1">Courts available</p>

        <Autocomplete
                style={{ marginTop: 10, marginBottom: 50, marginLeft: '10rem'}}
                options={names}
                sx={{ width: 300 }}
                renderInput={(params) => <TextField {...params} label="Courts" />}
  />
        </Col>
        </Col>
     
        <Col>
        <img class="sixthphoto  " src = "./image/teacher.png" alt ="tennisman"/>

        </Col>

    </Row>

    </div>


    <Button onClick ={()=>{
    navigate("/confirmation")
}}
style={{  backgroundColor: 'black', marginTop: 100, padding: 10, marginBottom:50}}
variant = "contained"
>Reserve</Button>


    


    
    </div>
  );
}

export default About;

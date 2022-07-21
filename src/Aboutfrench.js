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














function AboutFrench() {

    
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
        <li onClick = {()=> scrollToSection(teacher)} className="link"> Professeurs </li>
        <li onClick = {()=> scrollToSection(court)} className="link">Terrain </li>
        <li onClick = {()=> scrollToSection(racket)} className="link">Raquette </li>
        <li onClick = {()=> scrollToSection(bookcourt)} className="link"> Reserver un terrain</li>
        <li onClick = {()=> scrollToSection(reserve)} className="link"> Rencontre avec d'autres membres</li>
        <li onClick = {()=> scrollToSection(skills)} className="link"> Aprentissage</li>
        <li onClick = {()=> scrollToSection(book)} className="link"> Reservation professeur</li>



    </ul>
</div>



      


<p class="text-white bg-dark p-3 text-center  fw-bolder fst-italic">LES DOCTEURS RECOMMANDENT DE FAIRE AU MOINS DU SPORT DEUX FOIS PAR SEMAINE</p>





    <div >
      <Row>
        <Col>
            <p class="text fs-3"
            style={{ marginTop: 50}}
            > Bienvenue à Ottawa Canada Club</p>
            <p class="text fs-3" >Un des meilleurs clubs de Ottawa</p>

            <p class="text fs-3" >Plus de 500 membres de tout les âges et de tout les levels</p> 
            
            <Button onClick ={()=>{
    navigate("/")
}}
style={{ backgroundColor: 'black', marginTop: 100, marginBottom: 50, padding: 10}}
variant = "contained"
>Switch to english</Button>
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
        <p style={{marginTop:50}} 
        class="text fs-3" > Adapté aux joueurs en intérieur et aux joueurs en extérieur</p>
                <p class="text fs-3">  
                Situé au centre-ville : 547, rue kent K09 NU7</p>
                <p class="text fs-3">  
                Appelez-nous au : 613-695-5847 </p>


        </Col>

      </Row>



    </div>

    <p ref={teacher} class="text-white bg-dark p-3 text-center  fw-bolder fst-italic">LES DOCTEURS RECOMMANDENT DE FAIRE AU MOINS DU SPORT DEUX FOIS PAR SEMAINE</p>

    <div>

    <Row>
    <p  class="text-center fs-1"> Nos principaux professeurs</p>
        <Col>

                <img className="secondphoto  " src = "./image/federer.png" />
                <p class="text fs-3"> NADAL FEDERER</p>
                <p class="text fs-5" >  </p>
                <p class="text fs-5" >Service</p>
                <p class="text fs-5" >Strategie</p>
                <p class="text fs-5" >  Tir </p>
                <p class="text fs-5" >Rotations internes/externes</p>
        </Col >
        <Col>
                <img className="secondphotoo  " src = "./image/shot.png" />
                <p class="text fs-3"> Novak Djokovic</p>
                <p class="text fs-5" > </p>
                <p class="text fs-5" >Revers</p>
                <p class="text fs-5" >Coup droit</p>
                <p class="text fs-5" >Aérienne</p>
                <p class="text fs-5" >Saut de boîte</p>

        </Col>
        <Col>
                <img className="secondphotooo  " src = "./image/fist.png" />
                <p class="text fs-3"> Serena Williams</p>
                <p class="text fs-5" >Banc de Presse </p>
                <p class="text fs-5" >Fente latérale</p>
                <p class="text fs-5" >Slam de médecine-ball</p>
          
        </Col>

      </Row>
    </div>

    <p ref={court} class="text-white bg-dark p-3 text-center  fw-bolder fst-italic">LES DOCTEURS RECOMMANDENT DE FAIRE AU MOINS DU SPORT DEUX FOIS PAR SEMAINE</p>

    <div>
      <p   class="text-center fs-1">Type de terrain</p>
      <Row>
      <Col>
                <img class="thirdphoto  " src = "./image/insidecourt.png" alt ="tennisman"/>
                <p class="text fs-3"> Cour intérieure</p>
                <p class="text fs-5" >Filet bas tendu au centre </p>
                <p class="text fs-5" >Peut être utilisé pour jouer à la fois des matchs en double et en simple.</p>
        </Col >
        <Col>
                <img class="thirdphotoo  " src = "./image/outsidecourt.png" alt ="tennisman"/>
                <p class="text fs-3">Terrain extérieur</p>
                <p class="text fs-5" >Peut être utilisé pour jouer des matchs en double ou en simple.</p>
                <p class="text fs-5" >Filet bas tendu au centre</p>
                <p class="text fs-5" >Fermé la nuit et en cas de mauvais temps</p>


              

                


        </Col>
        <Col>
                <img class="thirdphotoo  " src = "./image/trainingcourt.png" alt ="tennisman"/>
                <p class="text fs-3"> Le mur</p>
                <p class="text fs-5" >Bon pour les débutants</p>
                <p class="text fs-5" >Une des meilleures façons de s'améliorer </p>
                <p class="text fs-5" >La meilleure façon de maîtriser les bases</p>
        </Col>

      </Row>

      

    </div>

    <p ref={ racket} class="text-white bg-dark p-3 text-center  fw-bolder fst-italic">LES DOCTEURS RECOMMANDENT DE FAIRE AU MOINS DU SPORT DEUX FOIS PAR SEMAINE</p>

    <div>
    <p class="text-center fs-1">Type de raquettes</p>
      <Row>
      <Col>
                <img class ="fourthphoto"  src = "./image/racket.png" alt ="tennisman"/>
                <p class="text fs-5" >Raquette de contrôle ultime</p>
                <p class="text fs-5" >Avancé à intermédiaire </p>
                <p class="text fs-5" >Poids lourd (plus de 300g)</p>
                <p class="text fs-5" >Tamis de 98 pouces carrés et moins</p>
                <p class="text fs-5" >  Largeur du faisceau de 22 mm et moins </p>
                <p class="text fs-5" >  Équilibre très léger en tête </p>

        </Col >
        <Col> 
                <img class ="fourthphotoo"  src = "./image/racket.png" alt ="tennisman"/>
                <p class="text fs-5" >  Raquette de contrôle puissante </p>
                <p class="text fs-5" >Avancé à intermédiaire</p>
                <p class="text fs-5" >Poids moyen (280 à 300 g) </p>
                <p class="text fs-5" >Tamis de 98 à 102 pouces carrés</p>
                <p class="text fs-5" >Largeur du faisceau de 22 à 24mm</p>
                <p class="text fs-5" >  Léger équilibre tête-lumière </p>


        </Col>
        <Col>
                <img class ="fourthphotooo"  src = "./image/racket.png" alt ="tennisman"/>
                <p class="text fs-5" >  Raquette de puissance légère </p>
                <p class="text fs-5" >Débutant à intermédiaire</p>
                <p class="text fs-5" >Poids léger (moins de 280 g) </p>
                <p class="text fs-5" >Tamis de plus de 102 pouces carrés</p>
                <p class="text fs-5" >Largeur du faisceau de 25 mm et plus</p>
                <p class="text fs-5" >  Équilibre régulier à lourd en tête </p>
        </Col>

      </Row>


      <p ref={bookcourt}  class="text-white bg-dark p-3 text-center  fw-bolder fst-italic">LES DOCTEURS RECOMMANDENT DE FAIRE AU MOINS DU SPORT DEUX FOIS PAR SEMAINE</p>

    <div >



    <Row>

        
        <Col>

        <p class="text fs-3 fw-bold">Quand souhaitez-vous nous rencontrer ?</p>

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
        

           <p class="text fs-3 fw-bold">Entrez vos informations</p>

        <Row>
        <p class="text fs-5" >Prénom</p>
        </Row>
        <Row>
        <TextField id="filled-basic" label="Veuillez entrer le prénom" variant="filled" margin="dense" />
        </Row>
        <Row>
        <p class="text fs-5" >Nom de famille</p>
        </Row>
        <Row>
        <TextField id="filled-basic" label="Veuillez entrer le nom de famille" variant="filled" margin="dense" />
        </Row>

        <Row>
        <p class="text fs-5" >Adresse e-mail</p>
        </Row>
        <Row>
        <TextField id="filled-basic" label="Veuillez entrer l'adresse email" variant="filled" margin="dense" />
        </Row>

        <Row>
        <p class="text fs-5" >Âge</p>
        <TextField id="filled-basic" label="Veuillez entrer votre âge" variant="filled" margin="dense" />

        </Row>

        <Row>
        <p class="text fs-5" >Numéro de membre</p>
        <TextField id="filled-basic" label="Veuillez entrer votre numéro de membre" variant="filled" margin="dense" />

        </Row>

        <Button onClick ={()=>{
    navigate("/confirmationfrench")
}}
style={{ backgroundColor: 'black',marginLeft: '20rem',  marginTop: 10, marginBottom: 50, padding: 10}}
variant = "contained"
>Reserver</Button>
      

      
    </div>
        </Col >

    </Row>

    </div>
      

    </div>


    <p ref={reserve} 
    class="text-white bg-dark p-3 text-center  fw-bolder fst-italic">LES DOCTEURS RECOMMANDENT DE FAIRE AU MOINS DU SPORT DEUX FOIS PAR SEMAINE</p>

    <p class="text-center fs-1">Rencontrez nos membres</p>

    <Row>

      <Col>

      <p class="text fs-3 fw-bold">Entrez vos coordonnées</p>

      <Row>
      <p class="text fs-5" >Prénom</p>
      </Row>
      <Row>
      <TextField style={{ marginLeft: '1rem'}} id="filled-basic" label="Veuillez entrer le prénom" variant="filled" margin="dense" />
      </Row>
      <Row>
      <p class="text fs-5" >Nom de famille</p>
      </Row>
      <Row>
      <TextField style={{ marginLeft: '1rem'}} id="filled-basic" label="Veuillez entrer le nom de famille" variant="filled" margin="dense" />
      </Row>
   
      <Row>
      <p class="text fs-5" >Adresse e-mail</p>
      </Row>
      <Row>
      <TextField style={{ marginLeft: '1rem'}}  id="filled-basic" label="Veuillez saisir votre e-mail" variant="filled" margin="dense" />
      </Row>

      <Row>
      <p class="text fs-5" >Âge</p>
      <TextField style={{ marginLeft: '1rem'}} id="filled-basic" label="Veuillez entrer votre âge" variant="filled" margin="dense" />

      </Row>
      

      


      </Col>


      <Col>
      <p class="text fs-3 fw-bold"> Niveau de tennis </p>


      <div>
      <br />
      <Autocomplete
        style={{ marginLeft: '4rem'}}
        options={options}
        sx={{ width: 300 }}
        renderInput={(params) => <TextField {...params} label="Level" />}
      />


<br />
<p class="text fs-3 fw-bold"> Le genre </p>

      <Autocomplete
        style={{ marginLeft: '4rem'}}
        options={genders}
        sx={{ width: 300 }}
        renderInput={(params) => <TextField {...params} label="Genre" />}
      />
    </div>


    

      </Col>

      <Col>
      <p class="text fs-3 fw-bold"> Temps libre </p>

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
    navigate("/confirmationfrench")
}}
style={{ backgroundColor: 'black', marginTop: 300, padding: 10}}
variant = "contained"
>Reserver</Button>


 </>
 
    
      
      </Col>


    </Row>


    <p ref ={skills} class="text-white bg-dark p-3 text-center  fw-bolder fst-italic">LES DOCTEURS RECOMMANDENT DE FAIRE AU MOINS DU SPORT DEUX FOIS PAR SEMAINE</p>
    <p class="text-center fs-1">Toutes les compétences que vous pouvez apprendre à notre école et beaucoup d'autres plus</p>

    <div>

    <Row>

      <Col>
      <img class="fifthphoto  " src = "./image/forehand.png" alt ="tennisman"/>
      <p class="text fs-5" >Coup droit</p>
      </Col>

      <Col>
      <img class="fifthphotoo  " src = "./image/backhand.png" alt ="tennisman"/>
      <p class="text fs-5" >Revers</p>
      </Col>

      <Col>
      <img class="fifthphotooo  " src = "./image/serve.png" alt ="tennisman"/>
      <p class="text fs-5" >Service</p>
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
      <p class="text fs-5" >Aérienne</p>
      </Col>


    </Row>

    </div>


   
    <p ref ={book} class="text-white bg-dark p-3 text-center  fw-bolder fst-italic">LES DOCTEURS RECOMMANDENT DE FAIRE AU MOINS DU SPORT DEUX FOIS PAR SEMAINE</p>




    <div>

    <p class="text-center fs-1">Réserver avec un professeur spécifiques dans un terrain spécifique</p>


    <Row>
        <Col>
        <Col>
        <p class="text-center fs-1">Terrains disponibles</p>

                <Autocomplete
                style={{ marginTop: 10, marginBottom: 50, marginLeft: '10rem'}}
                options={courts}
                sx={{ width: 300 }}
                renderInput={(params) => <TextField {...params} label="Terrains" />}
  />
        </Col>

                    
                
        <Col>
        <p class="text-center fs-1">Professeurs disponibles</p>

        <Autocomplete
                style={{ marginTop: 10, marginBottom: 50, marginLeft: '10rem'}}
                options={names}
                sx={{ width: 300 }}
                renderInput={(params) => <TextField {...params} label="Noms" />}
  />
        </Col>
        </Col>
     
        <Col>
        <img class="sixthphoto  " src = "./image/teacher.png" alt ="tennisman"/>

        </Col>

    </Row>

    </div>


    <Button onClick ={()=>{
    navigate("/confirmationfrench")
}}
style={{ backgroundColor: 'black', marginTop: 100, padding: 10, marginBottom:50}}
variant = "contained"
>Reserver</Button>


    


    
    </div>
  );
}

export default AboutFrench;

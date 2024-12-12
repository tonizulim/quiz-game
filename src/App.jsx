import { useState } from 'react'
import axios from "axios";
import './App.css'

import Pocetna from './components/pocetna';
import Prikazi_pitanja from './components/prikazi_pitanja';
import End from './components/end';

function App() {
  const [number_of_questions, setNumber_of_questions] = useState(1);
  const [current_question, setCurrent_question] = useState(0);
  const [correct_questions, setCorrect_questions] = useState(0);


  const [response, setResponse] =  useState({
    response_code: 2,
    results: []
  });

  return (
    <>
    
    {
      response.response_code === 0 ? (
          current_question+1<=number_of_questions ? (
            <Prikazi_pitanja result={response.results} number_of_questions={number_of_questions} 
            current_question={current_question} setCurrent_question={setCurrent_question} 
            correct_questions={correct_questions} setCorrect_questions={setCorrect_questions}></Prikazi_pitanja>
          ):(
            <End correct_questions={correct_questions} number_of_questions={number_of_questions}></End>
          )
      ):( 
      <Pocetna setResponse={setResponse} setNumber_of_questions={setNumber_of_questions} ></Pocetna>
      )
    }
    
    </>

    
  )
}

export default App

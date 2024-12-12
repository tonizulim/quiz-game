import { useState } from 'react'
import axios from "axios";
import './pocetna.css'

function Pocetna({setResponse, setNumber_of_questions}){
    const [questionSettings, setQuestionSettings] = useState({
        amount:1, 
        category:10, 
        difficulty:'easy'
      })

    const handleChangeAmount = (event) => {
        const tempQuestion={...questionSettings};
        tempQuestion.amount=event.target.value;
        setQuestionSettings(tempQuestion);
        setNumber_of_questions(tempQuestion.amount);
      }
    
      const handleChangeCategory = (event) => {
        const tempQuestion={...questionSettings};
        tempQuestion.category=event.target.value;
        setQuestionSettings(tempQuestion);
      }
    
      const handleChangeDificulty = (event) => {
        const tempQuestion={...questionSettings};
        tempQuestion.difficulty=event.target.value;
        setQuestionSettings(tempQuestion);
      }

      return (
        <>
          <div id='main'>
            <h1>Quizz app</h1>
            <h3>How many questions you want:</h3>
            <select onChange={handleChangeAmount}>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
            </select>

            <h3>Select category:</h3>
            <select onChange={handleChangeCategory}>
              <option value="9">General Knowledge</option>
              <option value="10">Entertainment: Books</option>
              <option value="11">Entertainment: Film</option>
              <option value="12">Entertainment: Music</option>
              <option value="13">Entertainment: Musicals & Theatres</option>
              <option value="14">Entertainment: Television</option>
              <option value="15">Entertainment: Video Games</option>
              <option value="16">Entertainment: Board Games</option>
              <option value="17">Science & Nature</option>
              <option value="18">Science: Computers</option>
              <option value="19">Science: Mathematics</option>
              <option value="20">Mythology</option>
              <option value="21">Sports</option>
              <option value="22">Geography</option>
              <option value="23">History</option>
              <option value="24">Politics</option>
              <option value="25">Art</option>
              <option value="26">Celebrities</option>
              <option value="27">Animals</option>
              <option value="28">Vehicels</option>
              <option value="29">Entertainment: Comics</option>
              <option value="30">Science: Gadgets</option>
              <option value="31">Entertainment: Anime & Manga</option>
              <option value="32">Entertainment: Cartoon & Animations</option>
    
            </select>

            <h3>Select difficulty</h3>
            <label>
              <input name='difficulty' type='radio' value='easy' defaultChecked={true} onChange={handleChangeDificulty}></input>
              easy
            </label>
            <label>
              <input name='difficulty' type='radio' value='medium' onChange={handleChangeDificulty}></input>
              medium
            </label>
    
            <label>
              <input name='difficulty' type='radio' value='hard' onChange={handleChangeDificulty}></input>
              hard
            </label>
    
          
          <button onClick={()=>{
            axios.get(`https://opentdb.com/api.php?amount=${questionSettings.amount}&category=${questionSettings.category}&difficulty=${questionSettings.difficulty}&type=multiple`)
            .then(res => {console.log(res.data)
               setResponse(res.data)})
            .catch(err => alert(err));
          }}>
            PLAY
          </button>
          </div>
        </>
      )
    }

export default Pocetna;
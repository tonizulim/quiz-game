import { useState } from 'react'
import './prikazi_pitanja.css'

function Prikazi_pitanja({result , number_of_questions, current_question, setCurrent_question, correct_questions, setCorrect_questions}){
    const [isCorrect, setIsCorrect]= useState('');
    const [answered, setAnswered]=useState(false);
    let isNewAnswer = false


    const increaseCorrent_questions = () =>{    
        setCurrent_question(current_question+1);
    }

    if(!isNewAnswer){
    result.forEach((Question, index) => {

        const randomNumber = Math.floor(Math.random() * 4) ;
    
        const newAnswers=[...Question.incorrect_answers];

        if(randomNumber==3){
            newAnswers.push(Question.correct_answer)
        }
        else{
            const odg=newAnswers[randomNumber];
            newAnswers[randomNumber]= Question.correct_answer;
        
            newAnswers.push(odg);
        }

        Question.answers=[...newAnswers];
    })
    isNewAnswer=true;
    }

    const check_answer = (event) => {

        if(event.target.value==result[current_question].correct_answer){
            setCorrect_questions(correct_questions+1);
            console.log('tocan');
        }
        else{
            console.log('netocan');

        }
        setIsCorrect('red_btn')
        setAnswered(true);

        setTimeout(()=>{setCurrent_question(current_question+1); setIsCorrect(''); setAnswered(false)}, 1000);
    
    }

    
    return(
        <>
        <div id='question_div'>
            <h3>Question no. {current_question+1}/{number_of_questions}</h3>
            <h2>{result[current_question].question}</h2>

            
            <button className={answered ? (result[current_question].answers[0]===result[current_question].correct_answer ? 'correct': 'incorrect'): ''} disabled={answered} value={result[current_question].answers[0]} onClick={check_answer}>{result[current_question].answers[0]}</button>
            <button className={answered ? (result[current_question].answers[1]===result[current_question].correct_answer ? 'correct': 'incorrect'): ''} disabled={answered} value={result[current_question].answers[1]} onClick={check_answer}>{result[current_question].answers[1]}</button>
            <button className={answered ? (result[current_question].answers[2]===result[current_question].correct_answer ? 'correct': 'incorrect'): ''} disabled={answered} value={result[current_question].answers[2]} onClick={check_answer}>{result[current_question].answers[2]}</button>
            <button className={answered ? (result[current_question].answers[3]===result[current_question].correct_answer ? 'correct': 'incorrect'): ''} disabled={answered}  value={result[current_question].answers[3]} onClick={check_answer}>{result[current_question].answers[3]}</button>
            
            <h3>Current score: {correct_questions}/{number_of_questions}</h3>
        </div>
        </>

    )
}

export default Prikazi_pitanja;
import'./end.css'

function End({correct_questions, number_of_questions}){

    let message = '';
      
    if (correct_questions/number_of_questions >= 0.85) {
      message = 'Great job! Perfect score!';
    } else if (correct_questions/number_of_questions >= 0.7) {
      message = 'Well done! You did great!';
    } else if (correct_questions/number_of_questions >= 0.5) {
      message = 'Not bad! Keep practicing!';
    } else {
      message = 'You can do better! Keep trying!';
    }


    return(
        <>
        <div id='end_div'>
            <h1>END</h1>
            <h2>Your score {correct_questions}/{number_of_questions} </h2>
            <h2>{message}</h2>
            <button onClick={()=>window.location.reload()}>RESTART</button>
        </div>
        </>
    ) 
}

export default End
import React from 'react';
import ReactDOM from 'react-dom/client';

// if Statement
function MissedGoal() {
  return <h1>MISSED!</h1>;
}

function MadeGoal() {
  return <h1>Goal!</h1>;
}

function Goal(props){
    const isGoal = props.isGoal;
    if(isGoal){
        return <MadeGoal/>
    }
    return <MissedGoal/>
}

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<Goal isGoal={false}/>)

//Logical && Operator

function Garage(props){
    const cars = props.cars;
    return(
        <>
            <h1> Garage </h1>
            {cars.length > 0 && 
                <h2>
                    You have {cars.length} cars in your Garage.
                </h2>
            }
        </>
    )
}
const cars = ['a','b','c'];
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<Garage cars={cars}/>);

// Ternary Operator

function Goal2(props){
    const isGoal = props.isGoal;
    return(
        <>
            {isGoal?<MadeGoal/>:<MissedGoal/>}
        </>
    )
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Goal2 isGoal={false}/>);
import React, { useState } from "react";

function App(){
    const [waight, setWaight] = useState();
    const [hight, setHight] = useState();
    const [result , setResult] = useState();

    let inputWaight =(event) =>{
        setWaight(event.target.value);
    }
    let inputHight = (event) => {
        setHight(event.target.value);
    }

    let hightInMeter = hight/100
    let BMI = waight/(hightInMeter * hightInMeter);


    let advice = "";
    if(BMI<18.5){
        advice = "Your are UnderWaight.😦";
    }else if(BMI<25){
        advice = "You are Healthy.😊";
    }else if(BMI>25){
        advice = "You are OverWaight.😱";
    }
    
    let clickEvent = () => {
        setResult(BMI);
    }


    return (
        <>
            <div>
                <input type="text" placeholder="Waight in KG" onChange={inputWaight}/>
                <br/>
                <input type="text" placeholder="Hight in CM" onChange={inputHight}/>
                <button onClick={clickEvent}> Submit</button>
                <h1>Your BMI is {result} </h1>
                <h3> {advice} </h3>
            </div>
        </>
    )
}
export default App;
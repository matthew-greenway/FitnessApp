import React from 'react'
import { useState } from 'react'
import { fetchData } from './fetchData';

const homePage = 'https://cpsc3720-fitness-app.herokuapp.com/'
const numExercises = 2;
const num = Math.round(Math.random() * 29)
const num2 = Math.round(Math.random() * 29)
export default function Routine2() {
    const [isBack, setIsBack] = useState(false);
    const [isChest, setIsChest] = useState(false);
    const [isShoulders, setIsShoulders] = useState(false);
    const [isUpperlegs, setIsUpperlegs] = useState(false);
    const [isLowerlegs, setIsLowerlegs] = useState(false);
    const [isUpperarms, setIsUpperarms] = useState(false);
    const [isLowerarms, setIsLowerarms] = useState(false);
    const [isNeck, setIsNeck] = useState(false);
    const [isWaist, setIsWaist] = useState(false);
    const [isCardio, setIsCardio] = useState(false);
    const [isSubmit, setIsSubmit] = useState(false);
    const [routine, setRoutine] = useState([]);
    const [backRoutine, setBackRoutine] = useState([]);
    const [chestRoutine, setChestRoutine] = useState([]);
    const [shoulderRoutine, setShoulderRoutine] = useState([]);
    const [upperLegRoutine, setUpperLegRoutine] = useState([]);
    const [lowerLegRoutine, setLowerLegRoutine] = useState([]);
    const [upperArmRoutine, setUpperArmRoutine] = useState([]);
    const [lowerArmRoutine, setLowerArmRoutine] = useState([]);
    const [neckRoutine, setNeckRoutine] = useState([]);
    const [waistRoutine, setWaistRoutine] = useState([]);
    const [cardioRoutine, setCardioRoutine] = useState([]);
    const [backDisplay, setBackDisplay] = useState(false);
    const [chestDisplay, setChestDisplay] = useState(false);
    const [shoulderDisplay, setShoulderDisplay] = useState(false);
    const [upperLegDisplay, setUpperLegDisplay] = useState(false);
    const [lowerLegDisplay, setLowerLegDisplay] = useState(false);
    const [upperArmDisplay, setUpperArmDisplay] = useState(false);
    const [lowerArmDisplay, setLowerArmDisplay] = useState(false);
    const [neckDisplay, setNeckDisplay] = useState(false);
    const [waistDisplay, setWaistDisplay] = useState(false);
    const [cardioDisplay, setCardioDisplay] = useState(false);

    const [backRanNum, setBackRanNum] = useState();
    const [backRanNum2, setBackRanNum2] = useState();
    const [chestRanNum, setChestRanNum] = useState();
    const [chestRanNum2, setChestRanNum2] = useState();
    const [ulRanNum, setUlRanNum] = useState();
    const [ulRanNum2, setUlRanNum2] = useState();
    const [llRanNum, setLlRanNum] = useState();
    const [llRanNum2, setLlRanNum2] = useState();
    const [uaRanNum, setUaRanNum] = useState();
    const [uaRanNum2, setUaRanNum2] = useState();
    const [laRanNum, setLaRanNum] = useState();
    const [laRanNum2, setLaRanNum2] = useState();
    const [shoulderRanNum, setShoulderRanNum] = useState();
    const [shoulderRanNum2, setShoulderRanNum2] = useState();
    const [waistRanNum, setWaistRanNum] = useState();
    const [waistRanNum2, setWaistRanNum2] = useState();
    const [cardioRanNum, setCardioRanNum] = useState();
    const [cardioRanNum2, setCardioRanNum2] = useState();



    function backHandler() {
        setIsBack(!isBack)
    }

    function chestHandler() {
        setIsChest(!isChest)
    }

    function shouldersHandler() {
        setIsShoulders(!isShoulders)
    }

    function upperlegsHandler() {
        setIsUpperlegs(!isUpperlegs)
    }

    function lowerlegsHandler() {
        setIsLowerlegs(!isLowerlegs)
    }

    function upperarmsHandler() {
        setIsUpperarms(!isUpperarms)
    }

    function lowerarmsHandler() {
        setIsLowerarms(!isLowerarms)
    }

    function neckHandler() {
        setIsNeck(!isNeck)
    }

    function waistHandler() {
        setIsWaist(!isWaist)
    }

    function cardioHandler() {
        setIsCardio(!isCardio)
    }

    function submitHandler() {
        //setBackDisplay(false)
        setIsSubmit(!isSubmit)
    }

    function backButtonHandler() {
        setBackDisplay(false)
        setChestDisplay(false)
        setUpperLegDisplay(false) 
        setLowerLegDisplay(false)
        setUpperArmDisplay(false)
        setLowerArmDisplay(false)
        setShoulderDisplay(false)
        setNeckDisplay(false)
        setWaistDisplay(false)
        setCardioDisplay(false)
        setIsSubmit(!isSubmit)
    }


    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '75504727e2msh5e36921f43de9f6p15870fjsna8e4014856fd',
            'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
        }
    };

    if (isBack) {
        const handleSearchBack = async () => {
                
            const response = await fetchData('https://exercisedb.p.rapidapi.com/exercises/bodyPart/back', options);
            const num3 = Math.round(Math.random() * response.length)
            const num4 = Math.round(Math.random() * response.length)

            setBackRanNum(num3)
            setBackRanNum2(num4)

            setBackRoutine(response)                  
        }

        handleSearchBack()
        backHandler(false);
        setBackDisplay(true);
    }
    if (isChest) {
        const handleSearchChest = async () => {
                
            const response = await fetchData('https://exercisedb.p.rapidapi.com/exercises/bodyPart/chest', options);
            const num3 = Math.round(Math.random() * response.length)
            const num4 = Math.round(Math.random() * response.length)

            setChestRanNum(num3)
            setChestRanNum2(num4)
            
            setChestRoutine(response)                 
        }

        handleSearchChest()
        chestHandler(false);
        setChestDisplay(true);
    }
    if (isShoulders) {
        const handleSearchShoulders = async () => {
                
            const response = await fetchData('https://exercisedb.p.rapidapi.com/exercises/bodyPart/shoulders', options);
            const num3 = Math.round(Math.random() * response.length)
            const num4 = Math.round(Math.random() * response.length)

            setShoulderRanNum(num3)
            setShoulderRanNum2(num4)
            setShoulderRoutine(response)                 
        }

        handleSearchShoulders()
        shouldersHandler(false);
        setShoulderDisplay(true);
    }
    if (isUpperarms) {
        const handleSearchUpperArms = async () => {
                
            const response = await fetchData('https://exercisedb.p.rapidapi.com/exercises/bodyPart/upper%20arms', options);
            const num3 = Math.round(Math.random() * response.length)
            const num4 = Math.round(Math.random() * response.length)

            setUaRanNum(num3)
            setUaRanNum2(num4)
            setUpperArmRoutine(response)            
        }

        handleSearchUpperArms()
        upperarmsHandler(false);
        setUpperArmDisplay(true);
    }
    if (isLowerarms) {
        const handleSearchLowerArms = async () => {
                
            const response = await fetchData('https://exercisedb.p.rapidapi.com/exercises/bodyPart/lower%20arms', options);
            const num3 = Math.round(Math.random() * response.length)
            const num4 = Math.round(Math.random() * response.length)

            setLaRanNum(num3)
            setLaRanNum2(num4)
            setLowerArmRoutine(response)                
        }

        handleSearchLowerArms()
        lowerarmsHandler(false);
        setLowerArmDisplay(true);
    }
    if (isUpperlegs) {
        const handleSearchUpperLegs = async () => {
                
            const response = await fetchData('https://exercisedb.p.rapidapi.com/exercises/bodyPart/upper%20legs', options);
            const num3 = Math.round(Math.random() * response.length)
            const num4 = Math.round(Math.random() * response.length)

            setUlRanNum(num3)
            setUlRanNum2(num4)
            setUpperLegRoutine(response)                 
        }

        handleSearchUpperLegs()
        upperlegsHandler(false);
        setUpperLegDisplay(true);
    }
    if (isLowerlegs) {
        const handleSearchLowerLegs = async () => {
                
            const response = await fetchData('https://exercisedb.p.rapidapi.com/exercises/bodyPart/lower%20legs', options);
            const num3 = Math.round(Math.random() * response.length)
            const num4 = Math.round(Math.random() * response.length)

            setLlRanNum(num3)
            setLlRanNum2(num4)
            setLowerLegRoutine(response)             
        }

        handleSearchLowerLegs()
        lowerlegsHandler(false);
        setLowerLegDisplay(true);
    }
    if (isNeck) {
        const handleSearchNeck = async () => {
                
            const response = await fetchData('https://exercisedb.p.rapidapi.com/exercises/bodyPart/neck', options);
            
            setNeckRoutine(response)            
        }

        handleSearchNeck()
        neckHandler(false);
        setNeckDisplay(true);
    }
    if (isWaist) {
        const handleSearchWaist = async () => {
                
            const response = await fetchData('https://exercisedb.p.rapidapi.com/exercises/bodyPart/waist', options);
            const num3 = Math.round(Math.random() * response.length)
            const num4 = Math.round(Math.random() * response.length)

            setWaistRanNum(num3)
            setWaistRanNum2(num4)
            setWaistRoutine(response)              
        }

        handleSearchWaist()
        waistHandler(false);
        setWaistDisplay(true);
    }
    if (isCardio) {
        const handleSearchCardio = async () => {
                
            const response = await fetchData('https://exercisedb.p.rapidapi.com/exercises/bodyPart/cardio', options);
            const num3 = Math.round(Math.random() * response.length)
            const num4 = Math.round(Math.random() * response.length)

            setCardioRanNum(num3)
            setCardioRanNum2(num4)
            setCardioRoutine(response)            
        }

        handleSearchCardio()
        cardioHandler(false);
        setCardioDisplay(true);
    }

    if(isSubmit) {
        console.log(routine)

        return (
                <div>
                    <div>
                        <center>
                            <button style={{ width: 420, backgroundColor: '#F56600', marginTop: 20, minHeight: 50, }} onClick={backButtonHandler}>
                                <center><h2 >Back</h2></center>
                            </button>&nbsp;&nbsp;&nbsp;&nbsp;
                        <a href={homePage}>
                            <button style={{ width: 420, backgroundColor: '#522D80', marginTop: 20, minHeight: 50, }}>
                                <center><h2 >Home Page</h2></center>
                            </button>
                        </a>
                        </center>
                    </div>&nbsp;

                    <center><h4><p3> Here's Your Workout!</p3></h4></center>&nbsp;
                    
                    <div>
                        {backDisplay ? 
                        <center>
                            <h3>Name: {backRoutine[backRanNum].name}</h3>
                            <h3>Area: {backRoutine[backRanNum].bodyPart}</h3>
                            <h3>Target: {backRoutine[backRanNum].target}</h3>
                            <h3>Equipment: {backRoutine[backRanNum].equipment}</h3>
                            <h3>How To</h3>
                            <img src = {backRoutine[backRanNum].gifUrl}/>
                            <h3>Name: {backRoutine[backRanNum2].name}</h3>
                            <h3>Area: {backRoutine[backRanNum2].bodyPart}</h3>
                            <h3>Target: {backRoutine[backRanNum2].target}</h3>
                            <h3>Equipment: {backRoutine[backRanNum2].equipment}</h3>
                            <h3>How To</h3>
                            <img src = {backRoutine[backRanNum2].gifUrl}/>
                        </center>
                        :
                        ''}
                    </div>
                    <div>
                        {chestDisplay ? 
                        <center>
                            <h3>Name: {chestRoutine[chestRanNum].name}</h3>
                            <h3>Area: {chestRoutine[chestRanNum].bodyPart}</h3>
                            <h3>Target: {chestRoutine[chestRanNum].target}</h3>
                            <h3>Equipment: {chestRoutine[chestRanNum].equipment}</h3>
                            <h3>How To</h3>
                            <img src = {chestRoutine[chestRanNum].gifUrl}/>
                            <h3>Name: {chestRoutine[chestRanNum2].name}</h3>
                            <h3>Area: {chestRoutine[chestRanNum2].bodyPart}</h3>
                            <h3>Target: {chestRoutine[chestRanNum2].target}</h3>
                            <h3>Equipment: {chestRoutine[chestRanNum2].equipment}</h3>
                            <h3>How To</h3>
                            <img src = {chestRoutine[chestRanNum2].gifUrl}/>
                        </center>
                        :
                        ''}
                    </div>
                    <div>
                        {upperLegDisplay ? 
                        <center>
                            <h3>Name: {upperLegRoutine[ulRanNum].name}</h3>
                            <h3>Area: {upperLegRoutine[ulRanNum].bodyPart}</h3>
                            <h3>Target: {upperLegRoutine[ulRanNum].target}</h3>
                            <h3>Equipment: {upperLegRoutine[ulRanNum].equipment}</h3>
                            <h3>How To</h3>
                            <img src = {upperLegRoutine[ulRanNum].gifUrl}/>
                            <h3>Name: {upperLegRoutine[ulRanNum2].name}</h3>
                            <h3>Area: {upperLegRoutine[ulRanNum2].bodyPart}</h3>
                            <h3>Target: {upperLegRoutine[ulRanNum2].target}</h3>
                            <h3>Equipment: {upperLegRoutine[ulRanNum2].equipment}</h3>
                            <h3>How To</h3>
                            <img src = {upperLegRoutine[ulRanNum2].gifUrl}/>
                        </center>
                        :
                        ''}
                    </div>
                    <div>
                        {lowerLegDisplay ? 
                        <center>
                            <h3>Name: {lowerLegRoutine[llRanNum].name}</h3>
                            <h3>Area: {lowerLegRoutine[llRanNum].bodyPart}</h3>
                            <h3>Target: {lowerLegRoutine[llRanNum].target}</h3>
                            <h3>Equipment: {lowerLegRoutine[llRanNum].equipment}</h3>
                            <h3>How To</h3>
                            <img src = {lowerLegRoutine[llRanNum].gifUrl}/>
                            <h3>Name: {lowerLegRoutine[llRanNum2].name}</h3>
                            <h3>Area: {lowerLegRoutine[llRanNum2].bodyPart}</h3>
                            <h3>Target: {lowerLegRoutine[llRanNum2].target}</h3>
                            <h3>Equipment: {lowerLegRoutine[llRanNum2].equipment}</h3>
                            <h3>How To</h3>
                            <img src = {lowerLegRoutine[llRanNum2].gifUrl}/>
                        </center>
                        :
                        ''}
                    </div>
                    <div>
                        {upperArmDisplay ? 
                        <center>
                            <h3>Name: {upperArmRoutine[uaRanNum].name}</h3>
                            <h3>Area: {upperArmRoutine[uaRanNum].bodyPart}</h3>
                            <h3>Target: {upperArmRoutine[uaRanNum].target}</h3>
                            <h3>Equipment: {upperArmRoutine[uaRanNum].equipment}</h3>
                            <h3>How To</h3>
                            <img src = {upperArmRoutine[uaRanNum].gifUrl}/>
                            <h3>Name: {upperArmRoutine[uaRanNum2].name}</h3>
                            <h3>Area: {upperArmRoutine[uaRanNum2].bodyPart}</h3>
                            <h3>Target: {upperArmRoutine[uaRanNum2].target}</h3>
                            <h3>Equipment: {upperArmRoutine[uaRanNum2].equipment}</h3>
                            <h3>How To</h3>
                            <img src = {upperArmRoutine[uaRanNum2].gifUrl}/>
                        </center>
                        :
                        ''}
                    </div>
                    <div>
                        {lowerArmDisplay ? 
                        <center>
                            <h3>Name: {lowerArmRoutine[laRanNum].name}</h3>
                            <h3>Area: {lowerArmRoutine[laRanNum].bodyPart}</h3>
                            <h3>Target: {lowerArmRoutine[laRanNum].target}</h3>
                            <h3>Equipment: {lowerArmRoutine[laRanNum].equipment}</h3>
                            <h3>How To</h3>
                            <img src = {lowerArmRoutine[laRanNum].gifUrl}/>
                            <h3>Name: {lowerArmRoutine[laRanNum2].name}</h3>
                            <h3>Area: {lowerArmRoutine[laRanNum2].bodyPart}</h3>
                            <h3>Target: {lowerArmRoutine[laRanNum2].target}</h3>
                            <h3>Equipment: {lowerArmRoutine[laRanNum2].equipment}</h3>
                            <h3>How To</h3>
                            <img src = {lowerArmRoutine[laRanNum2].gifUrl}/>
                        </center>
                        :
                        ''}
                    </div>
                    <div>
                        {shoulderDisplay ? 
                        <center>
                            <h3>Name: {shoulderRoutine[shoulderRanNum].name}</h3>
                            <h3>Area: {shoulderRoutine[shoulderRanNum].bodyPart}</h3>
                            <h3>Target: {shoulderRoutine[shoulderRanNum].target}</h3>
                            <h3>Equipment: {shoulderRoutine[shoulderRanNum].equipment}</h3>
                            <h3>How To</h3>
                            <img src = {shoulderRoutine[shoulderRanNum].gifUrl}/>
                            <h3>Name: {shoulderRoutine[shoulderRanNum2].name}</h3>
                            <h3>Area: {shoulderRoutine[shoulderRanNum2].bodyPart}</h3>
                            <h3>Target: {shoulderRoutine[shoulderRanNum2].target}</h3>
                            <h3>Equipment: {shoulderRoutine[shoulderRanNum2].equipment}</h3>
                            <h3>How To</h3>
                            <img src = {shoulderRoutine[shoulderRanNum2].gifUrl}/>
                        </center>
                        :
                        ''}
                    </div>
                    <div>
                        {neckDisplay ? 
                        <center>
                            <h3>Name: {neckRoutine[0].name}</h3>
                            <h3>Area: {neckRoutine[0].bodyPart}</h3>
                            <h3>Target: {neckRoutine[0].target}</h3>
                            <h3>Equipment: {neckRoutine[0].equipment}</h3>
                            <h3>How To</h3>
                            <img src = {neckRoutine[0].gifUrl}/>
                            <h3>Name: {neckRoutine[1].name}</h3>
                            <h3>Area: {neckRoutine[1].bodyPart}</h3>
                            <h3>Target: {neckRoutine[1].target}</h3>
                            <h3>Equipment: {neckRoutine[1].equipment}</h3>
                            <h3>How To</h3>
                            <img src = {neckRoutine[1].gifUrl}/>
                        </center>
                        :
                        ''}
                    </div>
                    <div>
                        {waistDisplay ? 
                        <center>
                            <h3>Name: {waistRoutine[waistRanNum].name}</h3>
                            <h3>Area: {waistRoutine[waistRanNum].bodyPart}</h3>
                            <h3>Target: {waistRoutine[waistRanNum].target}</h3>
                            <h3>Equipment: {waistRoutine[waistRanNum].equipment}</h3>
                            <h3>How To</h3>
                            <img src = {waistRoutine[waistRanNum].gifUrl}/>
                            <h3>Name: {waistRoutine[waistRanNum2].name}</h3>
                            <h3>Area: {waistRoutine[waistRanNum2].bodyPart}</h3>
                            <h3>Target: {waistRoutine[waistRanNum2].target}</h3>
                            <h3>Equipment: {waistRoutine[waistRanNum2].equipment}</h3>
                            <h3>How To</h3>
                            <img src = {waistRoutine[waistRanNum2].gifUrl}/>
                        </center>
                        :
                        ''}
                    </div>
                    <div>
                        {cardioDisplay ? 
                        <center>
                            <h3>Name: {cardioRoutine[cardioRanNum].name}</h3>
                            <h3>Area: {cardioRoutine[cardioRanNum].bodyPart}</h3>
                            <h3>Target: {cardioRoutine[cardioRanNum].target}</h3>
                            <h3>Equipment: {cardioRoutine[cardioRanNum].equipment}</h3>
                            <h3>How To</h3>
                            <img src = {cardioRoutine[cardioRanNum].gifUrl}/>
                            <h3>Name: {cardioRoutine[cardioRanNum2].name}</h3>
                            <h3>Area: {cardioRoutine[cardioRanNum2].bodyPart}</h3>
                            <h3>Target: {cardioRoutine[cardioRanNum2].target}</h3>
                            <h3>Equipment: {cardioRoutine[cardioRanNum2].equipment}</h3>
                            <h3>How To</h3>
                            <img src = {cardioRoutine[cardioRanNum2].gifUrl}/>
                        </center>
                        :
                        ''}
                    </div>
                </div>
                
        )
    }

    if(!isSubmit)
    //console.log(isBack, isChest, isUpperarms, isLowerarms, isLowerlegs, isUpperlegs, isShoulders, isNeck, isWaist, isCardio)
        return (
            <div>
                <center>
                    <a href={homePage}>
                        <button style={{ width: 420, backgroundColor: '#F56600', marginTop: 20, minHeight: 50, }}>
                            <center><h2 >Main Menu</h2></center>
                        </button>
                    </a>
                    <div></div>&nbsp;
                    <div className='container'>
                    <h3>Which muscles would you like to work?</h3>
                    <div></div>&nbsp;&nbsp;&nbsp;
                        <hr/>
                            <input onChange = { backHandler } type = "checkbox"/>&nbsp;<p3>Back</p3>&nbsp;&nbsp; 
                            <input onChange = { chestHandler } type = "checkbox" name = "back"/>&nbsp;<p3>Chest</p3>&nbsp;&nbsp; 
                            <input onChange = { upperlegsHandler } type = "checkbox" name = "back"/>&nbsp;<p3>Upper Legs</p3>&nbsp;&nbsp; 
                            <input onChange = { lowerlegsHandler } type = "checkbox" name = "back"/>&nbsp;<p3>Lower Legs</p3>&nbsp;&nbsp; 
                            <input onChange = { upperarmsHandler } type = "checkbox" name = "back"/>&nbsp;<p3>Upper Arms</p3>&nbsp;&nbsp; 
                            <input onChange = { lowerarmsHandler } type = "checkbox" name = "back"/>&nbsp;<p3>Lower Arms</p3>&nbsp;&nbsp; 
                            <input onChange = { shouldersHandler } type = "checkbox" name = "back"/>&nbsp;<p3>Shoulders</p3>&nbsp;&nbsp; 
                            <input onChange = { neckHandler } type = "checkbox" name = "back"/>&nbsp;<p3>Neck</p3>&nbsp;&nbsp; 
                            <input onChange = { waistHandler } type = "checkbox" name = "back"/>&nbsp;<p3>Waist</p3>&nbsp;&nbsp; 
                            <input onChange = { cardioHandler } type = "checkbox" name = "back"/>&nbsp;<p3>Cardio</p3>&nbsp;&nbsp;  
                            
                        <hr/>
                    <div></div>&nbsp;&nbsp;&nbsp;
                    <div>
                        <button style={{ width: 420, backgroundColor: '#522D80', marginTop: 20, minHeight: 50, }} onClick={submitHandler}>
                            <center><h2 >Submit</h2></center>
                        </button>
                    </div>
                    
                    </div>
                </center>
            </div>
        )
}
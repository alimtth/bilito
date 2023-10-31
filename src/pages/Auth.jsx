import React, { useState } from 'react';
import { Link } from "react-router-dom";
import Button from '../components/Ui/Button';
import InputTextField from '@/components/Ui/InputTextField';

function AuthPage() {
    const [age, setAge] = useState(0);
    const [input, setInput] = useState("")
    const [showText, setShowText] = useState(true);

    console.log(age);


    const hanlInput = (e) => {
        console.log(e.target.value);
        setInput(e.target.value)
    }

    const toggleShow = () => {
        setShowText(!showText)
    }
    return (
        <div>
            <h1>{age}</h1>
            <Button variant='fill' size='xl' onClick={() => setAge(age + 1)}></Button>
            <Button variant='fill' size='xl' onClick={() => setAge(age ** 2)}></Button>
            <InputTextField onChange={hanlInput}></InputTextField>
            <Button onClick={toggleShow}></Button>
            <h3>salam</h3>
            {showText && <h1>{input}</h1>}
        </div>

    );
}

export default AuthPage;
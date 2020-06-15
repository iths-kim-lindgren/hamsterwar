import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import MainSection from './MainSection';
import { uploadHamster } from './fetchData';
// import fs = require('fs')

const StyledArticle = styled.article`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    & .form {
        display: flex;
        flex-direction: column;
    }
    & .form label {
        font-family: 'Righteous';
    }
    & .form input.untouched {
        background-color: #151515;
        -webkit-box-shadow: 0px 0.3px 3px 2px rgba(255,255,255,0.8);
        -moz-box-shadow: 0px 0.3px 3px 2px rgba(255,255,255,0.8);
        box-shadow: 0px 0.3px 3px 2px rgba(255,255,255,0.8);
        transition: 0.35s;
    }
    & .form input.touched {
        background-color: #000000;
        color: whitesmoke;
        transition: 0.35s;
    }
    & .form label, .form input {
        padding: 0.5em;
    }
`

const AddHamster = () => {

    const [nameButtonClass, setNameButtonClass] = useState("untouched")
    const [ageButtonClass, setAgeButtonClass] = useState("untouched")
    const [nameValid, setNameValid] = useState("❓")
    const [ageValid, setAgeValid] = useState("❓")

    const [img, setImg] = useState(null)
    const [name, setName] = useState("")
    const [age, setAge] = useState(0)
    const [imgTouched, setImgTouched] = useState(false)
    const [nameTouched, setNameTouched] = useState(false)
    const [ageTouched, setAgeTouched] = useState(false)

    const stopSubmit = event => {
        event.preventDefault();
    }

    useEffect(() => {
        name.length > 2 ? setNameValid("✔️") : setNameValid("❌")   
    }, [nameTouched])

    useEffect(() => {
        age.length > 2 ? setAgeValid("✔️") : setAgeValid("❌")
    }, [ageTouched])

    return (
        <MainSection>
            <h2 className="block">"Ah... another specimen!" Aurelius rubs his paws...</h2>

            <StyledArticle>
                <form onSubmit={stopSubmit}>
                    <button onClick={() => uploadHamster}>Upload image</button>

                    <article className="form">
                        <label>Hamster name</label>
                        <input type="text" className={nameButtonClass}
                            placeholder="Name (3-10 characters)"
                            onClick={() => setNameButtonClass("touched") /*, setNameTouched(true)*/}
                            onBlur={() => setNameButtonClass("untouched")}
                            >
                        </input>
                        <label>Hamster age</label>
                        <input type="number" className={ageButtonClass}
                            placeholder="Age (0-5)"
                            onFocus={() => setAgeButtonClass("touched") /*, setAgeTouched(true)*/ }
                            onBlur={() => setAgeButtonClass("untouched")}
                            >
                        </input>

                    </article>

                    <p>{nameValid}  Image must be added</p>
                    <p>{nameValid} Hamster name must be unique</p>
                    <p>{ageValid} Age must be a number</p>

                    <article className="form">
                        <button /*disabled={ageError || nameError || imageError}*/>Upload hamster</button>
                    </article>

                </form>
            </StyledArticle>
        </MainSection>
    )
}


export default AddHamster;
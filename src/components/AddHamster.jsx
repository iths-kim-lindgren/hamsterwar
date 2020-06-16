import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import MainSection from './MainSection';
import { uploadHamster, getLivingHamsters } from './fetchData';
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

    const [hamsterList, setHamsterList] = useState(null)
    const [nameButtonClass, setNameButtonClass] = useState("untouched")
    const [ageButtonClass, setAgeButtonClass] = useState("untouched")
    const [imgValid, setImgValid] = useState("❓")
    const [nameValid, setNameValid] = useState("❓")
    const [nameUnique, setNameUnique] = useState("❓")
    const [ageValid, setAgeValid] = useState("❓")

    const [img, setImg] = useState(null)
    const [name, setName] = useState("")
    const [age, setAge] = useState(0)
    const [imgTouched, setImgTouched] = useState(false)
    const [nameTouched, setNameTouched] = useState(false)
    const [ageTouched, setAgeTouched] = useState(false)

    useEffect(() => {
        async function getHamsters(){
            setHamsterList(await getLivingHamsters())
        }
        getHamsters()
    }, [])


    const stopSubmit = event => {
        event.preventDefault();
    }

    function setNameChanges() {
        setNameButtonClass("touched")
        setNameTouched(true)
    }

    async function checkNameValidity(value) {
        // console.log("Value:", value, "jag uppdateras")
        setName(value)
        // console.log("Name:", name, "jag släpar efter")

        value.length > 1 && value.length < 11 ? setNameValid("✔️") : setNameValid("❌")

        // hämta en lista på alla hamsternamn, filtrera, kolla om någon matchar, sätt NameUnique
        console.log(hamsterList)
        console.log(name)
        const filteredList = hamsterList.filter(hamster => hamster.name === value)
        console.log(filteredList[0])
        !filteredList[0] ? setNameUnique("✔️") : setNameUnique("❌")
    }

    function setAgeChanges() {
        setAgeButtonClass("touched")
        setAgeTouched(true)
    }
    function checkAgeValidity(value) {
        setAge(value)
        value !== "" && value > -1 && value < 6 ? setAgeValid("✔️") : setAgeValid("❌")
    }

    return (
        <MainSection>
            <h2 className="block">"Ah... another specimen!" Aurelius rubs his paws...</h2>

            <StyledArticle>
                <form onSubmit={stopSubmit}>
                    <button onClick={() => uploadHamster}>Upload image</button>

                    <article className="form">
                        <label>Hamster name</label>
                        <input type="text" className={nameButtonClass}
                            placeholder="Name (2-10 characters)"
                            onFocus={() => setNameChanges()}
                            onChange={e => checkNameValidity(e.target.value)}
                            // value={name}
                            onBlur={(!name) ? () => setNameButtonClass("untouched") : null}
                        >
                        </input>
                        <label>Hamster age</label>
                        <input type="number" className={ageButtonClass}
                            placeholder="Age (0-5)"
                            onFocus={() => setAgeChanges()}
                            onChange={e => checkAgeValidity(e.target.value)}
                            onBlur={(!age) ? () => setAgeButtonClass("untouched") : null}
                        >
                        </input>

                    </article>

                    <p>{imgValid}  Image must be added</p>
                    <p>{nameValid} Hamster name must be between 2 and 10 characters</p>
                    <p>{nameUnique} Hamster name must be unique</p>
                    <p>{ageValid} Hamster age must be between 0 and 5</p>

                    <article className="form">
                        <button disabled={imgValid !== "✔️" || nameValid !== "✔️" || 
                            nameUnique !== "✔️" || ageValid !== "✔️"}>Upload hamster</button>
                    </article>

                </form>
            </StyledArticle>
        </MainSection>
    )
}


export default AddHamster;
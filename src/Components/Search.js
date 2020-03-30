//Only Vic changes this code

import React from "react"
import styled from "styled-components"


const SearchForm = styled.form`
    display: flex;
    justify-content: space-between;
    align-items: flex-end;

`
const SearchDiv = styled.div`
    display: flex;
    flex-direction: column;
    width: 30%;

`
const LetsGo = styled.button`
    color: gray;
    background: gold;
    border-radius: 10px;
    height: 30px;
    width: 100px;
    border: 1px solid gold;
    font-size: 16px;
`

function Search (props) {

    const {location, setLocation} = props

    //Set up the drop-downs
    const cities = {
        "Los-Angeles-CA": "Los Angeles, CA",
        "Las-Vegas-NV": "Las Vegas, NV"
    }

    const cuisines = ["Mexican", "Italian", "Japanese"]

    //on change function

    const updateCity = (event) => {
        
    }


    const array = [1,2,3]
    return(
        <>
        <p>This is the search component</p>
        <SearchForm>
            <SearchDiv> 
                <label htmlFor = "city">City</label>
                <select  id = "city" name = "city" placeholder = "Las Vegas, NV">
                    {Object.keys(cities).map((key) => { {/*add all the cities from our hard coded object*/}
                        return (<option value = {key}>{cities[key]}</option>
                    )})}
                </select>
            </SearchDiv>
            <SearchDiv>
                <label htmlFor = "cuisine">Cuisine</label>
                <select id = "cuisine" name = "cuisine" placeholder = "Italian">
                    {cuisines.map((item) => { {/*add all the cuisines from our hard coded array*/}
                        return (<option value = {item}>{item}</option>)
                    })}
                </select>
            </SearchDiv>
            <SearchDiv>
                    <LetsGo>Let's Go!</LetsGo>
            </SearchDiv>
        </SearchForm>
        </>
    )
}

export default Search
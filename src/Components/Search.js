//Only Vic changes this code

import React, {useEffect, useState} from "react"
import {Link} from "react-router-dom"
import styled from "styled-components"
import axios from "axios"



const SearchForm = styled.form`
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    padding: 2% 0;

    .input {
        width: 35%;
    }


`
const SearchDiv = styled.div`
    display: flex;
    flex-direction: column;

    label {
        padding-bottom: 2%;
    }

`
const LetsGo = styled.button`
    
    background: gold;
    border-radius: 10px;
    height: 2.4rem;
    width: 120px;
    border: 1px solid gold;
    font-size: 1.2rem;
`


const CustomSelect = styled.div`
    width: 100%;

    select {
        width: 100%;
        height: 2.4rem;
        font-size: 1rem;
        background: white;
        border: 1px solid #36383b;
    }
`

function Search (props) {

    const {location, setLocation, cuisineID, setCuisineID, zSearchResults, setZSearchResults} = props

    //Set up the drop-downs
    const cities = {
        281: "Los Angeles, CA",
        282: "Las Vegas, NV"
    }

    const [cuisines, setCuisines] = useState([])

    const header = { //header for the axios request
        method: 'GET',
        headers: {
            'user-key': '392a6e06ccc0d5d88a95d732a6bfc55d',
            'Content-type': 'application.json',
        },
        credentials: 'same-origin'
    }

    //update the location when the city is updated & cuisine

    const updateCity = (event) => {
      setLocation(event.target.value);  
    }

    const updateCuisine = (event) => {
        setCuisineID(event.target.value)
    }

    //When the city is updated, do a get request and get a list of all cuisines

    useEffect(() => {
        axios.get(`https://developers.zomato.com/api/v2.1/cuisines?city_id=${location}`, header)
        .then((response) => {
            setCuisines(response.data.cuisines)
        })
    },[location])

    //When the cuisine is chosen, query for the search **NOT EFFICIENT, DON'T CARE FOR NOW, WE GET 1000 CALLS A DAY**

    useEffect(() => {
        axios.get(`https://developers.zomato.com/api/v2.1/search?entity_id=${location}&entity_type=city&cuisines=${cuisineID}&sort=rating&order=asc`, header)
        .then((response) => {
            // setZSearchResults(response.data.restaurants)
            
            const arrRestaurants = response.data.restaurants.filter((state) => {
                
                return state.restaurant.all_reviews_count > 1;
            })
            console.log(arrRestaurants);
            setZSearchResults(arrRestaurants);
                
            


        })
    },[cuisineID])

    const array = [1,2,3]
    return(
        <>
        <SearchForm id = "search">
            <SearchDiv className = "input"> 
                <label htmlFor = "city">City</label>
                <CustomSelect>
                    <select  onChange = {updateCity} id = "city" name = "city" placeholder = "Las Vegas, NV">
                        {Object.keys(cities).map((key) => { {/*add all the cities from our hard coded object*/}
                            return (<option value = {key}>{cities[key]}</option>
                        )})}
                    </select>
                </CustomSelect>
            </SearchDiv>
            <SearchDiv className = "input">
                <label htmlFor = "cuisine">Cuisine</label>
                <CustomSelect>
                    <select onChange = {updateCuisine} id = "cuisine" name = "cuisine" placeholder = "Italian">
                        {cuisines.map((item) => {
                            return (<option value = {item.cuisine.cuisine_id}>{item.cuisine.cuisine_name}</option>)
                            
                        })}
                    </select>
                </CustomSelect>
            </SearchDiv>
            <SearchDiv>
                <Link to = {`search/${location}`}>
                    <LetsGo>Let's Go!</LetsGo>
                </Link> 
            </SearchDiv>
        </SearchForm>
        </>
    )
}

export default Search
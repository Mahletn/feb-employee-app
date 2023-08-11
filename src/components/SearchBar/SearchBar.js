import React from 'react'
import styled from "styled-components";
import { useState } from 'react';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const StyledInput= styled.input`
width: 90%;
padding: 10px 5px;
border: none;
border: 1px solid #333;
border-radius: 5px;
margin: 4px;

`;

const  SearchBar = ({employeesData, setEmployeesData}) =>{
  const [searchItem, setSearchItem]= useState("");

  const handleSearchItem =(event)=> {
   
    setSearchItem(event.target.value);
  };

  const handeleSearch= () =>{
    const searchResult = employeesData.filter((item) => {
      return item.name.toLowerCase().includes(searchItem.toLowerCase) 
      // return item.ocopation.toLowerCase().includes(searchItem.toLowerCase)
    });

  }
  return(
    <>
    <StyledInput type='text' name='' id = '' onChange={handleSearchItem}/>
    <FontAwesomeIcon icon = {faSearch} size='lg'/>
    {/* <button onClick={handeleSearch}>Search</button> */}
    </>
  )
}

export default SearchBar
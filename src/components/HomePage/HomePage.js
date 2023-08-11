import React from "react";
import Employee from "../Employee/Employee";
import EmployeeList from "../EmployeeList/EmployeeList";
import {styled} from "styled-components";
import SearchBar from "../SearchBar/SearchBar";

const StyledHomePage = styled.div `
      background-color: white;
      width: 50%;
      height: 70%;
      border: 1px solid orange;
`;

export function HomePage({ employeesData, setEmployeesData }) {
//   console.log("employee", employeesData);
//   const handelEployeeData = () => {
//     setEmployeesData(employeeData);
//   };
  return (
    <StyledHomePage>
      <SearchBar employeesData = {employeesData} setEmployeesData={setEmployeesData}/>
      <EmployeeList
        employeesData={employeesData}
        setEmployeesData={setEmployeesData}/>
      {/* <button onClick={handelEployeeData}> Update the eployee data </button> */}
    </StyledHomePage>
  );
}
export default HomePage;

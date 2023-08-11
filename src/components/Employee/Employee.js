import React from "react";
import "./Employee.css";
import HomePage from "../HomePage/HomePage";
import EmployeeDetail from "../EmployeeDetail/EmployeeDetail";
import Container from "../contaner/Container";
import AddEmployee from "../AddEployee/AddEmployee";


function Employee({ employeesData, setEmployeesData }) {
  return (
    <div>
      
    <Container>
      <HomePage
        employeesData={employeesData}
        setEmployeesData={setEmployeesData}/>
      <EmployeeDetail />
    </Container>
    <AddEmployee/>
    </div>
  );
}
export default Employee;

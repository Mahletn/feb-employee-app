import React from "react";
import "./Employee.css";
import HomePage from "../HomePage/HomePage";
import EmployeeDetail from "../EmployeeDetail/EmployeeDetail";
import Container from "../contaner/Container";

function Employee({ employeesData, setEmployeesData }) {
//   console.log("employeeData", employeesData);
  return (
    <div>
      
    <Container>
      <HomePage
        employeesData={employeesData}
        setEmployeesData={setEmployeesData}/>
      <EmployeeDetail />
    </Container>
    </div>
  );
}
export default Employee;

import { useState,useEffect } from "react";
import "./App.css";
import Employee from "./components/Employee/Employee";


function App() {
  const [employeesData, setEmployeesData] = useState([]);

  const requestUrl = ("https://calm-everglades-09552-105a0b4519dc.herokuapp.com/api/employee/employees");  
  const getEmployessData= async ()=>{
    const response = await fetch(requestUrl);
    const data = await response.json()
    setEmployeesData(data);
  };

  useEffect(() => {
    getEmployessData();
  }, []);
  return (
    <div className="App">
  
        <Employee
          employeesData={employeesData}
          setEmployeesData={setEmployeesData} />
    </div>
  );
}

export default App;

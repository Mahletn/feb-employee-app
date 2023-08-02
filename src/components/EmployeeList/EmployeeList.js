import React from 'react';
import {style, styled} from "styled-components";
import EmployeeListItem from '../EmployeeListItem/EmployeeListItem';

const StyledEmployeeList = styled.div`
display: flex;
flex-direction: column;
gap: 5px;
`;

function EmployeeList({employeesData}) {
  return (
    <StyledEmployeeList>
        <EmployeeListItem employeesData={employeesData}/>
    </StyledEmployeeList>
  )
}

export default EmployeeList;
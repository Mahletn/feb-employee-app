import React from 'react'
import {styled} from "styled-components";

const StyledEmployeeDetail = styled.div`
height: 70%;
width: 50%;
border: 1px solid brown;
`;

function EmployeeDetail() {
  return (
    <StyledEmployeeDetail>EmployeeDetail</StyledEmployeeDetail>
  )
}

export default EmployeeDetail;
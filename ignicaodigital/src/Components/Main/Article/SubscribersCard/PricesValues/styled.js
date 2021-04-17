import styled from "styled-components";

export const CentralStyle = styled.div`
  font-family: "Inter", sans-serif;
  margin: 1rem;
  border-bottom: 0.063rem solid #c4c4c4;
  padding-bottom: 1.875rem;
`;

export const RadioGrid = styled.div`
  display: grid;
  grid-template-rows: 1fr 1fr 1fr 1fr 1fr;
  grid-template-columns: 1fr 9fr;
  font-size: 0.813rem;
  padding-bottom: 0.625rem;
`;


export const TitleStyle = styled.div`
display: flex;
flex-direction: row;

justify-content: space-between;
font-family: "Inter", sans-serif;
`


export const Checkbox1 = styled.label`
margin-bottom: 0.625rem;

  position: relative;
  .checkmark1::before {
    display: none;
  }
  .checkmark1 {
    display: block;
    width: 1rem;
    height: 1rem;
    border: 0.063rem solid #999999;
    box-sizing: border-box;
    border-radius: 50%;
    cursor: pointer;
  }
  input:checked ~ .checkmark1 {
    background: #969696;
  }
`;

export const Checkbox2 = styled.label`
margin-bottom: 0.625rem;

  position: relative;
  .checkmark2::before {
    display: none;
  }
  .checkmark2 {
    display: block;
    width: 1rem;
    height: 1rem;
    border: 0.063rem solid #999999;
    box-sizing: border-box;
    border-radius: 50%;
    cursor: pointer;
  }
  input:checked ~ .checkmark2 {
    background: #969696;
  }
`;


export const Checkbox3 = styled.label`
margin-bottom: 0.625rem;

  position: relative;
  .checkmark3::before {
    display: none;
  }
  .checkmark3 {
    display: block;
    width: 1rem;
    height: 1rem;
    border: 0.063rem solid #999999;
    box-sizing: border-box;
    border-radius: 50%;
    cursor: pointer;
  }
  input:checked ~ .checkmark3 {
    background: #969696;
  }
`;

export const Checkbox4 = styled.label`
margin-bottom: 0.625rem;

  position: relative;
  .checkmark4::before {
    display: none;
  }
  .checkmark4 {
    display: block;
    width: 1rem;
    height: 1rem;
    border: 0.063rem solid #999999;
    box-sizing: border-box;
    border-radius: 50%;
    cursor: pointer;
  }
  input:checked ~ .checkmark4 {
    background: #969696;
  }
`;

export const Checkbox5 = styled.label`
margin-bottom: 10px;

  position: relative;
  .checkmark5::before {
    display: none;
  }
  .checkmark5 {
    display: block;
    width: 1rem;
    height: 1rem;
    border: 0.063rem solid #999999;
    box-sizing: border-box;
    border-radius: 50%;
    cursor: pointer;
  }
  input:checked ~ .checkmark5 {
    background: #969696;
  }
`;
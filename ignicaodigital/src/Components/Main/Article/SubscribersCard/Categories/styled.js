import styled from "styled-components";

export const CentralStyle = styled.div`
  font-family: "Inter", sans-serif;
  margin: 3px;
  border-bottom: 1px solid #c4c4c4;
  padding-bottom: 30px;
`;

export const CategoryGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 8fr 1fr;
  width: 260px;
  font-size: 13px;
`;

export const Justify = styled.div`
  text-align: right;
  padding: 0.3rem;
`;

export const CheckboxA = styled.label`
  position: relative;
  .checkmark1::before {
    display: none;
  }
  .checkmarkA {
    display: block;
    width: 1rem;
    height: 1rem;
    border: 1px solid #999999;
    box-sizing: border-box;
    border-radius: 3px;
    cursor: pointer;
  }
  input:checked ~ .checkmarkA {
    background: #969696;
  }

  .checkmark::after {
    content: "";
    position: absolute;
    top: 40%;
    left: 50%;
    transform: translate(-50%, -50%) rotateZ(40deg);
    width: 0.25rem;
    height: 0.55rem;
    border-right: 2px solid #fff;
    border-bottom: 2px solid #fff;
  }
`;

export const CheckboxB = styled.label`
  position: relative;
  .checkmarkB::before {
    display: none;
  }
  .checkmarkB {
    display: block;
    width: 1rem;
    height: 1rem;
    border: 1px solid #999999;
    box-sizing: border-box;
    border-radius: 3px;
    cursor: pointer;
  }
  input:checked ~ .checkmarkB {
    background: #969696;
  }
`;

export const CheckboxC = styled.label`
  position: relative;
  .checkmarkC::before {
    display: none;
  }
  .checkmarkC {
    display: block;
    width: 1rem;
    height: 1rem;
    border: 1px solid #999999;
    box-sizing: border-box;
    border-radius: 3px;
    cursor: pointer;
  }
  input:checked ~ .checkmarkC {
    background: #969696;
  }
`;

export const CheckboxD = styled.label`
  position: relative;
  .checkmarkD::before {
    display: none;
  }
  .checkmarkD {
    display: block;
    width: 1rem;
    height: 1rem;
    border: 1px solid #999999;
    box-sizing: border-box;
    border-radius: 3px;
    cursor: pointer;
  }
  input:checked ~ .checkmarkD {
    background: #969696;
  }
`;

export const CheckboxE = styled.label`
  position: relative;
  .checkmarkE::before {
    display: none;
  }
  .checkmarkE {
    display: block;
    width: 1rem;
    height: 1rem;
    border: 0.063rem solid #999999;
    box-sizing: border-box;
    border-radius: 0.188rem;
    cursor: pointer;
  }
  input:checked ~ .checkmarkE {
    background: #969696;
  }
`;

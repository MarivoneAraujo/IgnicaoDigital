import styled from "styled-components";

export const Card = styled.div`
  background-color: #ffff;
  width: 290px;
  height: 1032px;
  margin-left: 20px;
  margin-top: 25px;
  box-shadow: 0.5px 0.5px 5px 0.5px lightgray;
  border-radius: 0.3rem 0.3rem;
`;

export const CategoriesStyle = styled.div`
  font-family: "Inter", sans-serif;
  margin: 16px;
  padding-bottom: 30px;
`;

export const StarGridStyle = styled.div`
  font-family: "Inter", sans-serif;
  margin: 5px;
  width: 280px;
  font-size: 13px;
`;

export const Button = styled.button`
  border: none;
  margin-top: 20px;
  border-radius: 10px;
  width: 230px;
  height: 40px;
  background-color: #696969;
  color: #ffff;
  font-family: "Inter", sans-serif;
  box-shadow: 0.5px 0.5px 5px 0.5px lightgray;
  outline: none;
  :hover {
    cursor: pointer;
    left: 1px;
    transform: scale(1.03);
  }
`;

export const Justify = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

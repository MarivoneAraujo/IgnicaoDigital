import styled from "styled-components";

export const Card = styled.div`
  background-color: #ffff;
  width: 18.125rem;
  height: 64.5rem;
  margin-left: 1.25rem;
  margin-top: 1.563rem;
  box-shadow: 0.031rem 0.031rem 0.313rem 0.031rem lightgray;
  border-radius: 0.3rem 0.3rem;
`;

export const CategoriesStyle = styled.div`
  font-family: "Inter", sans-serif;
  margin: 1rem;
  padding-bottom: 1.875rem;
`;

export const StarGridStyle = styled.div`
  font-family: "Inter", sans-serif;
  margin: 0.313rem;
  width: 280px;
  font-size: 0.813rem;
`;

export const Button = styled.button`
  border: none;
  margin-top: 1.25rem;
  border-radius: 0.625rem;
  width: 14.375rem;
  height: 2.5rem;
  background-color: #696969;
  color: #ffff;
  font-family: "Inter", sans-serif;
  box-shadow: 0.031rem 0.031rem 0.313rem 0.031rem lightgray;
  outline: none;
  :hover {
    cursor: pointer;
    left: 16rem;
    transform: scale(1.03);
  }
`;

export const Justify = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

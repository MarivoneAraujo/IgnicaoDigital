import styled from "styled-components";

export const Central = styled.div`
  display: flex;
  justify-content: center;
`;
export const NavBar = styled.div`
  width: 58.75rem;
  height: 2.5rem;
  margin-top: 1.7rem;
  background-color: #ffffff;
  box-shadow: 0.031rem 0.031rem 0.031rem 0.031rem lightgray;
  display: grid;
  border-radius: 0.3rem 0.3rem;
  grid-template-columns: 0.05fr 0.05fr 0.05fr 0.05fr 0.05fr 1fr 0.05fr 0.05fr 0.1fr 0.05fr;
  align-items: center;
  padding-left: 0.7rem;
  padding-right: 0.7rem;
`;

export const NavBarIcons = styled.div`
  :hover {
    cursor: pointer;
    color: #ff7b1b;
    transition: 0.2s;
  }
`;

export const ClientName = styled.div`
  font-family: "Inter", sans-serif;
  font-size: 0.75rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.063rem;
  letter-spacing: 0;
  text-align: right;
`;

export const VIP = styled.div`
  font-family: "Inter", sans-serif;
  font-size: 0.563rem;
  font-style: normal;
  font-weight: 300;
  line-height: 0.813rem;
  letter-spacing: 0;
  text-align: right;
  color: #2c2c2c;
`;

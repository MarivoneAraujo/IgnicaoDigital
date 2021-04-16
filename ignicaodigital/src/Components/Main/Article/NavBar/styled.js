import styled from "styled-components";

export const Central = styled.div`
  display: flex;
  justify-content: center;
`;
export const NavBar = styled.div`
  /* border: 1px solid black; */
  width: 940px;
  height: 40px;
  margin-top: 1.7rem;
  background-color: #ffffff;
  box-shadow: 0.5px 0.5px 5px 0.5px lightgray;
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
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 17px;
  letter-spacing: 0px;
  text-align: right;
`;

export const VIP = styled.div`
  font-family: "Inter", sans-serif;
  font-size: 9px;
  font-style: normal;
  font-weight: 300;
  line-height: 13px;
  letter-spacing: 0px;
  text-align: right;
  color: #2c2c2c;
`;

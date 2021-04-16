import styled from "styled-components";

export const Rectangle = styled.div`
  background-color: white;
  width: 16rem;
  height: 90rem;
  box-shadow: 0.5px 0.5px 5px 0.5px lightgray;
  z-index: 1;
`;

export const MainGrid = styled.div`
  display: grid;
  grid-template-rows: 1fr 1fr 5fr;
`;

export const LogoGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
`;
export const IMGBrand = styled.img`
  width: 3.6rem;
  height: 3.6rem;
  margin-top: 1.813rem;
  margin-left: 2.8rem;
`;

export const Logo = styled.p`
  font-family: "Inter", sans-serif;
  color: #ff7b1b;
  font-weight: bold;
`;

export const AreaSelect = styled.select`
  border: none;
  background-color: #ececec;
  width: 13rem;
  height: 2rem;
  margin-top: 1rem;
  margin-left: 2rem;
  padding-left: 2.5rem;
  border-radius: 0.3rem 0.3rem;
  font-family: "Inter", sans-serif;
`;
export const Apps = styled.div`
  font-family: "Inter", sans-serif;
  font-size: 0.813rem;
  margin-left: 2.313rem;
  margin-top: 2rem;
`;

export const AppsIcons = styled.div`
  padding-top: 0.625rem;
  :hover {
    cursor: pointer;
    color: #ff7b1b;
    transition: 0.2s;
  }
`;

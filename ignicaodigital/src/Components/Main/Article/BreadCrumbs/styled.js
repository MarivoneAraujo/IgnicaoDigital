import styled from "styled-components";

export const ResultsBar = styled.div`
  font-family: "Inter", sans-serif;
  display: grid;
  margin-top: 20px;
  margin-left: 20px;
  grid-template-columns: 0.4fr 0.05fr 0.05fr 0.05fr 2fr 0.1fr;
  align-items: end;
`;

export const SettingsIconWrapper = styled.div`
  background-color: #787878;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  margin-right: 20px;
  :hover {
    cursor: pointer;
    left: 9px;
    transform: scale(1.1);
  }
`;

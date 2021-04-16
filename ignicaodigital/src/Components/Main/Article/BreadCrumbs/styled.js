import styled from "styled-components";

export const ResultsBar = styled.div`
  font-family: "Inter", sans-serif;
  display: grid;
  margin-top: 1.25rem;
  margin-left: 1.25rem;
  grid-template-columns: 0.4fr 0.05fr 0.05fr 0.05fr 2fr 0.1fr;
  align-items: end;
`;

export const SettingsIconWrapper = styled.div`
  background-color: #787878;
  width: 1.875rem;
  height: 1.875rem;
  border-radius: 50%;
  margin-right: 1.25rem;
  :hover {
    cursor: pointer;
    left: 0.563rem;
    transform: scale(1.1);
  }
`;

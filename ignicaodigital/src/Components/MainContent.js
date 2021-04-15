import React from "react";
import styled from "styled-components";
import Navbar from "./Navbar";
import { FiHome } from "react-icons/fi";
import { CgChevronDoubleRight } from "react-icons/cg";
import { FiSettings } from "react-icons/fi";
import { FiGrid } from "react-icons/fi";
import { BsList } from "react-icons/bs";
import Card from "../Components/Card";
import { FiSearch } from "react-icons/fi";

const Background = styled.div`
  background-color: #f9f9f9;
`;

const ResultsBar = styled.div`
  font-family: "Inter", sans-serif;
  display: grid;
  margin-top: 20px;
  margin-left: 20px;
  grid-template-columns: 0.4fr 0.05fr 0.05fr 0.05fr 2fr 0.1fr;
  align-items: end;
`;

const SettingsIconWrapper = styled.div`
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

const FilterResultsBar = styled.div`
  font-family: "Inter", sans-serif;
  display: grid;
  margin-top: 30px;
  margin-left: 20px;
  grid-template-columns: 1fr 1.35fr 0.35fr 0.1fr 0.1fr;
  align-items: end;
`;

const ListingSelect = styled.select`
  font-family: "Inter", sans-serif;
  box-shadow: 0.5px 0.5px 5px 0.5px lightgray;
  border-radius: 0.3rem 0.3rem;
  border: none;
  padding-left: 0.5rem;
  height: 30px;
  width: 100px;
  left: 1645px;
  top: 183px;
`;

const MainInfoGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
`;
const SubscribersCard = styled.div`
  background-color: #ffff;
  width: 300px;
  height: 1452px;
  margin-left: 20px;
  margin-top: 25px;
  box-shadow: 0.5px 0.5px 5px 0.5px lightgray;
  border-radius: 0.3rem 0.3rem;
`;

const GridIconWrapper = styled.div`
  background-color: #ffff;
  box-shadow: 0.5px 0.5px 5px 0.5px lightgray;
  width: 30px;
  height: 30px;
  border-radius: 10%;
  margin-right: 10px;
  :hover {
    cursor: pointer;
    left: 9px;
    transform: scale(1.1);
  }
`;
const ListIconWrapper = styled.div`
  background-color: #ffff;
  box-shadow: 0.5px 0.5px 5px 0.5px lightgray;
  width: 30px;
  height: 30px;
  border-radius: 10%;
  margin-right: 20px;
  :hover {
    cursor: pointer;
    left: 9px;
    transform: scale(1.1);
  }
`;

const StyledInput = styled.input`
  width: 620px;
  height: 40px;
  margin-top: 1.7rem;
  background-color: #ffffff;
  box-shadow: 0.5px 0.5px 5px 0.5px lightgray;
  border: none;
  outline: none;
  border-radius: 0.3rem 0.3rem;
  padding-left: 0.7rem;
  margin-right: 20px;
  background-image: url("https://www.thinkafrica.fi/wp-content/uploads/2019/04/search-icon.png");
  background-position: 99%;
  background-repeat: no-repeat;
  background-size: 4%;
`;

function MainContent() {
  return (
    <Background>
      <Navbar />

      <ResultsBar>
        <div
          style={{
            fontSize: "1.2rem",
          }}
        >
          Resultados
        </div>
        <div>|</div>
        <FiHome
          style={{
            marginBottom: "0.2rem",
          }}
        />
        <CgChevronDoubleRight
          style={{
            marginBottom: "0.1rem",
          }}
        />
        <div>Cursos</div>

        <SettingsIconWrapper>
          <FiSettings
            style={{
              margin: "0.45rem",
              color: "#FFFF",
            }}
          />
        </SettingsIconWrapper>
      </ResultsBar>

      <FilterResultsBar>
        <div
          style={{
            fontSize: "1rem",
          }}
        >
          Filtros
        </div>
        <div>200 resultados encontrados</div>
        <div>
          <ListingSelect name="Listagem">
            <option value="Listagem1">Listagem</option>
            <option value="Listagem2">Listagem2</option>
            <option value="Listagem3">Listagem3</option>
          </ListingSelect>
        </div>

        <GridIconWrapper>
          <FiGrid
            style={{
              margin: "0.45rem",
            }}
          />
        </GridIconWrapper>
        <ListIconWrapper>
          <BsList
            style={{
              margin: "0.45rem",
            }}
          />
        </ListIconWrapper>
      </FilterResultsBar>

      <MainInfoGrid>
        <SubscribersCard>
          <div>
            <p>Preços</p>

            <div>
              <input type="checkbox" id="10" /> R$10
            </div>
            <div>

              <input type="checkbox" id="10" /> R$10-R$100
            </div>
            <div>
              <input type="checkbox" id="10" /> R$100-R$500
            </div>
            <div>
              <input type="checkbox" id="10" /> R$500
            </div>
            <div>
              <input type="checkbox" id="10" /> Todos
            </div>
          </div>

          <input type="range" min="10" max="500" />
        </SubscribersCard>
        <div>
          <StyledInput type="text" placeholder="Busca" />

          <Card />
        </div>
      </MainInfoGrid>
    </Background>
  );
}

export default MainContent;

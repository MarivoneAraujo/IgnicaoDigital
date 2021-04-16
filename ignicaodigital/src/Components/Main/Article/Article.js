import React, { useState } from "react";
import styled from "styled-components";
import Navbar from "../Article/NavBar/Navbar";
import { FiGrid } from "react-icons/fi";
import { BsList } from "react-icons/bs";
import ArticleCardSection from "./ArticleCardSection/ArticleCardSection";
import BreadCrumbs from "./BreadCrumbs/BreadCrumbs";
import SubscribersCard from "../Article/SubscribersCard/SubscribersCard";
import Pagination from "./Pagination/Pagination";

const Background = styled.div`
  background-color: #f9f9f9;
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
  width: 636px;
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
  const [textInput, setTextInput] = useState("");

  const handleTextInput = (e) => {
    setTextInput(e.target.value);
  };

    const allFeedCards = (card) => {
    let cards = [];
    for (let i = 0; i < card; i++) {
      cards.push(<ArticleCardSection />);
    }
    return cards;
  };
  const limit = 5
  
  const cardsList = allFeedCards(limit);
  
  
  // const filteredCards = cards.filter(i => i.name.includes(textInput))

  return (
    <Background>
      <Navbar />
      <BreadCrumbs />
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
        <SubscribersCard />

        <div>
          <StyledInput
            type="text"
            placeholder="Busca"
            onChange={handleTextInput}
            value={textInput}
          />

          {cardsList.map((card) => {
            return <ArticleCardSection />;
          })}
        </div>
      </MainInfoGrid>

      <Pagination />
    </Background>
  );
}

export default MainContent;

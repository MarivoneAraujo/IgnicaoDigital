import React, { useState } from "react";
import Navbar from "../Article/NavBar/Navbar";
import { FiGrid } from "react-icons/fi";
import { BsList } from "react-icons/bs";
import ArticleCardSection from "./ArticleCardSection/ArticleCardSection";
import BreadCrumbs from "./BreadCrumbs/BreadCrumbs";
import SubscribersCard from "../Article/SubscribersCard/SubscribersCard";
import Pagination from "./Pagination/Pagination";
import {
  Background,
  FilterResultsBar,
  ListingSelect,
  MainInfoGrid,
  GridIconWrapper,
  ListIconWrapper,
  StyledInput,
} from "./styled";

function MainContent() {
  const list = [
    {
      title: "1 Fórmula de Lançamento",
      author: "Érico Rocha",
      text:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    },

    {
      title: "2 Fórmula de Lançamento",
      author: "Érico Rocha",
      text:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    },

    {
      title: "3 Fórmula de Lançamento",
      author: "Érico Rocha",
      text:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    },

    {
      title: "4 Fórmula de Lançamento",
      author: "Érico Rocha",
      text:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    },

    {
      title: "5 Fórmula de Lançamento",
      author: "Érico Rocha",
      text:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    },
  ];

  const [textInput, setTextInput] = useState("");

  const handleTextInput = (e) => {
    setTextInput(e.target.value);
  };


  const filteredCards = list.filter((a) => {
    const title = a.title;
    return title.indexOf(textInput.toLowerCase()) > -1;
  });

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
        <div>{filteredCards.length} resultados encontrados</div>
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

          {filteredCards.map((cards) => {
            return (
              <ArticleCardSection
                title={cards.title}
                author={cards.author}
                text={cards.text}
              />
            );
          })}
        </div>
      </MainInfoGrid>

      <Pagination />
    </Background>
  );
}

export default MainContent;

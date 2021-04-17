import React, { useState } from "react";
import Navbar from "../Article/NavBar/Navbar";
import { FiGrid } from "react-icons/fi";
import { BsList } from "react-icons/bs";
import ArticleCardSection from "./ArticleCardSection/ArticleCardSection";
import BreadCrumbs from "./BreadCrumbs/BreadCrumbs";
import SubscribersCard from "../Article/SubscribersCard/SubscribersCard";
import ReactPaginate from "react-paginate";
import {
  Background,
  FilterResultsBar,
  ListingSelect,
  MainInfoGrid,
  GridIconWrapper,
  ListIconWrapper,
  StyledInput,
} from "./styled";
import { lists } from "./List";
import Article from "../Article/Article.css";

function MainContent() {
  const [textInput, setTextInput] = useState("");

  const [list, setLists] = useState(lists.slice(0, 200));
  const [pageNumber, setPageNumber] = useState(0);

  const handleTextInput = (e) => {
    setTextInput(e.target.value);
  };

  const cardsPerPage = 5;
  const pagesVisited = pageNumber * cardsPerPage;

  const filteredCards = list.filter((a) => {
    const title = a.title;
    return title.indexOf(textInput.toLowerCase()) > -1;
  });

  const displayCards = filteredCards
    .slice(pagesVisited, pagesVisited + cardsPerPage)
    .map((c) => {
      return (
        <ArticleCardSection title={c.title} author={c.author} text={c.text} />
      );
    });

  const pageCount = Math.ceil(list.length / cardsPerPage);
  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

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

          {displayCards}
        </div>
      </MainInfoGrid>

      <ReactPaginate
        previousLabel={"Previous"}
        nextLabel={"Next"}
        pageCount={pageCount}
        onPageChange={changePage}
        containerClassName={"paginationBttns"}
        previousLinkClassName={"previousBttn"}
        nextLinkClassName={"nextBttn"}
        disabledClassName={"paginationDisabled"}
        activeClassName={"paginationActive"}
      />
    </Background>
  );
}

export default MainContent;

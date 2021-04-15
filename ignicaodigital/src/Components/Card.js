import React from "react";
import styled from "styled-components";
import noimage from "../assets/noimage.png";

const StyledCard = styled.div`
  width: 620px;
  margin-top: 1.7rem;
  background-color: #ffffff;
  box-shadow: 0.5px 0.5px 5px 0.5px lightgray;
  border: none;
  border-radius: 0.3rem 0.3rem;
  padding-left: 0.7rem;
  margin-right: 20px;
  display: grid;
  grid-template-columns: 0.5fr 1fr 0.5fr;

`;
const NoImg = styled.img`
  width: 150px;
  height: 150px;
  margin-top: 10px;
  margin-bottom: 10px;
  margin-right: 10px;

`;

function Card() {
  return (
    <StyledCard>
      <NoImg src={noimage} />
      <div>TEXT</div>
      <div>SIDE</div>
    </StyledCard>
  );
}

export default Card;

import React from "react";
import noimage from "../../../../assets/noimage.png";
import { FaRegHeart } from "react-icons/fa";
import { FiShoppingBag } from "react-icons/fi";
import { AiOutlineStar } from "react-icons/ai";
import {
  StyledCard,
  NoImg,
  ContentStyle,
  PostDividerStyle,
  Rating,
  LoveButton,
  BuyButton,
} from "./styled";

function Card() {
  return (
    <StyledCard>
      <NoImg src={noimage} />

      <ContentStyle>
        <p>FÓRMULA DE LANÇAMENTO</p>
        <p>
          Por <strong>Érico Rocha</strong>
        </p>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </p>
      </ContentStyle>

      <PostDividerStyle>
        <div>
          <Rating>
            3.4 <AiOutlineStar />
          </Rating>
        </div>
        <div>
          <p
            style={{
              marginLeft: "40px",
              fontSize: "15px",
            }}
          >
            R$2500
          </p>
        </div>
        <div>
          <LoveButton>
            {" "}
            <FaRegHeart /> AMEI
          </LoveButton>
        </div>
        <div>
          <BuyButton>
            {" "}
            <FiShoppingBag /> COMPRAR
          </BuyButton>
        </div>
      </PostDividerStyle>
    </StyledCard>
  );
}

export default Card;

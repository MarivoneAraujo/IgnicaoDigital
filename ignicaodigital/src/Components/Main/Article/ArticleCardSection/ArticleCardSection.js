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

function Card(props) {
  return (
    <StyledCard>
      <NoImg src={noimage} />

      <ContentStyle>
        <p>{props.title}</p>
        <p>
          Por <strong>{props.author}</strong>
        </p>
        <p>{props.text}</p>
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

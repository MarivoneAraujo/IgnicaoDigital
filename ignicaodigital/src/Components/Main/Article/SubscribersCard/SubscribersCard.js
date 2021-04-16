import React from "react";
import StarRating from "./StarRating/StarRating";
import Categories from "./Categories/Categories";
import PricesValues from "./PricesValues/PricesValues";
import {
  Card,
  CategoriesStyle,
  StarGridStyle,
  Button,
  Justify,
} from "./styled";

function SubscribersCard() {
  return (
    <Card>
      <PricesValues />

      <CategoriesStyle>
        <Categories />
      </CategoriesStyle>

      <StarGridStyle>
        <StarRating />
      </StarGridStyle>

      <Justify>
        <Button>LIMPAR FILTROS</Button>
      </Justify>
    </Card>
  );
}

export default SubscribersCard;

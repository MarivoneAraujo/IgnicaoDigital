import React from "react";
import { CentralStyle, CategoryGrid, Justify } from "./styled";

function Categories() {
  return (
    <div>
      <CentralStyle>
        <p>
          <strong>Categorias</strong>
        </p>

        <CategoryGrid>
          <label>
            <input type="checkbox" id="User" name="Name" />
            Érico Rocha
          </label>

          <Justify>1920</Justify>

          <label>
            <input type="checkbox" id="User" name="Name" />
            Desafio 6 em 1
          </label>

          <Justify>1820</Justify>

          <label>
            <input type="checkbox" id="User" name="Name" />
            Fórmula de Lançamento
          </label>
          <Justify>462</Justify>
          <label>
            <input type="checkbox" id="User" name="Name" />
            KlickPages
          </label>
          <Justify>6556</Justify>
          <label>
            <input type="checkbox" id="User" name="Name" />
            Àudios
          </label>
          <Justify>120</Justify>
        </CategoryGrid>
      </CentralStyle>
    </div>
  );
}

export default Categories;

import React from "react";
import {
  CentralStyle,
  CategoryGrid,
  Justify,
  CheckboxA,
  CheckboxB,
  CheckboxC,
  CheckboxD,
  CheckboxE,
} from "./styled";

function Categories() {
  return (
    <div>
      <CentralStyle>
        <p>
          <strong>Categorias</strong>
        </p>

        <CategoryGrid>
          <CheckboxA>
            <input id="checkA" hidden type="checkbox" />
            <label for="checkA" className="checkmarkA"></label>
          </CheckboxA>

          <div>Érico Rocha</div>

          <Justify>1920</Justify>

          <CheckboxB>
            <input id="checkB" hidden type="checkbox" />
            <label for="checkB" className="checkmarkB"></label>
          </CheckboxB>

          <div>Desafio 6 em 7</div>

          <Justify>1820</Justify>

          <CheckboxC>
            <input id="checkC" hidden type="checkbox" />
            <label for="checkC" className="checkmarkC"></label>
          </CheckboxC>

          <div>Fórmula de Lançamento</div>

          <Justify>462</Justify>

          <CheckboxD>
            <input id="checkD" hidden type="checkbox" />
            <label for="checkD" className="checkmarkD"></label>
          </CheckboxD>

          <div>KlickPages</div>

          <Justify>6556</Justify>

          <CheckboxE>
            <input id="checkE" hidden type="checkbox" />
            <label for="checkE" className="checkmarkE"></label>
          </CheckboxE>

          <div>Áudios</div>

          <Justify>120</Justify>
        </CategoryGrid>
      </CentralStyle>
    </div>
  );
}

export default Categories;

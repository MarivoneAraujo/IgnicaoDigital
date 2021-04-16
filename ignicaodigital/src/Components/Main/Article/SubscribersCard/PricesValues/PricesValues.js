import React, { useState } from "react";
import Slider from "@material-ui/core/Slider";
import { CentralStyle, RadioGrid,  Justify, Checkbox1, Checkbox2, Checkbox3, Checkbox4, Checkbox5 } from "./styled";


function PricesAndValues() {
  const [value, setValue] = useState([0, 5000]);
  const [selectedValue, setSelectedValue] = useState("a");

  const handle = (event, newValue) => {
    setValue(newValue);
  };

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };

  return (
    <div>
      <CentralStyle>
        <p>
          <strong>Preços</strong>
        </p>

        <RadioGrid>
        <Checkbox1>
            <input id="check1" hidden type="checkbox" />
            <label for="check1" className="checkmark1"></label>
          </Checkbox1>

          <div>R$10</div>

          <Checkbox2>
            <input id="check2" hidden type="checkbox" />
            <label for="check2" className="checkmark2"></label>
          </Checkbox2>

          <div>R$10-R$100</div>

          <Checkbox3>
            <input id="check3" hidden type="checkbox" />
            <label for="check3" className="checkmark3"></label>
          </Checkbox3>

          <div>R$100-R$500</div>

          <Checkbox4>
            <input id="check4" hidden type="checkbox" />
            <label for="check4" className="checkmark4"></label>
          </Checkbox4>

          <div>R$500</div>


          <Checkbox5>
            <input id="check5" hidden type="checkbox" />
            <label for="check5" className="checkmark5"></label>
          </Checkbox5>

          <div>Todos</div>

        </RadioGrid>
      </CentralStyle>

      <CentralStyle>
        <p
          style={{
            fontFamily: "Inter",
          }}
        >
          <strong>Valores</strong>
        </p>
        <Slider
          value={value}
          // valueLabelDisplay="on"
          valueLabelDisplay="auto"
          onChange={handle}
          min={0}
          step={0.01}
          max={5000}
          style={{
            color: "#606060",
            width: "250px",
          }}
        />
      </CentralStyle>
    </div>
  );
}

export default PricesAndValues;

import React, { useState } from "react";
import Slider from "@material-ui/core/Slider";
import Radio from "@material-ui/core/Radio";
import { CentralStyle, RadioGrid } from "./styled";

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
          <label>
            <Radio
              checked={selectedValue === "a"}
              onChange={handleChange}
              value="a"
              color="default"
              size="small"
            />
            {"R$10"}
          </label>

          <label>
            {" "}
            <Radio
              checked={selectedValue === "b"}
              onChange={handleChange}
              value="b"
              color="default"
              size="small"
            />
            {"R$10-R$100"}
          </label>

          <label>
            <Radio
              checked={selectedValue === "c"}
              onChange={handleChange}
              value="c"
              color="default"
              size="small"
            />
            {"R$100-R$500"}
          </label>

          <label>
            <Radio
              checked={selectedValue === "d"}
              onChange={handleChange}
              value="d"
              color="default"
              size="small"
            />
            {"R$500"}
          </label>

          <label>
            <Radio
              checked={selectedValue === "e"}
              onChange={handleChange}
              value="e"
              color="default"
              size="small"
            />
            {"Todos"}
          </label>
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

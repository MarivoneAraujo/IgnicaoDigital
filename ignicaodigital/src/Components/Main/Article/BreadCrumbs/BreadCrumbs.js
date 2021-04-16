import React from "react";
import { FiHome } from "react-icons/fi";
import { CgChevronDoubleRight } from "react-icons/cg";
import { FiSettings } from "react-icons/fi";
import { ResultsBar, SettingsIconWrapper } from "./styled";

function BreadCrumbs() {
  return (
    <ResultsBar>
      <div
        style={{
          fontSize: "1.2rem",
        }}
      >
        Resultados
      </div>
      <div>|</div>
      <FiHome
        style={{
          marginBottom: "0.2rem",
        }}
      />
      <CgChevronDoubleRight
        style={{
          marginBottom: "0.1rem",
        }}
      />
      <div>Cursos</div>

      <SettingsIconWrapper>
        <FiSettings
          style={{
            margin: "0.45rem",
            color: "#FFFF",
          }}
        />
      </SettingsIconWrapper>
    </ResultsBar>
  );
}

export default BreadCrumbs;

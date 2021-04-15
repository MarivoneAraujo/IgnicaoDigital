import React from "react"
import styled from "styled-components"
import Aside from "./Aside"
import MainContent from "./MainContent"

const Grid = styled.div`
display: grid;
grid-template-columns: 1fr 4fr;
/* border: 1px solid black; */
`

function Main() {
  return (
    <Grid>
      <Aside />
      <MainContent />
  
    </Grid>
  );
}

export default Main;

import React from "react"
import Aside from "./Aside/Aside"
import Article from "../../Components/Main/Article/Article"
import {Grid} from "./styled.js"

function Main() {
  return (
    <Grid>
      <Aside />
      <Article />  
    </Grid>
  );
}

export default Main;

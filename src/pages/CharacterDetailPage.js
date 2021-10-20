import "./CharacterDetailPage.css";
import React from "react";
import { ArrowBackOutlined, ArrowForwardIos } from "@material-ui/icons";

import positionsData from "../data/characterData/positions.json";

function CharacterDetailPage() {
  return (
    <div>
      <div className="container">
        <div id="navbar">NavBar</div>
        <div className="title">
          Elke
          <div id="rating">500</div>
          <div id="cost">1 token / 500 shards</div>
          <div id="TBD">TBD</div>
        </div>

        <div className="positionInfo1">Position1</div>
        <div className="positionInfo2">Position2</div>
        <div className="positionInfo3">Position3</div>

        <div className="footer">
          Footer
          <div id="rating">
            <img
              src={`${process.env.PUBLIC_URL}/assets/images/trio_test_images/info_box.PNG`}
              alt="no image here"
              className="img1"
            />
            Evolve
          </div>
          <div id="cost">
            <img
              src={`${process.env.PUBLIC_URL}/assets/images/trio_test_images/info_box.PNG`}
              alt="no image here"
              className="img1"
            />
            Fate
          </div>
          <div id="TBD">
            <img
              src={`${process.env.PUBLIC_URL}/assets/images/trio_test_images/info_box.PNG`}
              alt="no image here"
              className="img1"
            />
            Avatar
          </div>
        </div>

        <div className="main">
          <img
            src={`${process.env.PUBLIC_URL}/assets/images/trio_test_images/ranking_large_elke.PNG`}
            alt="no image here"
            className="img1"
          />
        </div>
      </div>
    </div>
  );
}
export default CharacterDetailPage;

/* load data from json file first step
rewrite paper form of profile
set up header with content and fonts
set up middle data plan
set up footer
)


codepen for the CSS to use for this section: 
<div class="container"> 
  <div id="navbar">NavBar</div>  
  <div id="title">Title</div>
  <div id="main">Main</div>
  <div id="pos1">Position 1</div>
  <div id="pos2">Position 2</div>
  <div id="pos3">Position 3</div>
  <div id="footer">Footer</div>
  
</div>

.container {
  display: grid;
  height: 100vh;
  grid-gap: 0.3rem;
  text-align: center;
  grid-template-columns: 1fr 3fr;
  grid-template-rows: 0.2fr 0.4fr 1fr 1fr 1fr 0.4fr;
  grid-template-areas:
    "navbar navbar"
    "title title"
    "pos1 main"
    "pos2 main"
    "pos3 main"
    "footer footer"
}

#navbar {
  background: #1de9b6;
  grid-area:navbar;
}
#title {
  background: #00ffff;
  grid-area:title;
}

#main {
 background: #BDB76B;
  grid-area:main;
}
#pos1 {
  background: #6fffd5;
  grid-area:pos1;
}
#pos2 {
  background: #008B8B;
  grid-area:pos2;
}
#pos3 {
 background: #6fffd2;
  grid-area:pos3;
}
#footer {
   background: #1de9b6;
  grid-area:footer;
}


@media only screen and (max-width: 650px){
  .container{
 
    grid-template-columns: 1fr;
    grid-template-rows: 0.2fr 0.4fr 3fr 1fr 1fr 1fr 0.4fr;
    grid-template-areas:
      "navbar"
      "title"
      "main"
      "pos1"
      "pos2"
      "pos3"
      "footer";
  } 
}
*/

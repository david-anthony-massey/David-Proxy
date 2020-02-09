import React from "react";
import { Grid, Cell } from "styled-css-grid";

export default class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Grid
          columns={
            "minmax(600px,720px) minmax(320px,600px) minmax(333px,350px)"
          }
          rows={"108px minmax(760px, 920px)"}
          justifyContent="space-between"
          areas={[
            "matt-comp matt-comp matt-comp",
            "tay-comp roy-comp travis-comp",
            "david-comp david-comp david-comp"
          ]}
        >
          <Cell area="matt-comp">
            <div id="app"></div>
          </Cell>
          <Cell middle style={{ display: "flex" }} area="tay-comp">
            <div
              id="tay-prodimage"
              style={{ minWidth: 768, verticalAlign: "top", alignSelf: "top" }}
            ></div>
          </Cell>
          <Cell middle style={{ display: "flex" }} area="roy-comp">
            <div
              id="productDescription"
              style={{
                marginLeft: "35px",
                textOverflow: "ellipsis",
                overflow: "hidden"
              }}
            ></div>
          </Cell>
          <Cell
            middle
            style={{ display: "flex", verticalAlign: "middle" }}
            area="travis-comp"
          >
            <div id="appTravis"></div>
          </Cell>
          <Cell
            middle
            style={{ display: "flex", verticalAlign: "middle" }}
            area="david-comp"
          >
            <div id="reviews"></div>
          </Cell>
        </Grid>
        <div id="carousel" style={{ marginTop: "25px" }}></div>
      </div>
    );
  }
}

import logo from "./logo.svg";
import "./App.css";
import Prova from "./prova";
import Cards from "./cards";
import React from "react";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.myCards = [
      {
        name: "card1",
        img: "https://d9-wret.s3.us-west-2.amazonaws.com/assets/palladium/production/s3fs-public/thumbnails/image/md_rpd_sample_image_blu_vert.jpg",
        qty: 3,
      },
      {
        name: "card2",
        img: "https://d9-wret.s3.us-west-2.amazonaws.com/assets/palladium/production/s3fs-public/thumbnails/image/md_rpd_sample_image_blu_vert.jpg",
        qty: 2,
      },
      {
        name: "card3",
        img: "https://d9-wret.s3.us-west-2.amazonaws.com/assets/palladium/production/s3fs-public/thumbnails/image/md_rpd_sample_image_blu_vert.jpg",
        qty: 1,
      },
    ];
  }

  render() {
    return <Cards cardsArray={this.myCards} />;
  }
}

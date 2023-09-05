import React from "react";
import ReactDOM from "react-dom/client";

export default class Cards extends React.Component {
  constructor(props) {
    super(props);
    this.qtts = [];
    this.props.cardsArray.forEach((el) => {
      this.qtts.push(el.qty);
    });
    this.state = { qtts: this.qtts };
  }
  incrementa = (event) => {
    let myIndex = event.target.parentElement.id.split("-")[1];
    this.qtts[myIndex - 1] += 1;
    this.setState({ qtts: this.qtts });
  };
  decrementa = (event) => {
    let myIndex = event.target.parentElement.id.split("-")[1];
    this.qtts[myIndex - 1] -= 1;
    this.setState({ qtts: this.qtts });
  };
  eliminaCard = (event) => {
    event.target.parentElement.remove();
  };

  render() {
    const cardsArray = this.props.cardsArray;
    return (
      <div>
        {cardsArray.map((el, index) => (
          <div key={index} id={`card-${index + 1}`}>
            <h1>{el.name}</h1>
            <img src={el.img} alt="immagine" />

            <h1>Quantita: {this.state.qtts[index]}</h1>
            <button onClick={this.incrementa}>Incrementa</button>
            <button onClick={this.decrementa}>Decrementa</button>
            <button onClick={this.eliminaCard}>Elimina</button>
          </div>
        ))}
      </div>
    );
  }
}

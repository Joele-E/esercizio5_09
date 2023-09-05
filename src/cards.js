import React from "react";
import ReactDOM from "react-dom/client";

export default class Cards extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const cardsArray = this.props.cardsArray;
    return (
      <div>
        {cardsArray.map((el, index) => (
          <div key={index}>
            <h1>{el.name}</h1>
            <img src={el.img} alt="immagine" />

            <h1>Quantita: {el.qty}</h1>
            <button onClick={this.incrementa}>Incrementa</button>
            <button onClick={this.decrementa}>Decrementa</button>
            <button onClick={this.eliminaCard}>Elimina</button>
          </div>
        ))}
      </div>
    );
  }
}

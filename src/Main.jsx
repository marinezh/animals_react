import React, { Component } from "react";
import { animals } from "./animals";
import Card from "./UI/Card"
import "./Main.css";

class Main extends Component {
    state = {
        animals: animals,
    };

    animalList = animals.map(animal => <Card name={animal.name} likes={ animal.likes} />)
    render() {
        const Cards = () => {
          
      }
    return (
      <main>
            <h1>Animals</h1>
            {this.animalList}
        <input type="search" />
        <div className="CardsContainer">
                {/* <Card>
                    name={animals.name}
          </Card> */}
        </div>
      </main>
    );
  }
}

export default Main;

import React from "react";
import "./home.css";
import { CardComponent } from "../../components/cards/Card";

export const HomeComponent = () => {
  const cardList = [{ like: 10 }, { like: 50 }, { like: 25 }, { like: 80 }];

  return (
    <div className="container">
      {cardList.map((card) => {
        return <CardComponent like={card?.like} />;
      })}
    </div>
  );
};

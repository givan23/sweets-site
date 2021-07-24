import React from "react";

import "./home.css";
import { CardComponent } from "../../components/cards/Card";

export const HomeComponent = () => {
  const cardList = [{ like: 10 }, { like: 50 }, { like: 25 }, { like: 80 }];
  const comment = "Mi piace questa torta";

  // functions
  const doLike = (e) => {
    console.log("ciao sono l'evento", e);
    alert("like");
  };
  const doComment = () => {
    alert("comment");
  };

  return (
    <div className="container">
      {cardList.map((card) => {
        return <CardComponent like={card?.like} commenti={comment} doLike={doLike}  />;
      })}
    </div>
  );
};

// esperanza amore mio

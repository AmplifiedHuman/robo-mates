import React from "react";
import Card from "./Card";

const CardList = ({ robots }) => {
  return (
    <div className="roboto m-3 flex flex-wrap justify-center">
      {robots.map((user) => {
        return <Card name={user.name} email={user.email} key={user.id} />;
      })}
    </div>
  );
};

export default CardList;

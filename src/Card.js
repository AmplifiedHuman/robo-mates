import React from "react";

const Card = ({ name, email }) => {
  return (
    <div className="inline-block bg-teal-300 m-2 p-3 shadow-md rounded-md transform hover:scale-105 duration-300">
      <img
        src={`https://robohash.org/${Math.random()}?size=220x220`}
        alt="robot"
      />
      <div className="text-center">
        <h2 className="mt-3 text-xl font-medium">{name}</h2>
        <p className="text-gray-800">{email}</p>
      </div>
    </div>
  );
};

export default Card;

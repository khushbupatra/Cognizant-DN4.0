import React from "react";
import officeImg from "../office.png";

const data = [
  { Name: "DBS", Rent: 50000, Address: "Chennai" },
  { Name: "Tidel", Rent: 70000, Address: "Bangalore" },
  { Name: "SP Infocity", Rent: 55000, Address: "Pune" }
];

function Office() {
  return (
    <div>
      <img src={officeImg} width="25%" height="25%" alt="Office Space" />
      {data.map((item, index) => {
        let color = item.Rent <= 60000 ? "textRed" : "textGreen";
        return (
          <div key={index}>
            <h1>Name: {item.Name}</h1>
            <h3 className={color}>Rent: Rs. {item.Rent}</h3>
            <h3>Address: {item.Address}</h3>
          </div>
        );
      })}
    </div>
  );
}

export default Office;

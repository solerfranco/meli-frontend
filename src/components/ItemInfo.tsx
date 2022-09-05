import React from "react";
import "../styles/scss/Item.scss";

interface ItemProps {
  item: {
    id: string;
    price: {
      currency: string;
      amount: number;
      decimals: number;
    };
    picture: string;
    free_shipping: boolean;
    title: string;
    description: string;
    condition: string;
    sold_quantity: number;
  };
}

const currencies: { [key: string]: string } = {
  ARS: "$",
  USD: "U$S",
};

const conditions: { [key: string]: string } = {
  new: "Nuevo",
  used: "Usado",
};

const ItemInfo = (props: ItemProps) => {
  const { price, picture, title, description, condition, sold_quantity } =
    props.item;
  return (
    <div className="item-container">
      <div className="item-info-container">
        <div className="item-info-left-column">
          <img className="item-image" src={picture} alt="item" />
          <div className="item-description-container">
            <span className="item-description-title">
              Descripción del producto
            </span>
            <span className="item-description">{description}</span>
          </div>
        </div>
        <div className="item-info">
          <span className="item-condition">
            {conditions[condition]}
            {sold_quantity > 0 && ` - ${sold_quantity} vendido`}
            {sold_quantity > 1 && "s"}
          </span>
          <span className="item-title">{title}</span>
          <span className="item-price">
            {`${currencies[price.currency]} 
            ${price.amount.toLocaleString("es-AR")}`}
            {price.decimals > 0 && (
              <span className="item-price-decimals">
                {price.decimals.toString().padEnd(2, "0")}
              </span>
            )}
          </span>
          <button className="item-buy-button">Comprar</button>
        </div>
      </div>
    </div>
  );
};

export default ItemInfo;

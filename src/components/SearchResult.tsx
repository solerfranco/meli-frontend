import React from "react";
import "../styles/scss/SearchResult.scss";
import { useNavigate } from "react-router-dom";

interface SearchResultProps {
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
    state: string;
  };
}

const currencies: { [key: string]: string } = {
  ARS: "$",
  USD: "U$S",
};

const SearchResult = (props: SearchResultProps) => {
  const { id, price, picture, free_shipping, title, state } = props.item;
  const navigate = useNavigate();

  const navigateToItem = () => {
    navigate(`/items/${id}`);
  };

  return (
    <div onClick={navigateToItem} className="result-container">
      <img className="result-image" src={picture} alt="product" />
      <div className="info-container">
        <div className="result-info">
          <span className="result-price">
            {`${currencies[price?.currency]} ${price?.amount?.toLocaleString(
              "es-AR"
            )}`}
            {free_shipping && (
              <img
                className="shipping-icon"
                src="/assets/img/ic_shipping.png"
                alt="free shipping"
              />
            )}
          </span>
          <span className="result-title">{title}</span>
        </div>
        <div className="result-province">
          <span>{state}</span>
        </div>
      </div>
    </div>
  );
};

export default SearchResult;

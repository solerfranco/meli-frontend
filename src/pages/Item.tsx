import axios from "axios";
import React, { useEffect } from "react";
import CategoryBreadcrums from "../components/CategoryBreadcrums";
import ItemInfo from "../components/ItemInfo";
import { useParams, useNavigate } from "react-router-dom";

const Item = () => {
  const [item, setItem] = React.useState({
    id: "",
    title: "",
    price: {
      currency: "",
      amount: 0,
      decimals: 0,
    },
    picture: "",
    condition: "",
    free_shipping: false,
    sold_quantity: 0,
    description: "",
  });
  const [categories, setCategories] = React.useState([]);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/items/${id}`)
      .then((response) => {
        setItem(response?.data?.item);
        if (!response?.data?.item) navigate("/not-found");
        //setCategories(response.data.categories);
      })
      .catch((error) => {
        navigate("/not-found");
      });
  }, [id, navigate]);

  return (
    <>
      <CategoryBreadcrums categories={categories} />
      {item.id && <ItemInfo item={item} />}
    </>
  );
};

export default Item;

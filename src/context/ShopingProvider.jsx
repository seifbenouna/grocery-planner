import React, { useContext, useEffect, useState } from "react";
import { ShopingContext } from "./ShopingContext";
import { ArchiveListContext } from "./ArchiveContext";
import { deleteProduct, getAllProducts, setAmountDB } from "../db/shopDB";
import { AmountContext } from "./AmountContext";

export const ShopingProvider = ({ children }) => {
  const { onAddArchiveItem } = useContext(ArchiveListContext);
  const { amount, setAmount } = useContext(AmountContext);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    (async () => {
      const products = await getAllProducts();
      setProducts(products ?? []);
    })();
  }, []);

  const onDelete = async (id) => {
    await deleteProduct(id);
    setProducts((products) => products.filter((item) => item.id !== id));
  };
  const onBuy = async (item) => {
    if (item.price > amount) {
      alert("can't buy , amount is not enough");
      return;
    }
    await onAddArchiveItem(item);
    const newAmount = amount - item.price;
    setAmount(newAmount);
    await setAmountDB(newAmount);
    await onDelete(item.id);
  };
  return (
    <ShopingContext.Provider value={{ products, setProducts, onBuy, onDelete }}>
      {children}
    </ShopingContext.Provider>
  );
};

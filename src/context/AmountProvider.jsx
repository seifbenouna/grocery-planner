import React, { useEffect, useState } from "react";
import { AmountContext } from "./AmountContext";
import { getAmountDB, setAmountDB } from "../db/shopDB";
export const AmountProvider = ({ children }) => {
  const [amount, setAmount] = useState(0);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    (async () => {
      const amount = await getAmountDB();
      setAmount(amount ?? 0);
      setLoaded(true);
    })();
  }, []);

  useEffect(() => {
    console.log("amount or loaded change", amount, loaded);

    if (loaded) setAmountDB(amount);
  }, [amount, loaded]);

  return loaded ? (
    <AmountContext.Provider value={{ amount, setAmount }}>
      {children}
    </AmountContext.Provider>
  ) : (
    <div>Loading...</div>
  );
};

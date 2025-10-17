import React, { useContext, useEffect, useState } from "react";
import { DashboardCard } from "../components/DashboardCard";
import { AmountContext } from "../context/AmountContext";
import { getProductsCount, getArchiveCount } from "../db/shopDB";

import "../styles/Dashboard.css";

const Dashboard = () => {
  const { amount, setAmount } = useContext(AmountContext);
  const [archiveCounter, setArchiveCounter] = useState(0);
  const [whichlistCount, setWhichlistCount] = useState(0);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    (async () => {
      const whichtCount = await getProductsCount();
      setWhichlistCount(whichtCount ?? 0);
      const archivesCount = await getArchiveCount();
      setArchiveCounter(archivesCount ?? 0);
      setLoaded(true);
    })();
  }, []);

  return loaded ? (
    <div className="dashboard">
      <DashboardCard
        title={"Amount"}
        value={amount}
        typeValue="DA"
        editable={true}
        onValueChange={(val) => setAmount(val)}
      />
      <DashboardCard title={"Purchased Products"} value={archiveCounter} />
      <DashboardCard title={"Wichlist"} value={whichlistCount} />
    </div>
  ) : (
    <div>Loading...</div>
  );
};
export default Dashboard;

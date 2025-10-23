import React, { useContext } from "react";
import { useLoaderData } from "react-router";
import { DashboardCard } from "../components/DashboardCard";
import { AmountContext } from "../context/AmountContext";

import "../styles/Dashboard.css";

const Dashboard = () => {
  const { amount, setAmount } = useContext(AmountContext);
  const { whichlistCount, archiveCounter } = useLoaderData();

  return (
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
  );
};
export default Dashboard;

import React, { useState,useEffect } from "react";
import Header from "./components/Header";
import FilterDropdown from "./components/FilterDropdown";
import ProfitTable from "./components/ProfitTable";
import data from "./orders.json";

function App() {
  const [filter, setFilter] = useState("order");

  const processedData = data.orders.map((order) => ({
    customer: order.customer,
    invoice: order.invoice_number,
    totalQuantity: order.subtotal * order.primary_rate,
    totalAmount: order.total_amount,
    totalCost: order.total_cost,
    subTotal: order.subtotal,
    netProfit: order.net_profit,
  }));

  return (
    <div className="min-h-screen bg-gray-50">
      <Header totalProfit="106,068.61" />
      <FilterDropdown onChange={setFilter} />
      <ProfitTable data={processedData} />
    </div>
  );
}

export default App;

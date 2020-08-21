import React from "react";
import BarChart from "../../components/graphs/BarChart";

export default function FirstGraph() {
  return <BarChart data={[5, 10, 1, 3]} size={[500, 500]} />;
}

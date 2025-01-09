import React from "react";

import SousouNoFrieren from "../components/DashboardPage/SousouNoFrieren";

function Dashboard() {
  return (
    <>
      {/* Current top anime */}
      <div className="h-full my-auto">
        <SousouNoFrieren />
      </div>
    </>
  );
}

export default Dashboard;

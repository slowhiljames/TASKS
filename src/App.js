import React from 'react';
import TotalSalesChart from './components/TotalSalesChart';
import SalesGrowthChart from './components/SalesGrowthChart';
import NewCustomersChart from './components/NewCustomersChart';
import RepeatCustomersChart from './components/RepeatCustomersChart';
import LifetimeValueChart from './components/LifetimeValueChart';
import GeoDistributionMap from './components/GeoDistributionMap';

function App() {
  return (
    <div className="App">
      <h1>Sales Dashboard</h1>/
      <GeoDistributionMap/>
      <TotalSalesChart />
      <SalesGrowthChart />
      <NewCustomersChart />
      <RepeatCustomersChart />
      <LifetimeValueChart />
    </div>
  );
}

export default App;

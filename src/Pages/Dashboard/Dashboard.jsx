import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Dashboard = () => {
  return (
    <div className="drawer drawer-mobile">
      <input id="dasboard-sidebar" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
        {/* <!-- Page content here --> */}
        <h2 className="text-3xl font-semibold text-purple-500">Dashboard</h2>
        <Outlet />
      </div>
      <div className="drawer-side">
        <label htmlFor="dasboard-sidebar" className="drawer-overlay"></label>
        <ul className="menu p-4 overflow-y-auto w-80 bg-gray-100 text-base-content">
          {/* <!-- Sidebar content here --> */}
          <li>
            <Link to="/dashboard">Dashboard</Link>
          </li>
          <li>
            <Link to="/dashboard/review">Reviews</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
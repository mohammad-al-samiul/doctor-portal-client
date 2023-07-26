import React, { useContext, useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthProvider/AuthProvider';
import useAdmin from '../../Hooks/useAdmin';
import Navbar from '../../Pages/Shared/Navbar/Navbar';

const DashboardLayout = () => {
  const { user } = useContext(AuthContext);
  const [isAdmin] = useAdmin(user?.email);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const handleSidebar = () => {
    console.log('clicked');
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div>
      <Navbar
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
        handleSidebar={handleSidebar}
      />

      <div className="drawer drawer-mobile">
        <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
          <Outlet />
        </div>
        <div className="drawer-side">
          <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
          <ul className={`menu p-4 w-80 text-base-content ${sidebarOpen ? 'bg-white' : ''}`}>
            <li>
              <Link to="/dashboard">My Appointment</Link>
            </li>
            {isAdmin && (
              <>
                <li>
                  <Link to="/dashboard/allusers">All Users</Link>
                </li>
                <li>
                  <Link to="/dashboard/adddoctor">Add a Doctor</Link>
                </li>
                <li>
                  <Link to="/dashboard/managedoctor">Manage Doctor</Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;

import { Routes, Route, Navigate } from "react-router-dom";

import DashboardLayout from "../layouts/DashboardLayout";
import Dashboard from "../pages/Dashboard";
import Worlds from "../pages/Worlds";
import WorldDetails from "../pages/WorldDetails";
import Agents from "../pages/Agents";
import Lockers from "../pages/Lockers";
import Connections from "../pages/Connections";
import Consents from "../pages/Consents";
import Transactions from "../pages/Transactions";
import Analytics from "../pages/Analytics";
import Settings from "../pages/Settings";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/dashboard" replace />} />

      <Route path="/dashboard" element={<DashboardLayout>
      <Dashboard />
    </DashboardLayout>} />
      <Route path="/worlds" element={<DashboardLayout>
      <Worlds />
    </DashboardLayout>} />
      <Route path="/world-details" element={<DashboardLayout>
      <WorldDetails />
    </DashboardLayout>} />
      <Route path="/agents" element={<DashboardLayout>
      <Agents />
    </DashboardLayout>} />
      <Route path="/lockers" element={<DashboardLayout>
      <Lockers />
    </DashboardLayout>} />
      <Route path="/connections" element={<DashboardLayout>
      <Connections />
    </DashboardLayout>} />
      <Route path="/consents" element={<DashboardLayout>
      <Consents />
    </DashboardLayout>} />
      <Route path="/transactions" element={<DashboardLayout>
      <Transactions />
    </DashboardLayout>} />
      <Route path="/analytics" element={<DashboardLayout>
      <Analytics />
    </DashboardLayout>} />
      <Route path="/settings" element={<DashboardLayout>
      <Settings />
    </DashboardLayout>} />
    </Routes>
  );
}

export default AppRoutes;
import UserList from "../pages/users/UserList";
import UserDetails from "../pages/users/UserDetails";
import DashboardHome from "../pages/dashboard/DashboardHome";
import Overview from "../pages/dashboard/Overview";
import Settings from "../pages/dashboard/Settings";
import ChartHome from "../pages/charts/ChartHome";
import DataChartRecharts from "../pages/charts/DataChartRecharts";
import Camembert from "../pages/charts/Camembert";
import CamembertFetch from "../pages/charts/CamembertFetch";
import EmployeeList from "../pages/employees/EmployeeList";
import EmployeeDetails from "../pages/employees/EmployeeDetails";
import ProductsScreen from "../pages/products/ProductsScreen";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Routes,
  Outlet,
} from "react-router-dom";

const Nestedroutes: React.FC = () => {
  return (
    <Routes>
      {/* Route parent */}
      <Route path="/dashboard" element={<Outlet />}>
        {/* Routes imbriquées */}
        <Route index element={<DashboardHome />} />
        {/* Composant affiché par défaut */}
        <Route path="overview" element={<Overview />} />
        <Route path="settings" element={<Settings />} />
      </Route>
      <Route path="/users" element={<Outlet />}>
        <Route index element={<UserList />} />
        <Route path=":id" element={<UserDetails />} />
      </Route>
      <Route path="/employees" element={<Outlet />}>
        <Route index element={<EmployeeList />} />
        <Route path=":id" element={<EmployeeDetails />} />
      </Route>
      <Route path="/products" element={<Outlet />}>
        <Route index element={<ProductsScreen />} />
      </Route>
      <Route path="/charts" element={<Outlet />}>
        <Route index element={<ChartHome />} />
        <Route path="recharts" element={<DataChartRecharts />} />
        <Route path="camembertfetch" element={<CamembertFetch />} />
        <Route path="camembert" element={<Camembert />} />
      </Route>
    </Routes>
  );
};

export default Nestedroutes;

import { Route, Routes } from "react-router-dom"
import Login from "./pages/Login"
import SuperAdminSidebar from "./components/superAdmin/SuperAdminSidebar"
import SalonsDetail from "./pages/superAdmin/SalonsDetail"
import SuperAdminDashboard from "./pages/superAdmin/SuperAdminDashboard";
import ManageSalonRequests from "./pages/superAdmin/ManageSalonRequests";
import Users from "./pages/superAdmin/Users";
import Dashboard from "./pages/Dashboard";

const superAdmDash = (<main className="flex"><SuperAdminSidebar/><SuperAdminDashboard/></main>);
const superAdmSalons = (<main className="flex"><SuperAdminSidebar/><SalonsDetail/></main>);
const superAdmManageSalons = (<main className="flex"><SuperAdminSidebar/><ManageSalonRequests/></main>);
const manageUsers = (<main className="flex"><SuperAdminSidebar/><Users/></main>);


function App() {

  return (
    <Routes>
      <Route path="/superAdmin" element={superAdmDash} />
      <Route path="/superAdmin/salons" element={superAdmSalons} />
      <Route path="/superAdmin/salonsReq" element={superAdmManageSalons}/>
      <Route path="/superAdmin/users" element={manageUsers}/>
      <Route path='/' element={<Dashboard/>}/>
      <Route path="/login" element={<Login/>} />
    </Routes>
  )
}

export default App
import { Route, Routes } from "react-router-dom"
import Login from "./pages/Login"
import SuperAdminSidebar from "./components/superAdmin/SuperAdminSidebar"
import SalonsDetail from "./pages/superAdmin/SalonsDetail"
import SuperAdminDashboard from "./pages/superAdmin/SuperAdminDashboard";
import ManageSalonRequests from "./pages/superAdmin/ManageSalonRequests";
import Users from "./pages/superAdmin/Users";
import Dashboard from "./pages/Dashboard";
import SalAdmSidebar from "./components/salonAdmin/SalAdmSidebar";
import SalonAdminDashboard from "./pages/salonAdmin/SalonAdminDashboard";
import SalonStaff from "./pages/salonAdmin/SalonStaff";
import Bookings from "./pages/salonAdmin/Bookings";
import SalonServices from "./pages/salonAdmin/SalonServices";

const superAdmDash = (<main className="flex"><SuperAdminSidebar/><SuperAdminDashboard/></main>);
const superAdmSalons = (<main className="flex"><SuperAdminSidebar/><SalonsDetail/></main>);
const superAdmManageSalons = (<main className="flex"><SuperAdminSidebar/><ManageSalonRequests/></main>);
const manageUsers = (<main className="flex"><SuperAdminSidebar/><Users/></main>);
const salonAdm = (<main className="flex"><SalAdmSidebar/><SalonAdminDashboard/></main>);
const salStaff = (<main className="flex"><SalAdmSidebar/><SalonStaff/></main>);
const salBookings = (<main className="flex"><SalAdmSidebar/><Bookings/></main>);
const salServices = (<main className="flex"><SalAdmSidebar/><SalonServices/></main>);


function App() {

  return (
    <Routes>
      <Route path="/superAdmin" element={superAdmDash} />
      <Route path="/superAdmin/salons" element={superAdmSalons} />
      <Route path="/superAdmin/salonsReq" element={superAdmManageSalons}/>
      <Route path="/superAdmin/users" element={manageUsers}/>
      <Route path="/salonAdmin" element={salonAdm}/>
      <Route path="/salonAdmin/staff" element={salStaff}/>
      <Route path="/salonAdmin/bookings" element={salBookings}/>
      <Route path="/salonAdmin/services" element={salServices}/>
      <Route path='/' element={<Dashboard/>}/>
      <Route path="/login" element={<Login/>} />
    </Routes>
  )
}

export default App
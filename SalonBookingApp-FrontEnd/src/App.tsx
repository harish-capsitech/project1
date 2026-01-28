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
import SalonProfile from "./pages/salonAdmin/SalonProfile";
import EmployeeDashboard from "./pages/employee/EmployeeDashboard";
import EmployeeBookings from "./pages/employee/EmployeeBookings";
import EmpSidebar from "./components/employee/EmpSidebar";

const superAdmDash = (<main className="flex"><SuperAdminSidebar/><SuperAdminDashboard/></main>);
const superAdmSalons = (<main className="flex"><SuperAdminSidebar/><SalonsDetail/></main>);
const superAdmManageSalons = (<main className="flex"><SuperAdminSidebar/><ManageSalonRequests/></main>);
const manageUsers = (<main className="flex"><SuperAdminSidebar/><Users/></main>);

const salonAdm = (<main className="flex"><SalAdmSidebar/><SalonAdminDashboard/></main>);
const salStaff = (<main className="flex"><SalAdmSidebar/><SalonStaff/></main>);
const salBookings = (<main className="flex"><SalAdmSidebar/><Bookings/></main>);
const salServices = (<main className="flex"><SalAdmSidebar/><SalonServices/></main>);
const salProfile = (<main className="flex"><SalAdmSidebar/><SalonProfile/></main>);

const empDashboard = (<main className="flex"><EmpSidebar/><EmployeeDashboard/></main>);
const empBookings = (<main className="flex"><EmpSidebar/><EmployeeBookings/></main>);


function App() {

  return (
    <Routes>
      <Route path="/superadmin" element={superAdmDash} />
      <Route path="/superadmin/salons" element={superAdmSalons} />
      <Route path="/superadmin/salonsReq" element={superAdmManageSalons}/>
      <Route path="/superadmin/users" element={manageUsers}/>

      <Route path="/salonadmin" element={salonAdm}/>
      <Route path="/salonadmin/staff" element={salStaff}/>
      <Route path="/salonadmin/bookings" element={salBookings}/>
      <Route path="/salonadmin/services" element={salServices}/>
      <Route path="/salonadmin/profile" element={salProfile}/>

      <Route path="/employee" element={empDashboard}/>
      <Route path="/employee/bookings" element={empBookings}/>
      
      <Route path='/' element={<Dashboard/>}/>
      <Route path="/login" element={<Login/>} />
    </Routes>
  )
}

export default App
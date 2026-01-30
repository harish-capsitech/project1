import Book from "../pages/customer/Book";
import CustomerBookings from "../pages/customer/CustomerBookings";
import CustomerDashboard from "../pages/customer/CustomerDashboard";
import CustomerNavbar from "../pages/customer/CustomerNavbar";
import CustomerProfile from "../pages/customer/CustomerProfile";
import EmployeeBookings from "../pages/employee/EmployeeBookings";
import EmployeeDashboard from "../pages/employee/EmployeeDashboard";
import EmpProfile from "../pages/employee/EmpProfile";
import Bookings from "../pages/salonAdmin/Bookings";
import SalAdmProfile from "../pages/salonAdmin/SalAdmProfile";
import SalonAdminDashboard from "../pages/salonAdmin/SalonAdminDashboard";
import SalonProfile from "../pages/salonAdmin/SalonProfile";
import SalonServices from "../pages/salonAdmin/SalonServices";
import SalonStaff from "../pages/salonAdmin/SalonStaff";
import ManageSalonRequests from "../pages/superAdmin/ManageSalonRequests";
import SalonsDetail from "../pages/superAdmin/SalonsDetail";
import SupAdmProfile from "../pages/superAdmin/SupAdmProfile";
import SuperAdminDashboard from "../pages/superAdmin/SuperAdminDashboard";
import Users from "../pages/superAdmin/Users";
import EmpSidebar from "./employee/EmpSidebar";
import SalAdmSidebar from "./salonAdmin/SalAdmSidebar";
import SuperAdminSidebar from "./superAdmin/SuperAdminSidebar";


export const superAdmDash = (<main className="flex"><SuperAdminSidebar/><SuperAdminDashboard/></main>);
export const superAdmSalons = (<main className="flex"><SuperAdminSidebar/><SalonsDetail/></main>);
export const superAdmManageSalons = (<main className="flex"><SuperAdminSidebar/><ManageSalonRequests/></main>);
export const manageUsers = (<main className="flex"><SuperAdminSidebar/><Users/></main>);
export const supAdmProfile = (<main className="flex"><SuperAdminSidebar/><SupAdmProfile/></main>);

export const salonAdm = (<main className="flex"><SalAdmSidebar/><SalonAdminDashboard/></main>);
export const salStaff = (<main className="flex"><SalAdmSidebar/><SalonStaff/></main>);
export const salBookings = (<main className="flex"><SalAdmSidebar/><Bookings/></main>);
export const salServices = (<main className="flex"><SalAdmSidebar/><SalonServices/></main>);
export const salProfile = (<main className="flex"><SalAdmSidebar/><SalonProfile/></main>);
export const salAdmProfile = (<main className="flex"><SalAdmSidebar/><SalAdmProfile/></main>);

export const empDashboard = (<main className="flex"><EmpSidebar/><EmployeeDashboard/></main>);
export const empBookings = (<main className="flex"><EmpSidebar/><EmployeeBookings/></main>);
export const empProfile = (<main className="flex"><EmpSidebar/><EmpProfile/></main>);

export const cusDashboard = (<><CustomerNavbar/><CustomerDashboard/></>)
export const cusBookings = (<><CustomerNavbar/><CustomerBookings/></>)
export const cusProfile = (<><CustomerNavbar/><CustomerProfile/></>)
export const cusBook = (<><CustomerNavbar/><Book/></>)
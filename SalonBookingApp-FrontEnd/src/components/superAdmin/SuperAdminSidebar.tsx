import { Menu } from "antd";
import {
  ScissorOutlined,
  UserOutlined,
  ProfileOutlined,
  AppstoreOutlined,
  UserSwitchOutlined,
  HomeOutlined
} from "@ant-design/icons";
import { faArrowRightFromBracket } from "@fortawesome/free-solid-svg-icons";
import { Link, NavLink, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const SuperAdminSidebar = () => {
  const location = useLocation();

  return (
    <div className="fixed px-2.5 py-5 flex flex-col justify-between h-screen w-55 border-r border-r-[#262b3a]" >
      <div className="">
        <div className="flex gap-3 items-center mb-6">
          <div className="bg-[#6c5ce7] p-2.5 rounded-xl ">
            <ScissorOutlined style={{ fontSize: 22, color: "#fff" }} />
          </div>

          <div>
            <h1 className="text-white m-0">
              SalonHub
            </h1>
            <span className="text-[#9ca3af] text-xs">
              Booking System
            </span>
          </div>
        </div>

        <Menu
          mode="inline"
          selectedKeys={[location.pathname]}
          style={{
            background: "transparent",
            border: "none",
            color: "#dbd4d3",
          }}
          items={[
            {
              key: "/superAdmin",
              icon: <AppstoreOutlined style={{color: '#dbd4d3'}} />,
              label: <NavLink to="/superAdmin">Dashboard</NavLink>,
            },
            {
              key: "/superAdmin/salons",
              icon: <HomeOutlined style={{color: '#dbd4d3'}} />,
              label: <NavLink to="/superAdmin/salons">Salons</NavLink>,
            },
            {
              key: "/superAdmin/salonsReq",
              icon: <ProfileOutlined style={{color: '#dbd4d3'}} />,
              label: <NavLink to="/superAdmin/salonsReq">Requests</NavLink>,
            },
            {
              key: "/superAdmin/users",
              icon: <UserSwitchOutlined style={{color: '#dbd4d3'}}/>,
              label: <NavLink to="/superAdmin/users">Users</NavLink>,
            },
          ]}
        /> 
      </div>
      <div className="flex flex-col gap-2">
        <div className="bg-[#333241] rounded-lg p-3 flex items-center gap-3">
          <UserOutlined style={{ fontSize: 36, color: "#6c5ce7" }} />

          <div>
            <span style={{ color: "#fff", fontSize: 16 }}>
              Super Admin
            </span>
            <br />
            <span style={{ color: "#9ca3af", fontSize: 12 }}>Active Session</span>
          </div>
        </div>
        <Link to='/salonAdmin' className="text-red-400/50 bg-[#262b3a] rounded-xl flex items-center justify-center py-2">
          <FontAwesomeIcon icon={faArrowRightFromBracket}/>
          Logout
        </Link>
      </div>
    </div>
  );
};

export default SuperAdminSidebar;

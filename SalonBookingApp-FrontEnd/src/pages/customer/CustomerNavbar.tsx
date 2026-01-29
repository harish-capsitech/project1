import React from "react";
import { Button } from "antd";
import { NavLink, useNavigate } from "react-router-dom";
import {
  AppstoreOutlined,
  CalendarOutlined,
  LogoutOutlined,
  UserOutlined,
} from "@ant-design/icons";

type Props = {
  userName?: string;
  onLogout?: () => void;
};

const CustomerNavbar: React.FC<Props> = ({
  userName = "Customer",
  onLogout,
}) => {
  const navigate = useNavigate();

  const logout = () => {
    if (onLogout) return onLogout();
    navigate("/login");
  };

  const tabBase =
    "px-4 py-2 rounded-2xl text-sm flex items-center gap-2 transition";
  const tabActive =
    "bg-[#6D5EF1]/20 border border-[#6D5EF1]/30 text-white";
  const tabInactive = "text-white/60 hover:text-white hover:bg-white/5";

  const linkClass = ({ isActive }: { isActive: boolean }) =>
    `${tabBase} ${isActive ? tabActive : tabInactive}`;

  const mobileLinkClass = ({ isActive }: { isActive: boolean }) =>
    `flex-1 ${tabBase} justify-center ${
      isActive
        ? "bg-[#6D5EF1]/20 border border-[#6D5EF1]/30 text-white"
        : "bg-white/5 border border-white/10 text-white/60"
    }`;

  return (
    <div className="sticky top-0 z-10 border-b border-white/10 bg-[#0B0F19]/90 backdrop-blur">
      <div className="px-4 lg:px-8 py-4 flex items-center justify-between gap-4">
        <NavLink to="/customer" className="flex items-center gap-3">
          <div className="h-10 w-10 rounded-xl bg-[#6D5EF1] flex items-center justify-center">
            <AppstoreOutlined className="text-white text-lg" />
          </div>
          <div className="leading-4">
            <div className="font-bold text-white">SalonHub</div>
            <div className="text-xs text-white/50">Customer</div>
          </div>
        </NavLink>

        <div className="hidden md:flex items-center gap-2 bg-white/5 border border-white/10 rounded-2xl p-1">
          <NavLink to="/customer" end className={linkClass}>
            <AppstoreOutlined />
            Dashboard
          </NavLink>

          <NavLink to="/customer/bookings" className={linkClass}>
            <CalendarOutlined />
            My Bookings
          </NavLink>
          <NavLink to="/customer/profile" className={linkClass}>
            <UserOutlined />
            My Profile
          </NavLink>
        </div>

        <div className="flex items-center gap-3">
          <div className="hidden sm:flex items-center gap-2 text-white/70">
            <div className="h-9 w-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center">
              <UserOutlined />
            </div>
            <div className="text-sm">
              Hi, <span className="text-white font-semibold">{userName}</span>
            </div>
          </div>

          <Button
            onClick={logout}
            icon={<LogoutOutlined />}
            rootClassName="!h-10 !rounded-xl !border-white/10 !bg-white/5 !text-white hover:!bg-white/10"
          >
            Logout
          </Button>
        </div>
      </div>

      <div className="md:hidden px-4 pb-4 flex gap-2">
        <NavLink to="/customer" end className={mobileLinkClass}>
          <AppstoreOutlined />
          Dashboard
        </NavLink>

        <NavLink to="/customer/bookings" className={mobileLinkClass}>
          <UserOutlined />
          Bookings
        </NavLink>
        <NavLink to="/customer/profile" className={mobileLinkClass}>
          <CalendarOutlined />
          My Profile
        </NavLink>
      </div>
    </div>
  );
};

export default CustomerNavbar;

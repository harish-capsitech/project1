import { Table, ConfigProvider, theme, Space, Segmented } from "antd";
import { UserDetail } from "../../utills/users";
import { SalonDetails } from "../../utills/salons";
import { useState } from "react";

const UserColumns = [
  {
    title: "Full Name",
    dataIndex: "fullName",
    key: "fullName",
  },
  {
    title: "Email",
    dataIndex: "userEmail",
    key: "userEmail",
  },
  {
    title: "Contact",
    dataIndex: "userContact",
    key: "userContact",
  },
  {
    title: "Action",
    key: "action",
    render: () => (
      <Space size="middle">
        <a className="text-sm font-thin">View Details</a>
        <a className="text-sm font-thin action-button">Block User</a>
      </Space>
    ),
  },
];
const AdminColumns = [
  {
    title: "Full Name",
    dataIndex: "salAdmName",
    key: "salAdmName",
  },
  {
    title: "Email",
    dataIndex: "salAdmEmail",
    key: "salAdmEmail",
  },
  {
    title: "Contact",
    dataIndex: "salAdmContact",
    key: "salAdmContact",
  },
  {
    title: "Action",
    key: "action",
    render: () => (
      <Space size="middle">
        <a className="text-sm font-thin">View Details</a>
        <a className="text-sm font-thin action-button">Block Admin</a>
      </Space>
    ),
  },
];
const Users = () => {
  const [view, setView] = useState<"admins" | "users">("admins");
  return (
    <ConfigProvider theme={{ algorithm: theme.darkAlgorithm }}>
      <div className=" p-5 bg-[#161a22] min-h-screen flex flex-col gap-3 ml-15 md:ml-54">
        <div className="flex flex-col">
          <h1 className="text-gray-200 text-2xl font-bold">
            {view === "admins" ? "Admins" : "Users"}
          </h1>
          <p className="text-gray-400 text-sm font-semibold">
            Manage All {view === "admins" ? "admins" : "users"}
          </p>
        </div>
        <Segmented
          options={[
            { label: "Admins", value: "admins" },
            { label: "Users", value: "users" },
          ]}
          value={view}
          onChange={setView}
          className="w-35 segmented-gap"
        />

        {view === "admins" && (
          <Table
            columns={AdminColumns}
            dataSource={SalonDetails}
            style={{ width: "100%" }}
            pagination={{ pageSize: 12 }}
            scroll={{ y: 720 }}
          />
        )}
        {view === "users" && (
          <Table
            columns={UserColumns}
            dataSource={UserDetail}
            pagination={{ pageSize: 12 }}
            scroll={{ y: 720 }}
          />
        )}
      </div>
    </ConfigProvider>
  );
};

export default Users;

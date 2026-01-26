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
        <a className="text-sm font-thin" >View Details</a>
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
        <a className="text-sm font-thin" >View Details</a>
        <a className="text-sm font-thin action-button">Block Admin</a>
      </Space>
    ),
  },
];
const Users = () => {
  const [view, setView] = useState<"admins" | "users">("admins")
  return (
    <div className="ml-54 p-5 bg-[#161a22] min-h-screen flex flex-col">
      <div className="flex flex-col gap-2 p-5">
        <h1 className="text-gray-200 text-4xl font-bold">{view==='admins'?'Admins':'Users'}</h1>
        <p className="text-gray-400 text-md font-semibold">Manage All {view==='admins'?'admins':'users'}</p>
      </div>
      <ConfigProvider theme={{ algorithm: theme.darkAlgorithm }}>
       <Segmented 
        options={[
          {label: 'Admins', value: 'admins'},
          {label: 'Users', value: 'users'},
        ]}
        value={view}
        onChange={setView}
        className="w-35 flex gap-5"
      />

      </ConfigProvider>
        {view === 'admins' && 
          <ConfigProvider theme={{ algorithm: theme.darkAlgorithm }}>
            <Table
              columns={AdminColumns}
              dataSource={SalonDetails}
              pagination={false}
              scroll={{ y: 684}}
            />
          </ConfigProvider>
        }
        {view === 'users' && 
          <ConfigProvider theme={{ algorithm: theme.darkAlgorithm}}>
            <Table
                columns={UserColumns}
                dataSource={UserDetail}
                pagination={false}
                scroll={{ y: 684}}
              />
          </ConfigProvider>
        }
        
    </div>
  );
};

export default Users;

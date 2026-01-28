import { DatePicker, ConfigProvider, Table, theme, Space } from "antd";
import { CalendarOutlined } from "@ant-design/icons";
import dayjs from "dayjs";

const columns = [
  {
    title: "Date",
    dataIndex: "date",
    key: "date",
  },
  {
    title: "Time",
    dataIndex: "time",
    key: "time",
  },
  {
    title: "Customer",
    dataIndex: "customer",
    key: "customer",
  },
  {
    title: "Employee",
    dataIndex: "employee",
    key: "employee",
  },
  {
    title: "Services",
    dataIndex: "services",
    key: "services",
  },
  {
    title: "Duration",
    dataIndex: "duration",
    key: "duration",
  },
  {
    title: "Price",
    dataIndex: "price",
    key: "price",
  },
  {
    title: "Status",
    dataIndex: "status",
    key: "status",
  },
  {
    title: "Actions",
    dataIndex: "actions",
    key: "actions",
    render: () => {
      return (
        <Space size='middle'>
          <a href="">See details</a>
        </Space>
      );
    }
  },
];
const Bookings = () => {
  return (
    <ConfigProvider theme={{ algorithm: theme.darkAlgorithm }}>
      <main className="bg-[#161a22] w-full min-h-screen ml-54 p-10 flex flex-col gap-10">
        <div className="flex justify-between">
          <div className="flex flex-col gap-2">
            <h1 className="text-gray-200 text-4xl font-bold">
              Bookings Management
            </h1>
            <p className="text-gray-400 text-xs font-semibold">
              View and manage all salon bookings
            </p>
          </div>
          <div className="flex items-center w-55 h-12 rounded-xl bg-[#0B1220] border border-white/10 shadow-2xl justify-center gap-5">
            <CalendarOutlined
              className="text-lg "
              style={{ color: "#6c5ce7" }}
            />
            <DatePicker
              defaultValue={dayjs("2026-01-28")}
              format="DD-MM-YYYY"
              allowClear={false}
              inputReadOnly
              suffixIcon={ <CalendarOutlined className="text-white/80 text-sm" />}
              rootClassName="!text-gray-200 !bg-[#0B1220] !border-none"
            />
          </div>
        </div>
        <Table
          columns={columns}
          pagination={{}}
          scroll={{ y: 400 }}
          className="rounded-2xl"
        />
      </main>
    </ConfigProvider>
  );
};

export default Bookings;

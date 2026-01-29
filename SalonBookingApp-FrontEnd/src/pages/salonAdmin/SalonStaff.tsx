import { useState } from "react";
import {
  Space,
  Typography,
  Tag,
  Divider,
  Switch,
  Button,
  Row,
  Col,
  ConfigProvider,
  theme,
  Form,
  Input,
} from "antd";
import {
  UserOutlined,
  MailOutlined,
  PhoneOutlined,
  EditOutlined,
  CloseOutlined,
  PlusOutlined,
} from "@ant-design/icons";
import { staff as staffData } from "../../utills/salonAdmin/staff";

const { Text, Title } = Typography;

const SalonStaff = () => {
  const [staff, setStaff] = useState(staffData);
  const [addStaff, setAddStaff] = useState(false);

  const toggleActive = (index: number, checked: boolean) => {
    setStaff((prev) =>
      prev.map((item, i) =>
        i === index ? { ...item, active: checked } : item,
      ),
    );
  };

  return (
    <main className="bg-[#161a22] w-full min-h-screen ml-54 p-10 flex flex-col gap-10">
      <div className="flex justify-between">
        <div className="flex flex-col gap-2">
          <h1 className="text-gray-200 text-4xl font-bold">
            Salon Admin Dashboard
          </h1>
          <p className="text-gray-400 text-xs font-semibold">
            Welcome back! Here's your salon overview
          </p>
        </div>
        <div className="flex">
          <button
            className="bg-[#6c5ce7] text-white px-4 flex items-center gap-2 h-10 rounded-2xl"
            onClick={() => setAddStaff(true)}
          >
            <PlusOutlined />
            Add Staff
          </button>
        </div>
      </div>

      <Row gutter={[32, 32]}>
        {staff.map((data, index) => (
          <Col key={index} xs={24} sm={24} md={12} lg={10} xl={8}>
            <div
              className="p-5 rounded-2xl bg-[#0f172a] border border-[#262b3a] shadow-2xl mb-5"
              key={index}
            >
              <Space
                align="start"
                style={{ width: "100%", justifyContent: "space-between" }}
              >
                <Space align="start" size={14}>
                  <div
                    style={{
                      width: 46,
                      height: 46,
                      borderRadius: 999,
                      background: "rgba(108,92,231,0.15)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <UserOutlined style={{ fontSize: 20, color: "#6c5ce7" }} />
                  </div>

                  <Space direction="vertical" size={6}>
                    <Title level={4} style={{ margin: 0, color: "white" }}>
                      {data.empName}
                    </Title>

                    <Tag
                      color={data.active ? "green" : "default"}
                      style={{
                        width: "fit-content",
                        borderRadius: 999,
                        fontWeight: 600,
                        margin: 0,
                      }}
                    >
                      {data.active ? "Active" : "Inactive"}
                    </Tag>
                  </Space>
                </Space>

                <Button
                  type="default"
                  shape="circle"
                  icon={<EditOutlined />}
                  style={{
                    background: "transparent",
                    border: "1px solid rgba(255,255,255,0.12)",
                    color: "white",
                  }}
                />
              </Space>

              <Divider style={{ borderColor: "rgba(255,255,255,0.08)" }} />

              <Space direction="vertical" size={10}>
                <Space size={10}>
                  <MailOutlined style={{ color: "rgba(255,255,255,0.55)" }} />
                  <Text style={{ color: "rgba(255,255,255,0.70)" }}>
                    {data.empEmail}
                  </Text>
                </Space>

                <Space size={10}>
                  <PhoneOutlined style={{ color: "rgba(255,255,255,0.55)" }} />
                  <Text style={{ color: "rgba(255,255,255,0.70)" }}>
                    {data.phone}
                  </Text>
                </Space>
              </Space>

              <Divider style={{ borderColor: "rgba(255,255,255,0.08)" }} />

              <Text
                style={{ color: "rgba(255,255,255,0.55)", fontWeight: 600 }}
              >
                Assigned Services
              </Text>

              <div style={{ marginTop: 12 }}>
                <Space size={[10, 10]} wrap>
                  {data.services.map((service: string) => (
                    <Tag
                      key={service}
                      style={{
                        borderRadius: 999,
                        padding: "4px 12px",
                        background: "rgba(108,92,231,0.15)",
                        border: "1px solid rgba(108,92,231,0.25)",
                        color: "#6c5ce7",
                        fontWeight: 600,
                        margin: 0,
                      }}
                    >
                      {service}
                    </Tag>
                  ))}
                </Space>
              </div>

              <Divider style={{ borderColor: "rgba(255,255,255,0.08)" }} />

              <Space style={{ width: "100%", justifyContent: "space-between" }}>
                <Space size={10}>
                  <Switch
                    checked={data.active}
                    onChange={(checked) => toggleActive(index, checked)}
                  />
                  <Text
                    style={{
                      color: "rgba(255,255,255,0.75)",
                      fontWeight: 600,
                    }}
                  >
                    Active
                  </Text>
                </Space>

                <Button
                  style={{
                    borderRadius: 12,
                    background: "transparent",
                    border: "1px solid rgba(255,255,255,0.12)",
                    color: "white",
                    paddingInline: 18,
                  }}
                >
                  Edit
                </Button>
              </Space>
            </div>
          </Col>
        ))}
      </Row>
      {addStaff && (
        <div className="fixed inset-0 bg-black/50 flex justify-center items-center p-4">
          <div className="bg-[#111827] p-6 rounded-md w-full max-w-lg relative text-gray-200 flex flex-col">
            <span
              className="absolute right-5 text-gray-400 hover:text-gray-500 duration-200"
              onClick={() => setAddStaff(false)}
            >
              <CloseOutlined />
            </span>
            <h2 className="text-lg font-semibold ">Add New Employee</h2>
            <p className="mb-4">Enter the details of the new employee.</p>
            <ConfigProvider theme={{ algorithm: theme.darkAlgorithm }}>
              <Form
                name="basic"
                initialValues={{ remember: true }}
                // onFinish={onFinish}
                // onFinishFailed={onFinishFailed}
                autoComplete="off"
                layout="vertical"
              >
                <Form.Item
                  label={<span className="text-white">Full Name</span>}
                  required
                  name="title"
                >
                  <Input />
                </Form.Item>
                <Form.Item
                  label={<span className="text-white">Email</span>}
                  required
                  name="duration"
                >
                  <Input />
                </Form.Item>
                <Form.Item
                  label={<span className="text-white">Phone</span>}
                  name="price"
                  required
                >
                  <Input />
                </Form.Item>
              </Form>
              <Form.Item label={null}>
                <Button type="primary" htmlType="submit" className="w-full">
                  Create Employee
                </Button>
              </Form.Item>
            </ConfigProvider>
          </div>
        </div>
      )}
    </main>
  );
};

export default SalonStaff;

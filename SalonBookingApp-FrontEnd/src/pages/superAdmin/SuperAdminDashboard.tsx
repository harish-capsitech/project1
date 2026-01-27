import React from "react";
import { Row, Col, Card, Table, ConfigProvider, theme, Space} from "antd";
import { Line } from "@ant-design/plots";
import ColumnChart from "@ant-design/plots/es/components/column";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { superAdminDash, revenueData } from "../../utills/data";
import { SalonDetails } from "../../utills/salons";
import { Content } from "antd/es/layout/layout";

const columns = [
  { 
    title: "Salon Name",
    dataIndex: "salonName",
    key: "salonName",
  },
  {
    title: "Email",
    dataIndex: "salonEmail",
    key: "salonEmail",
  },
  {
    title: "Contact",
    dataIndex: "salonContact",
    key: "salonContact",
  },
  {
    title: "Action",
    key: "action",
    render: () => (
      <Space size="middle">
        <a>View Details</a>
      </Space>
    ),
  },
]

const SuperAdminDashboard: React.FC = () => {
  const axis = {
    xAxis: {
      label: { style: { fill: '#fff' } },
      line: { style: { stroke: '#fff' } },
      tickLine: { style: { stroke: '#fff' } },
    },
    yAxis: {
      label: { style: { fill: '#fff' } },
      line: { style: { stroke: '#fff' } },
      grid: { line: { style: { stroke: '#333' } } },
    },
  };
  const lineConfig = {
    data: revenueData,
    xField: "month",
    yField: "totalRevenue",
    smooth: true,
    height: 300,
    theme: 'dark',
    ...axis,
  };
  const columnConfig = {
    data: revenueData,
    xField: "month",
    yField: "totalRevenue",
    height: 300,
    theme: 'dark',

    ...axis,
  };

  return (
    
    <div className="bg-[#161a22] w-full min-h-screen ml-54 flex flex-wrap">
      <Content>
        <div className="p-10 flex flex-col gap-10">

          <div className="flex flex-col gap-2">
            <h1 className="text-gray-200 text-4xl font-bold">
              Super Admin Dashboard
            </h1>
            <p className="text-gray-400 text-md font-semibold">
              Manage all salons and monitor system-wide metrics
            </p>
          </div>

          <Row gutter={[32, 32]} justify="center">
            {superAdminDash.map((data, index) => (
              <Col key={index} xs={24} sm={12} md={8} lg={6}>
                <Card className="rounded-xl h-40" style={{backgroundColor: '#242a35', borderColor: '#262b3a'}}>
                  <div className="flex flex-col gap-2">
                    <h2 className="text-gray-400">{data.heading}</h2>
                    <span className="text-3xl font-bold text-gray-100">
                      {data.total}
                    </span>
                    <p className="text-green-500">{data.growth}</p>
                  </div>

                  <FontAwesomeIcon
                    icon={data.icon}
                    style={{
                      position: "absolute",
                      top: "24px",
                      right: "24px",
                      fontSize: "20px",
                      backgroundColor: "#1e2036",
                      color: "#6c5ce7",
                      padding: "10px",
                      borderRadius: "12px",
                    }}
                  />
                </Card>
              </Col>
            ))}
          </Row>


          <div className="flex flex-col gap-10 rounded-2xl border border-[#262b3a] p-5">
            <h1 className="text-3xl font-semibold text-gray-200">Growth</h1>

            <Row gutter={[24, 24]}>
              <Col xs={24} lg={12}>
                <Line {...lineConfig} />
              </Col>

              <Col xs={24} lg={12}>
                <ColumnChart {...columnConfig} />
              </Col>
            </Row>
          </div>
        </div>
      </Content>
      <div className="px-10 pb-5 w-full">
        <ConfigProvider theme={{algorithm: theme.darkAlgorithm}}>
          {/* <Table columns={columns} dataSource={SalonDetails} pagination={false} scroll={{y:400}} /> */}
          <Table columns={columns} dataSource={SalonDetails} pagination={{}}/>
        </ConfigProvider>


      </div>
    </div>
  );
};

export default SuperAdminDashboard;

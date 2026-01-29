import { Layout, Card, Row, Col, Typography, Space ,Input, type MenuProps, Dropdown, Button, Menu } from "antd";
import { HomeOutlined, TeamOutlined, ToolOutlined } from "@ant-design/icons";
import { SalonDetails } from "../../utills/salons";
import { MoreOutlined } from "@ant-design/icons";

const { Content } = Layout;
const { Title, Text } = Typography;
const {Search} = Input;

const dropdownStyle: React.CSSProperties = { 
  position: 'absolute',
  top: 24,
  right: 24,
  zIndex: 10,
  background: "#242a35",
  padding: '4px',
  borderRadius: 8,
  border: '1px solid #262b3a',
};

const SalonsDetail = () => {
  const items: MenuProps['items'] = [
    {
      key: 'edit',
      label: 'Edit',
      danger: false,
    },
    {
      key: 'delete',
      label: 'Delete',
      danger: true,
    },
  ];
  return (

    <Layout
      style={{
        marginLeft: "216px",
        backgroundColor: "#161a22",
        minHeight: "100vh",
      }}
      
    >
      <Content className="p-5">
        <Space orientation="vertical" style={{ width: "100%", display: 'flex', flexDirection: 'column' }}>
          <div className="">
            <Title style={{ color: "#e5e7eb",}} level={2} >
              Salons
            </Title>
            <Search placeholder="Enter Salon Name " className="dark-search"/>
            <div className="h-200 overflow-y-auto overflow-x-hidden px-2">
              <Row gutter={[24, 32]} >
                {SalonDetails.map((data, index) => (
                  <Col key={index} xs={24} sm={24} md={12} lg={10} xl={8} >
                    <Card
                      style={{
                        backgroundColor: "#242a35",
                        border: "1px solid #262b3a",
                        borderRadius: 16,
                        height: "100%",
                      }}
                    > 
                      <div style={dropdownStyle}>
                        <Dropdown
                          popupRender={() => (
                            <Menu
                              theme="dark"
                              items={items}
                              style={{ background: '#242a35', border: '1px solid #262b3a', color: 'white' }}
                            />
                          )}
                          trigger={['click']}
                        >
                          <Button type="text" icon={<MoreOutlined className="text-2xl bg-[#1e2036] p-2.5 rounded-xl " style={{color: '#6c5ce7'}}/>} />
                        </Dropdown>
                      </div>
                      <div className="border-b border-b-[#9ca3af] pb-4 mb-4">
                        <HomeOutlined
                          style={{
                            fontSize: 22,
                            backgroundColor: "#1e2036",
                            color: "#6c5ce7",
                            padding: 10,
                            borderRadius: 12,
                            marginBottom: 12,
                          }}
                        />

                        <Title level={3} style={{ color: "#f9fafb" }}>
                          {data.salonName}
                        </Title>

                        <Text style={{ color: "#9ca3af", display: "block" }}>
                          {data.salonEmail}
                        </Text>
                        <Text style={{ color: "#9ca3af" }}>
                          {data.salonContact}
                        </Text>
                      </div>

                      <Space size={32}>
                        <Space>
                          <ToolOutlined
                            style={{ color: "#9ca3af", fontSize: 18 }}
                          />
                          <Text
                            style={{
                              color: "#f9fafb",
                              fontSize: 18,
                              fontWeight: 600,
                            }}
                          >
                            {data.salonServices}
                          </Text>
                        </Space>

                        <Space>
                          <TeamOutlined
                            style={{ color: "#9ca3af", fontSize: 18 }}
                          />
                          <Text
                            style={{
                              color: "#f9fafb",
                              fontSize: 18,
                              fontWeight: 600,
                            }}
                          >
                            {data.salonStaff}
                          </Text>
                        </Space>
                      </Space>
                    </Card>
                  </Col>
                ))}
              </Row>
            </div>
          </div>
        </Space>
      </Content>

    </Layout>
  );
};

export default SalonsDetail;

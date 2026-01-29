import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { empDashData } from "../../utills/employee/empData"
import { Row, Col, Card } from "antd";
import { faClock } from "@fortawesome/free-regular-svg-icons";
import { MinusOutlined } from "@ant-design/icons";

const EmployeeDashboard = () => {
  return (
    <main className="bg-[#161a22] w-full min-h-screen ml-54 p-10 flex flex-col gap-10">
      <div className="flex flex-col gap-2">
        <h1 className="text-gray-200 text-4xl font-bold">
          Bookings Management
        </h1>
        <p className="text-gray-400 text-xs font-semibold">
          View and manage all salon bookings
        </p>
      </div>
      <Row gutter={[32, 32]} justify="center">
        {empDashData.map((data, index) => (
          <Col key={index} xs={24} sm={12} md={8} lg={8} xl={8} >
            <Card
              className="rounded-xl h-40"
              style={{ backgroundColor: "#242a35", borderColor: "#262b3a" }}
            >
              <div className="flex flex-col gap-2">
                <h2 className="text-gray-400">{data.heading}</h2>
                <span className="text-3xl font-bold text-gray-100">
                  {data.total}
                </span>
                <p className="text-green-500">{data.growth}</p>
              </div>

              <FontAwesomeIcon className="absolute top-6 right-6 text-xl bg-[#1e2036] text-[#6c5ce7] p-2.5 rounded-xl" icon={data.icon}/>
            </Card>
          </Col>
        ))}
      </Row>
      <div className="flex flex-col gap-10 rounded-2xl border border-[#262b3a] p-5 min-h-100">
         <h1 className="text-3xl font-semibold text-gray-200">Today's Schedule</h1>
      </div>
      <div className="flex flex-col gap-10 rounded-2xl border border-[#262b3a] p-5 min-h-50">
         <h1 className="text-3xl font-semibold text-gray-200">Your Working Hours Today</h1>
         <div className="flex gap-5 items-center">
          <div className=" bg-[#1c2230] h-20 w-50 flex items-center gap-4 px-7 rounded-2xl ">
            <FontAwesomeIcon icon={faClock} className="text-[#6c5ce7] text-3xl"/>
            <h2>
              <p className="text-gray-300">Start Time</p>
              <p className="text-white text-2xl font-bold">9:00</p>
            </h2>
          </div>
          <h2 className="text-2xl text-[#1c2230] font-bold"><MinusOutlined /></h2>
          <div className=" bg-[#1c2230] h-20 w-50 flex items-center gap-4 px-7 rounded-2xl ">
            <FontAwesomeIcon icon={faClock} className="text-[#6c5ce7] text-3xl"/>
            <h2>
              <p className="text-gray-300">End Time</p>
              <p className="text-white text-2xl font-bold">18:00</p>
            </h2>
          </div>
         </div>
      </div>
    </main>
  );
};

export default EmployeeDashboard;

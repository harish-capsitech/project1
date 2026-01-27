import React from "react";
import { Button, Typography } from "antd";
import {
  ShopOutlined,
  MailOutlined,
  PhoneOutlined,
  EnvironmentOutlined,
} from "@ant-design/icons";
import { salonsRequests } from "../../utills/salonsRequests";
const { Title } = Typography;
const ManageSalonRequests: React.FC = () => {
  return (
    <div className="flex flex-col bg-[#161a22] ml-54 w-full min-h-screen">
      <div className="p-5 flex flex-col gap-10">
        <div className="flex flex-col gap-2 px-5 pt-5">
          <h1 className="text-gray-200 text-4xl font-bold">Salon Requests</h1>
          <p className="text-gray-400 text-md font-semibold">
            View and manage all salon requests
          </p>
        </div>

        <div className="p-5">
          <Title style={{ color: "#e5e7eb" }}>Requests</Title>

          <div className="flex flex-wrap gap-8 w-full py-5 px-10">
            {salonsRequests.map((data, index) => (
              <div
                key={index}
                className="flex gap-2 w-full border rounded-xl p-5 justify-between hover:border-[#6c5ce7]"
                style={{ borderColor: "#555" }}
              >
                <div className="flex flex-col px-2 gap-3">
                  <h2 className="text-2xl text-white font-bold flex items-center gap-2">
                    <ShopOutlined className="text-xl" />
                    <span>{data.salonName}</span>
                  </h2>
                  <p className="text-xl text-gray-400 flex items-center gap-2">
                    <MailOutlined />
                    <span>{data.salonEmail}</span>
                  </p>
                  <p className="text-lg text-gray-400 flex items-center gap-2">
                    <PhoneOutlined className="text-xl" />
                    <span>{data.salonContact}</span>
                  </p>
                  <p className="text-lg text-gray-400 flex items-center gap-2">
                    <EnvironmentOutlined className="text-xl" />
                    <span>{data.salonAddress}</span>
                  </p>
                </div>

                <div className="flex gap-5 items-center">
                  <Button
                    type="default"
                    style={{
                      color: "#32cd32",
                      borderRadius: "12px",
                      borderColor: "#161a22",
                      padding: "2px 12px",
                      backgroundColor: "transparent",
                    }}
                    onMouseEnter={(e) => (
                      (e.currentTarget.style.color = "#22c55e"),
                      (e.currentTarget.style.borderColor = "#22c55e80")
                    )}
                    onMouseLeave={(e) => (
                      (e.currentTarget.style.color = "#32cd32"),
                      (e.currentTarget.style.borderColor = "#161a22")
                    )}
                  >
                    Approve
                  </Button>

                  <Button
                    type="default"
                    style={{
                      color: "#f87171",
                      borderRadius: "12px",
                      borderColor: "#161a22",
                      padding: "2px 12px",
                      backgroundColor: "transparent",
                    }}
                    onMouseEnter={(e) => (
                      (e.currentTarget.style.color = "#ef4444"),
                      (e.currentTarget.style.borderColor = "#ef444480")
                    )}
                    onMouseLeave={(e) => (
                      (e.currentTarget.style.color = "#f87171"),
                      (e.currentTarget.style.borderColor = "#161a22")
                    )}
                  >
                    Reject
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManageSalonRequests;

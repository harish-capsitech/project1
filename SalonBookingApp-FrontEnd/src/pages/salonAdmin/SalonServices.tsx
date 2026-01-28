import React, { useEffect, useState } from "react";
import { Button, Switch, Tag, Divider } from "antd";
import { EditOutlined, ClockCircleOutlined } from "@ant-design/icons";
import { Services } from "../../utills/salonAdmin/services";

type Service = {
  id: number;
  title: string;
  duration: string;
  price: number;
  currency: string;
  defaultActive: boolean;
};

const SalonServices: React.FC = () => {
  const [serviceState, setServiceState] = useState<Record<number, boolean>>({});

  useEffect(() => {
    const initial: Record<number, boolean> = {};
    (Services as Service[]).forEach((s) => {
      initial[s.id] = s.defaultActive;
    });
    setServiceState(initial);
  }, []);

  const toggleService = (id: number, checked: boolean) => {
    setServiceState((prev) => ({ ...prev, [id]: checked }));
  };

  return (
    <main className="bg-[#161a22] w-full min-h-screen ml-54 p-10 flex flex-col gap-10">
      <div className="flex flex-col gap-2">
        <h1 className="text-gray-200 text-4xl font-bold">Services Management</h1>
        <p className="text-gray-400 text-xs font-semibold">
          Manage your salon services and pricing
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {(Services as Service[]).map((data) => {
          const active = serviceState[data.id] ?? data.defaultActive;

          return (
            <div
              key={data.id}
              className="w-full rounded-2xl border border-[#6c5ce7]/50 bg-[#111827] shadow-xl p-6"
            >
              <div className="flex items-start justify-between">
                <div className="flex flex-col gap-2">
                  <h2 className="text-white text-2xl font-semibold leading-none">
                    {data.title}
                  </h2>

                  <Tag
                    color={active ? "green" : "red"}
                    className="w-fit rounded-full px-3 py-0.5 font-semibold"
                  >
                    {active ? "Active" : "Inactive"}
                  </Tag>
                </div>
                <Button type="default" icon={<EditOutlined />} style={{backgroundColor: '#0b1220', color:'gray', border: '1px solid gray'}}/>
              </div>

              <Divider className="border-white/10 my-4" />

              <div className="flex items-center gap-3 text-[#9ca3af] font-medium">
                <ClockCircleOutlined className="text-lg" />
                <span>{data.duration}</span>
              </div>

              <div className="flex items-baseline gap-2 mt-4"> 
                <span className="text-white text-3xl font-bold"> {data.currency} {' '} {data.price} </span>
              </div>

              <Divider className="border-white/10 my-4" />

              <div className="flex items-center justify-between">
                <span className="text-[#9ca3af] font-medium">Toggle Status</span>
                <Switch checked={active} onChange={(checked) => toggleService(data.id, checked)} />
              </div>
            </div>
          );
        })}
      </div>
    </main>
  );
};

export default SalonServices;

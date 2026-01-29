import React, { useMemo, useState } from "react";
import { Button, Input, Tag, ConfigProvider, theme } from "antd";
import {
  SearchOutlined,
  ScissorOutlined,
  ClockCircleOutlined,
  ShopOutlined,
  RightOutlined,
} from "@ant-design/icons";
import { SalonDetails } from "../../utills/salons";

import { type SalonsDatatype } from "../../utills/salons";

const CustomerDashboard: React.FC = () => {
  const [key, setKey] = useState("");
  const [query, setQuery] = useState("");

  const filteredSalons = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return SalonDetails;
    return SalonDetails.filter(
      (s: SalonsDatatype) =>
        s.salonName.toLowerCase().includes(q) ||
        s.city.toLowerCase().includes(q) ||
        s.category.toLowerCase().includes(q) ||
        s.services.some((service)=> service.name.toLowerCase().includes(q))
      );
  }, [query]);

  return (
    <ConfigProvider theme={{ algorithm: theme.darkAlgorithm }}>
      <div className="text-white">
        <div className="px-4 lg:px-8 py-6 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <QuickCard
              icon={<ShopOutlined />}
              title="Explore Salons"
              desc="Browse available salons"
            />
            <QuickCard
              icon={<ScissorOutlined />}
              title="Select Services"
              desc="Add multiple services in one booking"
            />
            <QuickCard
              icon={<ClockCircleOutlined />}
              title="Smart Slots"
              desc="Slots auto-calc from working hours"
            />
          </div>
          <div className="rounded-3xl border border-white/10 bg-[#0F1422] p-6 flex flex-col lg:flex-row lg:items-center justify-between gap-4">
            <div>
              <h1 className="text-2xl font-bold">
                Find & Book Services in Your City
              </h1>
              <p className="text-sm text-white/60 mt-1">
                Choose a salon, select services and book your slot.
              </p>
            </div>

            <div className="w-full lg:w-105">
              <Input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search salon by name, category or city..."
                prefix={<SearchOutlined style={{ color: "gray" }} />}
                rootClassName="!h-11 !rounded-2xl !bg-[#0B0F19] !border-white/10 !text-white placeholder:!text-white/30"
              />
            </div>
          </div>
          <div className="rounded-3xl border border-white/10 bg-[#0F1422] p-6">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-lg font-bold">Available Salons</div>
                <div className="text-sm text-white/50">
                  Select a salon to continue booking000
                </div>
              </div>

              <div className="text-xs text-white/40">
                {filteredSalons.length} found
              </div>
            </div>

            <div className="mt-5 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 max-h-100 overflow-y-auto">
              {filteredSalons.map((s) => (
                <div
                  key={s.key}
                  className="rounded-2xl border border-white/10 bg-[#0B0F19] p-5 hover:bg-white/5 transition"
                >
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <div className="font-semibold text-lg">
                        {s.salonName} {`(${s.category})`}
                      </div>
                      <div className="text-sm text-white/50 mt-1">{s.city}</div>
                    </div>
                    <Tag
                      rootClassName="!rounded-full !px-3 !py-1"
                      color={s.status === "Open" ? "green" : "red"}
                    >
                      {s.status}
                    </Tag>
                  </div>

                  <div className="mt-4 flex items-center justify-between ">
                    <span className="text-md text-white/60">Services: </span>
                    <div className="flex gap-2">
                      {s.services.map((a,i) => (
                        <span className="text-white text-sm" key={i}>
                          {a.name}
                          {i < s.services.length-1 ? ", " : ' '}
                        </span>
                      ))}
                    </div>
                  </div>

                  <Button
                    icon={<RightOutlined />}
                    rootClassName="mt-4 w-full !h-11 !rounded-2xl !bg-[#6D5EF1] !border-[#6D5EF1] !text-white hover:!bg-[#5B4BEE]"
                    onClick={() => {
                      setKey(s.key);
                      window.location.href = "/customer/book";
                      console.log(key);
                    }}
                  >
                    Select Salon
                  </Button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </ConfigProvider>
  );
};

export default CustomerDashboard;

function QuickCard({
  icon,
  title,
  desc,
}: {
  icon: React.ReactNode;
  title: string;
  desc: string;
}) {
  return (
    <div className="rounded-2xl border border-white/10 bg-[#0F1422] p-5">
      <div className="flex items-start gap-4">
        <div className="h-11 w-11 rounded-2xl bg-[#6D5EF1]/15 border border-[#6D5EF1]/25 flex items-center justify-center text-[#8F86FF]">
          {icon}
        </div>
        <div>
          <div className="font-semibold">{title}</div>
          <div className="text-sm text-white/50 mt-1">{desc}</div>
        </div>
      </div>
    </div>
  );
}

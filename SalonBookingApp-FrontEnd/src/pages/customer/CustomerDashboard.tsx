import React, { useMemo, useState } from "react";
import { Button, Input, Tag } from "antd";
import {  SearchOutlined, ScissorOutlined, ClockCircleOutlined, ShopOutlined, RightOutlined, } from "@ant-design/icons";

type SalonCard = {
  id: string;
  name: string;
  location: string;
  status: "Open" | "Closed";
  rating: number;
};

const CustomerDashboard: React.FC = () => {
  
  const [query, setQuery] = useState("");

  const salons: SalonCard[] = [
    { id: "1", name: "Glamour Studio", location: "Jaipur", status: "Open", rating: 4.5 },
    { id: "2", name: "Elite Hair", location: "Delhi", status: "Open", rating: 4.2 },
    { id: "3", name: "Urban Styles", location: "Kota", status: "Closed", rating: 4.0 },
  ];

  const filteredSalons = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return salons;
    return salons.filter(
      (s) =>
        s.name.toLowerCase().includes(q) ||
        s.location.toLowerCase().includes(q)
    );
  }, [query]);

  

  return (
    <div className="min-h-screen bg-[#0B0F19] text-white">
      

      <div className="px-4 lg:px-8 py-6 space-y-6">
        <div className="rounded-3xl border border-white/10 bg-[#0F1422] p-6 flex flex-col lg:flex-row lg:items-center justify-between gap-4">
          <div>
            <h1 className="text-2xl font-bold">Find & Book Services</h1>
            <p className="text-sm text-white/60 mt-1">
              Choose a salon, select services and book your slot.
            </p>
          </div>

          <div className="w-full lg:w-105">
            <Input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search salon by name or city..."
              prefix={<SearchOutlined className="text-white/40" />}
              rootClassName="!h-11 !rounded-2xl !bg-[#0B0F19] !border-white/10 !text-white placeholder:!text-white/30"
            />
          </div>
        </div>

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

        <div className="rounded-3xl border border-white/10 bg-[#0F1422] p-6">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-lg font-bold">Available Salons</div>
              <div className="text-sm text-white/50">
                Select a salon to continue booking
              </div>
            </div>

            <div className="text-xs text-white/40">
              {filteredSalons.length} found
            </div>
          </div>

          <div className="mt-5 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
            {filteredSalons.map((s) => (
              <div
                key={s.id}
                className="rounded-2xl border border-white/10 bg-[#0B0F19] p-5 hover:bg-white/5 transition"
              >
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <div className="font-semibold text-lg">{s.name}</div>
                    <div className="text-sm text-white/50 mt-1">
                      {s.location}
                    </div>
                  </div>
                  <Tag
                    rootClassName="!rounded-full !px-3 !py-1"
                    color={s.status === "Open" ? "green" : "red"}
                  >
                    {s.status}
                  </Tag>
                </div>

                <div className="mt-4 flex items-center justify-between text-sm text-white/60">
                  <span>Rating</span>
                  <span className="text-white font-semibold">{s.rating}</span>
                </div>

                <Button
                  icon={<RightOutlined />}
                  rootClassName="mt-4 w-full !h-11 !rounded-2xl !bg-[#6D5EF1] !border-[#6D5EF1] !text-white hover:!bg-[#5B4BEE]"
                  onClick={() => {
                    window.location.href = "/customer/book";
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

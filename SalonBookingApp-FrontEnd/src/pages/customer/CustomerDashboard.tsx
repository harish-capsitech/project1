import React, { useMemo, useState } from "react";
import { Button, Input, Tag, ConfigProvider, theme } from "antd";
import {
  SearchOutlined,
  ScissorOutlined,
  ClockCircleOutlined,
  ShopOutlined,
  RightOutlined,
  AppstoreAddOutlined,
  EnvironmentOutlined, 
} from "@ant-design/icons";
import { SalonDetails } from "../../utills/salons";

import { type SalonsDatatype, type SalonService } from "../../utills/salons";

const CustomerDashboard: React.FC = () => {
  const [query, setQuery] = useState("");
  const [openBooking, setOpenBooking] = useState(false);
  const [salonKey, setSalonKey] = useState("")


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

  const filteredServices = filteredSalons.map((ser)=>(
      ser.services.filter((serv: SalonService)=>{
        serv.id.includes(salonKey)
      })
    ))

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
                  Select a salon to continue booking
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
                  className="rounded-2xl border min-w-110 md:min-w-90 border-white/10 bg-[#0B0F19] p-5 hover:bg-white/5 transition"
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
                    <div className="">
                      {s.services.map((a,i) => (
                        <span className="text-white text-xs" key={i}>
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
                      console.log(s.key)
                      setOpenBooking(true)
                      setSalonKey(s.key)
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
      {openBooking && (
        <ConfigProvider theme={{algorithm: theme.darkAlgorithm}}>
          <main className={`fixed inset-0 top-20 text-white bg-white/50 w-100 transform transition-transform duration-1000 ease-in-out ${openBooking ? "translate-x-0" : "-translate-x-full"}`}>

            <div className="rounded-3xl border text-white border-white/10 bg-[#0F1422] p-6 flex flex-col lg:flex-row lg:items-center justify-between gap-4">
              <div>
                <div className="inline-flex items-center gap-2 rounded-full border border-[#6D5EF1]/30 bg-[#6D5EF1]/15 px-4 py-2 text-xs text-[#B6B0FF]">
                  <AppstoreAddOutlined />
                  New Booking
                </div>

                <h1 className="mt-4 text-2xl font-bold">Book Appointment</h1>

                <div className="mt-2 text-sm text-white/60 flex items-center gap-2">
                  <ShopOutlined />
                  {salonKey}
                  <span className="text-white/25">•</span>
                  <EnvironmentOutlined />
                  {salonKey}
                </div>
              </div>

              <div className="flex gap-3 flex-wrap">
                <div className="rounded-2xl border border-white/10 bg-[#0B0F19] px-5 py-3">
                  <div className="text-xs text-white/50">Total Duration</div>
                  <div className="mt-1 text-lg font-bold flex items-center gap-2">
                    <ClockCircleOutlined className="text-[#8F86FF]" />
                    {salonKey} min
                  </div>
                </div>

                <div className="rounded-2xl border border-white/10 bg-[#0B0F19] px-5 py-3">
                  <div className="text-xs text-white/50">Total Price</div>
                  <div className="mt-1 text-lg font-bold">₹{salonKey}</div>
                </div>
              </div>
            </div>
            <div className="lg:col-span-2 rounded-3xl border border-white/10 bg-[#0F1422] p-6">
              <div className="flex items-center justify-between">
                <div className="text-lg font-bold flex items-center gap-2">
                  <ScissorOutlined className="text-[#8F86FF]" />
                  Select Services
                </div>
                <div className="text-xs text-white/40">
                  Choose multiple services (single time block)
                </div>
              </div>
              {filteredServices.map((id: SalonService)=>(
                <h1>{id} ss</h1>
              ))}
            </div>
          </main>
        </ConfigProvider>
      )}
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

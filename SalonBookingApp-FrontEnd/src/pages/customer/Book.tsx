/* eslint-disable react-hooks/exhaustive-deps */
import React, { useMemo, useState } from "react";
import { Button, DatePicker, Select, message, Tag, ConfigProvider, theme } from "antd";
import {
  AppstoreAddOutlined,
  CalendarOutlined,
  ClockCircleOutlined,
  EnvironmentOutlined,
  ScissorOutlined,
  ShopOutlined,
  TeamOutlined,
} from "@ant-design/icons";
import dayjs, { Dayjs } from "dayjs";

type Service = {
  id: string;
  name: string;
  durationMin: number;
  price: number;
};

type Employee = {
  id: string;
  name: string;
  active: boolean;
};

const Book: React.FC = () => {
  const selectedSalon = useMemo(() => {
    const salonName =
      localStorage.getItem("selectedSalonName") || "Selected Salon";
    const salonLocation =
      localStorage.getItem("selectedSalonLocation") || "Jaipur";
    return { salonName, salonLocation };
  }, []);

  const services: Service[] = [
    { id: "s1", name: "Haircut", durationMin: 30, price: 199 },
    { id: "s2", name: "Beard Trim", durationMin: 15, price: 99 },
    { id: "s3", name: "Facial", durationMin: 30, price: 399 },
    { id: "s4", name: "Hair Spa", durationMin: 45, price: 499 },
    { id: "s5", name: "Massage", durationMin: 30, price: 599 },
  ];

  const employees: Employee[] = [
    { id: "e1", name: "Rohit", active: true },
    { id: "e2", name: "Neha", active: true },
    { id: "e3", name: "Amit", active: false },
  ];

  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [employeeId, setEmployeeId] = useState<string>("");
  const [date, setDate] = useState<Dayjs | null>(dayjs());
  const [selectedSlot, setSelectedSlot] = useState<string>("");
  const [loading, setLoading] = useState(false);

  const totals = useMemo(() => {
    const selected = services.filter((s) => selectedServices.includes(s.id));
    const totalDuration = selected.reduce((sum, s) => sum + s.durationMin, 0);
    const totalPrice = selected.reduce((sum, s) => sum + s.price, 0);
    return { totalDuration, totalPrice };
  }, [selectedServices]);

  const slots = useMemo(() => {
    if (selectedServices.length === 0) return [];
    return [
      "10:00 AM",
      "10:30 AM",
      "11:00 AM",
      "12:00 PM",
      "01:30 PM",
      "03:00 PM",
      "04:30 PM",
      "06:00 PM",
    ];
  }, [selectedServices]);

  const disabledBook = useMemo(() => {
    return (
      selectedServices.length === 0 ||
      !employeeId ||
      !date ||
      !selectedSlot
    );
  }, [selectedServices, employeeId, date, selectedSlot]);

  const handleBook = async () => {
    if (disabledBook) {
      message.error("Please select services, employee, date and time slot.");
      return;
    }

    setLoading(true);

    const payload = {
      salon: selectedSalon,
      employeeId,
      serviceIds: selectedServices,
      date: date?.format("YYYY-MM-DD"),
      timeSlot: selectedSlot,
      totalDurationMin: totals.totalDuration,
      totalPrice: totals.totalPrice,
    };

    setTimeout(() => {
      setLoading(false);
      console.log("Booking payload:", payload);
      message.success("Booking request submitted ");
    }, 900);
  };

  return (
    <ConfigProvider theme={{algorithm: theme.darkAlgorithm}}>

      <div className="min-h-screen bg-[#0B0F19] text-white px-4 lg:px-8 py-6">
        <div className="rounded-3xl border border-white/10 bg-[#0F1422] p-6 flex flex-col lg:flex-row lg:items-center justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-[#6D5EF1]/30 bg-[#6D5EF1]/15 px-4 py-2 text-xs text-[#B6B0FF]">
              <AppstoreAddOutlined />
              New Booking
            </div>

            <h1 className="mt-4 text-2xl font-bold">Book Appointment</h1>

            <div className="mt-2 text-sm text-white/60 flex items-center gap-2">
              <ShopOutlined />
              {selectedSalon.salonName}
              <span className="text-white/25">•</span>
              <EnvironmentOutlined />
              {selectedSalon.salonLocation}
            </div>
          </div>

          <div className="flex gap-3 flex-wrap">
            <div className="rounded-2xl border border-white/10 bg-[#0B0F19] px-5 py-3">
              <div className="text-xs text-white/50">Total Duration</div>
              <div className="mt-1 text-lg font-bold flex items-center gap-2">
                <ClockCircleOutlined className="text-[#8F86FF]" />
                {totals.totalDuration} min
              </div>
            </div>

            <div className="rounded-2xl border border-white/10 bg-[#0B0F19] px-5 py-3">
              <div className="text-xs text-white/50">Total Price</div>
              <div className="mt-1 text-lg font-bold">₹{totals.totalPrice}</div>
            </div>
          </div>
        </div>

        <div className="mt-6 grid grid-cols-1 lg:grid-cols-3 gap-4">
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

            <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
              {services.map((s) => {
                const checked = selectedServices.includes(s.id);

                return (
                  <div
                    key={s.id}
                    className={`rounded-2xl border p-5 transition cursor-pointer ${
                      checked
                        ? "border-[#6D5EF1]/40 bg-[#6D5EF1]/10"
                        : "border-white/10 bg-[#0B0F19] hover:bg-white/5"
                    }`}
                    onClick={() => {
                      setSelectedSlot("");
                      setSelectedServices((prev) =>
                        prev.includes(s.id)
                          ? prev.filter((x) => x !== s.id)
                          : [...prev, s.id]
                      );
                    }}
                  >
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <div className="font-semibold">{s.name}</div>
                        <div className="mt-1 text-xs text-white/50">
                          Duration: {s.durationMin} min
                        </div>
                      </div>

                      <div className="text-right">
                        <div className="font-bold">₹{s.price}</div>
                        <Tag
                          rootClassName="mt-2 !rounded-full"
                          color={checked ? "purple" : "default"}
                        >
                          {checked ? "Selected" : "Add"}
                        </Tag>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="rounded-3xl border border-white/10 bg-[#0F1422] p-6">
            <div className="text-lg font-bold flex items-center gap-2">
              <TeamOutlined className="text-[#8F86FF]" />
              Appointment Details
            </div>
            <div className="text-sm text-white/50 mt-1">
              Select employee and date to view available slots.
            </div>

            <div className="mt-4 space-y-4">
              <div>
                <label className="text-xs text-white/60">Employee *</label>

                <div style={{ position: "relative" }} className="mt-2">
                  <Select
                    size="large"
                    value={employeeId || undefined}
                    onChange={(v) => setEmployeeId(v)}
                    placeholder="" 
                    className="w-full"
                    style={{
                      backgroundColor: "#0B0F19",
                      border: "1px solid rgba(255,255,255,0.15)",
                      color: "white",
                      borderRadius: 16,
                    }}
                    suffixIcon={
                      <TeamOutlined style={{ color: "rgba(255,255,255,0.55)" }} />
                    }
                    // dropdownStyle={{
                    //   backgroundColor: "#0B0F19",
                    //   border: "1px solid rgba(255,255,255,0.12)",
                    //   borderRadius: 16,
                    // }}
                    // dropdownRender={(menu) => (
                    //   <div
                    //     style={{
                    //       background: "#0B0F19",
                    //       borderRadius: 16,
                    //       padding: 6,
                    //     }}
                    //   >
                    //     {menu}
                    //   </div>
                    // )}
                    options={employees.map((e) => ({
                      value: e.id,
                      disabled: !e.active,
                      label: (
                        <span
                          style={{
                            color: e.active
                              ? "rgba(255,255,255,0.88)"
                              : "rgba(255,255,255,0.35)",
                          }}
                        >
                          {e.name}
                          {!e.active ? " (Inactive)" : ""}
                        </span>
                      ),
                    }))}
                  />

                  {!employeeId && (
                    <div
                      style={{
                        position: "absolute",
                        left: 14,
                        top: "50%",
                        transform: "translateY(-50%)",
                        pointerEvents: "none",
                        color: "rgba(255,255,255,0.55)",
                        fontSize: 14,
                      }}
                    >
                      Select employee
                    </div>
                  )}
                </div>
              </div>

              <div>
                <label className="text-xs text-white/60">Date *</label>
                <DatePicker
                  value={date}
                  onChange={(v) => {
                    setSelectedSlot("");
                    setDate(v);
                  }}
                  size="large"
                  className="mt-2 w-full"
                  style={{
                    backgroundColor: "#0B0F19",
                    border: "1px solid rgba(255,255,255,0.15)",
                    color: "rgba(255,255,255,0.88)",
                    borderRadius: 16,
                    height: 44,
                  }}
                  suffixIcon={<CalendarOutlined className="text-white/50" />}
                />
              </div>
            </div>
          </div>

          <div className="lg:col-span-3 rounded-3xl border border-white/10 bg-[#0F1422] p-6">
            <div className="flex items-center justify-between">
              <div className="text-lg font-bold flex items-center gap-2">
                <ClockCircleOutlined className="text-[#8F86FF]" />
                Available Time Slots
              </div>
              <div className="text-xs text-white/40">
                Slots appear after selecting services
              </div>
            </div>

            {slots.length === 0 ? (
              <div className="mt-4 text-sm text-white/50 rounded-2xl border border-white/10 bg-[#0B0F19] p-5">
                Please select at least one service to see available time slots.
              </div>
            ) : (
              <div className="mt-4 flex flex-wrap gap-3">
                {slots.map((slot) => {
                  const active = selectedSlot === slot;
                  return (
                    <button
                      key={slot}
                      onClick={() => setSelectedSlot(slot)}
                      className={`px-4 py-3 rounded-2xl border text-sm transition ${
                        active
                          ? "bg-[#6D5EF1]/20 border-[#6D5EF1]/40 text-white"
                          : "bg-[#0B0F19] border-white/10 text-white/60 hover:text-white hover:bg-white/5"
                      }`}
                    >
                      {slot}
                    </button>
                  );
                })}
              </div>
            )}

            <div className="mt-6 flex flex-col sm:flex-row gap-3 sm:items-center sm:justify-between">
              <div className="text-xs text-white/40">
                Booking will be created as a single continuous time block.
              </div>

              <Button
                loading={loading}
                disabled={disabledBook}
                onClick={handleBook}
                icon={<AppstoreAddOutlined />}
                rootClassName="!h-11 !rounded-2xl !bg-[#6D5EF1] !border-[#6D5EF1] !text-white hover:!bg-[#5B4BEE] disabled:opacity-70"
              >
                Book Appointment
              </Button>
            </div>
          </div>
        </div>
      </div>
    </ConfigProvider>
  );
};

export default Book;

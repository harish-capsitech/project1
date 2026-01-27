import {
  HomeOutlined,
  MailOutlined,
  PhoneOutlined,
  EnvironmentOutlined,
} from "@ant-design/icons";
import { Switch, TimePicker, Button } from "antd";
import dayjs from "dayjs";
// import { useState } from "react";

const SalonProfile = () => {
  // const [disabled, setDisabled] = useState(true);
  return (
    <main className="bg-[#161a22] w-full min-h-screen ml-54 p-10 flex flex-col gap-10">
      <div className="flex flex-col gap-2">
        <h1 className="text-gray-200 text-4xl font-bold">Company Profile</h1>
        <p className="text-gray-400 text-xs font-semibold">
          Manage your salon information and working hours
        </p>
      </div>
      <div className="flex justify-between">
        <div className="bg-[#242a35] border border-[#262b3a] rounded-2xl h-full w-full flex">
          <div className="p-4 mb-4 w-full flex gap-5">
            <HomeOutlined
              className="text-4xl mb-3 rounded-xl p-2.5 h-14"
              style={{ backgroundColor: "#1e2036", color: "#6c5ce7" }}
            />
            <div className="flex flex-col gap-2">
              <h1 className="text-[#f9fafb] text-3xl font-bold flex gap-2 mb-3">
                Glamour Studios
              </h1>
              <p className="text-[#9ca3af] flex gap-2">
                <MailOutlined className="text-2xl" />
                info@glamourstudios.com
              </p>
              <p className="text-[#9ca3af] flex gap-2">
                <PhoneOutlined className="text-2xl" />
                +1 (555) 123-4567
              </p>
              <p className="text-[#9ca3af] flex gap-2">
                <EnvironmentOutlined className="text-xl" />
                123 Main St, New York, NY 10001
              </p>
            </div>
          </div>
          <div className="flex items-start gap-5 p-5">
            <p className="text-white bg-green-400 text-sm px-4 py-1 rounded-2xl">
              Active
            </p>
            <button className=" bg-[#6c5ce7] text-white flex items-center justify-center text-sm w-24 py-1 rounded-2xl">
              Edit Profile
            </button>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-2 p-5 border border-[#262b3a] h-full rounded-2xl">
        <h1 className="text-2xl text-gray-300">Working Hours</h1>
        <div className="w-full rounded-xl bg-slate-900/80 px-5 py-3 flex items-center justify-between border border-slate-800">
          <div className="flex items-center gap-6">
            <div className="text-white font-medium">Monday</div>

            <div className="flex items-center gap-3 text-slate-300">
              <Switch defaultChecked style={{ backgroundColor: "#6d28d9" }} />
              <span className="text-sm">Start:</span>

              <TimePicker
                value={dayjs("09:00", "HH:mm")}
                format="HH:mm"
                // disabled={disabled}
                className="bg-slate-950/60! border-slate-800! text-white! rounded-xl! w-20! "
              />

              <span className="text-slate-500">-</span>

              <TimePicker
                value={dayjs("18:00", "HH:mm")}
                format="HH:mm"
                // disabled={disabled}
                
                className="bg-slate-950/60! border-slate-800! rounded-xl! w-20! text-white!"
              />
            </div>
          </div>

          <Button className="bg-slate-950/60! border-slate-800! text-slate-200! rounded-xl! hover:text-white!" 
          // onClick={()=> setDisabled(false)}
          >
            Edit
          </Button>
        </div>
      </div>
    </main>
  );
};

export default SalonProfile;

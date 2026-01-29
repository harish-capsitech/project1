import React, { useState } from "react";
import { Button, Input, Checkbox, Divider } from "antd";
import {
  LockOutlined,
  MailOutlined,
  EyeInvisibleOutlined,
  EyeTwoTone,
  ArrowLeftOutlined,
  AppstoreOutlined,
  UserAddOutlined,
  ShopOutlined,
} from "@ant-design/icons";

const Login: React.FC = () => {
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      window.location.href = "/";
    }, 900);
  };

  return (
    <div className="min-h-screen bg-[#0B0F19] text-white flex items-center justify-center px-4">
      <div className="w-full max-w-115">
        <button
          onClick={() => window.history.back()}
          className="mb-4 inline-flex items-center gap-2 text-sm text-white/60 hover:text-white transition"
        >
          <ArrowLeftOutlined />
          Back
        </button>

        <div className="rounded-3xl border border-white/10 bg-[#0F1422] p-6 lg:p-8 shadow-2xl">
          <div className="flex items-center gap-3">
            <div className="h-12 w-12 rounded-2xl bg-[#6D5EF1] flex items-center justify-center">
              <AppstoreOutlined className="text-white text-lg" />
            </div>
            <div>
              <div className="text-lg font-bold leading-5">SalonHub</div>
              <div className="text-xs text-white/50">Booking System</div>
            </div>
          </div>

          <h1 className="mt-6 text-2xl font-bold">Login</h1>
          <p className="mt-1 text-sm text-white/60">
            Login to manage bookings, employees & services.
          </p>

          <form onSubmit={handleSubmit} className="mt-6 space-y-4">
            <div>
              <label className="text-xs text-white/60">Email</label>
              <Input
                size="large"
                required
                placeholder="Enter your email"
                prefix={<MailOutlined className="text-white/50" />}
                rootClassName="mt-2 !h-11 !rounded-2xl !bg-[#0B0F19] !border-white/10 !text-white placeholder:!text-white/30"
              />
            </div>

            <div>
              <label className="text-xs text-white/60">Password</label>
              <Input.Password
                size="large"
                required
                placeholder="Enter your password"
                prefix={<LockOutlined className="text-white/50" />}
                iconRender={(visible: unknown) =>
                  visible ? (
                    <EyeTwoTone />
                  ) : (
                    <EyeInvisibleOutlined className="text-white/50" />
                  )
                }
                rootClassName="mt-2 !h-11 !rounded-2xl !bg-[#0B0F19] !border-white/10 !text-white placeholder:!text-white/30"
              />
            </div>

            <div className="flex items-center justify-between">
              <Checkbox className="text-white/60">Remember me</Checkbox>

              <button
                type="button"
                className="text-sm text-[#8F86FF] hover:text-white transition"
              >
                Forgot password?
              </button>
            </div>

            <Button
              htmlType="submit"
              loading={loading}
              rootClassName="w-full !h-11 !rounded-2xl !bg-[#6D5EF1] !border-[#6D5EF1] !text-white hover:!bg-[#5B4BEE]"
            >
              Login
            </Button>
          </form>

          <Divider rootClassName="!border-white/10 !text-white/40">OR</Divider>

          <Button
            onClick={() => (window.location.href = "/signup")}
            icon={<UserAddOutlined />}
            rootClassName="w-full !h-11 !rounded-2xl !border-white/10 !bg-white/5 !text-white hover:!bg-white/10"
          >
            Create new account (Customer)
          </Button>

          <Button
            onClick={() => (window.location.href = "/register-salon")}
            icon={<ShopOutlined />}
            rootClassName="mt-3 w-full !h-11 !rounded-2xl !border-[#6D5EF1]/30 !bg-[#6D5EF1]/15 !text-white hover:!bg-[#6D5EF1]/25"
          >
            Register your Salon (Admin)
          </Button>
        </div>

        <div className="mt-6 text-center text-xs text-white/35">
          © {new Date().getFullYear()} SalonHub • All rights reserved
        </div>
      </div>
    </div>
  );
};

export default Login;

import React, { useState } from "react";
import { Button, Input, Divider } from "antd";
import {
  LockOutlined,
  MailOutlined,
  UserOutlined,
  EyeInvisibleOutlined,
  EyeTwoTone,
  ArrowLeftOutlined,
  AppstoreOutlined,
  LoginOutlined,
} from "@ant-design/icons";

const SignUp: React.FC = () => {
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      window.location.href = "/login";
    }, 900);
  };

  return (
    <div className="min-h-screen bg-[#0B0F19] text-white flex items-center justify-center px-4">
      <div className="w-full max-w-125">
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

          <h1 className="mt-6 text-2xl font-bold">Create account</h1>
          <p className="mt-1 text-sm text-white/60">
            Sign up to book appointments or manage your salon.
          </p>

          <form onSubmit={handleSubmit} className="mt-6 space-y-4">
            <div>
              <label className="text-xs text-white/60">Full Name</label>
              <Input
                size="large"
                required
                placeholder="Enter your name"
                prefix={<UserOutlined className="text-white/50" />}
                rootClassName="mt-2 !h-11 !rounded-2xl !bg-[#0B0F19] !border-white/10 !text-white placeholder:!text-white/30"
              />
            </div>

            <div>
              <label className="text-xs text-white/60">Email</label>
              <Input
                size="large"
                required
                type="email"
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
                placeholder="Create a password"
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
              <div className="mt-2 text-xs text-white/40">
                Use at least 8 characters.
              </div>
            </div>

            <Button
              htmlType="submit"
              loading={loading}
              rootClassName="w-full !h-11 !rounded-2xl !bg-[#6D5EF1] !border-[#6D5EF1] !text-white hover:!bg-[#5B4BEE]"
            >
              Sign up
            </Button>
          </form>

          <Divider rootClassName="!border-white/10 !text-white/40">Already have account?</Divider>

          <Button
            onClick={() => (window.location.href = "/login")}
            icon={<LoginOutlined />}
            rootClassName="w-full !h-11 !rounded-2xl !border-white/10 !bg-white/5 !text-white hover:!bg-white/10"
          >
            Login
          </Button>
        </div>

        <div className="mt-6 text-center text-xs text-white/35">
          © {new Date().getFullYear()} SalonHub • All rights reserved
        </div>
      </div>
    </div>
  );
};

export default SignUp;

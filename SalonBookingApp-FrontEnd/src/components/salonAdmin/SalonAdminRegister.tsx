import React, { useMemo, useState } from "react";
import { Button, Input, Select, Divider, message } from 'antd';
import {
  AppstoreOutlined,
  ArrowLeftOutlined,
  EnvironmentOutlined,
  LockOutlined,
  MailOutlined,
  PhoneOutlined,
  ShopOutlined,
  UserOutlined,
  EyeInvisibleOutlined,
  EyeTwoTone,
} from "@ant-design/icons";

const { TextArea } = Input;

type FormState = {
  fullName: string;
  salonName: string;
  category: string;
  location: string;
  city: string;
  pincode: string;
  phone: string;
  email: string;
  password: string;
  confirmPassword: string;
};

const SalonAdminRegister: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState<FormState>({
    fullName: "",
    salonName: "",
    category: "",
    location: "",
    city: "",
    pincode: "",
    phone: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const errors = useMemo(() => {
    const e: Partial<Record<keyof FormState, string>> = {};

    if (!form.fullName.trim()) e.fullName = "Full name is required";
    if (!form.salonName.trim()) e.salonName = "Salon name is required";
    if (!form.category.trim()) e.category = "Salon category is required";
    if (!form.location.trim()) e.location = "Full location is required";
    if (!form.city.trim()) e.city = "City is required";
    if (!form.pincode.trim()) e.pincode = "Pincode is required";

    if (!form.phone.trim()) e.phone = "Phone number is required";
    else if (!/^\+?\d[\d\s-]{9,14}$/.test(form.phone.trim()))
      e.phone = "Enter a valid phone number";

    if (!form.email.trim()) e.email = "Email is required";
    else if (!/^\S+@\S+\.\S+$/.test(form.email.trim()))
      e.email = "Enter a valid email";

    if (!form.password) e.password = "Password is required";
    else if (form.password.length < 8)
      e.password = "Password must be at least 8 characters";

    if (!form.confirmPassword) e.confirmPassword = "Confirm password is required";
    else if (form.password !== form.confirmPassword)
      e.confirmPassword = "Passwords do not match";

    return e;
  }, [form]);

  const hasErrors = Object.keys(errors).length > 0;

  const onChange = <K extends keyof FormState>(key: K, value: FormState[K]) => {
    setForm((prev) => ({ ...prev, [key]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (hasErrors) {
      message.error("Please fill all required fields correctly.");
      return;
    }

    setLoading(true);

    const payload = {
      role: "Admin", 
      fullName: form.fullName.trim(),
      salonName: form.salonName.trim(),
      category: form.category,
      address: form.location.trim(),
      city: form.city.trim(),
      pincode: form.pincode.trim(),
      phone: form.phone.trim(),
      email: form.email.trim().toLowerCase(),
      password: form.password,
    };

    setTimeout(() => {
      setLoading(false);
      console.log("SalonAdmin Register Payload:", payload);
      message.success("Salon Admin registered successfully!");
      window.location.href = "/login";
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-[#0B0F19] text-white flex items-center justify-center px-4 py-10">
      <div className="w-full max-w-180">
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
              <div className="text-xs text-white/50">Salon Admin Registration</div>
            </div>
          </div>

          <h1 className="mt-6 text-2xl font-bold">Register your Salon</h1>
          <p className="mt-1 text-sm text-white/60">
            Create a salon admin account and setup your salon profile.
          </p>

          <form onSubmit={handleSubmit} className="mt-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              <div>
                <label className="text-xs text-white/60">Full Name *</label>
                <Input
                  size="large"
                  value={form.fullName}
                  onChange={(e: any) => onChange("fullName", e.target.value)}
                  placeholder="e.g. Harish Kumar"
                  prefix={<UserOutlined className="text-white/50" />}
                  rootClassName="mt-2 !h-11 !rounded-2xl !bg-[#0B0F19] !border-white/10 !text-white placeholder:!text-white/30"
                />
                {errors.fullName && (
                  <div className="mt-1 text-xs text-red-400">{errors.fullName}</div>
                )}
              </div>

              <div>
                <label className="text-xs text-white/60">Salon Name *</label>
                <Input
                  size="large"
                  value={form.salonName}
                  onChange={(e: any) => onChange("salonName", e.target.value)}
                  placeholder="e.g. Glamour Studio"
                  prefix={<ShopOutlined className="text-white/50" />}
                  rootClassName="mt-2 !h-11 !rounded-2xl !bg-[#0B0F19] !border-white/10 !text-white placeholder:!text-white/30"
                />
                {errors.salonName && (
                  <div className="mt-1 text-xs text-red-400">{errors.salonName}</div>
                )}
              </div>

              <div>
                <label className="text-xs text-white/60">Salon Category *</label>
                <Select
                  size="large"
                  value={form.category || undefined}
                  onChange={(v: any) => onChange("category", v)}
                  placeholder="Select category"
                  className="mt-2 w-full"
                  popupClassName="!bg-[#0F1422]"
                  options={[
                    { value: "Unisex", label: "Unisex Salon" },
                    { value: "Men", label: "Men Salon" },
                    { value: "Women", label: "Women Salon" },
                    { value: "Spa", label: "Spa" },
                    { value: "Beauty", label: "Beauty Parlour" },
                  ]}
                />
                {errors.category && (
                  <div className="mt-1 text-xs text-red-400">{errors.category}</div>
                )}
              </div>

              <div>
                <label className="text-xs text-white/60">Phone *</label>
                <Input
                  size="large"
                  value={form.phone}
                  onChange={(e: any) => onChange("phone", e.target.value)}
                  placeholder="e.g. +91 98765 43210"
                  prefix={<PhoneOutlined className="text-white/50" />}
                  rootClassName="mt-2 !h-11 !rounded-2xl !bg-[#0B0F19] !border-white/10 !text-white placeholder:!text-white/30"
                />
                {errors.phone && (
                  <div className="mt-1 text-xs text-red-400">{errors.phone}</div>
                )}
              </div>

              <div>
                <label className="text-xs text-white/60">Email *</label>
                <Input
                  size="large"
                  value={form.email}
                  onChange={(e: any) => onChange("email", e.target.value)}
                  placeholder="e.g. owner@salon.com"
                  prefix={<MailOutlined className="text-white/50" />}
                  rootClassName="mt-2 !h-11 !rounded-2xl !bg-[#0B0F19] !border-white/10 !text-white placeholder:!text-white/30"
                />
                {errors.email && (
                  <div className="mt-1 text-xs text-red-400">{errors.email}</div>
                )}
              </div>

              <div>
                <label className="text-xs text-white/60">City *</label>
                <Input
                  size="large"
                  value={form.city}
                  onChange={(e: any) => onChange("city", e.target.value)}
                  placeholder="e.g. Jaipur"
                  prefix={<EnvironmentOutlined className="text-white/50" />}
                  rootClassName="mt-2 !h-11 !rounded-2xl !bg-[#0B0F19] !border-white/10 !text-white placeholder:!text-white/30"
                />
                {errors.city && (
                  <div className="mt-1 text-xs text-red-400">{errors.city}</div>
                )}
              </div>

              <div>
                <label className="text-xs text-white/60">Pincode *</label>
                <Input
                  size="large"
                  value={form.pincode}
                  onChange={(e: any) => onChange("pincode", e.target.value)}
                  placeholder="e.g. 302001"
                  rootClassName="mt-2 !h-11 !rounded-2xl !bg-[#0B0F19] !border-white/10 !text-white placeholder:!text-white/30"
                />
                {errors.pincode && (
                  <div className="mt-1 text-xs text-red-400">{errors.pincode}</div>
                )}
              </div>

              <div className="lg:col-span-2">
                <label className="text-xs text-white/60">Full Location / Address *</label>
                <TextArea
                  value={form.location}
                  onChange={(e: any) => onChange("location", e.target.value)}
                  placeholder="e.g. 2nd Floor, ABC Plaza, Near Metro Station, Jaipur"
                  rows={3}
                  rootClassName="mt-2 !rounded-2xl !bg-[#0B0F19] !border-white/10 !text-white placeholder:!text-white/30"
                />
                {errors.location && (
                  <div className="mt-1 text-xs text-red-400">{errors.location}</div>
                )}
              </div>
            </div>

            <Divider rootClassName="!border-white/10 !text-white/40">
              Set Password
            </Divider>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              <div>
                <label className="text-xs text-white/60">Password *</label>
                <Input.Password
                  size="large"
                  value={form.password}
                  onChange={(e: any) => onChange("password", e.target.value)}
                  placeholder="Minimum 8 characters"
                  prefix={<LockOutlined className="text-white/50" />}
                  iconRender={(visible: any) =>
                    visible ? <EyeTwoTone /> : <EyeInvisibleOutlined className="text-white/50" />
                  }
                  rootClassName="mt-2 !h-11 !rounded-2xl !bg-[#0B0F19] !border-white/10 !text-white placeholder:!text-white/30"
                />
                {errors.password && (
                  <div className="mt-1 text-xs text-red-400">{errors.password}</div>
                )}
              </div>

              <div>
                <label className="text-xs text-white/60">Confirm Password *</label>
                <Input.Password
                  size="large"
                  value={form.confirmPassword}
                  onChange={(e: any) => onChange("confirmPassword", e.target.value)}
                  placeholder="Re-enter password"
                  prefix={<LockOutlined className="text-white/50" />}
                  iconRender={(visible: any) =>
                    visible ? <EyeTwoTone /> : <EyeInvisibleOutlined className="text-white/50" />
                  }
                  rootClassName="mt-2 !h-11 !rounded-2xl !bg-[#0B0F19] !border-white/10 !text-white placeholder:!text-white/30"
                />
                {errors.confirmPassword && (
                  <div className="mt-1 text-xs text-red-400">
                    {errors.confirmPassword}
                  </div>
                )}
              </div>
            </div>

            <div className="mt-6 flex flex-col sm:flex-row gap-3 sm:items-center sm:justify-between">
              <div className="text-xs text-white/40">
                By registering, you agree to our terms & policies.
              </div>

              <Button
                htmlType="submit"
                loading={loading}
                disabled={hasErrors}
                rootClassName="!h-11 !rounded-2xl !bg-[#6D5EF1] !border-[#6D5EF1] !text-white hover:!bg-[#5B4BEE] disabled:opacity-70"
              >
                Register Salon
              </Button>
            </div>

            <div className="mt-5 text-sm text-white/60">
              Already registered?{" "}
              <button
                type="button"
                onClick={() => (window.location.href = "/login")}
                className="text-[#8F86FF] hover:text-white transition"
              >
                Login
              </button>
            </div>
          </form>
        </div>

        <div className="mt-6 text-center text-xs text-white/35">
          © {new Date().getFullYear()} SalonHub • Salon Admin Register
        </div>
      </div>
    </div>
  );
};

export default SalonAdminRegister;

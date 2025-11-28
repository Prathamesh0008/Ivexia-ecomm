// src/pages/Login.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [form, setForm] = useState({ email: "", password: "" });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleLogin = (e) => {
    e.preventDefault();

    if (!form.email || !form.password) {
      alert("Please fill all fields.");
      return;
    }

    // Demo login success
    localStorage.setItem("ivexiaUser", JSON.stringify(form));
    navigate("/");
  };

  return (
    <div className="min-h-screen bg-[#020617] flex items-center justify-center px-4">
      {/* Outer card */}
      <div className="w-full max-w-md bg-white/5 backdrop-blur-2xl border border-[#1e293b] rounded-3xl shadow-[0_0_40px_rgba(236,72,153,0.2)] p-8">

        <h1 className="text-3xl font-extrabold text-center text-white mb-2">
          Welcome Back
        </h1>
        <p className="text-center text-slate-300 mb-8 text-sm">
          Login to access your Ivexia dashboard
        </p>

        {/* FORM */}
        <form onSubmit={handleLogin} className="space-y-5">

          {/* Email */}
          <div>
            <label className="text-slate-300 text-sm">Email</label>
            <input
              type="email"
              name="email"
              onChange={handleChange}
              className="mt-1 w-full px-4 py-3 rounded-xl bg-white/10 border border-[#1e293b] text-white placeholder-slate-400 focus:outline-none focus:border-pink-500 transition"
              placeholder="you@example.com"
            />
          </div>

          {/* Password */}
          <div>
            <label className="text-slate-300 text-sm">Password</label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                onChange={handleChange}
                className="mt-1 w-full px-4 py-3 rounded-xl bg-white/10 border border-[#1e293b] text-white placeholder-slate-400 focus:outline-none focus:border-pink-500 transition"
                placeholder="Enter password"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-300 text-sm"
              >
                {showPassword ? "Hide" : "Show"}
              </button>
            </div>
          </div>

          {/* Login Button */}
          <button
            type="submit"
            className="w-full py-3 rounded-xl bg-gradient-to-r from-pink-600 to-pink-500 text-white font-semibold hover:shadow-[0_0_20px_rgba(236,72,153,0.6)] transition mt-3"
          >
            Login
          </button>

          {/* Divider */}
          <div className="flex items-center gap-3 my-3">
            <div className="h-px bg-white/10 flex-1"></div>
            <span className="text-slate-400 text-sm">OR</span>
            <div className="h-px bg-white/10 flex-1"></div>
          </div>

          {/* Signup Redirect */}
          <p className="text-center text-slate-400 text-sm">
            Don't have an account?{" "}
            <span
              className="text-pink-400 cursor-pointer hover:underline"
              onClick={() => navigate("/signup")}
            >
              Create one
            </span>
          </p>
        </form>
      </div>
    </div>
  );
}

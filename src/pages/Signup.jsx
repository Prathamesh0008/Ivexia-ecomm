// src/pages/Signup.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Signup() {
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirm: "",
  });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSignup = (e) => {
    e.preventDefault();

    if (!form.name || !form.email || !form.password || !form.confirm) {
      alert("Please fill all fields.");
      return;
    }

    if (form.password !== form.confirm) {
      alert("Passwords do not match!");
      return;
    }

    // Save user mock data
    localStorage.setItem("ivexiaUser", JSON.stringify(form));

    navigate("/login");
  };

  return (
    <div className="min-h-screen bg-[#020617] flex items-center justify-center px-4">
      {/* CARD */}
      <div className="w-full max-w-md bg-white/5 backdrop-blur-2xl border border-[#1e293b] rounded-3xl shadow-[0_0_40px_rgba(236,72,153,0.2)] p-8">

        <h1 className="text-3xl font-extrabold text-center text-white mb-2">
          Create Account
        </h1>
        <p className="text-center text-slate-300 mb-8 text-sm">
          Join Ivexia — B2B Pharma Network
        </p>

        <form onSubmit={handleSignup} className="space-y-5">

          {/* NAME */}
          <div>
            <label className="text-slate-300 text-sm">Full Name</label>
            <input
              type="text"
              name="name"
              onChange={handleChange}
              className="mt-1 w-full px-4 py-3 rounded-xl bg-white/10 border border-[#1e293b] text-white placeholder-slate-400 focus:outline-none focus:border-pink-500 transition"
              placeholder="John Carter"
            />
          </div>

          {/* EMAIL */}
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

          {/* PASSWORD */}
          <div>
            <label className="text-slate-300 text-sm">Password</label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                onChange={handleChange}
                className="mt-1 w-full px-4 py-3 rounded-xl bg-white/10 border border-[#1e293b] text-white placeholder-slate-400 focus:outline-none focus:border-pink-500 transition"
                placeholder="Create password"
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

          {/* CONFIRM PASSWORD */}
          <div>
            <label className="text-slate-300 text-sm">Confirm Password</label>
            <div className="relative">
              <input
                type={showConfirm ? "text" : "password"}
                name="confirm"
                onChange={handleChange}
                className="mt-1 w-full px-4 py-3 rounded-xl bg-white/10 border border-[#1e293b] text-white placeholder-slate-400 focus:outline-none focus:border-pink-500 transition"
                placeholder="Re-enter password"
              />
              <button
                type="button"
                onClick={() => setShowConfirm(!showConfirm)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-300 text-sm"
              >
                {showConfirm ? "Hide" : "Show"}
              </button>
            </div>
          </div>

          {/* SIGNUP BUTTON */}
          <button
            type="submit"
            className="w-full py-3 rounded-xl bg-gradient-to-r from-pink-600 to-pink-500 text-white font-semibold hover:shadow-[0_0_20px_rgba(236,72,153,0.6)] transition"
          >
            Create Account
          </button>

          {/* Already have account */}
          <p className="text-center text-slate-400 text-sm mt-4">
            Already have an account?{" "}
            <span
              className="text-pink-400 cursor-pointer hover:underline"
              onClick={() => navigate("/login")}
            >
              Login
            </span>
          </p>

        </form>
      </div>
    </div>
  );
}

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Send, CheckCircle2 } from "lucide-react";

const SUBMIT_TIMEOUT_MS = 30000;

export default function ServiceContactForm({ serviceName = "Digital Marketing Services" }) {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
  });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    const nameParts = form.name.trim().split(" ");
    const firstName = nameParts[0] || "";
    const lastName = nameParts.slice(1).join(" ") || "";

    const payload = {
      name: form.name.trim(),
      firstName,
      lastName,
      phone: form.phone.trim(),
      email: form.email.trim(),
      message: `[Inquiry for: ${serviceName}]\nName: ${form.name.trim()}\nPhone: ${form.phone.trim()}\nEmail: ${form.email.trim()}`,
      subject: `Service Inquiry: ${serviceName} - ${form.name.trim()}`,
      serviceName,
      source: `Service Inquiry: ${serviceName}`,
    };

    const controller = new AbortController();
    const timeoutId = window.setTimeout(() => {
      controller.abort();
    }, SUBMIT_TIMEOUT_MS);

    try {
      const res = await fetch("/send-mail.php", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
        signal: controller.signal,
      });

      const responseText = await res.text();
      let result = {};

      try {
        result = responseText ? JSON.parse(responseText) : {};
      } catch {
        result = { message: "The mail server returned an invalid response. Please try again." };
      }

      if (res.ok && result.success) {
        setSubmitted(true);
        setForm({ name: "", phone: "", email: "" });
      } else {
        setError(result.message || result.error || "Unable to send inquiry. Please try again.");
      }
    } catch (err) {
      if (err.name === "AbortError") {
        setError("Request timed out. Please try again or email info@worexatechnologies.com.");
      } else {
        setError("Unable to send your inquiry. Please check your connection and try again.");
      }
    } finally {
      window.clearTimeout(timeoutId);
      setLoading(false);
    }
  };

  return (
    <div className="bg-slate-50/70 rounded-3xl border border-slate-200/90 p-6 sm:p-7 shadow-lg shadow-slate-100/80 relative">
      <div className="mb-5">
        <h3 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
          Request a Custom Proposal
        </h3>
      </div>

      {submitted ? (
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="py-10 px-4 text-center rounded-2xl bg-emerald-50 border border-emerald-200"
        >
          <div className="w-12 h-12 rounded-full bg-emerald-500 text-white flex items-center justify-center mx-auto mb-3 shadow-md shadow-emerald-500/30">
            <CheckCircle2 className="w-6 h-6" />
          </div>
          <h4 className="text-base font-black text-slate-900 mb-1">Thank You! Inquiry Received</h4>
          <p className="text-xs text-slate-600 mb-4 leading-relaxed">
            We've received your request for <strong>{serviceName}</strong>. Our strategists will get in touch shortly.
          </p>
          <button
            onClick={() => setSubmitted(false)}
            className="text-xs font-bold text-orange-600 hover:text-orange-700 underline"
          >
            Send another inquiry
          </button>
        </motion.div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-3.5">
          {error && (
            <div className="p-3 rounded-lg bg-red-50 border border-red-200 text-red-700 text-xs font-medium">
              {error}
            </div>
          )}

          {/* Full Name */}
          <div>
            <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-700 mb-1">
              Full Name <span className="text-orange-600">*</span>
            </label>
            <input
              type="text"
              name="name"
              required
              value={form.name}
              onChange={handleChange}
              className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 bg-white text-slate-900 text-xs sm:text-sm focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-500/15 transition-all"
            />
          </div>

          {/* Phone Number */}
          <div>
            <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-700 mb-1">
              Phone Number <span className="text-orange-600">*</span>
            </label>
            <input
              type="tel"
              name="phone"
              required
              value={form.phone}
              onChange={handleChange}
              className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 bg-white text-slate-900 text-xs sm:text-sm focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-500/15 transition-all"
            />
          </div>

          {/* Email Address */}
          <div>
            <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-700 mb-1">
              Email Address <span className="text-orange-600">*</span>
            </label>
            <input
              type="email"
              name="email"
              required
              value={form.email}
              onChange={handleChange}
              className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 bg-white text-slate-900 text-xs sm:text-sm focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-500/15 transition-all"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 px-5 rounded-xl text-white font-bold text-xs sm:text-sm transition-all duration-300 shadow-md shadow-orange-500/20 hover:shadow-orange-500/35 hover:scale-[1.01] active:scale-[0.99] disabled:opacity-60 flex items-center justify-center gap-2 cursor-pointer mt-2"
            style={{ background: "linear-gradient(135deg, #f97316, #ea580c)" }}
          >
            {loading ? (
              <>
                <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                <span>Submitting...</span>
              </>
            ) : (
              <>
                <span>Submit Inquiry</span>
                <Send className="w-3.5 h-3.5" />
              </>
            )}
          </button>
        </form>
      )}
    </div>
  );
}

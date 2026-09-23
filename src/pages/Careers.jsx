import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import {
  Briefcase,
  Send,
  CheckCircle2,
  Users,
  Code,
  Megaphone,
  PenTool,
  Video,
  MonitorPlay,
  TrendingUp,
  UserPlus,
  ArrowRight,
  DollarSign,
  UploadCloud,
  FileText,
  X
} from "lucide-react";

const SUBMIT_TIMEOUT_MS = 30000;

const openRoles = [
  { title: "Senior Web Developer", category: "Engineering", icon: <Code size={20} />, type: "Full-Time", loc: "Bengaluru" },
  { title: "Full-Stack Application Dev", category: "Engineering", icon: <MonitorPlay size={20} />, type: "Full-Time", loc: "Bengaluru" },
  { title: "Business Development Executive (BDE)", category: "Sales & Growth", icon: <TrendingUp size={20} />, type: "Full-Time", loc: "Bengaluru" },
  { title: "Performance Marketing Lead", category: "Marketing", icon: <TrendingUp size={20} />, type: "Full-Time", loc: "Bengaluru" },
  { title: "Social Media Strategist", category: "Marketing", icon: <Megaphone size={20} />, type: "Full-Time", loc: "Bengaluru" },
  { title: "Community & Social Manager", category: "Marketing", icon: <Users size={20} />, type: "Full-Time", loc: "Bengaluru" },
  { title: "Content Strategist & Copywriter", category: "Creative", icon: <PenTool size={20} />, type: "Full-Time", loc: "Bengaluru" },
  { title: "Commercial Video Editor & Motion", category: "Production", icon: <Video size={20} />, type: "Full-Time", loc: "Bengaluru" },
  { title: "Senior Brand & Graphic Designer", category: "Design", icon: <PenTool size={20} />, type: "Full-Time", loc: "Bengaluru" },
  { title: "Human Resources (HR) Specialist", category: "Operations", icon: <UserPlus size={20} />, type: "Full-Time", loc: "Bengaluru" },
  { title: "Finance & Accounts Specialist", category: "Finance", icon: <DollarSign size={20} />, type: "Full-Time", loc: "Bengaluru" },
  { title: "Digital Marketing Internship", category: "Early Career", icon: <Briefcase size={20} />, type: "Internship", loc: "Bengaluru" },
];

export default function Careers() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [resumeFile, setResumeFile] = useState(null);
  const fileInputRef = useRef(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) setResumeFile(file);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    if (file) {
      setResumeFile(file);
      fileInputRef.current.files = e.dataTransfer.files;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const form = e.target;
    const role = form.role.value;
    const rawMessage = form.message.value || "";

    const formData = new FormData();
    formData.append("firstName", form.firstName.value);
    formData.append("lastName", form.lastName.value);
    formData.append("email", form.email.value);
    formData.append("phone", form.phone.value);
    formData.append("subject", `Job Application: ${role}`);
    formData.append(
      "message",
      `Role Applied For: ${role}\n\nCover Letter / Message:\n${rawMessage}`
    );
    if (resumeFile) {
      formData.append("resumeFile", resumeFile);
    }

    const controller = new AbortController();
    const timeoutId = window.setTimeout(() => controller.abort(), SUBMIT_TIMEOUT_MS);

    try {
      const res = await fetch("/send-mail.php", {
        method: "POST",
        body: formData,
        signal: controller.signal,
      });

      const responseText = await res.text();
      let result = {};

      if (!res.ok && !responseText) {
        throw new Error(
          "PHP backend is not running. Start a PHP server on 127.0.0.1:8000 or upload the site to PHP hosting."
        );
      }

      try {
        result = responseText ? JSON.parse(responseText) : {};
      } catch {
        throw new Error(responseText || "The mail server returned an invalid response.");
      }

      if (res.ok && result.success) {
        setSubmitted(true);
        setResumeFile(null);
        form.reset();
        setTimeout(() => setSubmitted(false), 5000);
      } else {
        alert(result.message || result.error || "PHP backend returned an error.");
      }
    } catch (error) {
      console.error(error);
      if (error.name === "AbortError") {
        alert("Mail server is taking too long. Please try again or contact info@worexatechnologies.com.");
        return;
      }
      alert(error.message || "PHP backend is not running.");
    } finally {
      window.clearTimeout(timeoutId);
      setLoading(false);
    }
  };

  return (
    <div className="w-full text-slate-900 bg-white min-h-screen">
      <Helmet>
        <title id="metaTitle">Career in Worexa Technologies | Join our Growing Team.</title>
        <meta
          name="description"
          id="metaDescription"
          content="Explore a career in Worexa Technologies. Join our dynamic team and build your future in digital marketing, design, web development, ads, and business growth."
        />
        <meta
          name="keywords"
          id="metaKeywords"
          content="career in worexa technologies, digital marketing internship company, web development internship company, internship company near me, worexa tecnology careers, what careers offer worexa technologies, worexa career"
        />
        <meta id="ogTitle" property="og:title" content="Career in Worexa Technologies | Join our Growing Team." />
        <meta id="ogType" property="og:type" content="website" />
        <meta id="ogDescription" property="og:description" content="Explore a career in Worexa Technologies. Join our dynamic team and build your future in digital marketing, design, web development, ads, and business growth." />
        <meta id="ogUrl" property="og:url" content="https://worexatechnologies.com/careers" />
        <meta id="ogSiteName" property="og:site_name" content="Worexa Technologies" />
        <meta id="ogImage" property="og:image" content="https://worexatechnologies.com/assets/logo.png" />
        <meta id="twitterSite" name="twitter:site" content="https://twitter.com/" />
        <meta id="twitterTitle" name="twitter:title" content="Career in Worexa Technologies | Join our Growing Team." />
        <meta id="twitterDescription" name="twitter:description" content="Explore a career in Worexa Technologies. Join our dynamic team and build your future in digital marketing, design, web development, ads, and business growth." />
        <meta id="author" name="author" content="Akshay" />
        <link id="canonical" rel="canonical" href="https://worexatechnologies.com/careers" />
        <meta id="indexingStatus" name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta id="Publisher" property="publisher" content="Worexa Technologies" />
        <meta property="og:locale" content="en_US" />
      </Helmet>

      {/* Hero Header — Pure Black (#000000) */}
      <section className="relative overflow-hidden bg-black pt-32 sm:pt-36 pb-16 sm:pb-20 border-b border-zinc-900">
        {/* Subtle Top Warm Amber/Orange Radial Glow */}
        <div 
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] sm:w-[950px] h-[300px] pointer-events-none"
          style={{
            background: 'radial-gradient(ellipse at center top, rgba(249, 115, 22, 0.22) 0%, rgba(249, 115, 22, 0.05) 50%, transparent 75%)',
          }}
        />

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl mx-auto"
          >
            <h1 className="text-4xl sm:text-6xl font-black text-white tracking-tight leading-[1.08]">
              Build the Future of <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-amber-400 to-orange-500">Growth & Tech.</span>
            </h1>
            <p className="mt-5 text-base sm:text-lg text-zinc-300 leading-relaxed font-normal max-w-2xl mx-auto">
              We are assembling a high-caliber team of engineers, growth hackers, designers, and commercial strategists. Discover your next challenge.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <a
                href="#open-positions"
                className="inline-flex items-center gap-2 rounded-full border border-zinc-800 bg-zinc-900/90 text-zinc-200 hover:text-orange-400 hover:border-orange-500/40 px-6 py-3.5 text-xs font-bold transition-all shadow-sm backdrop-blur-md"
              >
                <span>View Open Positions</span>
                <ArrowRight size={14} />
              </a>
              <a
                href="#apply-now"
                className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 px-6 py-3.5 text-xs font-extrabold text-white shadow-md shadow-orange-500/25 transition-all"
              >
                <span>Submit Quick Application</span>
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Open Positions Grid */}
      <section id="open-positions" className="py-16 sm:py-24 border-t border-slate-200 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <span className="text-xs font-black uppercase tracking-widest text-orange-600">Available Roles</span>
            <h2 className="mt-2 text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
              Open Career Opportunities
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 mt-2">Bangalore Studio • Hybrid & In-Office</p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {openRoles.map((role, idx) => (
              <div
                key={idx}
                className="group relative rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:border-orange-300 hover:shadow-lg hover:-translate-y-1"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-orange-50 border border-orange-100 text-orange-600 transition-colors group-hover:bg-orange-500 group-hover:text-white shadow-sm">
                    {role.icon}
                  </div>
                  <span className="text-[10px] font-bold text-slate-600 bg-slate-100 px-2.5 py-1 rounded-full border border-slate-200">
                    {role.type}
                  </span>
                </div>

                <p className="text-[11px] font-bold uppercase tracking-wider text-orange-600">{role.category}</p>
                <h3 className="text-lg font-black text-slate-900 mt-1 group-hover:text-orange-600 transition-colors">{role.title}</h3>

                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-xs text-slate-500">{role.loc}</span>
                  <a
                    href="#apply-now"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-orange-600 group-hover:text-orange-700 transition-colors"
                  >
                    <span>Apply</span>
                    <ArrowRight size={13} className="transition-transform group-hover:translate-x-1" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section id="apply-now" className="py-20 border-t border-slate-200 bg-white relative">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="mb-12 text-center">
            <span className="text-xs font-black uppercase tracking-widest text-orange-600">Join Us</span>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 mt-2 tracking-tight">
              Submit Your Candidacy
            </h2>
            <p className="text-slate-600 text-sm mt-2">
              Attach your CV or resume and tell us where you can create the greatest impact.
            </p>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-white p-6 sm:p-10 shadow-xl relative">
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center justify-center text-center py-16"
              >
                <div className="h-16 w-16 rounded-full bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-600 mb-6">
                  <CheckCircle2 size={40} />
                </div>
                <h3 className="text-2xl font-black text-slate-900 mb-2">Application Received!</h3>
                <p className="text-sm text-slate-600 max-w-md leading-relaxed">
                  Thank you for applying. Our talent team reviews every application thoroughly and will reach out if your background matches an open opportunity.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                      First Name *
                    </label>
                    <input
                      required
                      name="firstName"
                      type="text"
                      placeholder="e.g. Rahul"
                      className="w-full px-4 py-3.5 rounded-2xl bg-slate-50 border border-slate-200 text-slate-900 placeholder-slate-400 focus:outline-none focus:bg-white focus:border-orange-500 text-sm transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                      Last Name *
                    </label>
                    <input
                      required
                      name="lastName"
                      type="text"
                      placeholder="e.g. Sharma"
                      className="w-full px-4 py-3.5 rounded-2xl bg-slate-50 border border-slate-200 text-slate-900 placeholder-slate-400 focus:outline-none focus:bg-white focus:border-orange-500 text-sm transition-all"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      required
                      name="email"
                      type="email"
                      placeholder="e.g. rahul@example.com"
                      className="w-full px-4 py-3.5 rounded-2xl bg-slate-50 border border-slate-200 text-slate-900 placeholder-slate-400 focus:outline-none focus:bg-white focus:border-orange-500 text-sm transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                      Phone Number *
                    </label>
                    <input
                      required
                      name="phone"
                      type="tel"
                      placeholder="e.g. 9876543210"
                      maxLength={10}
                      onInput={(e) => { e.target.value = e.target.value.replace(/\D/g, '').slice(0, 10); }}
                      className="w-full px-4 py-3.5 rounded-2xl bg-slate-50 border border-slate-200 text-slate-900 placeholder-slate-400 focus:outline-none focus:bg-white focus:border-orange-500 text-sm transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                    Role Applied For *
                  </label>
                  <select
                    required
                    name="role"
                    defaultValue=""
                    className="w-full px-4 py-3.5 rounded-2xl bg-slate-50 border border-slate-200 text-slate-900 focus:outline-none focus:bg-white focus:border-orange-500 text-sm transition-all"
                  >
                    <option value="" disabled>Select a role...</option>
                    {openRoles.map((r) => (
                      <option key={r.title} value={r.title}>{r.title} ({r.category})</option>
                    ))}
                  </select>
                </div>

                {/* Drop Zone */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                    Resume / CV (PDF, DOCX) *
                  </label>
                  <div
                    onDragOver={(e) => e.preventDefault()}
                    onDrop={handleDrop}
                    onClick={() => fileInputRef.current.click()}
                    className={`relative flex cursor-pointer flex-col items-center justify-center gap-3 rounded-2xl border-2 border-dashed px-6 py-8 transition-all ${
                      resumeFile
                        ? "border-orange-500 bg-orange-50"
                        : "border-slate-300 bg-slate-50/50 hover:border-orange-400 hover:bg-orange-50/30"
                    }`}
                  >
                    <input
                      ref={fileInputRef}
                      type="file"
                      name="resumeFile"
                      accept=".pdf,.doc,.docx"
                      required
                      onChange={handleFileChange}
                      className="hidden"
                    />

                    {resumeFile ? (
                      <div className="flex w-full items-center justify-between gap-3">
                        <div className="flex items-center gap-3">
                          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-orange-500 text-white">
                            <FileText size={18} />
                          </div>
                          <div>
                            <p className="text-sm font-bold text-slate-900">{resumeFile.name}</p>
                            <p className="text-xs text-slate-500">
                              {(resumeFile.size / 1024).toFixed(0)} KB
                            </p>
                          </div>
                        </div>
                        <button
                          type="button"
                          onClick={(e) => {
                            e.stopPropagation();
                            setResumeFile(null);
                            fileInputRef.current.value = "";
                          }}
                          className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-slate-200 text-slate-600 hover:bg-red-500 hover:text-white transition-colors"
                        >
                          <X size={14} />
                        </button>
                      </div>
                    ) : (
                      <>
                        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-orange-100 text-orange-600">
                          <UploadCloud size={24} />
                        </div>
                        <div className="text-center">
                          <p className="text-sm font-bold text-slate-800">
                            Drop resume file here or <span className="text-orange-600 underline">browse files</span>
                          </p>
                          <p className="mt-1 text-xs text-slate-500">PDF, DOC, DOCX up to 5 MB</p>
                        </div>
                      </>
                    )}
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                    Cover Note / Portfolio Link
                  </label>
                  <textarea
                    name="message"
                    rows="3"
                    placeholder="Provide portfolio links (GitHub, Behance, LinkedIn) or introduce your experience..."
                    className="w-full px-4 py-3.5 rounded-2xl bg-slate-50 border border-slate-200 text-slate-900 placeholder-slate-400 focus:outline-none focus:bg-white focus:border-orange-500 text-sm transition-all resize-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-4 rounded-2xl bg-gradient-to-r from-orange-500 via-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white font-extrabold text-sm uppercase tracking-wider shadow-md shadow-orange-500/20 active:scale-98 transition-all flex items-center justify-center gap-2 group disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {loading ? (
                    "Transmitting Application..."
                  ) : (
                    <>
                      <span>Submit Application</span>
                      <Send size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}

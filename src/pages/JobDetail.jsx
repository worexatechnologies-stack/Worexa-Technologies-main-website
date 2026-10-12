import { useState, useRef, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import {
  ArrowLeft,
  Briefcase,
  MapPin,
  Clock,
  Building2,
  CheckCircle2,
  Send,
  UploadCloud,
  FileText,
  X,
  Code2,
  Award,
  Layers,
  ChevronRight,
  ShieldCheck
} from "lucide-react";
import { getJobBySlug } from "../data/jobData";

const SUBMIT_TIMEOUT_MS = 30000;

export default function JobDetail() {
  const { slug } = useParams();
  const job = getJobBySlug(slug);

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [resumeFile, setResumeFile] = useState(null);
  const fileInputRef = useRef(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!job) {
    return (
      <div className="min-h-[70vh] flex flex-col items-center justify-center text-center px-4 bg-white pt-32">
        <Helmet>
          <title>Job Position Not Found | Worexa Technologies</title>
          <meta name="robots" content="noindex, nofollow" />
        </Helmet>
        <h1 className="text-2xl sm:text-4xl font-black text-slate-900 mb-3">Job Role Not Found</h1>
        <p className="text-slate-600 text-sm mb-6 max-w-md">
          The career opportunity you are looking for might have been filled or updated.
        </p>
        <Link
          to="/careers"
          className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-orange-500 to-amber-500 px-6 py-3 text-xs font-bold text-white shadow-md hover:scale-105 transition-all"
        >
          <ArrowLeft size={14} />
          <span>Explore Open Positions</span>
        </Link>
      </div>
    );
  }

  const validateAndSetFile = (file) => {
    if (!file) return false;
    const maxSizeBytes = 5 * 1024 * 1024; // 5 MB
    if (file.size > maxSizeBytes) {
      alert("Resume file is too large. Maximum allowed size is 5 MB.");
      return false;
    }
    const ext = file.name.split(".").pop()?.toLowerCase();
    if (!["pdf", "doc", "docx", "rtf", "txt"].includes(ext)) {
      alert("Invalid file format. Please upload a PDF, DOC, or DOCX document.");
      return false;
    }
    setResumeFile(file);
    return true;
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      if (!validateAndSetFile(file) && fileInputRef.current) {
        fileInputRef.current.value = "";
      }
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    if (file) {
      if (validateAndSetFile(file) && fileInputRef.current) {
        fileInputRef.current.files = e.dataTransfer.files;
      }
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const form = e.target;
    const roleTitle = job.title;
    const rawMessage = form.message?.value || "";

    const firstName = (form.firstName.value || "").trim();
    const lastName = (form.lastName.value || "").trim();
    const fullName = `${firstName} ${lastName}`.trim();

    const formData = new FormData();
    formData.append("name", fullName);
    formData.append("firstName", firstName);
    formData.append("lastName", lastName);
    formData.append("email", (form.email.value || "").trim());
    formData.append("phone", (form.phone.value || "").trim());
    formData.append("subject", `Job Application: ${roleTitle}`);
    formData.append(
      "message",
      `Role Applied For: ${roleTitle}\nDepartment: ${job.department || "N/A"}\n\nCover Letter / Message:\n${rawMessage || "No cover note provided"}`
    );
    formData.append("source", `Job Detail Page - ${roleTitle}`);
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
      } else {
        alert(result.message || result.error || "Mail server error. Please try again.");
      }
    } catch (error) {
      console.error(error);
      if (error.name === "AbortError") {
        alert("Mail server is taking too long. Please try again or email info@worexatechnologies.com.");
        return;
      }
      alert(error.message || "Could not submit application.");
    } finally {
      window.clearTimeout(timeoutId);
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen text-slate-900 bg-white">
      {/* SEO META TAGS */}
      <Helmet>
        <title>{job.seo?.title || `${job.title} Job | Worexa Technologies Careers`}</title>
        <meta
          name="description"
          content={job.seo?.description || `Join Worexa Technologies as a ${job.title} in Bengaluru.`}
        />
        {job.seo?.keywords && <meta name="keywords" content={job.seo.keywords} />}
        <link rel="canonical" href={`https://worexatechnologies.com/careers/${job.slug}`} />
      </Helmet>

      {/* Hero Banner Header — Pure Obsidian (#050a14) */}
      <section className="relative overflow-hidden bg-[#050a14] pt-28 sm:pt-36 pb-12 sm:pb-16 border-b border-slate-800/80">
        {/* Subtle Ambient Mesh Glow */}
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] sm:w-[950px] h-[300px] pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse at center top, rgba(249, 115, 22, 0.25) 0%, rgba(249, 115, 22, 0.05) 50%, transparent 75%)",
          }}
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="max-w-4xl"
          >
            {/* Breadcrumb Navigation */}
            <div className="flex items-center gap-2 mb-4">
              <Link
                to="/careers"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-orange-400 hover:text-orange-300 transition-colors"
              >
                <ArrowLeft size={13} />
                <span>Careers</span>
              </Link>
              <ChevronRight size={12} className="text-slate-600" />
              <span className="text-xs font-bold uppercase tracking-wider text-slate-300">
                {job.department}
              </span>
            </div>

            {/* Title without numeric prefix */}
            <h1 className="text-2xl sm:text-4xl md:text-5xl font-black text-white tracking-tight leading-tight">
              {job.title}
            </h1>

            {/* Metadata Pills */}
            <div className="flex flex-wrap items-center gap-2.5 sm:gap-3 mt-5">
              <div className="inline-flex items-center gap-1.5 rounded-full bg-white/5 border border-white/10 px-3.5 py-1.5 text-xs font-bold text-slate-200 backdrop-blur-md">
                <Building2 size={13} className="text-orange-400" />
                <span>Department: {job.department}</span>
              </div>

              <div className="inline-flex items-center gap-1.5 rounded-full bg-white/5 border border-white/10 px-3.5 py-1.5 text-xs font-bold text-slate-200 backdrop-blur-md">
                <Clock size={13} className="text-amber-400" />
                <span>Job Type: {job.jobType}</span>
              </div>

              <div className="inline-flex items-center gap-1.5 rounded-full bg-white/5 border border-white/10 px-3.5 py-1.5 text-xs font-bold text-slate-200 backdrop-blur-md">
                <MapPin size={13} className="text-orange-400" />
                <span>Location: {job.location}</span>
              </div>

              {job.experience && (
                <div className="inline-flex items-center gap-1.5 rounded-full bg-orange-500/20 border border-orange-500/40 px-3.5 py-1.5 text-xs font-extrabold text-orange-400 shadow-[0_0_15px_rgba(249,115,22,0.2)]">
                  <Award size={13} />
                  <span>Experience: {job.experience}</span>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Main Details Section */}
      <section className="py-10 sm:py-16 bg-[#f8fafc] border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
            
            {/* Left Content Column */}
            <div className="lg:col-span-8 space-y-6 sm:space-y-8">
              
              {/* Job Description Card */}
              <div className="rounded-3xl border border-slate-200/90 bg-white p-5 sm:p-8 shadow-xs hover:shadow-md transition-shadow">
                <div className="flex items-center gap-3.5 mb-6 pb-4 border-b border-slate-100">
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-orange-50 border border-orange-200/80 text-orange-600 shrink-0">
                    <Briefcase size={20} />
                  </div>
                  <div>
                    <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                      Job Description
                    </h2>
                    <p className="text-xs text-slate-500 font-medium">Core responsibilities & key duties</p>
                  </div>
                </div>

                <ul className="space-y-3.5 text-slate-700 text-sm sm:text-base leading-relaxed">
                  {job.description.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <span className="mt-2 flex h-2 w-2 rounded-full bg-orange-500 shrink-0" />
                      <span className="flex-1">{item}</span>
                    </li>
                  ))}
                </ul>

                {/* Main Goal Callout */}
                {job.mainGoal && (
                  <div className="mt-7 p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-orange-500/10 via-amber-500/5 to-transparent border-l-4 border-orange-500">
                    <span className="block text-[11px] font-black uppercase tracking-wider text-orange-600 mb-1">
                      Primary Strategic Goal
                    </span>
                    <p className="text-xs sm:text-sm font-semibold text-slate-900 leading-relaxed">
                      {job.mainGoal}
                    </p>
                  </div>
                )}

                {/* Work Nature Callout */}
                {job.workNature && (
                  <div className="mt-4 p-4 sm:p-5 rounded-2xl bg-slate-50 border border-slate-200/90">
                    <span className="block text-[11px] font-black uppercase tracking-wider text-slate-500 mb-1">
                      Work Nature & Policy
                    </span>
                    <p className="text-xs sm:text-sm font-medium text-slate-700 leading-relaxed">
                      {job.workNature}
                    </p>
                  </div>
                )}
              </div>

              {/* Required Skills Card (Clean layout, NO Sparkles) */}
              <div className="rounded-3xl border border-slate-200/90 bg-white p-5 sm:p-8 shadow-xs hover:shadow-md transition-shadow">
                <div className="flex items-center gap-3.5 mb-6 pb-4 border-b border-slate-100">
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-orange-50 border border-orange-200/80 text-orange-600 shrink-0">
                    <CheckCircle2 size={20} />
                  </div>
                  <div>
                    <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                      Required Skills & Competencies
                    </h2>
                    <p className="text-xs text-slate-500 font-medium">Technical expertise & abilities required</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-3.5">
                  {job.requiredSkills.map((skill, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-3 p-3.5 rounded-2xl bg-slate-50 border border-slate-200/80 text-xs sm:text-sm font-semibold text-slate-800 hover:border-orange-200 hover:bg-orange-50/40 transition-colors"
                    >
                      <ShieldCheck size={16} className="text-emerald-600 shrink-0" />
                      <span>{skill}</span>
                    </div>
                  ))}
                </div>

                {job.experience && (
                  <div className="mt-6 pt-5 border-t border-slate-100 flex items-center justify-between">
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                      Required Experience:
                    </span>
                    <span className="text-xs sm:text-sm font-black text-orange-600 bg-orange-50 border border-orange-200 px-3 py-1 rounded-full">
                      {job.experience}
                    </span>
                  </div>
                )}
              </div>

            </div>

            {/* Right Side Overview Sidebar */}
            <div className="lg:col-span-4 lg:sticky lg:top-28 space-y-6">
              <div className="rounded-3xl border border-slate-200/90 bg-white p-5 sm:p-7 shadow-lg shadow-slate-200/50">
                <h3 className="text-lg font-black text-slate-900 mb-4 tracking-tight pb-3 border-b border-slate-100">
                  Role Overview
                </h3>

                <div className="space-y-3.5 text-xs sm:text-sm">
                  <div className="flex items-center justify-between py-1.5 border-b border-slate-100">
                    <span className="text-slate-500 font-medium">Department</span>
                    <span className="font-bold text-slate-900">{job.department}</span>
                  </div>
                  <div className="flex items-center justify-between py-1.5 border-b border-slate-100">
                    <span className="text-slate-500 font-medium">Job Type</span>
                    <span className="font-bold text-slate-900">{job.jobType}</span>
                  </div>
                  <div className="flex items-center justify-between py-1.5 border-b border-slate-100">
                    <span className="text-slate-500 font-medium">Location</span>
                    <span className="font-bold text-slate-900">{job.location}</span>
                  </div>
                  <div className="flex items-center justify-between py-1.5">
                    <span className="text-slate-500 font-medium">Experience</span>
                    <span className="font-bold text-orange-600">{job.experience}</span>
                  </div>
                </div>

                <a
                  href="#apply-form"
                  className="mt-6 flex w-full items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-orange-500 via-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 py-3.5 text-xs font-black uppercase tracking-wider text-white shadow-md shadow-orange-500/20 transition-all hover:scale-[1.02] cursor-pointer"
                >
                  <span>Apply For This Role</span>
                  <Send size={13} />
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Down Application Form Section */}
      <section id="apply-form" className="py-14 sm:py-20 bg-white relative border-t border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="mb-8 sm:mb-10 text-center">
            <span className="text-xs font-black uppercase tracking-widest text-orange-600 bg-orange-50 px-3 py-1 rounded-full border border-orange-200">
              Direct Application
            </span>
            <h2 className="text-2xl sm:text-4xl font-black text-slate-900 mt-3 tracking-tight">
              Apply for {job.title}
            </h2>
            <p className="text-slate-600 text-xs sm:text-sm mt-2 max-w-lg mx-auto">
              Complete the quick application form below and attach your resume. Our talent acquisition team will review your application.
            </p>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-white p-5 sm:p-10 shadow-xl shadow-slate-200/50">
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center justify-center text-center py-10"
              >
                <div className="h-16 w-16 rounded-full bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-600 mb-4 shadow-sm">
                  <CheckCircle2 size={36} />
                </div>
                <h3 className="text-2xl font-black text-slate-900 mb-2">Application Submitted!</h3>
                <p className="text-sm text-slate-600 max-w-md leading-relaxed">
                  Thank you for applying for the <strong className="text-slate-900">{job.title}</strong> position. We will review your application and contact you if your experience aligns with our needs.
                </p>
                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="mt-6 inline-flex items-center gap-2 text-xs font-bold text-orange-600 hover:underline cursor-pointer"
                >
                  Submit another application
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                      First Name *
                    </label>
                    <input
                      required
                      name="firstName"
                      type="text"
                      className="w-full px-4 py-3 sm:py-3.5 rounded-2xl bg-slate-50 border border-slate-200 text-slate-900 focus:outline-none focus:bg-white focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 text-sm transition-all"
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
                      className="w-full px-4 py-3 sm:py-3.5 rounded-2xl bg-slate-50 border border-slate-200 text-slate-900 focus:outline-none focus:bg-white focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 text-sm transition-all"
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
                      className="w-full px-4 py-3 sm:py-3.5 rounded-2xl bg-slate-50 border border-slate-200 text-slate-900 focus:outline-none focus:bg-white focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 text-sm transition-all"
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
                      maxLength={10}
                      onInput={(e) => {
                        e.target.value = e.target.value.replace(/\D/g, "").slice(0, 10);
                      }}
                      className="w-full px-4 py-3 sm:py-3.5 rounded-2xl bg-slate-50 border border-slate-200 text-slate-900 focus:outline-none focus:bg-white focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 text-sm transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                    Role Applied For
                  </label>
                  <input
                    type="text"
                    readOnly
                    value={job.title}
                    className="w-full px-4 py-3 sm:py-3.5 rounded-2xl bg-orange-50/70 border border-orange-200 text-orange-700 font-bold text-sm cursor-not-allowed"
                  />
                </div>

                {/* Drop Zone for Resume */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                    Resume / CV (PDF, DOCX) *
                  </label>
                  <div
                    onDragOver={(e) => e.preventDefault()}
                    onDrop={handleDrop}
                    onClick={() => fileInputRef.current && fileInputRef.current.click()}
                    className={`relative flex cursor-pointer flex-col items-center justify-center gap-3 rounded-2xl border-2 border-dashed px-5 py-7 transition-all ${
                      resumeFile
                        ? "border-orange-500 bg-orange-50/80"
                        : "border-slate-300 bg-slate-50/60 hover:border-orange-400 hover:bg-orange-50/30"
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
                        <div className="flex items-center gap-3 min-w-0">
                          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-orange-500 text-white">
                            <FileText size={18} />
                          </div>
                          <div className="min-w-0">
                            <p className="text-sm font-bold text-slate-900 truncate">{resumeFile.name}</p>
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
                            if (fileInputRef.current) fileInputRef.current.value = "";
                          }}
                          className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-slate-200 text-slate-600 hover:bg-red-500 hover:text-white transition-colors"
                        >
                          <X size={14} />
                        </button>
                      </div>
                    ) : (
                      <>
                        <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-orange-100 text-orange-600">
                          <UploadCloud size={22} />
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
                    rows={4}
                    className="w-full px-4 py-3.5 rounded-2xl bg-slate-50 border border-slate-200 text-slate-900 focus:outline-none focus:bg-white focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 text-sm transition-all resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-4 rounded-2xl bg-gradient-to-r from-orange-500 via-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white font-extrabold text-xs sm:text-sm uppercase tracking-wider shadow-md shadow-orange-500/20 active:scale-[0.99] transition-all flex items-center justify-center gap-2 group disabled:opacity-70 disabled:cursor-not-allowed cursor-pointer"
                >
                  {loading ? (
                    "Transmitting Application..."
                  ) : (
                    <>
                      <span>Submit Application</span>
                      <Send
                        size={15}
                        className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
                      />
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

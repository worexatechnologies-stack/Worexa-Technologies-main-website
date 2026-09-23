import { useParams, Link, useNavigate } from "react-router-dom";
import { articles } from "../data/articleData";
import {
  ArrowLeft,
  ArrowRight,
  CalendarDays,
  Clock,
  Send,
  CheckCircle2
} from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";
import { Helmet } from "react-helmet-async";

const getReadTime = (content) => {
  const words = content
    .replace(/<[^>]*>/g, " ")
    .trim()
    .split(/\s+/).length;

  return `${Math.max(2, Math.ceil(words / 180))} min read`;
};

function ContactForm({ articleTitle }) {
  const [form, setForm] = useState({ name: "", phone: "", email: "", message: "" });
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    const nameParts = form.name.trim().split(" ");
    const firstName = nameParts[0] || "";
    const lastName = nameParts.slice(1).join(" ") || "-";

    const data = {
      firstName,
      lastName,
      phone: form.phone,
      email: form.email,
      message: form.message,
      subject: `Blog Enquiry: ${articleTitle}`,
      blogName: articleTitle,
    };

    try {
      const res = await fetch("/send-mail.php", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const result = await res.json();
      if (result.success) {
        setSent(true);
      } else {
        setError(result.message || "Something went wrong. Please try again.");
      }
    } catch {
      setError("Could not connect. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  if (sent) {
    return (
      <div className="text-center py-6">
        <CheckCircle2 size={36} className="text-emerald-500 mx-auto mb-2" />
        <p className="text-lg font-bold text-slate-900 mb-1">Thank you!</p>
        <p className="text-xs text-slate-500">We'll get back to you shortly.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-3">
      <input
        type="text"
        name="name"
        placeholder="Your Full Name"
        required
        value={form.name}
        onChange={handleChange}
        className="w-full rounded-2xl bg-slate-50 border border-slate-200 px-4 py-2.5 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:bg-white focus:border-orange-500 transition-all"
      />
      <input
        type="tel"
        name="phone"
        placeholder="Phone Number"
        required
        value={form.phone}
        onChange={handleChange}
        className="w-full rounded-2xl bg-slate-50 border border-slate-200 px-4 py-2.5 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:bg-white focus:border-orange-500 transition-all"
      />
      <input
        type="email"
        name="email"
        placeholder="Email Address"
        required
        value={form.email}
        onChange={handleChange}
        className="w-full rounded-2xl bg-slate-50 border border-slate-200 px-4 py-2.5 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:bg-white focus:border-orange-500 transition-all"
      />
      <textarea
        name="message"
        placeholder="Inquiry / Growth Goals..."
        rows={4}
        value={form.message}
        onChange={handleChange}
        className="w-full rounded-2xl bg-slate-50 border border-slate-200 px-4 py-2.5 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:bg-white focus:border-orange-500 transition-all resize-none"
      />
      {error && <p className="text-xs text-red-500">{error}</p>}
      <button
        type="submit"
        disabled={loading}
        className="w-full rounded-2xl bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 px-5 py-3 text-xs font-extrabold text-white shadow-md shadow-orange-500/20 transition-all disabled:opacity-60 flex items-center justify-center gap-2"
      >
        <span>{loading ? "Sending..." : "Submit Inquiry"}</span>
        <Send size={13} />
      </button>
    </form>
  );
}

export default function Article() {
  const { slug } = useParams();
  const navigate = useNavigate();

  const article = articles.find((a) => a.slug === slug);
  const otherArticles = articles
    .filter((a) => a.slug !== slug)
    .slice(0, 3);

  if (!article) {
    return (
      <div className="min-h-[70vh] flex flex-col items-center justify-center text-center px-4 bg-white">
        <Helmet>
          <title>Article Not Found | Worexa Technologies</title>
          <meta name="robots" content="noindex, nofollow" />
        </Helmet>
        <h1 className="text-3xl font-black text-slate-900 mb-4">Article Not Found</h1>
        <p className="text-slate-600 text-sm mb-6 max-w-md">
          The guide or playbook you are looking for might have been moved or updated.
        </p>
        <Link
          to="/articles"
          className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-orange-500 to-amber-500 px-6 py-3 text-xs font-extrabold text-white shadow-md"
        >
          <ArrowLeft size={14} />
          <span>Back to All Articles</span>
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen text-slate-900 bg-white">
      {/* DYNAMIC ARTICLE SEO */}
      <Helmet>
        <title>{article.seo?.title || article.title}</title>
        <meta name="description" content={article.seo?.description || `Read ${article.title} on Worexa Technologies.`} />
        {article.seo?.keywords && <meta name="keywords" content={article.seo.keywords} />}
        {article.seo?.publisher && <meta name="publisher" content={article.seo.publisher} />}
        <meta name="author" content={article.seo?.author || "Worexa Technologies"} />
        <meta name="robots" content={article.seo?.robots || "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"} />
        <link rel="canonical" href={article.seo?.canonical || `https://worexatechnologies.com/articles/${article.slug}`} />
        <meta property="og:title" content={article.seo?.ogTitle || article.seo?.title || article.title} />
        <meta property="og:type" content={article.seo?.ogType || "article"} />
        <meta property="og:description" content={article.seo?.ogDescription || article.seo?.description || `Read ${article.title} on Worexa Technologies.`} />
        <meta property="og:url" content={article.seo?.ogUrl || article.seo?.canonical || `https://worexatechnologies.com/articles/${article.slug}`} />
        <meta property="og:site_name" content={article.seo?.ogSiteName || "Worexa Technologies"} />
        <meta
          property="og:image"
          content={
            article.seo?.ogImage ||
            (typeof article.image === "string" && article.image.startsWith("http")
              ? article.image
              : `https://worexatechnologies.com${article.image}`)
          }
        />
        <meta property="og:locale" content={article.seo?.ogLocale || "en_US"} />
        <meta name="twitter:card" content="summary_large_image" />
        {article.seo?.twitterSite && <meta name="twitter:site" content={article.seo.twitterSite} />}
        <meta name="twitter:title" content={article.seo?.twitterTitle || article.seo?.ogTitle || article.seo?.title || article.title} />
        <meta name="twitter:description" content={article.seo?.twitterDescription || article.seo?.ogDescription || article.seo?.description || `Read ${article.title} on Worexa Technologies.`} />
        <meta
          name="twitter:image"
          content={
            article.seo?.twitterImage ||
            article.seo?.ogImage ||
            (typeof article.image === "string" && article.image.startsWith("http")
              ? article.image
              : `https://worexatechnologies.com${article.image}`)
          }
        />
      </Helmet>

      {/* Header Section — Pure Black (#000000) */}
      <section className="relative pt-28 sm:pt-36 pb-12 sm:pb-16 overflow-hidden bg-black border-b border-zinc-900 w-full">
        {/* Subtle Top Warm Amber/Orange Radial Glow */}
        <div 
          className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[850px] h-[300px] pointer-events-none"
          style={{
            background: 'radial-gradient(ellipse at center top, rgba(249, 115, 22, 0.22) 0%, rgba(249, 115, 22, 0.05) 50%, transparent 75%)',
          }}
        />

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <button
            onClick={() => navigate("/articles")}
            className="mb-6 sm:mb-8 inline-flex items-center gap-2 rounded-full border border-zinc-800 bg-zinc-900/90 text-zinc-300 hover:text-orange-400 hover:border-orange-500/40 px-3.5 py-1.5 sm:px-4 sm:py-2 text-xs font-bold transition-all shadow-sm backdrop-blur-md cursor-pointer"
          >
            <ArrowLeft size={14} />
            <span>Back to All Articles</span>
          </button>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-4xl"
          >
            <div className="mb-3.5 sm:mb-4 flex flex-wrap items-center gap-3 sm:gap-4 text-xs font-bold text-orange-400">
              <span className="inline-flex items-center gap-1.5 bg-orange-500/10 border border-orange-500/20 px-2.5 py-1 rounded-full text-[11px] sm:text-xs">
                <CalendarDays size={13} className="text-orange-500" />
                {article.date}
              </span>
              <span className="inline-flex items-center gap-1.5 bg-zinc-900 border border-zinc-800 px-2.5 py-1 rounded-full text-zinc-400 text-[11px] sm:text-xs">
                <Clock size={13} className="text-orange-400" />
                {article.readTime || getReadTime(article.content)}
              </span>
            </div>

            <h1 className="text-2xl sm:text-4xl md:text-5xl font-black leading-tight sm:leading-tight text-white tracking-tight">
              {article.title}
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Main Article Content & Sidebar */}
      <div className="bg-slate-50/60 border-t border-slate-100 w-full">
        <div className="max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8 pb-24 pt-6 sm:pt-12 w-full">
          <div className="grid gap-8 lg:gap-10 lg:grid-cols-[minmax(0,1fr)_380px] items-start w-full">
            <main className="min-w-0 w-full">
              <div className="overflow-hidden rounded-2xl sm:rounded-3xl border border-slate-200/90 bg-white shadow-sm sm:shadow-lg">
                {/* Article Hero Image */}
                <div className="relative w-full overflow-hidden bg-slate-50/50 border-b border-slate-100 flex items-center justify-center p-2 sm:p-0">
                  <img
                    src={article.image}
                    alt={article.title}
                    loading="lazy"
                    className="article-hero-image rounded-xl sm:rounded-none"
                  />
                </div>

                {/* HTML Content Render */}
                <article className="px-4 py-6 sm:px-8 sm:py-10 md:px-12 md:py-12">
                  <div
                    className="
                      article-content
                      text-[15px] sm:text-[16.5px] leading-[1.78] text-slate-700
                      [&>h3:first-child]:hidden
                      [&_p]:mb-4
                      [&_p]:sm:mb-5
                      [&_p]:leading-[1.75]
                      [&_p]:text-slate-700
                      [&_p]:text-[15px]
                      [&_p]:sm:text-[16.5px]
                      [&_a]:font-semibold
                      [&_a]:text-orange-600
                      [&_a]:underline-offset-4
                      [&_a:hover]:underline
                      [&_a:hover]:text-orange-700
                      [&_h2]:mt-8
                      [&_h2]:sm:mt-10
                      [&_h2]:mb-3.5
                      [&_h2]:text-xl
                      [&_h2]:sm:text-2xl
                      [&_h2]:md:text-3xl
                      [&_h2]:font-extrabold
                      [&_h2]:text-slate-900
                      [&_h2]:tracking-tight
                      [&_h2]:pt-4
                      [&_h2]:sm:pt-5
                      [&_h2]:border-t
                      [&_h2]:border-slate-100
                      [&_h3]:mt-6
                      [&_h3]:sm:mt-8
                      [&_h3]:mb-3
                      [&_h3]:text-lg
                      [&_h3]:sm:text-xl
                      [&_h3]:md:text-2xl
                      [&_h3]:font-bold
                      [&_h3]:text-slate-900
                      [&_h3]:tracking-tight
                      [&_h3]:scroll-mt-24
                      [&_h4]:mt-6
                      [&_h4]:mb-2.5
                      [&_h4]:text-base
                      [&_h4]:sm:text-lg
                      [&_h4]:font-bold
                      [&_h4]:text-slate-900
                      [&_strong]:font-bold
                      [&_strong]:text-slate-900
                      [&_ul]:my-4
                      [&_ul]:sm:my-6
                      [&_ul]:rounded-xl
                      [&_ul]:sm:rounded-2xl
                      [&_ul]:border
                      [&_ul]:border-slate-200/90
                      [&_ul]:bg-gradient-to-br
                      [&_ul]:from-slate-50
                      [&_ul]:via-slate-100/50
                      [&_ul]:to-zinc-50
                      [&_ul]:p-3.5
                      [&_ul]:sm:p-5
                      [&_ul]:shadow-xs
                      [&_ul]:space-y-2
                      [&_ol]:my-4
                      [&_ol]:sm:my-6
                      [&_ol]:rounded-xl
                      [&_ol]:sm:rounded-2xl
                      [&_ol]:border
                      [&_ol]:border-slate-200/90
                      [&_ol]:bg-gradient-to-br
                      [&_ol]:from-slate-50
                      [&_ol]:via-slate-100/50
                      [&_ol]:to-zinc-50
                      [&_ol]:p-3.5
                      [&_ol]:sm:p-5
                      [&_ol]:shadow-xs
                      [&_ol]:space-y-2
                      [&_li]:text-[14px]
                      [&_li]:sm:text-[15.5px]
                      [&_li]:leading-relaxed
                      [&_li]:text-slate-700
                      [&_li]:pl-1
                      [&_blockquote]:border-l-4
                      [&_blockquote]:border-orange-500
                      [&_blockquote]:bg-slate-100/80
                      [&_blockquote]:rounded-r-xl
                      [&_blockquote]:p-4
                      [&_blockquote]:my-5
                      [&_blockquote]:text-slate-800
                    "
                    dangerouslySetInnerHTML={{
                      __html: (article.content || "")
                        .replace(/<li[^>]*>\s*[•·]\s*/gi, "<li>")
                        .replace(/<li[^>]*>\s*<\/li>/gi, "")
                        .replace(/<h3>(.*?)<\/h3>/i, (match, p1) => {
                          // If first h3 matches article title, strip it to prevent duplicate title on mobile
                          if (p1 && article.title && (p1.trim().toLowerCase() === article.title.trim().toLowerCase() || article.title.trim().toLowerCase().includes(p1.trim().toLowerCase().slice(0, 20)))) {
                            return "";
                          }
                          return match;
                        }),
                    }}
                  />
                </article>
              </div>

              {/* Related Articles DOWN at bottom of article */}
              <div className="mt-8 sm:mt-10 rounded-2xl sm:rounded-3xl border border-slate-200/90 bg-white p-4 sm:p-7 shadow-sm">
                <h3 className="text-base sm:text-lg font-black text-slate-900 mb-5 flex items-center justify-between">
                  <span className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-orange-500"></span>
                    Related Insights
                  </span>
                  <Link to="/articles" className="text-xs font-bold text-orange-600 hover:underline">
                    View All Guides →
                  </Link>
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4">
                  {otherArticles.slice(0, 4).map((other) => (
                    <Link
                      key={other.slug}
                      to={`/articles/${other.slug}`}
                      className="group flex gap-3.5 items-center rounded-xl sm:rounded-2xl p-3 border border-slate-200/80 bg-slate-50/70 hover:bg-orange-50/50 hover:border-orange-200 transition-all duration-200 shadow-2xs"
                    >
                      <img
                        src={other.image}
                        alt={other.title}
                        loading="lazy"
                        className="h-14 w-14 sm:h-16 sm:w-16 rounded-lg sm:rounded-xl object-cover shrink-0 border border-slate-200/60"
                      />
                      <div className="min-w-0">
                        <p className="text-[10px] font-bold text-orange-600 uppercase tracking-wider mb-1">{other.date}</p>
                        <h4 className="text-xs sm:text-[13px] font-bold text-slate-800 group-hover:text-orange-600 line-clamp-2 transition-colors leading-snug">
                          {other.title}
                        </h4>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </main>

            {/* Sticky Fixed Sidebar with Form */}
            <aside className="w-full lg:w-[380px] article-sidebar-sticky lg:sticky lg:top-24 lg:self-start shrink-0 z-20">
              <div className="rounded-2xl sm:rounded-3xl border border-slate-200/90 bg-white p-4 sm:p-7 shadow-md sm:shadow-lg shadow-slate-200/50">
                <div className="mb-4">
                  <span className="text-[10px] font-black uppercase tracking-wider text-orange-600 bg-orange-50 border border-orange-200/60 px-2 py-0.5 rounded-md inline-block mb-1.5">Quick Inquiry</span>
                  <h3 className="text-lg font-black text-slate-900 tracking-tight">Direct Message</h3>
                  <p className="text-xs text-slate-500 mt-0.5">Connect directly with our team regarding this article.</p>
                </div>
                <ContactForm articleTitle={article.title} />
              </div>
            </aside>
          </div>
        </div>
      </div>
    </div>
  );
}
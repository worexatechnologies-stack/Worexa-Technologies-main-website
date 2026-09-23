import { Link } from "react-router-dom";
import { ArrowRight, CalendarDays, Clock } from "lucide-react";
import { motion } from "framer-motion";
import { articles } from "../data/articleData";
import { Helmet } from "react-helmet-async";

const getReadTime = (content) => {
  const words = content.replace(/<[^>]*>/g, " ").trim().split(/\s+/).length;
  return `${Math.max(2, Math.ceil(words / 180))} min read`;
};

const formatReadTime = (article) => {
  const raw = article.readTime || article.Readingtime || (article.content ? getReadTime(article.content) : "5 min read");
  const match = String(raw).match(/\d+/);
  const minutes = match ? match[0] : "5";
  return `${minutes} MIN READ`;
};

export default function Articles() {
  const [featured, ...posts] = articles;

  return (
    <div className="min-h-screen text-slate-900 bg-white">
      <Helmet>
        <title>Digital Marketing Blog | SEO, PPC & Online Marketing Tips</title>
        <meta name="description" content="Stay ahead with our Digital Marketing Blog featuring SEO strategies, PPC guides, content marketing tips, social media insights, and industry trends." />
        <meta name="keywords" content="digital marketing blog, types of digital marketing, digital marketing insights, digital marketing resources, digital marketing tips, latest digital marketing trends, social media marketing tips" />
        <meta name="author" content="Akshay" />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <link rel="canonical" href="https://worexatechnologies.com/articles" />
        <meta property="og:title" content="Digital Marketing Blog | SEO, PPC & Online Marketing Tips" />
        <meta property="og:type" content="article" />
        <meta property="og:description" content="Stay ahead with our Digital Marketing Blog featuring SEO strategies, PPC guides, content marketing tips, social media insights, and industry trends." />
        <meta property="og:url" content="https://worexatechnologies.com/articles" />
        <meta property="og:site_name" content="Worexa Technologies" />
        <meta property="og:image" content="https://worexatechnologies.com/assets/logo.png" />
        <meta property="og:locale" content="en_US" />
        <meta property="publisher" content="Worexa Technologies" />
        <meta name="twitter:site" content="https://twitter.com/" />
        <meta name="twitter:title" content="Digital Marketing Blog | SEO, PPC & Online Marketing Tips" />
        <meta name="twitter:description" content="Stay ahead with our Digital Marketing Blog featuring SEO strategies, PPC guides, content marketing tips, social media insights, and industry trends." />
      </Helmet>

      {/* --- HERO BANNER — PURE BLACK (#000000) --- */}
      <section className="relative overflow-hidden bg-black pt-24 sm:pt-36 pb-12 sm:pb-20 border-b border-zinc-900">
        {/* Subtle Top Warm Amber/Orange Radial Glow */}
        <div 
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] sm:w-[950px] h-[300px] pointer-events-none"
          style={{
            background: 'radial-gradient(ellipse at center top, rgba(249, 115, 22, 0.22) 0%, rgba(249, 115, 22, 0.05) 50%, transparent 75%)',
          }}
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-5xl mx-auto"
          >
            <h1 className="text-2xl sm:text-5xl md:text-6xl font-black text-white tracking-tight leading-[1.2] sm:leading-[1.15]">
              Digital Marketing Insights for <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-amber-400 to-orange-500">Sustainable Business Growth</span>
            </h1>
            <p className="mt-4 sm:mt-5 text-sm sm:text-lg text-zinc-300 leading-relaxed font-normal max-w-4xl mx-auto">
              Practical, expert-led insights on SEO, AEO, Google Ads, social media marketing, content strategy, branding, and digital growth, built to help businesses attract qualified customers and turn online visibility into measurable results.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Featured Article */}
      {featured && (
        <section className="pt-6 sm:pt-14 pb-10 sm:pb-16 bg-slate-50/40">
          <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
            <Link
              to={`/articles/${featured.slug}`}
              className="group grid lg:grid-cols-12 overflow-hidden rounded-2xl sm:rounded-3xl border border-slate-200/80 bg-white shadow-xs sm:shadow-lg transition-all duration-300 hover:border-orange-300 hover:shadow-xl"
            >
              <div className="lg:col-span-7 relative min-h-[200px] sm:min-h-[340px] overflow-hidden bg-slate-100">
                <img
                  src={featured.image}
                  alt={featured.title}
                  loading="lazy"
                  className="h-full w-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute top-3.5 left-3.5 sm:top-4 sm:left-4 rounded-full bg-gradient-to-r from-orange-500 to-amber-500 px-3 py-1 text-[10px] sm:text-[11px] font-black uppercase tracking-wider text-white shadow-md">
                  Featured Insight
                </div>
              </div>

              <div className="lg:col-span-5 p-4 sm:p-8 lg:p-10 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-3 text-xs font-bold uppercase tracking-wider mb-2.5 sm:mb-3">
                    <span className="text-slate-400">{featured.date ? featured.date.toUpperCase() : ""}</span>
                    <span className="text-orange-500 font-bold">{formatReadTime(featured)}</span>
                  </div>

                  <h2 className="font-sans text-lg sm:text-3xl lg:text-4xl font-black text-slate-900 leading-snug sm:leading-tight tracking-tight group-hover:text-orange-600 transition-colors">
                    {featured.title}
                  </h2>

                  <p className="mt-2.5 sm:mt-3 text-xs sm:text-sm text-slate-600 leading-relaxed line-clamp-3">
                    Deep dive into data-backed frameworks to build sustainable search presence and maximize inbound conversion velocity.
                  </p>
                </div>

                <div className="mt-5 sm:mt-8 pt-4 sm:pt-6 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-xs sm:text-sm font-semibold text-slate-500 group-hover:text-orange-600 transition-colors">
                    Read article
                  </span>
                  <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-orange-50 text-orange-500 flex items-center justify-center transition-all duration-300 group-hover:bg-orange-500 group-hover:text-white shadow-2xs">
                    <ArrowRight size={15} className="transition-transform duration-300 group-hover:translate-x-0.5" />
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </section>
      )}

      {/* Remaining Posts Grid */}
      <section className="py-10 sm:py-16 border-t border-slate-200/80 bg-slate-50/70">
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
          <div className="mb-6 sm:mb-10 flex items-center justify-between">
            <h3 className="text-lg sm:text-2xl font-black text-slate-900 tracking-tight">All Published Guides</h3>
            <span className="text-xs text-slate-500 font-semibold bg-white border border-slate-200 px-2.5 py-1 rounded-full">{posts.length + 1} Articles</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-7">
            {posts.map((article) => (
              <Link
                key={article.slug}
                to={`/articles/${article.slug}`}
                className="group relative flex flex-col justify-between overflow-hidden rounded-2xl sm:rounded-3xl border border-slate-200/90 bg-white shadow-xs hover:shadow-xl hover:border-orange-300/80 transition-all duration-300 hover:-translate-y-1"
              >
                <div>
                  <div className="relative h-48 sm:h-56 w-full overflow-hidden bg-slate-100">
                    <img
                      src={article.image}
                      alt={article.title}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>

                  <div className="p-4 sm:p-6">
                    <div className="flex items-center gap-2.5 text-xs font-bold uppercase tracking-wider mb-2.5">
                      <span className="text-slate-400 text-[11px]">{article.date ? article.date.toUpperCase() : ""}</span>
                      <span className="text-orange-500 font-bold text-[11px]">{formatReadTime(article)}</span>
                    </div>

                    <h4 className="font-sans text-base sm:text-[20px] font-black text-slate-900 group-hover:text-orange-600 transition-colors leading-[1.35] tracking-tight">
                      {article.title}
                    </h4>
                  </div>
                </div>

                <div className="px-4 pb-4 sm:px-6 sm:pb-6 pt-0">
                  <div className="flex items-center justify-between text-xs sm:text-sm font-semibold text-slate-500 group-hover:text-orange-600 transition-colors pt-3 border-t border-slate-100">
                    <span>Read article</span>
                    <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-orange-50 text-orange-500 flex items-center justify-center transition-all duration-300 group-hover:bg-orange-500 group-hover:text-white shadow-2xs">
                      <ArrowRight size={14} className="transition-transform duration-300 group-hover:translate-x-0.5" />
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

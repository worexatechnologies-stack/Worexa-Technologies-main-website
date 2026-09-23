import React from 'react';
import { motion } from 'framer-motion';

const Photoshoot = () => {
  return (
    <div className="w-full">


      {/* --- 2. INTRO SECTION --- */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-6 max-w-5xl">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <p className="text-2xl md:text-3xl text-gray-900 font-bold">
              Photoshoot & Creative Production
            </p>

            <div className="h-1 w-24 bg-orange-600 rounded-full"></div>

            <p className="text-xl text-gray-600 leading-relaxed font-medium">
              Visual content is the first thing your audience notices — and it directly impacts how they perceive your brand.
              High-quality visuals are essential for social media, ads, websites, and branding. Poor visuals can reduce trust,
              while strong visuals can instantly elevate your brand.
            </p>

            <p className="text-xl text-gray-600 leading-relaxed font-medium">
              As a creative marketing and advertising company in Bangalore, we offer professional photoshoot services that help you
              showcase your brand in the best possible way.
            </p>
          </motion.div>
        </div>
      </section>

      {/* --- 3. APPROACH GRID --- */}
      <section className="pb-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-7xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-black text-black mb-6 uppercase">
              Our Photoshoot Approach
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We create visuals that align with your brand identity and marketing goals.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Concept & Planning",
                desc: "We understand your brand, audience, and objectives to create a clear shoot concept and direction."
              },
              {
                title: "Professional Photoshoots",
                desc: "From product shoots to lifestyle and brand shoots, we capture high-quality visuals that reflect your brand personality."
              },
              {
                title: "Creative Direction",
                desc: "We guide styling, composition, and aesthetics to ensure every shot aligns with your brand image."
              },
              {
                title: "Editing & Post-Production",
                desc: "We enhance visuals with professional editing, color correction, and detailing for a polished finish."
              },
              {
                title: "Platform-Ready Content",
                desc: "All visuals are optimized for format, resolution, and platform requirements for seamless use."
              }
            ].map((step, i) => (
              <div
                key={i}
                className="p-10 rounded-3xl bg-gray-50 border border-gray-100 hover:border-orange-600 hover:shadow-xl transition-all duration-300"
              >
                <h3 className="text-xl font-extrabold text-black mb-4">
                  <span className="text-orange-600 mr-2">0{i + 1}.</span>
                  {step.title}
                </h3>
                <p className="text-gray-600">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- 4. RESULTS SECTION --- */}
      <section className="py-10 bg-white">
        <div className="container mx-auto px-8">
          <div className="max-w-7xl mx-auto bg-orange-50 rounded-[2.5rem] p-8 md:p-14 shadow-lg border border-orange-100">

            <div className="flex flex-col lg:flex-row gap-10 items-center">

              <div className="lg:w-1/2 text-left">
                <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6">
                  Visuals That <span className="text-orange-600 italic">Drive Engagement</span>
                </h2>

                <p className="text-lg text-slate-600">
                  Great visuals don't just look good — they perform.
                  We ensure your content attracts attention, increases engagement, and improves conversions.
                </p>
              </div>

              <div className="lg:w-1/2 bg-white p-8 rounded-2xl border border-orange-200">
                <ul className="space-y-4 text-slate-700">
                  {[
                    "Build a strong brand image",
                    "Increase social media engagement",
                    "Improve ad performance",
                    "Create high-quality marketing assets"
                  ].map((item, i) => (
                    <li key={i} className="flex gap-3">
                      <span className="w-2 h-2 bg-orange-600 rounded-full mt-2"></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* --- 5. WHY CHOOSE US --- */}
      <section className="py-20 bg-white text-center">
        <h2 className="text-4xl font-black mb-10">
          Why Choose Us for Photoshoots?
        </h2>

        <div className="grid md:grid-cols-4 gap-8 px-8">
          {[
            "Professional and creative execution",
            "Brand-focused visual storytelling",
            "High-quality editing and delivery",
            "Content optimized for marketing use"
          ].map((item, i) => (
            <h4 key={i} className="text-orange-600 font-bold">{item}</h4>
          ))}
        </div>
      </section>

      {/* --- 6. EXPECTATION --- */}
      <section className="py-24 bg-gray-100 text-center">
        <h2 className="text-4xl font-black mb-6">
          What You Can Expect
        </h2>

        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {[
            "High-quality, professional visuals",
            "Stronger brand perception",
            "Better engagement across platforms",
            "Improved ad performance",
            "Consistent visual identity"
          ].map((item, i) => (
            <div key={i} className="bg-white p-5 rounded-xl shadow">
              {item}
            </div>
          ))}
        </div>
      </section>

    </div>
  );
};

export default Photoshoot;
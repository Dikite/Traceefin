// components/AboutSection.tsx
"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  Target,
  Star,
  Globe2,
  Handshake,
  UserRound,
  Linkedin,
  Briefcase,
} from "lucide-react";

const AboutSection = () => {
  return (
    <section className="w-full bg-gradient-to-br from-[#f8fafc] to-[#f1f5f9] py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#1e293b] mb-6">
            About{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#356090] to-[#61a1b7]">
              Traceefin
            </span>
          </h2>
          <p className="text-lg md:text-xl text-[#475569] max-w-3xl mx-auto leading-relaxed">
            At Traceefin, we don’t just surf the waves of technology — we create them.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-14 items-start">
          {/* Left Column */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-10"
          >
            {[
              {
                icon: <Target className="w-6 h-6" />,
                title: "Our Mission",
                color: "from-[#356090] to-[#61a1b7]",
                text: "Specializing in fraud detection and customized underwriting, we offer 250+ verification APIs. Whether you’re in banking, fintech, or insurance, we’ve got your back—no life jackets required.",
              },
              {
                icon: <Star className="w-6 h-6" />,
                title: "Flagship Product",
                color: "from-[#f59e0b] to-[#fbbf24]",
                text: "Our flagship solution delivers measurable results within just 30 days of onboarding, ensuring rapid value and a strong competitive edge.",
              },
              {
                icon: <Globe2 className="w-6 h-6" />,
                title: "OCR API",
                color: "from-[#10b981] to-[#34d399]",
                text: "Based on the principle of 'Any ID, One API,' it verifies IDs  with built-in fraud detection — keeping the bad actors out, no capes required.",
              },
              {
                icon: <Handshake className="w-6 h-6" />,
                title: "Our Promise",
                color: "from-[#8b5cf6] to-[#a78bfa]",
                text: "We guarantee 100% verification accuracy and complete confidentiality, giving you unmatched trust and security in every interaction.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-white p-8 rounded-2xl shadow-md border border-[#e2e8f0] hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-center mb-5">
                  <div
                    className={`bg-gradient-to-r ${item.color} p-3 rounded-lg mr-4 text-white`}
                  >
                    {item.icon}
                  </div>
                  <h3 className="text-2xl font-semibold text-[#1e293b]">
                    {item.title}
                  </h3>
                </div>
                <p className="text-[#475569] leading-relaxed">{item.text}</p>
              </div>
            ))}
          </motion.div>

          {/* Right Column */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            {/* Founder Card */}
            <div className="bg-white p-10 rounded-2xl shadow-md border border-[#e2e8f0] hover:shadow-xl transition-all duration-300">
              <h3 className="text-2xl font-semibold text-[#1e293b] mb-8 flex items-center">
                <UserRound className="w-6 h-6 text-[#356090] mr-3" />
                Our Founder
              </h3>

              <div className="flex flex-col md:flex-row items-start gap-8">
                {/* Profile */}
                <div className="flex flex-col items-center md:items-start">
                  <Image
                    src="/mahesh.jpg"
                    alt="Mahesh Babu"
                    width={100}
                    height={100}
                    className="w-28 h-28 rounded-full object-cover mb-4 border-4 border-[#f0f7ff] shadow-md"
                  />
                  <a
                    href="https://www.linkedin.com/in/mahesh-babu-24b4a124"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-white bg-gradient-to-r from-[#356090] to-[#61a1b7] hover:from-[#2d4f7a] hover:to-[#4f8fa5] px-5 py-2.5 rounded-lg text-sm font-medium shadow-sm"
                  >
                    <Linkedin className="w-4 h-4 mr-2" /> Connect
                  </a>
                </div>

                {/* Bio */}
                <div className="flex-1">
                  <h4 className="text-2xl font-bold text-[#1e293b]">
                    Mahesh Babu
                  </h4>
                  <p className="text-lg text-[#475569] mb-3">Founder & CEO</p>
                  <div className="flex items-center text-[#356090] mb-5 bg-[#f0f7ff] px-3 py-1 rounded-full w-fit">
                    <Briefcase className="w-4 h-4 mr-2" />
                    <span className="font-medium">18+ years of experience</span>
                  </div>
                  <p className="text-[#475569] leading-relaxed">
                    A technology strategist specializing in scalable solutions
                    and digital transformation. With nearly two decades of
                    experience, Mahesh brings visionary leadership and deep
                    expertise to drive traceefin’s mission of revolutionizing
                    identity verification and fraud detection.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

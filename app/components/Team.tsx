'use client';
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

interface TeamMember {
  id: string;
  name: string;
  role: string;
  image: string;
  bio: string;
  skills: string[];
  social: {
    linkedin?: string;
    github?: string;
    twitter?: string;
  };
}

const teamMembers: TeamMember[] = [
  {
    id: "member-1",
    name: "Vijaya Vitthal",
    role: "Lead 3D Designer",
    image: "/team/alex.jpg",
    bio: "Passionate about creating innovative 3D designs with 8+ years of experience in additive manufacturing.",
    skills: ["3D Modeling", "CAD Design", "Prototyping"],
    social: {
      linkedin: "https://linkedin.com/in/alexrodriguez",
      github: "https://github.com/alexrodriguez"
    }
  },
  {
    id: "member-2",
    name: "Bharath Kumar S",
    role: "Manufacturing Engineer",
    image: "/team/sarah.jpg",
    bio: "Expert in precision engineering and quality control with a focus on sustainable manufacturing processes.",
    skills: ["Quality Control", "Process Optimization", "Materials Science"],
    social: {
      linkedin: "https://linkedin.com/in/sarahchen",
      twitter: "https://twitter.com/sarahchen"
    }
  },
  {
    id: "member-3",
    name: "Vishnu V",
    role: "Technology Director",
    image: "/team/david.jpg",
    bio: "Leading innovation in 3D printing technology and automation with 10+ years in the industry.",
    skills: ["3D Printing", "Automation", "Innovation"],
    social: {
      linkedin: "https://linkedin.com/in/davidkumar",
      github: "https://github.com/davidkumar"
    }
  }
];

export default function Team() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section
      ref={sectionRef}
      className="relative w-full bg-black py-20 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      {/* Animated Background Grid */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(239,68,68,0.3)_1px,transparent_1px),linear-gradient(90deg,rgba(239,68,68,0.3)_1px,transparent_1px)] bg-[size:80px_80px]"></div>
      </div>

      {/* Floating Orbs */}
      <motion.div
        className="absolute top-20 left-10 w-64 h-64 bg-red-600/10 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-20 right-10 w-96 h-96 bg-red-500/5 rounded-full blur-3xl"
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="max-w-7xl mx-auto relative ">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={isInView ? { scale: 1, opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-block mb-4"
          >
            <span className="px-4 py-2 bg-red-600/10 border border-red-500/30 rounded-full text-red-500 text-sm font-semibold tracking-wider">
              OUR TEAM
            </span>
          </motion.div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
            Meet The{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-700">
              Experts
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed">
            A passionate team of innovators dedicated to pushing the boundaries of 3D printing technology
          </p>
        </motion.div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
              className="group relative"
            >
              <div className="relative bg-gradient-to-b from-zinc-900/90 to-black/90 backdrop-blur-sm rounded-2xl overflow-hidden border border-zinc-800/50 hover:border-red-500/50 transition-all duration-500">
                
                {/* Top Accent Bar */}
                <div className="h-1 bg-gradient-to-r from-red-600 via-red-500 to-red-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
                
                {/* Content Container */}
                <div className="p-8">
                  {/* Profile Image */}
                  <div className="relative mb-6">
                    <div className="relative w-28 h-28 mx-auto">
                      {/* Glowing Ring */}
                      <motion.div
                        className="absolute inset-0 rounded-full bg-gradient-to-r from-red-500/20 to-red-600/20 blur-md"
                        animate={{
                          scale: [1, 1.1, 1],
                          opacity: [0.5, 0.8, 0.5],
                        }}
                        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                      />
                      
                      {/* Image Container */}
                      <div className="relative w-full h-full rounded-full overflow-hidden border-2 border-zinc-700 group-hover:border-red-500/70 transition-all duration-500 shadow-lg shadow-red-500/20">
                        <div className="w-full h-full bg-gradient-to-br from-zinc-700 to-zinc-800 flex items-center justify-center">
                          <svg className="w-14 h-14 text-zinc-600" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                          </svg>
                        </div>
                      </div>
                      
                      {/* Online Status */}
                      <div className="absolute bottom-1 right-1 w-7 h-7 bg-black rounded-full flex items-center justify-center">
                        <div className="w-5 h-5 bg-emerald-500 rounded-full border-2 border-black">
                          <motion.div
                            className="w-full h-full bg-emerald-400 rounded-full"
                            animate={{ scale: [1, 1.3, 1], opacity: [1, 0, 1] }}
                            transition={{ duration: 2, repeat: Infinity }}
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Member Details */}
                  <div className="text-center space-y-3">
                    <h3 className="text-2xl font-bold text-white group-hover:text-red-400 transition-colors duration-300">
                      {member.name}
                    </h3>
                    <p className="text-red-500 font-medium text-sm uppercase tracking-widest">
                      {member.role}
                    </p>
                    <p className="text-gray-400 text-sm leading-relaxed min-h-[3rem]">
                      {member.bio}
                    </p>
                  </div>

                  {/* Skills Tags */}
                  <div className="flex flex-wrap justify-center gap-2 mt-6 mb-6">
                    {member.skills.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="px-3 py-1 bg-zinc-800/80 text-gray-300 text-xs rounded-lg border border-zinc-700/50 hover:border-red-500/50 hover:text-red-400 transition-all duration-300"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>

                  {/* Divider */}
                  <div className="h-px bg-gradient-to-r from-transparent via-zinc-700 to-transparent mb-6"></div>

                  {/* Social Links */}
                  <div className="flex justify-center gap-3">
                    {member.social.linkedin && (
                      <a
                        href={member.social.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group/social w-10 h-10 bg-zinc-800/80 hover:bg-blue-600 text-zinc-400 hover:text-white rounded-lg flex items-center justify-center transition-all duration-300 border border-zinc-700/50 hover:border-blue-500/50 hover:shadow-lg hover:shadow-blue-500/20"
                      >
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                        </svg>
                      </a>
                    )}
                    {member.social.github && (
                      <a
                        href={member.social.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group/social w-10 h-10 bg-zinc-800/80 hover:bg-zinc-700 text-zinc-400 hover:text-white rounded-lg flex items-center justify-center transition-all duration-300 border border-zinc-700/50 hover:border-zinc-600 hover:shadow-lg hover:shadow-zinc-500/20"
                      >
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                        </svg>
                      </a>
                    )}
                    {member.social.twitter && (
                      <a
                        href={member.social.twitter}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group/social w-10 h-10 bg-zinc-800/80 hover:bg-sky-500 text-zinc-400 hover:text-white rounded-lg flex items-center justify-center transition-all duration-300 border border-zinc-700/50 hover:border-sky-400/50 hover:shadow-lg hover:shadow-sky-500/20"
                      >
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                        </svg>
                      </a>
                    )}
                  </div>
                </div>

                {/* Bottom Glow Effect */}
                <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-red-500/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Join Team CTA */}
        {/* <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <div className="inline-flex flex-col items-center gap-4 p-8 bg-zinc-900/50 backdrop-blur-sm rounded-2xl border border-zinc-800/50">
            <p className="text-gray-300 text-lg">Want to join our amazing team?</p>
            <button className="px-8 py-3 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-semibold rounded-lg transition-all duration-300 shadow-lg shadow-red-500/30 hover:shadow-red-500/50 hover:scale-105">
              View Open Positions
            </button>
          </div>
        </motion.div> */}
      </div>
    </section>
  );
}
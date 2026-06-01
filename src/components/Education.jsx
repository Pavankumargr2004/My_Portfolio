import React from 'react';

const EDUCATION_DETAILS = {
  institution: "Dayananda Sagar University",
  location: "Bengaluru, Karnataka, India",
  degree: "B.Tech in Computer Science and Engineering",
  timeline: "2023 — Present",
  metrics: [
    { label: "Cumulative CGPA", value: "9.05 / 10" },
    { label: "Current Standing", value: "Undergraduate Active" }
  ],
  preUniversity: {
    institution: "SDC Independent PU College",
    stream: "PCMB (Physics, Chemistry, Mathematics, Biology)",
    timeline: "2020 — 2022",
    metric: "93%"
  },
  secondarySchool: {
    institution: "Adarsha Vidyalaya",
    stream: "General Secondary Education (10th Grade)",
    timeline: "2020", // Updated timeline
    metric: "90.56%"  // Added your score
  },
  coreTracks: [
    "Artificial Intelligence & Deep Learning (TensorFlow, CNN, NLP)",
    "Explainable AI & Fair Machine Learning (SHAP, LIME)",
    "Full-Stack Engineering (ReactJS, NodeJS, ExpressJS, FastAPI)",
    "Data Structures & Algorithms, DBMS, and Operating Systems",
    "Cloud Computing Foundations & Workflow Automation (n8n)"
  ]
};

export default function Education() {
  return (
    <section id="education" className="px-6 md:px-12 py-20 md:py-32 border-b border-[#1A1814]/12 bg-[#FAF7F2]">
      <div className="max-w-6xl mx-auto">
        
        {/* Main Grid Wrapper */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-24 items-start w-full">
          
          {/* Left Column: Heading Layout */}
          <div className="lg:sticky lg:top-32 lg:self-start h-fit space-y-4 z-10">
            <div>
              <div className="section-label reveal font-mono text-[11px] tracking-[0.2em] uppercase text-[#0047FF] mb-2">
                Foundations
              </div>
              <h2 className="font-sans text-[clamp(32px,4vw,48px)] font-extrabold tracking-tight leading-[1.1] text-[#1A1814]">
                Education &amp; <br />
                <em className="font-serif font-light italic text-[#0047FF]">Theory.</em>
              </h2>
            </div>
            <p className="font-mono text-xs text-[#6B6560] pt-2 max-w-sm leading-relaxed">
              Synthesizing machine learning engineering, algorithmic complexity thresholds, and core theoretical computer science backgrounds.
            </p>
          </div>

          {/* Right Column: Content Blocks */}
          <div className="lg:col-span-2 space-y-16 mt-4 lg:mt-0 w-full">
            
            {/* Undergraduate Degree Block */}
            <div className="reveal border-b border-[#1A1814]/12 pb-12 group">
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-4 mb-4">
                <div>
                  <span className="font-mono text-[10px] text-[#0047FF] uppercase tracking-widest block mb-1 font-semibold">
                    Undergraduate Program
                  </span>
                  <h3 className="font-sans text-xl sm:text-2xl font-bold text-[#1A1814] group-hover:text-[#0047FF] transition-colors duration-200 tracking-tight leading-snug">
                    {EDUCATION_DETAILS.institution}
                  </h3>
                  <div className="font-mono text-xs text-[#6B6560] mt-1">
                    {EDUCATION_DETAILS.location}
                  </div>
                </div>
                
                <div className="w-fit font-mono text-xs font-bold text-[#0047FF] bg-[#1A1814]/4 px-3 py-1 border border-[#1A1814]/5 rounded-sm whitespace-nowrap">
                  {EDUCATION_DETAILS.timeline}
                </div>
              </div>

              <h4 className="font-sans text-base font-semibold text-[#1A1814]/80 mb-6 leading-normal">
                {EDUCATION_DETAILS.degree}
              </h4>

              {/* CGPA & Academic Status Badges */}
              <div className="grid grid-cols-2 gap-4 max-w-xs mb-8 bg-white border border-[#1A1814]/12 p-4 rounded-sm shadow-sm">
                {EDUCATION_DETAILS.metrics.map((metric, i) => (
                  <div key={i} className="space-y-0.5">
                    <div className="font-mono text-[10px] uppercase text-[#6B6560] tracking-wider break-words">{metric.label}</div>
                    <div className="font-mono text-sm font-bold text-[#1A1814]">{metric.value}</div>
                  </div>
                ))}
              </div>

              {/* Core Specialized Focus Tracks */}
              <div className="pt-6 border-t border-[#1A1814]/6">
                <h5 className="font-sans text-xs font-bold uppercase tracking-wider text-[#1A1814] mb-4">
                  Core Curricular Competencies
                </h5>
                <ul className="list-none m-0 p-0 space-y-3">
                  {EDUCATION_DETAILS.coreTracks.map((focus, i) => (
                    <li key={i} className="font-mono text-xs text-[#6B6560] flex items-start gap-2.5 leading-relaxed">
                      <span className="text-[#0047FF] select-none mt-0.5">▪</span>
                      <span>{focus}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Higher Secondary / Pre-University Block */}
            <div className="reveal border-b border-[#1A1814]/12 pb-12 group">
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-4 mb-4">
                <div>
                  <span className="font-mono text-[10px] text-[#0047FF] uppercase tracking-widest block mb-1 font-semibold">
                    Higher Secondary Education
                  </span>
                  <h3 className="font-sans text-xl font-bold text-[#1A1814] group-hover:text-[#0047FF] transition-colors duration-200 tracking-tight leading-snug">
                    {EDUCATION_DETAILS.preUniversity.institution}
                  </h3>
                  <div className="font-mono text-xs text-[#6B6560] mt-1">
                    {EDUCATION_DETAILS.preUniversity.stream}
                  </div>
                </div>
                
                <div className="font-mono text-xs font-bold text-[#6B6560] whitespace-nowrap">
                  {EDUCATION_DETAILS.preUniversity.timeline}
                </div>
              </div>

              <div className="font-mono text-xs text-[#6B6560]">
                Final Matriculation Score: <strong className="text-[#1A1814] font-bold">{EDUCATION_DETAILS.preUniversity.metric}</strong>
              </div>
            </div>

            {/* Adarsha Vidyalaya Block */}
            <div className="reveal pb-4 group">
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-4 mb-4">
                <div>
                  <span className="font-mono text-[10px] text-[#0047FF] uppercase tracking-widest block mb-1 font-semibold">
                    Secondary Education
                  </span>
                  <h3 className="font-sans text-xl font-bold text-[#1A1814] group-hover:text-[#0047FF] transition-colors duration-200 tracking-tight leading-snug">
                    {EDUCATION_DETAILS.secondarySchool.institution}
                  </h3>
                  <div className="font-mono text-xs text-[#6B6560] mt-1">
                    {EDUCATION_DETAILS.secondarySchool.stream}
                  </div>
                </div>
                
                <div className="font-mono text-xs font-bold text-[#6B6560] whitespace-nowrap">
                  {EDUCATION_DETAILS.secondarySchool.timeline}
                </div>
              </div>
              
              {/* Added Final Metric Display for 10th Grade */}
              <div className="font-mono text-xs text-[#6B6560]">
                Final Matriculation Score: <strong className="text-[#1A1814] font-bold">{EDUCATION_DETAILS.secondarySchool.metric}</strong>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
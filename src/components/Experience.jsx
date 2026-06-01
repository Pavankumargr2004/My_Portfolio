import React from 'react';

const TRACK = [
  { 
    era: 'Aug 2025 — Present', 
    desk: 'Newsletter Editor (CSE department)', 
    space: 'Dayananda Sagar University • Part-time', 
    item: 'Directing editorial operations and content curation for the computer science department publication pipeline. Focusing on structural editing and technical journalism synchronization.' 
  },
  { 
    era: 'Feb 2026 — Apr 2026', 
    desk: 'Web Developer', 
    space: 'Freelance', 
    item: 'Engineered custom full-stack web applications and interactive architectures. Optimized client-facing modules and digital interfaces for performance and cross-platform compatibility.' 
  },
  { 
    era: 'Feb 2025 — Dec 2025', 
    desk: 'Student Volunteer', 
    space: 'Dayananda Sagar University • Nonprofit Volunteering', 
    item: 'Organized and managed technical and cultural events within the university ecosystem. Streamlined logistics, team scheduling, and venue operations for large-scale student gatherings.' 
  },
  { 
    era: 'Mar 2024 — May 2024', 
    desk: 'Artificial Intelligence Intern', 
    space: 'Skolar', 
    item: 'Built predictive engines and clean mathematical structures inside custom application backends. Conducted systematic debug reviews and processing scheduling protocols across system processes.' 
  },
  { 
    era: '2024', 
    desk: 'Core UI Web Developer', 
    space: 'TechFest 2.0 Platform', 
    item: 'Engineered responsive frontend UI modules leveraging structural component paradigms. Maintained strict component isolation blueprints inside agile layout teams.' 
  }
];

const RECOGNITIONS = [
  { item: 'NASA Space Apps Challenge – Global Nominee', source: 'Global Recognition Network', date: '2024' },
  { item: 'NASA Space Apps Challenge – Local Winner', source: 'Regional Evaluation Panel', date: '2025' },
  { item: 'Google TechSprint – First Runner Up', source: 'National Technical Track', date: '2024' },
  { item: 'CRACK-A-THON Winner – AI Wellness Track', source: 'Hackathon HackVerse Circuit', date: '2023' }
];

export default function Experience() {
  return (
    <section id="experience" className="px-6 md:px-12 py-32 border-b border-[#1A1814]/12 bg-[#F5F0E8]">
      <div className="max-w-6xl mx-auto">
        <div className="section-label reveal font-mono text-[11px] tracking-[0.2em] uppercase text-[#0047FF]">
          Ecosystem History
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[1.2fr,1fr] gap-12 md:gap-24 mt-16">
          {/* Left Column: Timeline Tracks */}
          <div className="space-y-2">
            {TRACK.map((exp, i) => (
              <div 
                key={i} 
                className="group relative pl-6 py-6 border-b border-[#1A1814]/12 transition-[padding-left] duration-200 hover:pl-8 before:content-[''] before:absolute before:left-0 before:top-8 before:w-1.5 before:h-1.5 before:rounded-full before:bg-[#1A1814]/12 before:transition-all before:duration-200 hover:before:bg-[#0047FF] hover:before:scale-150"
              >
                <div className="font-mono text-[11px] tracking-wider text-[#0047FF] mb-2">{exp.era}</div>
                <div className="font-sans text-lg font-bold text-[#1A1814] mb-1 group-hover:text-[#0047FF] transition-colors duration-200">
                  {exp.desk}
                </div>
                <div className="font-mono text-xs text-[#6B6560] mb-3 font-semibold">{exp.space}</div>
                <div className="font-mono text-xs leading-relaxed text-[#6B6560] max-w-xl">{exp.item}</div>
              </div>
            ))}
          </div>

          {/* Right Column: Title & Awards */}
          <div className="lg:sticky lg:top-32 h-fit">
            <div className="font-sans text-[clamp(36px,4.5vw,64px)] font-extrabold tracking-tight leading-[1.05] text-[#1A1814] mb-12">
              Validating code through <br /><em className="font-serif font-light italic text-[#0047FF]">execution.</em>
            </div>
            
            <div className="section-label font-mono text-[11px] tracking-[0.2em] uppercase text-[#0047FF] mb-4">
              Honors &amp; Selected Certifications
            </div>
            
            <ul className="list-none m-0 p-0">
              {RECOGNITIONS.map((rec, i) => (
                <li key={i} className="flex justify-between items-center py-4 border-b border-[#1A1814]/12 hover:bg-[#FAF7F2]/50 px-2 transition-colors duration-200">
                  <div>
                    <div className="font-sans text-sm font-bold text-[#1A1814]">{rec.item}</div>
                    <div className="font-mono text-[11px] text-[#6B6560] mt-0.5">{rec.source}</div>
                  </div>
                  <div className="font-mono text-xs text-[#0047FF] font-semibold pl-4">{rec.date}</div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
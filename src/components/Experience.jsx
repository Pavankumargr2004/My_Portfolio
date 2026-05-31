import React from 'react';

const TRACK = [
  { era: 'Mar 2024 — May 2024', desk: 'Artificial Intelligence Intern', space: 'Skolar', item: 'Built predictive engines and clean mathematical structures inside custom application backends. Conducted systematic debug reviews and processing scheduling protocols across system processes.' },
  { era: '2024', desk: 'Core UI Web Developer', space: 'TechFest 2.0 Platform', item: 'Engineered responsive frontend UI modules leveraging structural component paradigms. Maintained strict component isolation blueprints inside agile layout teams.' }
];

const RECOGNITIONS = [
  { item: 'NASA Space Apps Challenge – Global Nominee', source: 'Global Recognition Network', date: '2024' },
  { item: 'NASA Space Apps Challenge – Local Winner', source: 'Regional Evaluation Panel', date: '2025' },
  { item: 'Google TechSprint – First Runner Up', source: 'National Technical Track', date: '2024' },
  { item: 'CRACK-A-THON Winner – AI Wellness Track', source: 'Hackathon HackVerse Circuit', date: '2023' }
];

export default function Experience() {
  return (
    <section id="experience" className="px-6 md:px-12 py-32 border-b border-[#1A1814]/12">
      <div className="section-label reveal font-mono text-[11px] tracking-[0.2em] uppercase text-[#0047FF]">
        Ecosystem History
      </div>

      <div className="grid grid-cols-1 md:grid-cols-[1fr,2fr] gap-12 md:gap-24 mt-16">
        <div>
          {TRACK.map((exp, i) => (
            <div key={i} className="group relative pl-6 py-6 border-b border-[#1A1814]/12 transition-[padding-left] duration-200 hover:pl-8 before:content-[''] before:absolute before:left-0 before:top-8 before:w-1.5 before:h-1.5 before:rounded-full before:bg-[#1A1814]/12 before:transition-all before:duration-200 hover:before:bg-[#0047FF] hover:before:scale-150">
              <div className="font-mono text-[11px] tracking-wider text-[#0047FF] mb-2">{exp.era}</div>
              <div className="font-sans text-lg font-bold text-[#1A1814] mb-1">{exp.desk}</div>
              <div className="font-mono text-xs text-[#6B6560] mb-3">{exp.space}</div>
              <div className="font-mono text-xs leading-relaxed text-[#6B6560]">{exp.item}</div>
            </div>
          ))}
        </div>

        <div>
          <div className="font-sans text-[clamp(40px,5vw,80px)] font-extrabold tracking-tight leading-[1.05] text-[#1A1814] mb-12">
            Validating code through <br /><em className="font-serif font-light italic text-[#0047FF]">execution.</em>
          </div>
          <div className="section-label font-mono text-[11px] tracking-[0.2em] uppercase text-[#0047FF] mb-4">
            Honors &amp; Selected Certifications
          </div>
          <ul className="list-none m-0 p-0">
            {RECOGNITIONS.map((rec, i) => (
              <li key={i} className="flex justify-between items-center py-4 border-b border-[#1A1814]/12">
                <div>
                  <div className="font-sans text-sm font-bold text-[#1A1814]">{rec.item}</div>
                  <div className="font-mono text-[11px] text-[#6B6560] mt-0.5">{rec.source}</div>
                </div>
                <div className="font-mono text-xs text-[#0047FF]">{rec.date}</div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
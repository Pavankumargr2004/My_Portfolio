import React from 'react';

const TECH_ITEMS = ['Python', 'ReactJS', 'NodeJS', 'FastAPI', 'TensorFlow', 'MongoDB', 'Explainable AI', 'n8n Automation', 'Docker', 'AWS', 'TypeScript', 'Data Structures'];

export default function Marquee() {
  const list = [...TECH_ITEMS, ...TECH_ITEMS];

  return (
    <div className="border-y border-[#1A1814]/12 overflow-hidden bg-[#1A1814] py-3.5">
      <div className="flex whitespace-nowrap animate-[marquee_25s_linear_infinite]">
        {list.map((item, idx) => (
          <React.Fragment key={idx}>
            <span className="font-mono text-[12px] tracking-[0.15em] uppercase text-[#F5F0E8] px-8 opacity-70">
              {item}
            </span>
            <span className="font-mono text-[12px] tracking-[0.15em] uppercase text-[#0047FF] px-4 opacity-100">
              ✦
            </span>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}
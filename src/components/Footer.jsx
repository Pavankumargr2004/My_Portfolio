import React from 'react';

export default function Footer() {
  const scrollToSection = (e, id) => {
    e.preventDefault();
    const target = document.querySelector(id);
    if (target) {
      window.scrollTo({
        top: target.offsetTop - 72,
        behavior: 'smooth',
      });
    }
  };

  return (
    <footer className="border-t border-[#1A1814]/12 bg-[#FAF7F2] px-6 md:px-12 py-16 flex flex-col gap-12">
      {/* Top Column Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 w-full">
        
        {/* Brand Meta Column */}
        <div className="col-span-2 md:col-span-1 flex flex-col gap-4">
          <div className="font-sans text-xl font-extrabold tracking-tight text-[#1A1814]">
            pavan<span className="text-[#0047FF]">.</span>portfolio
          </div>
          <p className="font-mono text-xs text-[#6B6560] leading-relaxed max-w-[200px]">
            Building data pipelines and intelligent architectures at the intersection of Scalable Code &amp; ML.
          </p>
        </div>

        {/* Column 1: Navigation Offset Links */}
        <div className="flex flex-col gap-3">
          <div className="font-mono text-[10px] tracking-widest uppercase text-[#1A1814]/40 font-bold">
            Index
          </div>
          <ul className="list-none p-0 m-0 flex flex-col gap-2">
            {[
              { label: 'About Summary', target: '#about' },
              { label: 'Selected Work', target: '#projects' },
              { label: 'Publications', target: '#research' },
              { label: 'Experience Timeline', target: '#experience' }
            ].map((link, idx) => (
              <li key={idx}>
                <a 
                  href={link.target} 
                  onClick={(e) => scrollToSection(e, link.target)}
                  className="font-mono text-xs text-[#6B6560] hover:text-[#0047FF] transition-colors"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 2: Selected Project Repositories */}
        <div className="flex flex-col gap-3">
          <div className="font-mono text-[10px] tracking-widest uppercase text-[#1A1814]/40 font-bold">
            Live Repos
          </div>
          <ul className="list-none p-0 m-0 flex flex-col gap-2">
            {[
              { label: 'CosmoConnect Core', url: 'https://github.com/Pavankumargr2004/cosmoconnect.git' },
              { label: 'Aura Wellness System', url: 'https://github.com/Pavankumargr2004/HackVerse_Aura_Wellness.git' },
              { label: 'XAI Heart Disease Risk', url: 'https://github.com/Pavankumargr2004/Heart-Disease-Prediction.git' },
              { label: 'Stock ETL Pipeline', url: 'https://github.com/Pavankumargr2004/Stock_data_Pipeline-.git' }
            ].map((repo, idx) => (
              <li key={idx}>
                <a 
                  href={repo.url} 
                  target="_blank" 
                  rel="noreferrer"
                  className="font-mono text-xs text-[#6B6560] hover:text-[#0047FF] transition-colors flex items-center gap-1.5 group"
                >
                  {repo.label}
                  <svg width="10" height="10" viewBox="0 0 14 14" fill="none" className="text-transparent group-hover:text-[#0047FF] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-200">
                    <path d="M1 13L13 1M13 1H4M13 1V10" stroke="currentColor" strokeWidth="1.5" />
                  </svg>
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 3: Credentials Direct References */}
        <div className="flex flex-col gap-3">
          <div className="font-mono text-[10px] tracking-widest uppercase text-[#1A1814]/40 font-bold">
            Credentials
          </div>
          <ul className="list-none p-0 m-0 flex flex-col gap-2">
            {[
              { label: 'OCI DevOps Prof.', url: 'https://drive.google.com/file/d/1cFAYfwpwMgEAj2Yt0sqdyekYJO2KmNo8/view' },
              { label: 'OCI Generative AI Prof.', url: 'https://drive.google.com/file/d/1DKXM-E6m4azh2Mg-G1_W8urXAURZE4fO/view' },
              { label: 'AWS Cloud Pract.', url: 'https://drive.google.com/file/d/1gSixWdWnUOgMYFoTOX31TDDV2tqFO2Av/view' },
              { label: 'NASA 24 Nominee Doc.', url: 'https://drive.google.com/file/d/1-elal49iHs_SGI37Pn32XeDtENHpc7RQ/view' }
            ].map((cert, idx) => (
              <li key={idx}>
                <a 
                  href={cert.url} 
                  target="_blank" 
                  rel="noreferrer"
                  className="font-mono text-xs text-[#6B6560] hover:text-[#0047FF] transition-colors"
                >
                  {cert.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

      </div>

      {/* Bottom Legal Copyright Row */}
      <div className="flex flex-col md:flex-row justify-between items-center border-t border-[#1A1814]/12 pt-8 gap-4 md:gap-0 text-center md:text-left">
        <div className="font-mono text-xs text-[#6B6560]">
          © 2026 Pavan Kumar G R. All rights reserved.
        </div>
        <div className="font-mono text-xs text-[#6B6560] flex items-center gap-1">
          Built with <span className="text-[#0047FF]">♥</span> in Bengaluru, India
        </div>
      </div>
    </footer>
  );
}
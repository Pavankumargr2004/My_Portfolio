import React from 'react';

const PROJECTS_DATA = [
  { name: 'CosmoConnect', desc: 'NASA Space Apps Full Stack platform integrating real-time Space Agency APIs.', tech: ['MERN Stack', 'NASA API', 'NodeJS'], git: 'https://github.com/Pavankumargr2004/cosmoconnect.git' },
  { name: 'AI News Aggregator', desc: 'Automated workflow engine utilizing structural parsing agent routines.', tech: ['n8n', 'Workflow Automation', 'APIs'], git: 'https://github.com/Pavankumargr2004' },
  { name: 'Aura Wellness', desc: 'AI-driven wellness infrastructure utilizing NLP semantic classification layers.', tech: ['ReactJS', 'NodeJS', 'NLP Sentiment'], git: 'https://github.com/Pavankumargr2004/HackVerse_Aura_Wellness.git' },
  { name: 'Explainable Heart Prediction', desc: 'Fairness-aware prediction application packed with SHAP and LIME wrappers.', tech: ['Scikit-Learn', 'SHAP', 'LIME', 'SMOTE'], git: 'https://github.com/Pavankumargr2004/Heart-Disease-Prediction.git' },
  { name: 'DermaBotany System', desc: 'Deep Learning neural frameworks identifying complex plant properties.', tech: ['TensorFlow', 'CNN', 'Ensemble Learning'], git: 'https://github.com/Pavankumargr2004' },
  { name: 'Stock Data Pipeline', desc: 'Automated end-to-end relational engineering schedules.', tech: ['SQL Workflows', 'ETL Automation', 'Python'], git: 'https://github.com/Pavankumargr2004/Stock_data_Pipeline-.git' },
  { name: 'WebbSight Platform', desc: 'Interactive visual workspace mapping JWST deep space data feeds.', tech: ['React', 'Data Rendering', 'UX Engineering'], git: 'https://github.com/Pavankumargr2004/Webb-Sight' },
  { name: 'Real-time Emotion Classifier', desc: 'Computer Vision platform identifying operational frame metrics live.', tech: ['OpenCV', 'CNN', 'FER Datasets'], git: 'https://github.com/Pavankumargr2004/Emotion-detection.git' }
];

export default function Projects() {
  return (
    <section id="projects" className="px-6 md:px-12 py-32 border-b border-[#1A1814]/12 relative">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-4 md:gap-0">
        <div className="reveal">
          <div className="font-mono text-[11px] tracking-[0.2em] uppercase text-[#0047FF] mb-2">Selected Projects</div>
          <div className="font-sans text-[clamp(36px,5vw,72px)] font-extrabold tracking-tight leading-none text-[#1A1814]">
            Engineering<br />
            <span className="font-serif font-light italic text-[#0047FF]">&amp; Deployments</span>
          </div>
        </div>
        <div className="font-mono text-[13px] text-[#6B6560]">08 Interactive Builds</div>
      </div>

      <div id="project-list">
        {PROJECTS_DATA.map((project, idx) => (
          <div
            key={idx}
            className="project-item reveal grid grid-cols-[40px,1fr] md:grid-cols-[80px,1fr,240px,120px] items-center py-8 border-b border-[#1A1814]/12 gap-8 relative transition-all duration-200 hover:bg-[#F5F0E8] hover:px-4 hover:mx-[-1rem] group before:content-[''] before:absolute before:left-[-20px] before:top-0 before:bottom-0 before:w-[3px] before:bg-[#0047FF] before:scale-y-0 before:transition-transform before:duration-300 hover:before:scale-y-100"
          >
            <div className="font-mono text-xs text-[#6B6560]">0{idx + 1}</div>
            <div>
              <div className="font-sans text-[clamp(20px,2.5vw,28px)] font-bold tracking-tight text-[#1A1814]">
                {project.name}
              </div>
              <div className="font-mono text-xs text-[#6B6560] mt-1">{project.desc}</div>
            </div>
            
            <div className="hidden md:flex gap-2 flex-wrap">
              {project.tech.map((t) => (
                <span key={t} className="font-mono text-[10px] tracking-wider uppercase px-2 py-1 border border-[#1A1814]/12 text-[#6B6560]">
                  {t}
                </span>
              ))}
            </div>

            <a href={project.git} target="_blank" rel="noreferrer" className="hidden md:flex font-mono text-[11px] tracking-wider uppercase text-[#0047FF] items-center gap-2 justify-end">
              Code
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="transition-transform duration-200 group-hover:translate-x-1 group-hover:-translate-y-1">
                <path d="M1 13L13 1M13 1H4M13 1V10" stroke="currentColor" strokeWidth="1.5" />
              </svg>
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
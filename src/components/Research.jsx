import React from 'react';

export default function Research() {
  return (
    <section id="research" className="px-6 md:px-12 py-32 border-b border-[#1A1814]/12 bg-[#F5F0E8]">
      <div className="max-w-4xl">
        <div className="section-label reveal font-mono text-[11px] tracking-[0.2em] uppercase text-[#0047FF] mb-2">Academic Publications</div>
        <h2 className="font-sans text-[clamp(36px,5vw,64px)] font-extrabold tracking-tight leading-none text-[#1A1814] mb-16">
          Research <span className="font-serif font-light italic text-[#0047FF]">&amp; Discovery</span>
        </h2>

        <div className="flex flex-col gap-12">
          <div className="reveal p-8 bg-[#FAF7F2] border border-[#1A1814]/12 hover:border-[#0047FF] transition-all duration-300">
            <span className="font-mono text-xs text-[#0047FF] uppercase tracking-widest block mb-2">Published Research Architecture</span>
            <h3 className="font-sans text-2xl font-bold text-[#1A1814] mb-4">Explainable \& Bias-Aware Heart Disease Risk Prediction</h3>
            <p className="font-mono text-sm leading-relaxed text-[#6B6560]">
              Investigated statistical implementation methodologies across fairness-aware machine learning modules. Configured complete model transparency architectures utilizing SHAP and LIME interpretability matrices alongside mathematical balancing pipelines to prevent demographic profiling.
            </p>
          </div>

          <div className="reveal p-8 bg-[#FAF7F2] border border-[#1A1814]/12 hover:border-[#0047FF] transition-all duration-300">
            <span className="font-mono text-xs text-[#0047FF] uppercase tracking-widest block mb-2">Conference Accepted Monograph</span>
            <h3 className="font-sans text-2xl font-bold text-[#1A1814] mb-4">DermaBotany – Multi-Model Deep Learning System for Medicinal Plant Identification</h3>
            <p className="font-mono text-sm leading-relaxed text-[#6B6560]">
              Built deep convolutional feature extraction pipelines using MobileNetV2 and EfficientNetB0 setups optimized for tracking medicinal botanical variations. Extended system functionality using Grad-CAM attention localization to isolate regional diagnostic features.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
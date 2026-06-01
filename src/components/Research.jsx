import React from 'react';

export default function Research() {
  return (
    <section id="research" className="px-6 md:px-12 py-32 border-b border-[#1A1814]/12 bg-[#F5F0E8]">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="section-label reveal font-mono text-[11px] tracking-[0.2em] uppercase text-[#0047FF] mb-2">
          Academic Publications
        </div>
        <h2 className="font-sans text-[clamp(36px,5vw,64px)] font-extrabold tracking-tight leading-none text-[#1A1814] mb-20">
          Research <span className="font-serif font-light italic text-[#0047FF]">&amp; Discovery</span>
        </h2>

        {/* Papers Container */}
        <div className="flex flex-col gap-20">
          
          {/* Paper 1 Section */}
          <div className="reveal group border-t border-[#1A1814]/12 pt-10 transition-all duration-300">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              
              {/* Left Column: Metadata & Links */}
              <div className="lg:col-span-4 flex flex-col justify-between">
                <div>
                  <span className="font-mono text-xs text-[#0047FF] uppercase tracking-widest block mb-3">
                    Published Research Architecture
                  </span>
                  <div className="font-mono text-xs text-[#6B6560] space-y-1">
                    <p><strong className="text-[#1A1814]">Journal:</strong> IEEE Transactions on AI in Healthcare</p>
                    <p><strong className="text-[#1A1814]">Authors:</strong> Primary Investigator</p>
                    <p><strong className="text-[#1A1814]">Date:</strong> October 2025</p>
                  </div>
                </div>
                
                {/* Action Links */}
                <div className="mt-6 lg:mt-0 flex gap-4 font-mono text-xs font-bold text-[#0047FF]">
                  <a href="#doi" className="hover:underline flex items-center gap-1">
                    [ DOI Link ]
                  </a>
                  <a href="#github" className="hover:underline flex items-center gap-1">
                    [ GitHub ]
                  </a>
                </div>
              </div>

              {/* Right Column: Title, Abstract, Details */}
              <div className="lg:col-span-8">
                <h3 className="font-sans text-2xl lg:text-3xl font-bold text-[#1A1814] mb-4 group-hover:text-[#0047FF] transition-colors duration-300">
                  Explainable &amp; Bias-Aware Heart Disease Risk Prediction
                </h3>
                
                <p className="font-mono text-sm leading-relaxed text-[#6B6560] mb-6">
                  Investigated statistical implementation methodologies across fairness-aware machine learning modules. Configured complete model transparency architectures utilizing SHAP and LIME interpretability matrices alongside mathematical balancing pipelines to prevent demographic profiling.
                </p>

                {/* Sub-grid for Methodology & Findings */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-6 border-t border-[#1A1814]/6">
                  <div>
                    <h4 className="font-sans text-xs font-bold uppercase tracking-wider text-[#1A1814] mb-2">Core Methodology</h4>
                    <p className="font-mono text-xs text-[#6B6560] leading-relaxed">
                      Implemented disparate impact mitigation algorithms during pre-processing. Integrated SHAP (SHapley Additive exPlanations) for global feature importance and LIME for local observation fidelity.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-sans text-xs font-bold uppercase tracking-wider text-[#1A1814] mb-2">Key Findings</h4>
                    <p className="font-mono text-xs text-[#6B6560] leading-relaxed">
                      Reduced demographic disparity across sensitive attributes by 14% while preserving an 89.2% AUC-ROC score, effectively bridging the gap between fairness and accuracy.
                    </p>
                  </div>
                </div>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-2 mt-6">
                  {['Python', 'Scikit-Learn', 'SHAP', 'LIME', 'Fairlearn'].map((tech) => (
                    <span key={tech} className="font-mono text-[10px] bg-[#FAF7F2] text-[#1A1814] px-2.5 py-1 border border-[#1A1814]/12 rounded-sm">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

            </div>
          </div>


          {/* Paper 2 Section */}
          <div className="reveal group border-t border-[#1A1814]/12 pt-10 transition-all duration-300">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              
              {/* Left Column: Metadata & Links */}
              <div className="lg:col-span-4 flex flex-col justify-between">
                <div>
                  <span className="font-mono text-xs text-[#0047FF] uppercase tracking-widest block mb-3">
                    Conference Accepted Monograph
                  </span>
                  <div className="font-mono text-xs text-[#6B6560] space-y-1">
                    <p><strong className="text-[#1A1814]">Conference:</strong> Int. Conference on Computer Vision (ICCV)</p>
                    <p><strong className="text-[#1A1814]">Authors:</strong> Lead Developer &amp; Co-authors</p>
                    <p><strong className="text-[#1A1814]">Date:</strong> March 2026</p>
                  </div>
                </div>
                
                {/* Action Links */}
                <div className="mt-6 lg:mt-0 flex gap-4 font-mono text-xs font-bold text-[#0047FF]">
                  <a href="#pdf" className="hover:underline flex items-center gap-1">
                    [ Read PDF ]
                  </a>
                  <a href="#dataset" className="hover:underline flex items-center gap-1">
                    [ Dataset ]
                  </a>
                </div>
              </div>

              {/* Right Column: Title, Abstract, Details */}
              <div className="lg:col-span-8">
                <h3 className="font-sans text-2xl lg:text-3xl font-bold text-[#1A1814] mb-4 group-hover:text-[#0047FF] transition-colors duration-300">
                  DermaBotany – Multi-Model Deep Learning System for Medicinal Plant Identification
                </h3>
                
                <p className="font-mono text-sm leading-relaxed text-[#6B6560] mb-6">
                  Built deep convolutional feature extraction pipelines using MobileNetV2 and EfficientNetB0 setups optimized for tracking medicinal botanical variations. Extended system functionality using Grad-CAM attention localization to isolate regional diagnostic features.
                </p>

                {/* Sub-grid for Methodology & Findings */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-6 border-t border-[#1A1814]/6">
                  <div>
                    <h4 className="font-sans text-xs font-bold uppercase tracking-wider text-[#1A1814] mb-2">Core Methodology</h4>
                    <p className="font-mono text-xs text-[#6B6560] leading-relaxed">
                      Leveraged transfer learning on customized ResNet, MobileNet, and EfficientNet backbones. Engineered an ensemble voting classifier alongside Grad-CAM maps to validate visual focus areas.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-sans text-xs font-bold uppercase tracking-wider text-[#1A1814] mb-2">Key Findings</h4>
                    <p className="font-mono text-xs text-[#6B6560] leading-relaxed">
                      Achieved a top-1 accuracy rate of 94.6% across 120 unique medicinal species, demonstrating highly reliable deployment capacity for field-edge compute devices.
                    </p>
                  </div>
                </div>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-2 mt-6">
                  {['PyTorch', 'TensorFlow', 'Grad-CAM', 'EfficientNet', 'OpenCV'].map((tech) => (
                    <span key={tech} className="font-mono text-[10px] bg-[#FAF7F2] text-[#1A1814] px-2.5 py-1 border border-[#1A1814]/12 rounded-sm">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
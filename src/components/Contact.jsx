import React, { useState } from 'react';

export default function Contact() {
  const [btnText, setBtnText] = useState('Send Query →');
  const [showSuccess, setShowSuccess] = useState(false);
  const [msg, setMsg] = useState({ name: '', email: '', message: '' });

  const sendForm = (e) => {
    e.preventDefault();
    setBtnText('Processing...');
    setTimeout(() => {
      setBtnText('Dispatched ✓');
      setShowSuccess(true);
      setMsg({ name: '', email: '', message: '' });
      setTimeout(() => setBtnText('Send Query →'), 3000);
    }, 1200);
  };

  return (
    <section id="contact" className="px-6 md:px-12 py-32 border-b border-[#1A1814]/12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-32">
        <div>
          <div className="section-label reveal font-mono text-[11px] tracking-[0.2em] uppercase text-[#0047FF] mb-2">Communications Hub</div>
          <div className="font-sans text-[clamp(48px,7vw,100px)] font-extrabold tracking-tighter leading-[0.95] text-[#1A1814] reveal">
            Initialize<br />
            <em className="block font-serif font-light italic text-[#0047FF]">pipeline.</em>
          </div>
          
          <div className="contact-links reveal mt-12 flex flex-col">
            {[
              { type: 'Email Address', endpoint: 'pavankumargr1904@gmail.com', target: 'mailto:pavankumargr1904@gmail.com' },
              { type: 'GitHub Core', endpoint: 'github.com/Pavankumargr2004', target: 'https://github.com/Pavankumargr2004' },
              { type: 'LinkedIn Profile', endpoint: 'linkedin.com/in/pavan-kumar-gr', target: 'https://www.linkedin.com/in/pavan-kumar-gr/' }
            ].map((link, idx) => (
              <a key={idx} href={link.target} target="_blank" rel="noreferrer" className="flex items-center justify-between py-5 border-b border-[#1A1814]/12 text-[#1A1814] transition-[padding-left,color] duration-200 hover:pl-4 hover:text-[#0047FF] group">
                <div>
                  <div className="font-sans text-base font-bold tracking-tight">{link.type}</div>
                  <div className="font-mono text-[11px] tracking-wider text-[#6B6560]">{link.endpoint}</div>
                </div>
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                  <path d="M1 17L17 1M17 1H4M17 1V14" stroke="currentColor" strokeWidth="1.5" />
                </svg>
              </a>
            ))}
          </div>
        </div>

        <div className="reveal pt-4">
          <div className="section-label font-mono text-[11px] tracking-[0.2em] uppercase text-[#0047FF]">Transmit Message</div>
          <form onSubmit={sendForm} className="mt-8">
            <div className="mb-6">
              <label className="font-mono text-[11px] tracking-wider uppercase text-[#6B6560] block mb-2.5">Identifier Name</label>
              <input type="text" value={msg.name} required onChange={e => setMsg({...msg, name: e.target.value})} placeholder="User" className="w-full font-mono text-sm text-[#1A1814] bg-transparent border-0 border-b border-[#1A1814]/12 py-3 outline-none focus:border-[#0047FF] placeholder:text-[#1A1814]/20" />
            </div>
            <div className="mb-6">
              <label className="font-mono text-[11px] tracking-wider uppercase text-[#6B6560] block mb-2.5">Email Network</label>
              <input type="email" value={msg.email} required onChange={e => setMsg({...msg, email: e.target.value})} placeholder="client@node.io" className="w-full font-mono text-sm text-[#1A1814] bg-transparent border-0 border-b border-[#1A1814]/12 py-3 outline-none focus:border-[#0047FF] placeholder:text-[#1A1814]/20" />
            </div>
            <div className="mb-6">
              <label className="font-mono text-[11px] tracking-wider uppercase text-[#6B6560] block mb-2.5">Message Data Payload</label>
              <textarea rows="4" value={msg.message} required onChange={e => setMsg({...msg, message: e.target.value})} placeholder="Provide architectural scope..." className="w-full font-mono text-sm text-[#1A1814] bg-transparent border-0 border-b border-[#1A1814]/12 py-3 outline-none resize-none focus:border-[#0047FF] placeholder:text-[#1A1814]/20" />
            </div>

            <button type="submit" className="font-mono text-xs tracking-wider uppercase text-[#FAF7F2] bg-[#1A1814] border-0 px-10 py-4 mt-4 relative overflow-hidden group hover:bg-[#0047FF]">
              <span className="relative z-[1]">{btnText}</span>
            </button>
            {showSuccess && <div className="font-mono text-xs text-green-600 mt-4">✓ Pipeline connection open. Communication packet transmitted.</div>}
          </form>
        </div>
      </div>
    </section>
  );
}
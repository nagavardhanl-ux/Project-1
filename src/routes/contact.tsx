import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { useState } from "react";
import { Check, Mail, Calendar, ArrowRight } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Axion Growth" },
      { name: "description", content: "Tell us your numbers. We'll show you what's possible. Book a free growth call with Axion Growth." },
    ],
  }),
  component: Contact,
});

function Contact() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: "", website: "", revenue: "", message: "" });

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <SiteLayout>
      <section className="contact-section">
        {/* Background Effects */}
        <div className="cta-bg-glow orb-1" style={{ top: '10%', left: '-5%' }}></div>
        <div className="cta-bg-glow orb-2" style={{ bottom: '10%', right: '-5%' }}></div>
        <div className="cta-grid-overlay"></div>

        <div className="container relative z-10">
          <div className="contact-grid">
            
            {/* Left Column: Pitch */}
            <div className="contact-pitch">
              <h1 className="section-title text-left slide-up" style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)", marginBottom: "1.5rem", maxWidth: "100%", textAlign: "left", whiteSpace: "nowrap" }}>
                Let's talk <span className="text-gradient">revenue.</span>
              </h1>
              <p className="hero-desc slide-up" style={{ textAlign: "left", marginBottom: "3rem", maxWidth: "450px" }}>
                Share your numbers. We'll send a free audit and a clear growth plan in 48 hours. No pitch, just hard data.
              </p>
              
              <div className="contact-value-props slide-up">
                <div className="value-prop-item">
                  <div className="vp-icon"><Check className="w-5 h-5 text-accent" /></div>
                  <div className="vp-text">Free 30-minute growth call</div>
                </div>
                <div className="value-prop-item">
                  <div className="vp-icon"><Check className="w-5 h-5 text-accent" /></div>
                  <div className="vp-text">Deep ad account + store audit</div>
                </div>
                <div className="value-prop-item">
                  <div className="vp-icon"><Check className="w-5 h-5 text-accent" /></div>
                  <div className="vp-text">Revenue forecast, no commitments</div>
                </div>
              </div>
              
              <div className="contact-info fade-in-delay">
                <span className="info-item"><Mail className="w-5 h-5" /> hello@axiongrowth.com</span>
                <span className="info-item"><Calendar className="w-5 h-5" /> Replies within 1 business day</span>
              </div>
            </div>

            {/* Right Column: Form */}
            <div className="contact-form-glass fade-in-delay">
              {sent ? (
                <div className="contact-success">
                  <div className="success-icon-wrapper">
                    <Check className="w-8 h-8" />
                  </div>
                  <h2>Got it.</h2>
                  <p>We'll review your numbers and be in touch within 1 business day.</p>
                </div>
              ) : (
                <form className="contact-form" onSubmit={onSubmit}>
                  <Field label="Your Name" required>
                    <input
                      required value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className="premium-input" placeholder="Jane Doe"
                    />
                  </Field>
                  <Field label="Brand Website" required>
                    <input
                      required type="url" value={form.website}
                      onChange={(e) => setForm({ ...form, website: e.target.value })}
                      className="premium-input" placeholder="https://yourbrand.com"
                    />
                  </Field>
                  <Field label="Monthly Revenue" required>
                    <div className="premium-select-wrapper">
                      <select
                        required value={form.revenue}
                        onChange={(e) => setForm({ ...form, revenue: e.target.value })}
                        className="premium-input premium-select"
                      >
                        <option value="" disabled hidden>Select current scale</option>
                        <option>Under $10k / mo</option>
                        <option>$10k – $50k / mo</option>
                        <option>$50k – $250k / mo</option>
                        <option>$250k – $1M / mo</option>
                        <option>$1M+ / mo</option>
                      </select>
                    </div>
                  </Field>
                  <Field label="What's your biggest bottleneck?">
                    <textarea
                      rows={4} value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      className="premium-input resize-none" placeholder="High CAC, struggling to scale spend, creative fatigue..."
                    />
                  </Field>
                  <button type="submit" className="god-mode-btn group" style={{ width: "100%", marginTop: "1rem" }}>
                    <span className="btn-content">
                      Request Growth Audit <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
                    </span>
                    <div className="btn-glow-sweep"></div>
                  </button>
                </form>
              )}
            </div>

          </div>
        </div>
      </section>
    </SiteLayout>
  );
}

function Field({ label, required, children }: { label: string; required?: boolean; children: React.ReactNode }) {
  return (
    <label className="field-wrapper">
      <span className="field-label">
        {label}{required && <span className="field-required">*</span>}
      </span>
      {children}
    </label>
  );
}

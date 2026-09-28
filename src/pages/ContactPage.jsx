import React, { useState } from 'react';
import { SEO } from '../components/ui/SEO';
import { Breadcrumbs } from '../components/ui/Breadcrumbs';
import { siteConfig } from '../data/siteConfig';
import { 
  Phone, Mail, MapPin, MessageSquare, Send, CheckCircle2, 
  ShieldCheck, Clock, Building2 
} from 'lucide-react';

export const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    region: 'Saudi Arabia (KSA)',
    service: 'ERP Consulting',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email) return;

    // Direct routing to hey@impleway.com
    const subject = encodeURIComponent(`[Enterprise Inquiry] ${formData.name} - ${formData.service} (${formData.region})`);
    const body = encodeURIComponent(
      `Enterprise Consultation Request:\n` +
      `---------------------------------\n` +
      `Name: ${formData.name}\n` +
      `Email: ${formData.email}\n` +
      `Phone/WhatsApp: ${formData.phone}\n` +
      `Company: ${formData.company || 'N/A'}\n` +
      `Region: ${formData.region}\n` +
      `Service Needed: ${formData.service}\n\n` +
      `Project Scope & Details:\n${formData.message}\n`
    );

    try {
      window.open(`mailto:hey@impleway.com?subject=${subject}&body=${body}`, '_blank');
    } catch (err) {
      console.log('Mail client launched');
    }

    setSubmitted(true);
  };

  return (
    <>
      <SEO 
        title="Contact Us | Impleway KSA & PK Advisory"
        description="Connect with Impleway's enterprise ERP consulting and technology teams in Riyadh, Saudi Arabia (+966 59 814 5042) and Pakistan (+92 339 2244790)."
      />

      {/* Hero */}
      <section className="bg-radial-hero text-white py-16 sm:py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-500/20 border border-red-500/30 text-white text-xs font-black uppercase tracking-wider">
            <span>Direct Enterprise Advisory</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight max-w-4xl mx-auto leading-tight">
            Let's Talk About Your ERP & IT Goals
          </h1>
          <p className="text-lg sm:text-xl text-neutral-300 max-w-3xl mx-auto leading-relaxed">
            Reach out directly to our functional consultants in Saudi Arabia and Pakistan for architecture reviews, ZATCA compliance, and implementation proposals.
          </p>
        </div>
      </section>

      <Breadcrumbs items={[{ name: "Contact Us" }]} />

      {/* Main Contact Section */}
      <section className="py-20 sm:py-24 bg-white border-b border-[#e7e7e7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Left Column: Official Contact Cards */}
            <div className="lg:col-span-5 space-y-8">
              <div className="space-y-3">
                <div className="text-xs uppercase font-extrabold tracking-wider text-[#E50914]">
                  DIRECT CHANNELS
                </div>
                <h2 className="text-3xl font-black text-[#111111]">
                  Regional Offices
                </h2>
                <p className="text-sm text-[#5F6368] leading-relaxed">
                  Connect with our dedicated teams across Saudi Arabia and Pakistan during standard business hours or via 24/7 emergency support channels.
                </p>
              </div>

              {/* KSA Contact Card */}
              <div className="bg-[#F6F6F6] rounded-3xl p-8 border border-[#e7e7e7] space-y-4 hover:border-red-500/40 transition-all">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold uppercase tracking-wider">
                  <span>SA IMPLEWAY KSA (KINGDOM OF SAUDI ARABIA)</span>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-sm text-neutral-600">
                    <MapPin className="w-4 h-4 text-[#E50914]" />
                    <span>Riyadh & Eastern Province, Saudi Arabia</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Phone className="w-4 h-4 text-[#E50914]" />
                    <a href="tel:+966598145042" className="text-lg font-black text-[#111111] hover:text-[#E50914] transition-colors">
                      +966 59 814 5042
                    </a>
                  </div>
                  <div className="pt-2">
                    <a
                      href="https://wa.me/966598145042"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold text-emerald-700 bg-emerald-50 border border-emerald-200 hover:bg-emerald-100 transition-colors"
                    >
                      <MessageSquare className="w-3.5 h-3.5" />
                      <span>Chat on WhatsApp KSA</span>
                    </a>
                  </div>
                </div>
              </div>

              {/* PK Contact Card */}
              <div className="bg-[#F6F6F6] rounded-3xl p-8 border border-[#e7e7e7] space-y-4 hover:border-red-500/40 transition-all">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-200 text-neutral-800 text-xs font-bold uppercase tracking-wider">
                  <span>PK IMPLEWAY PK (TECHNICAL OPERATIONS)</span>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-sm text-neutral-600">
                    <MapPin className="w-4 h-4 text-[#E50914]" />
                    <span>Lahore & Islamabad, Pakistan</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Phone className="w-4 h-4 text-[#E50914]" />
                    <a href="tel:+923392244790" className="text-lg font-black text-[#111111] hover:text-[#E50914] transition-colors">
                      +92 339 2244790
                    </a>
                  </div>
                  <div className="pt-2">
                    <a
                      href="https://wa.me/923392244790"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold text-neutral-800 bg-white border border-neutral-300 hover:bg-neutral-50 transition-colors"
                    >
                      <MessageSquare className="w-3.5 h-3.5" />
                      <span>Chat on WhatsApp PK</span>
                    </a>
                  </div>
                </div>
              </div>

              {/* Email Card */}
              <div className="bg-[#050505] text-white rounded-3xl p-6 border border-neutral-800 flex items-center justify-between">
                <div>
                  <span className="text-xs text-neutral-400 block font-bold">Email Inquiries:</span>
                  <a href="mailto:hey@impleway.com" className="text-base sm:text-lg font-black hover:text-[#E50914] transition-colors">
                    hey@impleway.com
                  </a>
                </div>
                <Mail className="w-6 h-6 text-[#E50914]" />
              </div>

            </div>

            {/* Right Column: Interactive Consultation Form */}
            <div className="lg:col-span-7 bg-[#F6F6F6] rounded-3xl p-8 sm:p-10 border border-[#e7e7e7]">
              
              {submitted ? (
                <div className="py-16 text-center space-y-4 animate-in zoom-in-95 duration-200">
                  <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-black text-[#111111]">
                    Thank You, {formData.name}!
                  </h3>
                  <p className="text-sm text-[#5F6368] max-w-md mx-auto leading-relaxed">
                    Your inquiry has been received. Our senior functional consultants will review your requirements and reach out within 4 to 8 business hours.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({ name: '', email: '', phone: '', company: '', region: 'Saudi Arabia (KSA)', service: 'ERP Consulting', message: '' });
                    }}
                    className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full font-bold text-xs bg-[#E50914] text-white"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <h3 className="text-2xl font-black text-[#111111]">
                      Send Requirements
                    </h3>
                    <p className="text-xs sm:text-sm text-[#5F6368] mt-1">
                      Fill out the form below and our regional team will respond promptly.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold uppercase text-[#111111] mb-1.5">
                        Your Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Tariq Al-Mansoor"
                        className="w-full px-4 py-3 rounded-xl bg-white border border-[#e7e7e7] text-sm text-[#111111] focus:outline-none focus:border-[#E50914]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase text-[#111111] mb-1.5">
                        Business Email *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="tariq@company.com"
                        className="w-full px-4 py-3 rounded-xl bg-white border border-[#e7e7e7] text-sm text-[#111111] focus:outline-none focus:border-[#E50914]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold uppercase text-[#111111] mb-1.5">
                        Phone / WhatsApp *
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+966 5X XXX XXXX"
                        className="w-full px-4 py-3 rounded-xl bg-white border border-[#e7e7e7] text-sm text-[#111111] focus:outline-none focus:border-[#E50914]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase text-[#111111] mb-1.5">
                        Company Name
                      </label>
                      <input
                        type="text"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        placeholder="e.g. Al-Mansoor Industrial"
                        className="w-full px-4 py-3 rounded-xl bg-white border border-[#e7e7e7] text-sm text-[#111111] focus:outline-none focus:border-[#E50914]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold uppercase text-[#111111] mb-1.5">
                        Your Region
                      </label>
                      <select
                        value={formData.region}
                        onChange={(e) => setFormData({ ...formData, region: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-white border border-[#e7e7e7] text-sm text-[#111111] focus:outline-none focus:border-[#E50914]"
                      >
                        <option value="Saudi Arabia (KSA)">Saudi Arabia (KSA)</option>
                        <option value="Pakistan">Pakistan</option>
                        <option value="United Arab Emirates / GCC">United Arab Emirates / GCC</option>
                        <option value="United States / Europe">United States / Europe</option>
                        <option value="Other International">Other International</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase text-[#111111] mb-1.5">
                        Service of Interest
                      </label>
                      <select
                        value={formData.service}
                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-white border border-[#e7e7e7] text-sm text-[#111111] focus:outline-none focus:border-[#E50914]"
                      >
                        <option value="Oracle ERP Cloud">Oracle ERP Cloud</option>
                        <option value="Odoo ERP Solutions">Odoo ERP Solutions</option>
                        <option value="Microsoft Dynamics 365">Microsoft Dynamics 365</option>
                        <option value="ZATCA Phase 2 E-Invoicing">ZATCA Phase 2 E-Invoicing</option>
                        <option value="ERP Consulting & Selection">ERP Consulting & Selection</option>
                        <option value="Zero Data-Loss Migration">Zero Data-Loss Migration</option>
                        <option value="24/7 Managed Support">24/7 Managed Support</option>
                        <option value="Custom Software & Cloud IT">Custom Software & Cloud IT</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase text-[#111111] mb-1.5">
                      Project Scope & Expected Timeline
                    </label>
                    <textarea
                      rows="4"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Please summarize your current systems, pain points, estimated users, and key project goals..."
                      className="w-full px-4 py-3 rounded-xl bg-white border border-[#e7e7e7] text-sm text-[#111111] focus:outline-none focus:border-[#E50914]"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full btn-shine inline-flex items-center justify-center gap-2 py-4 rounded-xl font-black text-sm text-white bg-gradient-to-r from-[#E50914] to-[#9F0712] shadow-xl shadow-red-600/30 hover:shadow-red-600/50 hover:scale-[1.01] active:scale-[0.99] transition-all cursor-pointer"
                  >
                    <Send className="w-4 h-4" />
                    <span>Submit Consultation Request</span>
                  </button>
                </form>
              )}

            </div>

          </div>
        </div>
      </section>
    </>
  );
};

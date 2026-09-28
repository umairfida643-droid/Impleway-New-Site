import React from 'react';
import { Star, Quote } from 'lucide-react';

const TESTIMONIALS = [
  {
    name: "Tariq Al-Mansoor",
    role: "Chief Operating Officer",
    company: "Industrial Manufacturing Group",
    location: "🇸🇦 Riyadh, KSA",
    text: "Impleway executed our Odoo ERP and ZATCA Phase-2 integration with zero business disruption. Our invoicing and inventory across 8 warehouse hubs are now fully synchronized in real time."
  },
  {
    name: "Michael R.",
    role: "VP of Operations",
    company: "Global Logistics Network",
    location: "🇺🇸 Austin, USA",
    text: "Impleway helped us streamline ERP workflows and reporting across our commercial branches. The implementation was smooth, professional, and delivered measurable operational ROI within 90 days."
  },
  {
    name: "Sarah K.",
    role: "Director of Digital Systems",
    company: "Omnichannel Retail Brand",
    location: "🇬🇧 London, UK",
    text: "Excellent communication, deep technical competence, and rigorous project management throughout our data migration. We reduced our month-end financial closing time by 40%."
  },
  {
    name: "Ahmed F.",
    role: "Head of Supply Chain",
    company: "FMCG Distribution",
    location: "🇵🇰 Lahore, Pakistan",
    text: "Our warehouse dispatch and ERP reporting became significantly faster after Impleway re-engineered our database schema. Reliable consultants with genuine enterprise experience."
  }
];

export const TestimonialsSlider = () => {
  return (
    <section className="py-20 sm:py-24 bg-[#F6F6F6] border-b border-[#e7e7e7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="text-xs uppercase font-extrabold tracking-wider text-[#E50914]">
            Client Validation
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#111111] tracking-tight">
            What Enterprise Leaders Say About Impleway
          </h2>
          <p className="text-base sm:text-lg text-[#5F6368] leading-relaxed">
            Trusted by businesses across Saudi Arabia, the United States, the United Kingdom, and Pakistan for mission-critical enterprise transformations.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {TESTIMONIALS.map((item, idx) => (
            <div 
              key={idx}
              className="bg-white rounded-3xl p-8 border border-[#e7e7e7] shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between relative group"
            >
              <div className="space-y-4">
                {/* 5 Stars */}
                <div className="flex items-center gap-1 text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400" />
                  ))}
                </div>

                {/* Testimonial Quote */}
                <p className="text-sm sm:text-base text-neutral-700 leading-relaxed italic">
                  "{item.text}"
                </p>
              </div>

              {/* Author Info */}
              <div className="pt-6 mt-6 border-t border-neutral-100 flex items-center justify-between">
                <div>
                  <div className="font-extrabold text-[#111111] text-sm sm:text-base">
                    {item.name}
                  </div>
                  <div className="text-xs text-[#5F6368]">
                    {item.role}, {item.company}
                  </div>
                </div>
                <div className="text-xs font-bold text-neutral-600 bg-neutral-100 px-3 py-1 rounded-full">
                  {item.location}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

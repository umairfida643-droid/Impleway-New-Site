import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { SEO } from '../components/ui/SEO';
import { Breadcrumbs } from '../components/ui/Breadcrumbs';
import { CTABanner } from '../components/home/CTABanner';
import { blogsData } from '../data/blogsData';
import { siteConfig } from '../data/siteConfig';
import { 
  Calendar, Clock, User, ArrowLeft, ArrowRight, Share2, 
  MessageSquare, Phone, BookOpen, Layers, CheckCircle2 
} from 'lucide-react';

export const BlogDetailPage = () => {
  const { slug } = useParams();
  const blog = blogsData.find(b => b.slug === slug);

  if (!blog) {
    return <Navigate to="/blog" replace />;
  }

  // Related articles
  const relatedArticles = blogsData
    .filter(b => b.slug !== slug && (b.category === blog.category || Math.random() > 0.5))
    .slice(0, 3);

  return (
    <>
      <SEO 
        title={`${blog.title} | Impleway Insights`}
        description={blog.metaDescription || blog.excerpt}
        ogType="article"
        ogImage={blog.featuredImage}
      />

      {/* Hero Header */}
      <section className="bg-radial-hero text-white py-14 sm:py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none"></div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          
          <Link 
            to="/blog" 
            className="inline-flex items-center gap-2 text-xs font-bold text-neutral-400 hover:text-white transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to all insights</span>
          </Link>

          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/20 border border-red-500/30 text-red-400 text-xs font-black uppercase tracking-wider">
              <span>{blog.category}</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight">
              {blog.title}
            </h1>

            {/* Author and Date Meta */}
            <div className="flex flex-wrap items-center gap-4 text-xs sm:text-sm text-neutral-300 font-medium pt-2 border-t border-white/10">
              <span className="flex items-center gap-1.5">
                <User className="w-4 h-4 text-[#E50914]" />
                <span>{blog.author}</span>
              </span>
              <span>·</span>
              <span className="flex items-center gap-1.5">
                <Calendar className="w-4 h-4 text-neutral-400" />
                <span>{blog.publishedDate}</span>
              </span>
              <span>·</span>
              <span className="flex items-center gap-1.5">
                <Clock className="w-4 h-4 text-neutral-400" />
                <span>{blog.readTime}</span>
              </span>
            </div>
          </div>

        </div>
      </section>

      <Breadcrumbs items={[{ name: "Blog", path: "/blog" }, { name: blog.title }]} />

      {/* Article Body Section */}
      <section className="py-14 sm:py-20 bg-white border-b border-[#e7e7e7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Main Article Content Column */}
            <article className="lg:col-span-8 space-y-8">
              
              {/* Featured Image */}
              {blog.featuredImage && (
                <div className="rounded-3xl overflow-hidden border border-[#e7e7e7] shadow-lg max-h-[460px] w-full bg-neutral-100">
                  <img 
                    src={blog.featuredImage} 
                    alt={blog.title} 
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover"
                  />
                </div>
              )}

              {/* Rich Article Prose with Preserved Wikipedia Hyperlinks */}
              <div 
                className="blog-prose-content prose prose-lg max-w-none text-[#111111] leading-relaxed space-y-6 [&_h2]:text-2xl [&_h2]:sm:text-3xl [&_h2]:font-black [&_h2]:text-[#111111] [&_h2]:tracking-tight [&_h2]:mt-10 [&_h2]:mb-4 [&_h3]:text-xl [&_h3]:font-black [&_h3]:text-[#111111] [&_h3]:mt-8 [&_h3]:mb-3 [&_p]:text-neutral-700 [&_p]:text-base [&_p]:sm:text-lg [&_p]:leading-relaxed [&_ul]:space-y-2.5 [&_ul]:pl-6 [&_li]:text-neutral-700 [&_li]:text-base [&_strong]:text-[#111111] [&_strong]:font-bold [&_a]:text-[#E50914] [&_a]:font-semibold hover:[&_a]:underline [&_.bg-neutral-900]:!text-white [&_.bg-neutral-900_p]:!text-neutral-200 [&_.bg-neutral-900_span]:!text-neutral-200 [&_.bg-neutral-900_li]:!text-neutral-200 [&_.bg-neutral-900_strong]:!text-white [&_.bg-neutral-900_h4]:!text-[#E50914]"
                dangerouslySetInnerHTML={{ __html: blog.contentHtml }}
              />

              {/* Author Footer Bio */}
              <div className="mt-14 p-8 rounded-3xl bg-[#F6F6F6] border border-[#e7e7e7] flex flex-col sm:flex-row items-center sm:items-start gap-5">
                <div className="w-14 h-14 rounded-2xl overflow-hidden flex-shrink-0 shadow-md">
                  <img src="/favicon.png" alt="Impleway" className="w-full h-full object-cover" />
                </div>
                <div className="space-y-2 text-center sm:text-left">
                  <h4 className="font-extrabold text-base text-[#111111]">{blog.author}</h4>
                  <p className="text-xs sm:text-sm text-[#5F6368] leading-relaxed">
                    Written by senior enterprise architects and compliance consultants at Impleway. We specialize in mission-critical ERP implementations, cloud architecture, and ZATCA compliance across Saudi Arabia and the GCC.
                  </p>
                </div>
              </div>

            </article>

            {/* Sidebar Column */}
            <aside className="lg:col-span-4 space-y-8 sticky top-28">
              
              {/* Table of Contents */}
              {blog.tableOfContents && blog.tableOfContents.length > 0 && (
                <div className="bg-[#F6F6F6] rounded-3xl p-7 border border-[#e7e7e7] space-y-4">
                  <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#111111] border-b border-neutral-200 pb-3">
                    <BookOpen className="w-4 h-4 text-[#E50914]" />
                    <span>Table of Contents</span>
                  </div>
                  <nav className="space-y-2 text-xs font-semibold text-[#5F6368]">
                    {blog.tableOfContents.map((item, idx) => (
                      <a
                        key={idx}
                        href={`#${item.id}`}
                        className="block hover:text-[#E50914] transition-colors py-1 pl-2 border-l-2 border-transparent hover:border-[#E50914]"
                      >
                        {item.text}
                      </a>
                    ))}
                  </nav>
                </div>
              )}

              {/* Consultation Box */}
              <div className="bg-[#050505] text-white rounded-3xl p-7 border border-neutral-800 shadow-xl space-y-4">
                <div className="text-xs font-bold uppercase tracking-wider text-[#E50914]">
                  Need Enterprise Guidance?
                </div>
                <h4 className="text-xl font-black text-white leading-tight">
                  Speak Directly with our KSA & PK Advisory Team
                </h4>
                <p className="text-xs text-neutral-400 leading-relaxed">
                  Plan your ERP selection, migration, or ZATCA integration with our senior functional architects.
                </p>
                <div className="space-y-2 pt-2">
                  <Link
                    to="/book-free-consultation"
                    className="w-full inline-flex items-center justify-center gap-2 py-3 rounded-xl font-bold text-xs text-white bg-gradient-to-r from-[#E50914] to-[#9F0712] shadow-md hover:shadow-lg transition-all"
                  >
                    <span>Schedule Free Call</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                  <a
                    href={siteConfig.contact.ksa.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 py-2.5 rounded-xl font-bold text-xs text-neutral-300 hover:text-white bg-white/5 hover:bg-white/10 border border-white/10 transition-all"
                  >
                    <MessageSquare className="w-3.5 h-3.5 text-emerald-400" />
                    <span>WhatsApp KSA Branch</span>
                  </a>
                </div>
              </div>

              {/* Related Articles */}
              {relatedArticles.length > 0 && (
                <div className="bg-white rounded-3xl p-7 border border-[#e7e7e7] space-y-4">
                  <h4 className="text-sm font-black uppercase tracking-wider text-[#111111] border-b border-neutral-100 pb-3">
                    Related Articles
                  </h4>
                  <div className="space-y-4">
                    {relatedArticles.map((rel) => (
                      <Link 
                        key={rel.slug} 
                        to={`/blog/${rel.slug}`} 
                        className="block group/rel space-y-1"
                      >
                        <div className="text-xs font-bold text-neutral-400">{rel.publishedDate}</div>
                        <h5 className="text-sm font-bold text-[#111111] group-hover/rel:text-[#E50914] transition-colors leading-snug">
                          {rel.title}
                        </h5>
                      </Link>
                    ))}
                  </div>
                </div>
              )}

            </aside>

          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
};

import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { SEO } from '../components/ui/SEO';
import { Breadcrumbs } from '../components/ui/Breadcrumbs';
import { CTABanner } from '../components/home/CTABanner';
import { blogsData } from '../data/blogsData';
import { Search, Calendar, Clock, ArrowRight, User, Sparkles, BookOpen } from 'lucide-react';

const POSTS_PER_PAGE = 12;

export const BlogListingPage = () => {
  const [activeCategory, setActiveCategory] = useState("All Articles");
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  // Extract all unique categories
  const categories = useMemo(() => {
    const cats = new Set(blogsData.map(b => b.category || "ERP Strategy"));
    return ["All Articles", ...Array.from(cats)];
  }, []);

  // Filtered blogs
  const filteredBlogs = useMemo(() => {
    return blogsData.filter(blog => {
      const matchesCategory = activeCategory === "All Articles" || blog.category === activeCategory;
      const matchesSearch = blog.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                            blog.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  // Pagination calculation
  const totalPages = Math.ceil(filteredBlogs.length / POSTS_PER_PAGE);
  const paginatedBlogs = useMemo(() => {
    const start = (currentPage - 1) * POSTS_PER_PAGE;
    return filteredBlogs.slice(start, start + POSTS_PER_PAGE);
  }, [filteredBlogs, currentPage]);

  const handleCategoryChange = (cat) => {
    setActiveCategory(cat);
    setCurrentPage(1);
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
    setCurrentPage(1);
  };

  return (
    <>
      <SEO 
        title="Enterprise Insights & Technical Guides | Impleway Blog"
        description="Comprehensive technical analysis, architectural playbooks, and regulatory guides for Oracle ERP, Odoo, Dynamics 365, and Saudi ZATCA compliance."
      />

      {/* Hero */}
      <section className="bg-radial-hero text-white py-16 sm:py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-500/20 border border-red-500/30 text-white text-xs font-black uppercase tracking-wider">
            <span>Knowledge Base & Technical Playbooks</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight max-w-4xl mx-auto leading-tight">
            ERP, IT & Digital Transformation Insights
          </h1>
          <p className="text-lg sm:text-xl text-neutral-300 max-w-3xl mx-auto leading-relaxed">
            Practical strategies, regulatory compliance handbooks, and migration best practices for business leaders across Saudi Arabia and global markets.
          </p>
        </div>
      </section>

      <Breadcrumbs items={[{ name: "Blog" }]} />

      {/* Main Blog Listing Section */}
      <section className="py-16 sm:py-20 bg-white border-b border-[#e7e7e7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          {/* Controls: Search & Category Filter Pills */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-[#e7e7e7]">
            {/* Categories */}
            <div className="flex flex-wrap items-center gap-2">
              {categories.slice(0, 7).map((cat) => (
                <button
                  key={cat}
                  onClick={() => handleCategoryChange(cat)}
                  className={`px-4 py-2 rounded-full text-xs font-bold transition-all cursor-pointer ${
                    activeCategory === cat
                      ? 'bg-[#E50914] text-white shadow-md shadow-red-600/30'
                      : 'bg-[#F6F6F6] text-neutral-700 hover:bg-neutral-200 border border-[#e7e7e7]'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Search Input */}
            <div className="relative w-full md:w-80">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-400" />
              <input
                type="text"
                placeholder="Search articles & guides..."
                value={searchQuery}
                onChange={handleSearchChange}
                className="w-full pl-10 pr-4 py-2.5 rounded-full text-xs bg-[#F6F6F6] border border-[#e7e7e7] focus:outline-none focus:border-[#E50914] focus:bg-white transition-all text-[#111111]"
              />
            </div>
          </div>

          {/* Articles Counter */}
          <div className="text-xs text-[#5F6368] font-medium flex items-center justify-between">
            <span>Showing {paginatedBlogs.length} of {filteredBlogs.length} articles</span>
            {searchQuery && (
              <button 
                onClick={() => setSearchQuery("")} 
                className="text-[#E50914] hover:underline"
              >
                Clear filter
              </button>
            )}
          </div>

          {/* Blogs Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {paginatedBlogs.map((blog) => (
              <article 
                key={blog.slug}
                className="bg-white rounded-3xl border border-[#e7e7e7] shadow-sm hover:shadow-2xl hover:border-red-500/40 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between overflow-hidden group"
              >
                {/* Featured Image */}
                <div className="relative h-52 w-full overflow-hidden bg-neutral-100">
                  <img 
                    src={blog.featuredImage} 
                    alt={blog.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                    decoding="async"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 rounded-full text-[11px] font-black uppercase tracking-wider bg-white/95 text-[#E50914] shadow-md backdrop-blur-sm">
                      {blog.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-7 flex-grow flex flex-col justify-between space-y-4">
                  <div className="space-y-2">
                    {/* Meta */}
                    <div className="flex items-center gap-3 text-xs text-neutral-400 font-semibold">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5" />
                        <span>{blog.publishedDate}</span>
                      </span>
                      <span>·</span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5" />
                        <span>{blog.readTime}</span>
                      </span>
                    </div>

                    {/* Title */}
                    <h2 className="text-xl font-black text-[#111111] group-hover:text-[#E50914] transition-colors leading-snug line-clamp-2">
                      <Link to={`/blog/${blog.slug}`}>
                        {blog.title}
                      </Link>
                    </h2>

                    {/* Excerpt */}
                    <p className="text-xs sm:text-sm text-[#5F6368] line-clamp-3 leading-relaxed">
                      {blog.excerpt}
                    </p>
                  </div>

                  {/* Bottom Author & CTA Bar */}
                  <div className="pt-4 border-t border-neutral-100 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <img 
                        src="/favicon.png" 
                        alt="Impleway" 
                        className="w-7 h-7 rounded-full object-contain flex-shrink-0 shadow-xs" 
                      />
                      <span className="text-xs font-bold text-neutral-700">
                        Impleway Advisory
                      </span>
                    </div>
                    <Link
                      to={`/blog/${blog.slug}`}
                      className="inline-flex items-center gap-1.5 text-xs font-extrabold text-[#E50914] group-hover:underline"
                    >
                      <span>Read Guide</span>
                      <ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Pagination Controls */}
          {totalPages > 1 && (
            <div className="pt-12 flex items-center justify-center gap-2">
              <button
                disabled={currentPage === 1}
                onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
                className="px-4 py-2 rounded-xl text-xs font-bold border border-[#e7e7e7] disabled:opacity-40 disabled:cursor-not-allowed hover:bg-neutral-100 transition-colors"
              >
                Previous
              </button>

              {[...Array(totalPages)].map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentPage(i + 1)}
                  className={`w-9 h-9 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                    currentPage === i + 1
                      ? 'bg-[#E50914] text-white shadow-md'
                      : 'border border-[#e7e7e7] text-neutral-700 hover:bg-neutral-100'
                  }`}
                >
                  {i + 1}
                </button>
              ))}

              <button
                disabled={currentPage === totalPages}
                onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
                className="px-4 py-2 rounded-xl text-xs font-bold border border-[#e7e7e7] disabled:opacity-40 disabled:cursor-not-allowed hover:bg-neutral-100 transition-colors"
              >
                Next
              </button>
            </div>
          )}

        </div>
      </section>

      <CTABanner />
    </>
  );
};

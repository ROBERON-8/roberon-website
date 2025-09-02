'use client';
import React, { useState } from 'react';
import Navbar from '../components/Navbar';

const blogPosts = [
  {
    id: 1,
    title: 'The Future of Smart Wearables in 2024',
    excerpt: 'Discover how smartwatches and wearable technology are revolutionizing health monitoring and daily productivity.',
    author: 'Sarah Johnson',
    date: 'August 28, 2024',
    readTime: '5 min read',
    category: 'Technology',
    featured: true,
    image: 'bg-gradient-to-br from-blue-600 to-purple-700'
  },
  {
    id: 2,
    title: 'Apple Watch vs Samsung Galaxy Watch: Complete Comparison',
    excerpt: 'An in-depth comparison of the two leading smartwatch platforms and their unique features.',
    author: 'Mike Chen',
    date: 'August 25, 2024',
    readTime: '8 min read',
    category: 'Reviews',
    featured: false,
    image: 'bg-gradient-to-br from-gray-600 to-gray-800'
  },
  {
    id: 3,
    title: 'Fitness Tracking: How Accurate Are Your Smartwatch Metrics?',
    excerpt: 'Understanding the accuracy of heart rate, step counting, and sleep tracking in modern wearables.',
    author: 'Dr. Emily Rodriguez',
    date: 'August 22, 2024',
    readTime: '6 min read',
    category: 'Health',
    featured: false,
    image: 'bg-gradient-to-br from-green-600 to-teal-700'
  },
  {
    id: 4,
    title: 'Budget Smartwatches That Don\'t Compromise on Features',
    excerpt: 'Explore affordable smartwatch options that offer premium features without breaking the bank.',
    author: 'Alex Kumar',
    date: 'August 20, 2024',
    readTime: '4 min read',
    category: 'Buying Guide',
    featured: false,
    image: 'bg-gradient-to-br from-orange-600 to-red-700'
  },
  {
    id: 5,
    title: 'Smartwatch Security: Protecting Your Personal Data',
    excerpt: 'Learn about privacy settings and security features to keep your wearable device data safe.',
    author: 'David Park',
    date: 'August 18, 2024',
    readTime: '7 min read',
    category: 'Security',
    featured: false,
    image: 'bg-gradient-to-br from-indigo-600 to-blue-800'
  },
  {
    id: 6,
    title: 'The Evolution of Smartwatch Design: From Function to Fashion',
    excerpt: 'How smartwatch aesthetics have evolved to blend technology with style and personal expression.',
    author: 'Lisa Thompson',
    date: 'August 15, 2024',
    readTime: '5 min read',
    category: 'Design',
    featured: false,
    image: 'bg-gradient-to-br from-pink-600 to-rose-700'
  }
];

const categories = ['All', 'Technology', 'Reviews', 'Health', 'Buying Guide', 'Security', 'Design'];

export default function Blog() {
    const [selectedCategory, setSelectedCategory] = useState('All');
    
    const filteredPosts = selectedCategory === 'All' 
        ? blogPosts 
        : blogPosts.filter(post => post.category === selectedCategory);

    const featuredPost = blogPosts.find(post => post.featured);
    const regularPosts = blogPosts.filter(post => !post.featured);

    const handleReadMore = (blogId) => {
        // In a real application, this would navigate to /blog/[id]
        window.open(`/blog/${blogId}`, '_blank');
    };

    return (
        <div className="min-h-screen bg-black text-white">
            <Navbar />
            <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16">
                
                {/* Page Header */}
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">
                        <span className="text-white">Our </span>
                        <span className="text-red-500">Blog</span>
                    </h1>
                    <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                        Stay updated with the latest insights, reviews, and trends in wearable technology
                    </p>
                </div>

                {/* Category Filter */}
                <div className="flex flex-wrap justify-center gap-4 mb-12">
                    {categories.map((category) => (
                        <button
                            key={category}
                            onClick={() => setSelectedCategory(category)}
                            className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                                selectedCategory === category
                                    ? 'bg-red-600 text-white shadow-lg'
                                    : 'bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-white'
                            }`}
                        >
                            {category}
                        </button>
                    ))}
                </div>

                {/* Featured Post */}
                {featuredPost && selectedCategory === 'All' && (
                    <section className="mb-16">
                        <div className="flex items-center gap-3 mb-8">
                            <h2 className="text-2xl font-bold text-red-500">Featured Article</h2>
                            <div className="bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                                TRENDING
                            </div>
                        </div>
                        
                        <div className="relative bg-gradient-to-r from-red-900/20 to-red-600/20 border border-red-500/30 rounded-2xl overflow-hidden backdrop-blur-sm hover:border-red-500/50 transition-all group">
                            <div className="flex flex-col lg:flex-row">
                                {/* Featured Image */}
                                <div className={`lg:w-1/2 h-64 lg:h-80 ${featuredPost.image} flex items-center justify-center relative`}>
                                    <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-all"></div>
                                    <div className="relative text-center">
                                        <div className="w-20 h-20 bg-white/10 rounded-xl flex items-center justify-center mx-auto mb-3">
                                            <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"/>
                                            </svg>
                                        </div>
                                        <span className="text-white/80 text-sm font-medium">Featured</span>
                                    </div>
                                </div>
                                
                                {/* Content */}
                                <div className="lg:w-1/2 p-8 flex flex-col justify-center">
                                    <div className="flex items-center gap-4 mb-4">
                                        <span className="bg-red-500/20 text-red-400 text-xs font-semibold px-3 py-1 rounded-full">
                                            {featuredPost.category}
                                        </span>
                                        <span className="text-gray-500 text-sm">{featuredPost.readTime}</span>
                                    </div>
                                    
                                    <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4 group-hover:text-red-400 transition-colors">
                                        {featuredPost.title}
                                    </h3>
                                    
                                    <p className="text-gray-300 mb-6 leading-relaxed">
                                        {featuredPost.excerpt}
                                    </p>
                                    
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center gap-3">
                                            <div className="w-10 h-10 bg-gradient-to-br from-red-500 to-red-600 rounded-full flex items-center justify-center">
                                                <span className="text-white font-semibold text-sm">
                                                    {featuredPost.author.split(' ').map(n => n[0]).join('')}
                                                </span>
                                            </div>
                                            <div>
                                                <p className="text-white font-medium text-sm">{featuredPost.author}</p>
                                                <p className="text-gray-400 text-xs">{featuredPost.date}</p>
                                            </div>
                                        </div>
                                        
                                        <button 
                                            onClick={() => handleReadMore(featuredPost.id)}
                                            className="bg-red-600 hover:bg-red-700 text-white font-semibold px-6 py-2 rounded-lg transition-colors"
                                        >
                                            Read More
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                )}

                {/* Blog Posts Grid */}
                <section>
                    <h2 className="text-2xl font-bold text-white mb-8">
                        {selectedCategory === 'All' ? 'Latest Articles' : `${selectedCategory} Articles`}
                    </h2>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {(selectedCategory === 'All' ? regularPosts : filteredPosts).map((post) => (
                            <article 
                                key={post.id} 
                                className="bg-gray-900 border border-gray-800 rounded-xl overflow-hidden hover:border-gray-700 transition-all duration-300 group hover:transform hover:scale-105"
                            >
                                {/* Blog Image */}
                                <div className={`h-48 ${post.image} flex items-center justify-center relative overflow-hidden`}>
                                    <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-all"></div>
                                    <div className="relative text-center">
                                        <div className="w-16 h-16 bg-white/10 rounded-xl flex items-center justify-center mx-auto mb-2">
                                            <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M14,2H6A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2M18,20H6V4H13V9H18V20Z" />
                                            </svg>
                                        </div>
                                        <span className="text-white/80 text-xs font-medium">Article</span>
                                    </div>
                                    
                                    {/* Category Badge */}
                                    <div className="absolute top-4 left-4 bg-black/50 text-white text-xs font-semibold px-3 py-1 rounded-full">
                                        {post.category}
                                    </div>
                                </div>
                                
                                {/* Content */}
                                <div className="p-6">
                                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-red-400 transition-colors line-clamp-2">
                                        {post.title}
                                    </h3>
                                    
                                    <p className="text-gray-400 text-sm mb-4 line-clamp-3">
                                        {post.excerpt}
                                    </p>
                                    
                                    {/* Meta Info */}
                                    <div className="flex items-center justify-between mb-4">
                                        <div className="flex items-center gap-2">
                                            <div className="w-8 h-8 bg-gradient-to-br from-red-500 to-red-600 rounded-full flex items-center justify-center">
                                                <span className="text-white font-semibold text-xs">
                                                    {post.author.split(' ').map(n => n[0]).join('')}
                                                </span>
                                            </div>
                                            <div>
                                                <p className="text-white text-xs font-medium">{post.author}</p>
                                                <p className="text-gray-500 text-xs">{post.date}</p>
                                            </div>
                                        </div>
                                        <span className="text-gray-500 text-xs">{post.readTime}</span>
                                    </div>
                                    
                                    {/* Read More Button */}
                                    <button 
                                        onClick={() => window.open(`/blog/${post.id}`, '_blank')}
                                        className="w-full bg-gray-800 hover:bg-red-600 text-white font-semibold py-3 rounded-lg transition-all duration-300 group-hover:bg-red-600"
                                    >
                                        Read Full Article
                                    </button>
                                </div>
                            </article>
                        ))}
                    </div>
                </section>
            </div>
        </div>
    );
}
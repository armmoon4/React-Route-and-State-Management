import React from 'react';
import { ArrowRight, Calendar, User } from 'lucide-react';

// Sample data for blog posts
const blogPosts = [
  {
    category: 'Wellness',
    title: '10 Simple Habits for a Healthier Lifestyle',
    excerpt: 'Discover small changes you can make to your daily routine that have a big impact on your overall health and well-being.',
    author: 'Dr. Emily Carter',
    date: 'Oct 28, 2025',
    imageUrl: 'https://placehold.co/600x400/3B82F6/FFFFFF?text=Health+Habits&font=inter',
  },
  {
    category: 'Medical',
    title: 'Understanding Telehealth: The Future of Medicine',
    excerpt: 'Telehealth is revolutionizing how we access healthcare. Learn about its benefits, limitations, and what to expect.',
    author: 'Johnathan Lee',
    date: 'Oct 24, 2025',
    imageUrl: 'https://placehold.co/600x400/10B981/FFFFFF?text=Telehealth&font=inter',
  },
  {
    category: 'Nutrition',
    title: 'The Top 5 Superfoods You Should Eat Daily',
    excerpt: 'Fuel your body with these nutrient-dense foods that can boost your immune system, improve energy, and more.',
    author: 'Sarah Chen, R.D.',
    date: 'Oct 20, 2025',
    imageUrl: 'https://placehold.co/600x400/F59E0B/FFFFFF?text=Superfoods&font=inter',
  },
];

// Reusable Blog Card Component
const BlogCard = ({ post }) => {
  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden flex flex-col transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
      {/* Image */}
      <img 
        src={post.imageUrl} 
        alt={post.title}
        className="w-full h-48 object-cover" 
      />
      
      <div className="p-6 flex flex-col flex-grow">
        {/* Category and Date */}
        <div className="flex justify-between items-center mb-2">
          <span className="inline-block bg-blue-100 text-blue-600 text-xs font-semibold px-3 py-1 rounded-full">
            {post.category}
          </span>
          <div className="flex items-center text-gray-500 text-xs">
            <Calendar size={14} className="mr-1" />
            {post.date}
          </div>
        </div>
        
        {/* Title */}
        <h3 className="text-xl font-bold text-gray-800 mb-2">
          {post.title}
        </h3>
        
        {/* Excerpt */}
        <p className="text-gray-600 text-sm mb-4 flex-grow">
          {post.excerpt}
        </p>
        
        {/* Author and Read More */}
        <div className="flex justify-between items-center mt-auto">
          <div className="flex items-center">
            <User size={16} className="text-gray-500 mr-2" />
            <span className="text-sm font-medium text-gray-700">{post.author}</span>
          </div>
          <a
            href="#"
            className="text-sm font-semibold text-blue-600 hover:text-blue-700 flex items-center transition-colors"
          >
            Read More
            <ArrowRight size={16} className="ml-1" />
          </a>
        </div>
      </div>
    </div>
  );
};

// Main Blogs Component
const Blogs = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">
            From Our Blog
          </h2>
          <p className="text-lg max-w-2xl mx-auto">
            Get the latest health insights, medical news, and wellness
            tips from our team of expert professionals.
          </p>
        </div>

        {/* Blog Post Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <BlogCard key={index} post={post} />
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <button className="bg-blue-600 text-white py-3 px-8 rounded-lg font-semibold text-lg hover:bg-blue-700 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
            View All Posts
          </button>
        </div>
      </div>
    </section>
  );
};

export default Blogs;

import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, User, ArrowRight } from 'lucide-react';
import { BlogPost } from '@/types/blog';

interface BlogCardProps {
  post: BlogPost;
  index: number;
}

const BlogCard: React.FC<BlogCardProps> = ({ post, index }) => {
  return (
    <motion.article
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.6 }}
      whileHover={{ y: -8, scale: 1.02 }}
      className="group bg-white/5 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/10 hover:border-white/20 transition-all duration-500"
    >
      <div className="relative h-48 overflow-hidden">
        <img
          src={post.featuredImage}
          alt={post.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
        <div className="absolute top-4 left-4">
          <span className="bg-accent/90 text-black px-3 py-1 rounded-full text-xs font-semibold">
            {post.category}
          </span>
        </div>
      </div>

      <div className="p-6">
        <div className="flex items-center gap-4 text-xs text-white/60 mb-3">
          <div className="flex items-center gap-1">
            <Calendar size={12} />
            <time dateTime={post.publishedAt}>
              {new Date(post.publishedAt).toLocaleDateString('el-GR')}
            </time>
          </div>
          <div className="flex items-center gap-1">
            <Clock size={12} />
            <span>{post.readingTime} λεπτά</span>
          </div>
          <div className="flex items-center gap-1">
            <User size={12} />
            <span>{post.author.name}</span>
          </div>
        </div>

        <h2 className="text-lg font-bold text-white mb-3 group-hover:text-accent transition-colors duration-300 line-clamp-2">
          {post.title}
        </h2>

        <p className="text-white/70 text-sm mb-4 line-clamp-3">
          {post.excerpt}
        </p>

        <div className="flex flex-wrap gap-2 mb-4">
          {post.tags.slice(0, 2).map((tag, i) => (
            <span 
              key={i}
              className="px-2 py-1 bg-white/10 text-white/80 text-xs rounded border border-white/20"
            >
              #{tag}
            </span>
          ))}
        </div>

        <motion.a
          href={`/blog/${post.slug}`}
          whileHover={{ x: 5 }}
          className="inline-flex items-center gap-2 text-accent hover:text-white transition-colors duration-300 text-sm font-medium"
        >
          <span>Διαβάστε περισσότερα</span>
          <ArrowRight size={14} />
        </motion.a>
      </div>
    </motion.article>
  );
};

export default BlogCard;
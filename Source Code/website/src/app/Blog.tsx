"use client";

import SectionHeading from "@/components/SectionHeading";
import { BLOG_POSTS } from "@/data/portfolio";
import { motion } from "framer-motion";

const formatDate = (dateStr: string) => {
  const date = new Date(dateStr);
  return date
    .toLocaleDateString("en-US", { month: "short", year: "numeric" })
    .toUpperCase();
};

const Blog = () => {
  return (
    <section
      id="blog"
      className="min-h-screen flex flex-col justify-center px-6 md:px-12 max-w-7xl mx-auto py-20"
    >
      <SectionHeading number="05" title="Blog" />

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: 0.2 }}
        className="font-mono text-sm text-neon-primary/50 -mt-8 mb-10"
      ></motion.p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {BLOG_POSTS.map((post, index) => (
          <motion.a
            key={index}
            href={post.link}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.15 }}
            className="group relative bg-slate-900/50 border border-white/10 hover:border-neon-accent hover:shadow-[0_0_15px_var(--color-neon-accent)] p-6 rounded-lg transition-all duration-300 flex flex-col hover:-translate-y-1"
          >
            <span className="font-mono text-xs text-neon-primary mb-3">
              {formatDate(post.date)}
            </span>

            <h3 className="font-cyber text-lg text-slate-100 group-hover:text-neon-accent transition-colors mb-3 tracking-wide">
              {post.title}
            </h3>

            <p className="text-sm text-slate-400 mb-4 flex-grow">
              {post.summary}
            </p>

            <div className="flex flex-wrap gap-2 mb-4">
              {post.tags.map((tag, i) => (
                <span
                  key={i}
                  className="text-xs font-mono text-neon-primary bg-neon-primary/10 px-2 py-1 rounded border border-neon-primary/20"
                >
                  {tag}
                </span>
              ))}
            </div>

            <span className="font-mono text-xs text-neon-accent group-hover:translate-x-1 transition-transform inline-block">
              Read &rarr;
            </span>
          </motion.a>
        ))}
      </div>
    </section>
  );
};

export default Blog;

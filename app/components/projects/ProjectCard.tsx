"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

interface ProjectCardProps {
  title: string;
  subtitle: string;
  imageUrl: string;
  slug: string;
  index: number;
}

const ProjectCard = ({ title, subtitle, imageUrl, slug, index }: ProjectCardProps) => {
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.8,
        delay: index * 0.1,
        ease: "easeOut"
      }
    }
  };

  // 使用本地图片 (与首页一致)
  const localImages: Record<string, string> = {
    'capitello': '/images/1.png',
    'augen': '/images/2.png',
    'kombo': '/images/3.png'
  };

  // 优先使用本地图片，如果没有则使用原始imageUrl
  const displayImage = localImages[slug] || imageUrl;

  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      className="group"
    >
      <Link href={`/works/${slug}`} className="block">
        <div className="relative overflow-hidden aspect-[4/3] mb-5">
          <div className="overlay opacity-0 group-hover:opacity-100 z-10"></div>
          <Image
            src={displayImage}
            alt={title}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
        <div>
          <h3 className="text-xl font-bold">{title}</h3>
          <p className="text-sm mt-1 text-gray-700">{subtitle}</p>
        </div>
      </Link>
    </motion.div>
  );
};

export default ProjectCard; 
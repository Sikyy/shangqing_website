"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import MainLayout from "../../components/layout/MainLayout";
import { projectsData } from "../../data/projects";
import { ProjectData } from "../../components/projects/ProjectGrid";

// 添加 generateStaticParams 函数
export async function generateStaticParams() {
  return projectsData.map((project) => ({
    slug: project.slug,
  }));
}

export default function ProjectDetailPage() {
  const { slug } = useParams();
  const [project, setProject] = useState<ProjectData | null>(null);
  const [nextProject, setNextProject] = useState<ProjectData | null>(null);
  const [prevProject, setPrevProject] = useState<ProjectData | null>(null);

  useEffect(() => {
    // 查找当前项目
    const currentIndex = projectsData.findIndex(p => p.slug === slug);
    if (currentIndex !== -1) {
      setProject(projectsData[currentIndex]);
      
      // 查找下一个项目（如果当前是最后一个，则循环到第一个）
      const nextIndex = currentIndex === projectsData.length - 1 ? 0 : currentIndex + 1;
      setNextProject(projectsData[nextIndex]);
      
      // 查找上一个项目（如果当前是第一个，则循环到最后一个）
      const prevIndex = currentIndex === 0 ? projectsData.length - 1 : currentIndex - 1;
      setPrevProject(projectsData[prevIndex]);
    }
  }, [slug]);

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { 
        duration: 0.6,
        ease: "easeOut" 
      } 
    }
  };

  if (!project) {
    return (
      <MainLayout>
        <div className="container-custom py-32">
          <p className="text-center">Loading project...</p>
        </div>
      </MainLayout>
    );
  }

  return (
    <MainLayout>
      {/* 项目标题 */}
      <section className="pt-32 pb-16">
        <div className="container-custom">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeIn}
          >
            <h1 className="heading-xl mb-4">{project.title}</h1>
            <p className="text-xl">{project.subtitle}</p>
          </motion.div>
        </div>
      </section>

      {/* 项目主图 */}
      <section className="py-8">
        <div className="container-custom">
          <motion.div
            className="relative h-[70vh]"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <Image
              src={project.imageUrl}
              alt={project.title}
              fill
              className="object-cover"
              priority
            />
          </motion.div>
        </div>
      </section>

      {/* 项目详情 */}
      <section className="py-16">
        <div className="container-custom">
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <div className="md:col-span-2">
              <p className="paragraph">{project.description}</p>
            </div>
            <div>
              <div className="mb-8">
                <h3 className="text-lg font-bold mb-4">Date</h3>
                <p>{project.date}</p>
              </div>
              <div>
                <h3 className="text-lg font-bold mb-4">Categories</h3>
                <div className="flex flex-wrap gap-2">
                  {project.categories.map((category, index) => (
                    <span key={index} className="bg-gray-100 px-3 py-1 text-sm">
                      {category}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 项目导航 */}
      <section className="py-16 border-t">
        <div className="container-custom">
          <div className="flex justify-between">
            {prevProject && (
              <Link href={`/works/${prevProject.slug}`} className="group">
                <span className="block text-sm mb-2">Prev Project</span>
                <span className="text-xl font-bold group-hover:text-gray-500 transition-colors">{prevProject.title}</span>
              </Link>
            )}
            
            {nextProject && (
              <Link href={`/works/${nextProject.slug}`} className="group text-right">
                <span className="block text-sm mb-2">Next Project</span>
                <span className="text-xl font-bold group-hover:text-gray-500 transition-colors">{nextProject.title}</span>
              </Link>
            )}
          </div>
        </div>
      </section>
    </MainLayout>
  );
} 
"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import MainLayout from "./components/layout/MainLayout";
import ProjectPreviewContainer from "./components/projects/ProjectPreviewContainer";
import { projectsData } from "./data/projects";

export default function Home() {
  // 只展示前3个项目
  const featuredProjectIds = projectsData.slice(0, 3).map(project => project.id);

  // 动画变体
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { 
        duration: 0.8, 
        ease: "easeOut" 
      } 
    }
  };

  return (
    <MainLayout>
      {/* 英雄区域 */}
      <section className="relative h-screen flex items-center">
        <div className="container-custom">
          <motion.div 
            className="max-w-2xl"
            initial="hidden"
            animate="visible"
            variants={fadeIn}
          >
            <h1 className="heading-xl mb-8">
              Mirko Romanelli — Product and Industrial Designer based in Florence, focused on creating complete product experiences.
            </h1>
            {/* <div className="flex space-x-6">
              <Link href="https://www.instagram.com/" className="text-sm hover:text-gray-500 transition-colors">Instagram</Link>
              <Link href="https://www.linkedin.com/" className="text-sm hover:text-gray-500 transition-colors">LinkedIn</Link>
              <Link href="https://www.behance.net/" className="text-sm hover:text-gray-500 transition-colors">Behance</Link>
            </div> */}
          </motion.div>
        </div>
      </section>

      {/* 项目预览展示区域 - 使用新的预览组件 */}
      <ProjectPreviewContainer projectIds={featuredProjectIds} />

      {/* 关于区域 */}
      <section className="py-24 bg-gray-50">
        <div className="container-custom">
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeIn}
          >
            <div>
              <h2 className="heading-lg mb-6">MKRM</h2>
              <h3 className="heading-md mb-10">
                Product and industrial designer based in Florence, focused on creating complete product experiences.
              </h3>
              <p className="paragraph mb-6">
                I believe in the minimal and essential approach, expressed through the search for a balance between form, function and meaning, through the enhancement of details and the research of materials.
              </p>
              <p className="paragraph">
                I create products characterized by their own formal and aesthetic identity, expressed through the simplicity of the form and the iconization of the concept, placing the user experience and communication at the center of development.
              </p>
              <div className="mt-12">
                <Link href="/about" className="btn-primary">
                  Learn More
                </Link>
              </div>
            </div>
            <div className="relative h-[600px]">
              <Image
                src="/images/profile.jpg"
                alt="Mirko Romanelli"
                fill
                className="object-cover"
                priority
              />
            </div>
          </motion.div>
        </div>
      </section>
    </MainLayout>
  );
}

import { motion } from "framer-motion";
import { useState } from "react";
import MainLayout from "../components/layout/MainLayout";
import ProjectGrid from "../components/projects/ProjectGrid";
import { projectsData } from "../data/projects";

export default function WorksPage() {
  const [filter, setFilter] = useState<string | null>(null);
  
  // 只使用前3个项目
  const firstThreeProjects = projectsData.slice(0, 3);
  
  // 从项目数据中提取所有唯一的类别 (只使用前3个项目的类别)
  const allCategories = Array.from(
    new Set(
      firstThreeProjects.flatMap(project => project.categories)
    )
  );
  
  // 根据筛选条件过滤项目 (只在前3个项目中筛选)
  const filteredProjects = filter 
    ? firstThreeProjects.filter(project => project.categories.includes(filter))
    : firstThreeProjects;

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

  return (
    <MainLayout>
      {/* 标题区域 */}
      <section className="pt-32 pb-16">
        <div className="container-custom">
          <motion.h1 
            className="heading-xl max-w-4xl"
            initial="hidden"
            animate="visible"
            variants={fadeIn}
          >
            Works
          </motion.h1>
        </div>
      </section>

      {/* 筛选器 */}
      <section className="py-8">
        <div className="container-custom">
          <motion.div 
            className="flex flex-wrap gap-4"
            initial="hidden"
            animate="visible"
            variants={fadeIn}
          >
            <button
              className={`px-4 py-2 text-sm ${filter === null ? 'bg-black text-white' : 'bg-gray-100 hover:bg-gray-200'}`}
              onClick={() => setFilter(null)}
            >
              All
            </button>
            {allCategories.map(category => (
              <button
                key={category}
                className={`px-4 py-2 text-sm ${filter === category ? 'bg-black text-white' : 'bg-gray-100 hover:bg-gray-200'}`}
                onClick={() => setFilter(category)}
              >
                {category}
              </button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 项目网格 */}
      <section className="py-16">
        <div className="container-custom">
          {filteredProjects.length > 0 ? (
            <ProjectGrid projects={filteredProjects} columns={3} />
          ) : (
            <motion.p 
              className="text-center py-16 text-lg"
              initial="hidden"
              animate="visible"
              variants={fadeIn}
            >
              No projects found for the selected category.
            </motion.p>
          )}
        </div>
      </section>
    </MainLayout>
  );
} 
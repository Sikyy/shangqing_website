"use client";

import React from 'react';
import ProjectPreview from './ProjectPreview';
import { projectsData } from '../../data/projects';

interface ProjectPreviewContainerProps {
  projectIds?: number[];
}

// 使用本地images文件夹的图片
const projectImages: Record<string, string[]> = {
  // 第一个项目 - capitello
  capitello: ["/images/1.png"],
  // 第二个项目 - augen
  augen: ["/images/2.png"],
  // 第三个项目 - kombo
  kombo: ["/images/3.png"],
  // 其他项目使用默认图片
  littera: ["/images/1.png"],
  nest: ["/images/2.png"],
  flow: ["/images/3.png"],
  mushroom: ["/images/1.png"],
  ps2: ["/images/2.png"],
  gluglu: ["/images/3.png"]
};

const ProjectPreviewContainer: React.FC<ProjectPreviewContainerProps> = ({ projectIds }) => {
  // 获取项目，移除了 .slice(0, 3) 限制，允许显示全部传入的项目
  const selectedProjects = projectIds 
    ? projectsData.filter(project => projectIds.includes(project.id))
    : projectsData.slice(0, 3);
  
  // 确保至少有项目
  if (selectedProjects.length === 0) {
    return <div className="text-center py-10">暂无项目数据</div>;
  }

  // 定义明确的位置，避免依赖CSS
  const positions = [
    { top: '80px', left: '10%', right: 'auto' },
    { top: '280px', left: 'auto', right: '10%' },
    { top: '820px', left: '20%', right: 'auto' }
  ];
  
  return (
    <section className="preview">
      <div className="staggered-grid">
        {selectedProjects.map((project, index) => {
          // 从项目数据中提取信息
          const { id, title, subtitle, slug } = project;
          
          // 获取项目图片URL
          const images = projectImages[slug] || [
            `https://via.placeholder.com/480x480?text=${title}`,
            `https://via.placeholder.com/480x480?text=${title}_2`,
            `https://via.placeholder.com/480x480?text=${title}_3`,
            `https://via.placeholder.com/480x480?text=${title}_4`,
            `https://via.placeholder.com/480x480?text=${title}_5`,
          ];
          
          // 应用位置
          const position = positions[index] || positions[0];
          
          return (
            <div 
              key={id} 
              className={`project-card project-position-${index + 1}`}
              style={{
                top: position.top,
                left: position.left,
                right: position.right
              }}
            >
              <ProjectPreview
                title={title}
                subtitle={subtitle}
                slug={slug}
                images={images}
                position={index % 2 === 0 ? "left" : "right"}
                isTop={true}
                isBottom={false}
                className=""
              />
            </div>
          );
        })}
      </div>
      
      {/* 查看所有项目的按钮 */}
      {/* <div className="container-custom mt-0 text-center">
        <a href="/works" className="btn-primary">
          查看所有项目
        </a>
      </div> */}
    </section>
  );
};

export default ProjectPreviewContainer; 
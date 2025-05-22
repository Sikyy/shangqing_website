"use client";

import ProjectCard from "./ProjectCard";

export interface ProjectData {
  id: number;
  title: string;
  subtitle: string;
  slug: string;
  imageUrl: string;
  date: string;
  categories: string[];
  description: string;
}

interface ProjectGridProps {
  projects: ProjectData[];
  columns?: 2 | 3;
}

const ProjectGrid = ({ projects, columns = 3 }: ProjectGridProps) => {
  return (
    <div className={`grid grid-cols-1 md:grid-cols-${columns === 2 ? '2' : '2'} lg:grid-cols-${columns} gap-x-8 gap-y-16`}>
      {projects.map((project, index) => (
        <ProjectCard
          key={project.id}
          title={project.title}
          subtitle={project.subtitle}
          imageUrl={project.imageUrl}
          slug={project.slug}
          index={index}
        />
      ))}
    </div>
  );
};

export default ProjectGrid; 
import { projectsData } from "../../data/projects";
import ProjectDetail from "./ProjectDetail";

export async function generateStaticParams() {
  return projectsData.map((project) => ({
    slug: project.slug,
  }));
}

export default function ProjectDetailPage({ params }: { params: { slug: string } }) {
  return <ProjectDetail slug={params.slug} />;
} 
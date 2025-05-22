"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import MainLayout from "../components/layout/MainLayout";

export default function AboutPage() {
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

  const experiences = [
    {
      title: "Mirko Romanelli Product Design",
      period: "May 2022 - Present",
      description: "Freelance Product Designer focused on developing complete product experiences. Analysis and research, development of concepts, ideas and projects, creation of 3D models, product rendering and presentation."
    },
    {
      title: "Ganzo Design Studio",
      period: "April 2022 - Present",
      description: "Collaboration with Ganzo Design Studio, located in Florence, Italy. Participation in every phase of the project development, starting from the research and development phase of the concept, passing through the creation of the 3D model, rendering and presentation of the project."
    },
    {
      title: "FFA Studio",
      period: "October 2019 - Present",
      description: "Collaboration with the architect Fabio Forconi, located in Florence, Italy. Development of 3D models and concepts for housing and public structures projects, rendering and project presentations."
    }
  ];

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
            About
          </motion.h1>
        </div>
      </section>

      {/* 个人介绍 */}
      <section className="py-16">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
            >
              <h2 className="heading-lg mb-8">
                Product and industrial designer based in Florence
              </h2>
              <p className="paragraph mb-6">
                I believe in the minimal and essential approach, expressed through the search for a balance between form, function and meaning, through the enhancement of details and the research of materials.
              </p>
              <p className="paragraph mb-6">
                I create products characterized by their own formal and aesthetic identity, expressed through the simplicity of the form and the iconization of the concept, placing the user experience and communication at the center of development.
              </p>
              <p className="paragraph">
                Mirko Romanelli – Product & Industrial Designer
              </p>
            </motion.div>

            <motion.div 
              className="relative h-[600px]"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
            >
              <Image
                src="/images/about.jpg"
                alt="Mirko Romanelli"
                fill
                className="object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* 工作经验 */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <motion.h2 
            className="heading-lg mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            Work Experience
          </motion.h2>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div 
                key={index}
                className="grid grid-cols-1 md:grid-cols-3 gap-8 pb-12 border-b last:border-b-0 last:pb-0"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeIn}
              >
                <div>
                  <h3 className="text-xl font-bold">{exp.title}</h3>
                  <p className="text-sm mt-2">{exp.period}</p>
                </div>
                <div className="md:col-span-2">
                  <p className="paragraph">{exp.description}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.p 
            className="mt-16 text-lg"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            Do not hesitate to contact me to discuss a possible project or discover more about my work.
          </motion.p>
        </div>
      </section>
    </MainLayout>
  );
} 
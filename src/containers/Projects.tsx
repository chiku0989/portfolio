'use client';
import { projectsSection } from '@/lib/content/projects';
import { sortByYear } from '@/lib/utils/helper';

import { Wrapper } from '@/components';
import FeaturedProject from '@/components/ui/FeaturedProject';

import { getSectionAnimation, projectVariants } from '@/styles/animations';

import { motion } from 'framer-motion';

const Projects = () => {
  const { projects, title } = projectsSection;
  const visibleProjects = sortByYear([...projects]);

  return (
    <Wrapper id="projects" animate={false} {...getSectionAnimation}>
      <motion.h2 className="heading-secondary text-center !mb-12">
        {title}
      </motion.h2>
      <div className="relative space-y-14 lg:space-y-20 before:absolute before:inset-y-0 before:left-1/2 before:hidden before:w-px before:-translate-x-1/2 before:bg-border/60 lg:before:block">
        {visibleProjects.map((project, i) => {
          const align = i % 2 === 0 ? 'left' : 'right';

          return (
            <div
              key={project.id}
              className="relative flex w-full justify-center"
            >
              <div
                className={align === 'left' ? 'w-full lg:pr-[5.5rem]' : 'w-full lg:pl-[5.5rem]'}
              >
                <FeaturedProject
                  {...project}
                  align={align}
                  className="w-full"
                  variants={projectVariants}
                  initial="hidden"
                  whileInView="show"
                  custom={i}
                  viewport={{ once: true }}
                />
              </div>
            </div>
          );
        })}
      </div>
    </Wrapper>
  );
};

export default Projects;

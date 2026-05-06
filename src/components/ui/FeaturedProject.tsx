import { FeaturedProjectType } from '@/lib/types';
import { blurImageURL } from '@/lib/utils/config';
import { cn } from '@/lib/utils/helper';

import { Icon } from '@iconify/react';
import { motion, MotionProps } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

interface Props extends FeaturedProjectType, MotionProps {
  align?: 'left' | 'right';
  className?: string;
}

const FeaturedProject = ({
  img,
  name,
  url,
  repo,
  description,
  tasks,
  tags,
  align = 'left',
  className,
  ...rest
}: Props) => {
  const showDeploymentLink = !repo || url !== repo;

  return (
    <motion.div
      className={cn(
        'group w-full overflow-hidden rounded-2xl border border-border/40 bg-bg-secondary shadow-lg shadow-black/10 transition-transform duration-200 hover:-translate-y-1 lg:shadow-none',
        align === 'left' ? 'lg:text-left' : 'lg:text-left',
        className
      )}
      {...rest}
    >
      <div
        className={cn(
          'grid gap-0 lg:grid-cols-2',
        )}
      >
        <div
          className={cn(
            'relative min-h-[240px] sm:min-h-[300px] overflow-hidden',
            align === 'right' && 'lg:order-2'
          )}
        >
          <Image
            src={img}
            alt={name}
            width={720}
            height={480}
            className="h-full w-full object-cover duration-200 group-hover:scale-105 transition-transform"
            placeholder="blur"
            blurDataURL={blurImageURL}
          />
          <Link
            href={`${url}`}
            target="_blank"
            className="absolute inset-0 z-10 block bg-transparent"
          />
        </div>

        <div
          className={cn(
            'flex flex-col justify-center gap-4 p-5 sm:p-6 lg:p-8',
            align === 'right' && 'lg:order-1'
          )}
        >
          <div>
            <div className="font-mono text-accent capitalize text-xs mb-2">
              Project
            </div>
            <h2 className="heading-tertiary !font-semibold !normal-case">
              <a
                href={url}
                className="block duration-200 hover:text-accent"
                target="_blank"
              >
                {name}
              </a>
            </h2>
          </div>

          <div className="space-y-2">
            <p className="text-dark-1 text-sm sm:text-base">{description}</p>
            <div className="text-base text-dark-1/80 hidden lg:block">
              {tasks}
            </div>
          </div>

          <p className="font-mono text-[10px] text-sky-400 lg:text-xs justify-center capitalize flex flex-wrap gap-2 lg:gap-x-5 items-center lg:justify-start">
            {tags.map((tag) => (
              <span key={tag.replaceAll(' ', '')}>{tag}</span>
            ))}
          </p>

          {(repo || showDeploymentLink) && (
            <div className="flex items-center gap-3 lg:justify-start">
              {repo && (
                <a
                  href={repo}
                  className="block duration-200 hover:text-accent"
                  target="_blank"
                >
                  <Icon icon="tabler:brand-github" width={22} height={22} />
                </a>
              )}
              {showDeploymentLink && (
                <a
                  href={url}
                  className="block duration-200 hover:text-accent"
                  target="_blank"
                >
                  <Icon icon="ci:external-link" width={24} height={24} />
                </a>
              )}
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default FeaturedProject;

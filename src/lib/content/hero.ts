import { HeroSectionType } from '@/lib/types/sections'
import { resumeFileName } from '@/lib/utils/config'

export const heroSection: HeroSectionType = {
    subtitle: 'Hi, my name is',
    title: 'Neel Vegda.',
    tagline: 'I am a Student',
    description:
    "I'm Neel, an MCA student at VIT Vellore and an aspiring fullstack developer with a strong focus on the backend. I enjoy building and experimenting with web frameworks like Express and Hono in the JavaScript ecosystem, along with Django and Flask in Python. I am currently deepening my understanding of software design by exploring the transition from monolithic architectures to microservices. I like building reliable APIs, managing server-side logic, and writing cleaner, more efficient code as I strengthen my technical foundation. Whether I am working on the frontend or diving into the backend, I am driven by curiosity to understand how modern web systems work under the hood.",
    cta: {
        title: 'see my resume',
        url: `/${resumeFileName}`,
        hideInDesktop: true,
    },
};
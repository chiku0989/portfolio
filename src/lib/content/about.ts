import { AboutSectionType } from '@/lib/types/sections'

export const aboutSection: AboutSectionType = {
    title: 'about me',
    // Paragraphs need to be changed from containers/About.tsx
    // Because it wasn't possible to insert anchor tags like this
    list: {
    title: 'Here are a few technologies I have experience working with :',
    items: [
        'ExpressJS',
        'BunJS',
        'ReactJS',
        'Redux Toolkit',
        'Typescript',
        'Django',
        'Flask',
        'Springboot'
    ],
    },
    img: '/batman.jpg',
};
import { SkillsSectionType } from '@/lib/types/sections'
import { getId } from '@/lib/utils/helper'

export const skillsSection: SkillsSectionType = {
    title: 'what I do',
    skills: [
        {
            id: getId(),
            title: 'backend and fullstack development',
            // animation lottie file: https://lottiefiles.com/
            lottie: {
                light: '/lotties/fullstack.json',
                dark: '/lotties/fullstack.json',
            },
            points: [
                'Building APIs and server-side logic with HTML, CSS, JS, ExpressJS, and Hono',
                'Exploring BunJS for faster JavaScript runtime workflows',
                'Working with ReactJS, Redux Toolkit, Django, Flask, and Spring Boot',
            ],
            softwareSkills: [
                // iconify icons: https://icon-sets.iconify.design/
                { name: 'html', icon: 'vscode-icons:file-type-html' },
                { name: 'css', icon: 'vscode-icons:file-type-css' },
                { name: 'javascript', icon: 'vscode-icons:file-type-js-official' },
                { name: 'expressjs', icon: 'simple-icons:express' },
                { name: 'bunjs', icon: 'simple-icons:bun' },
                { name: 'reactjs', icon: 'logos:react' },
                { name: 'redux toolkit', icon: 'simple-icons:redux' },
                {
                    name: 'typescript',
                    icon: 'vscode-icons:file-type-typescript-official',
                },
                { name: 'django', icon: 'simple-icons:django' },
                { name: 'flask', icon: 'simple-icons:flask' },
                { name: 'spring boot', icon: 'simple-icons:springboot' },
            ],
        },
    ],
};

import { NavbarSectionType } from '@/lib/types/sections';
import { resumeFileName } from '@/lib/utils/config';

export const navbarSection: NavbarSectionType = {
    navLinks: [
        { name: 'about', url: '/#about'},
        { name: 'skills', url: '/#skills'},
        { name: 'projects', url: '/#projects' },
        { name: 'contact', url: '/#contact' },
    ],
    cta: {
        title: 'resume',
        url: '/resume.pdf', // Directly reference the file in the public folder
    },
    
}
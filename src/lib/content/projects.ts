import { ProjectsSectionType } from '@/lib/types/sections'
import { getId } from '@/lib/utils/helper';


export const projectsSection: ProjectsSectionType = {
    title: 'my projects',
    projects: [
    {
        id: getId(),
        name: 'Civil Vehicle Aquisition System',
        description: 'A web based platform built on React and Express to keep tracking of civil vehicles aquired by the army during wartime (Backend microservices are deployed on render, instance closes every 15mins, which might result in constant errors due to cold start)',
        url: 'https://cvas-deployable-client.vercel.app/',
        repo: 'https://github.com/chiku0989/CVAS-microservices',
        img: '/cvas.jpg',
        year: 2024,
        tags: ['React', 'Express', 'Mongo', 'Node', 'Microservice'],
    },
    {
        id: getId(),
        name: 'Decentralized Voting Platform',
        description: 'voting platform is a decentralized application built on the Ethereum blockchain, utilizing Solidity smart contracts deployed on the Sepolia testnet. The system features a React frontend with secure, role-based routing for Admin, Candidate, and Voter personas, integrated via Ethers.js and Hardhat, IPFS is used for secure file storage. (you need metamask extension for to use this application)',
        url: 'https://wonderful-panda-5ed488.netlify.app/',
        repo: 'https://github.com/chiku0989/dVOTE-voting-system',
        img: '/dvote.png',
        year: 2024,
        tags: ['ReactJS', 'Web3', 'Hardhat', 'Solidity', 'Ethereum'],
    },    
    {
        id: getId(),
        name: 'ALPR for Defence',
        description: 'Automatic License Plate Recognition System trained to detect and store special License Plates issued by Ministry of Defence',
        url: 'https://github.com/chiku0989/flask_backend',
        repo: 'https://github.com/chiku0989/flask_backend',
        img :'/alpr.jpg',
        year: 2024,
        tags: ['OpenCV','YOLOv11','Object Detection','PaddleOCR','Flask', 'Jinja'],
    },

    {
        id: getId(),
        name: 'Laundry Management System',
        description: 'Backend API built using Springboot and uses MVC Architecture. Inspired from VIT Hostel Laundry Service, allowing efficent registration of laundry for students by giving whatsapp updates',
        url: 'https://github.com/chiku0989/LaundryManagement',
        repo: 'https://github.com/chiku0989/LaundryManagement',
        img: '/laundry.jpg',
        year: 2024,
        tags: ['springboot','java', 'Api'],
    },

        {
        id: getId(),
        name: 'Waffle Delight : Cafe Invoice System',
        description: 'An invoice generation system built using Django',
        url: 'https://github.com/chiku0989/Invoice-generation-system-using-django',
        repo: 'https://github.com/chiku0989/Invoice-generation-system-using-django',
        img: '/cafe.png',
        year: 2024,
        tags: ['Python','Django', 'HTML', 'CSS', 'Javascript'],
    },

    ],
};
import { EXTERNAL_LINK } from './external-link';

const TITLE = 'pongpanott';
const START_WORKING_YEAR = 2021;
const currentYear = new Date().getFullYear();
const yearsOfExperience = currentYear - START_WORKING_YEAR + 1;

export const SITE_CONTENT = {
    title: TITLE,
    hero: {
        title: 'Build things people love,\nfor web & app.',
        subTitle: `I'm Pongpanot, a software engineer. Interested in learning more about me? Let’s follow the sign.`,
    },
    me: {
        title: 'me? Always coding.',
        description: `Hello again! I’m Pongpanot, a software engineer specializing in frontend and mobile development, based in Chiang Mai. Focused on creating digital experiences that seamlessly blend visual appeal and high functionality, from the initial concept all the way through to launch.`,
    },
    journey: {
        title: 'Previous stops on my journey.',
        journey: [
            {
                position: 'Senior Frontend Engineer',
                where: 'Bluebik Group',
                link: EXTERNAL_LINK.blueBik,
                date: 'October 2023 - Present',
                description: [
                    `Developing mobile applications for <a href="${EXTERNAL_LINK.blueBik}" target="_blank" rel="noreferrer noopener">Bluebik</a> clients using React Native.`,
                    `On secondment to <a href="${EXTERNAL_LINK.orbitDigital}" target="_blank" rel="noreferrer noopener">Orbit Digital Co.,Ltd</a> to contribute to the <a href="${EXTERNAL_LINK.blueplus}" target="_blank" rel="noreferrer noopener">blueplus+</a> application project.`,
                    `A core maintainer for the <a href="${EXTERNAL_LINK.blueplusMerchant}" target="_blank" rel="noreferrer noopener">blueplus+ merchant</a> application.`,
                    'Working with React Native alongside native modules in Kotlin, Java, and Swift for advanced functionalities and platform-specific integrations.',
                    'Actively improving team code quality and workflow by reviewing code, providing clear guidelines, and seeking better ways to enhance our development practices.',
                ],
                startDate: '2023/10/01',
                endDate: null,
            },
            {
                position: null,
                where: null,
                link: null,
                date: 'July 2023 - September 2023',
                description: null,
                startDate: '2023/07/01',
                endDate: '2023/09/01',
            },
            {
                position: 'Frontend Developer',
                where: '20scoops CNX',
                link: EXTERNAL_LINK['20Scoops'],
                date: 'January 2022 - June 2023',
                description: [
                    'Developed modern, performant, and maintainable websites for diverse clients in Germany.',
                    `Supported the <a href="${EXTERNAL_LINK.getnuvo}" target="_blank" rel="noreferrer noopener">nuvo</a> team in building a user platform website.`,
                    `Collaborated with an international team to develop a grocery delivery platform for Bringoo.`,
                    'Worked with various frameworks and content management systems including React, Next.js, Tailwind CSS, and Netlify.',
                    'Communicated daily with engineers, designers, and clients across different nationalities.',
                ],
                startDate: '2022/01/01',
                endDate: '2023/06/01',
            },
            {
                position: 'Frontend Developer',
                where: 'Tecmove',
                link: EXTERNAL_LINK.tecMove,
                date: 'June - December 2021',
                description: [
                    `Built a web-based Point of Sale (POS) system for <a href="${EXTERNAL_LINK.lifeSpace}" target="_blank" rel="noreferrer noopener">Life Space</a>, a co-working space in Chiang Mai, using React and Material UI.`,
                    'Developed an internal tool to integrate door access control and thermal printer operations for the co-working space.',
                    'Collaborated with developers, designers, and testers to deliver clean, reliable user experiences.',
                ],
                startDate: '2021/06/01',
                endDate: '2021/12/31',
            },
            {
                position: 'Student',
                where: 'Chiang Mai University',
                link: EXTERNAL_LINK.cmu,
                date: '2018 - 2021',
                description: [
                    'Bachelor of Science in Software Engineering',
                    'College of Arts, Media and Technology',
                ],
                startDate: '2021/01/01',
                endDate: '2021/05/01',
            },
        ],
    },
    personal: {
        title: 'Mix in a pinch of street smarts and... boom!',
        personal: [
            {
                title: 'Training.',
                dataList: [
                    'B.Sc, Software Engineering, Chiang Mai University',
                    'Understanding of software development process',
                    'Basic knowledge in UX/UI design',
                    'Human-computer interaction',
                    'Clean and reusable code',
                    `${yearsOfExperience}+ years of frontend development experience`,
                ],
            },
            {
                title: 'Skill.',
                dataList: [
                    'JavaScript / TypeScript',
                    'HTML & CSS',
                    'React / React Native / Next.js',
                    'Node.js',
                    'Git / Docker',
                    'Tailwind CSS / Material UI & more',
                ],
            },
            {
                title: 'Personality.',
                dataList: [
                    'Collaborative and open-minded',
                    'Self-motivated',
                    'Passionate person',
                    'Strong listener',
                    'Learns from mistakes',
                    'Works well independently and in teams',
                ],
            },
        ],
    },
    footer: `Designed & Developed by ${TITLE} ${currentYear}`,
};

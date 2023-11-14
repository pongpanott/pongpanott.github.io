import { JourneyModel } from 'common/types/journey';
import { defaultValue } from '../default';

export const meStaticText = {
    meTitle: 'me? Always code.',
    meMessage: `Hello again! My name is Pongpanot and I'm a frontend develop based in Chiang Mai. Focused on creating digital experiences that seamlessly blend visual appealing and highly functional, from the initial concept all the way through to launch.`,
    journeyTitle: 'Previous stops on my journey.',
    journey: [
        {
            position: 'Frontend Engineer',
            where: '@Bluebik Group',
            link: defaultValue.blueBik,
            date: 'October 2023 - present',
            description: [
                `Implement web-based application and mobile application for a customer of <a href="${defaultValue.blueBik}" target="_blank" rel="noreferrer noopener">Bluebik</a>.`,
                `Part of <a href="${defaultValue.xplore}" target="_blank" rel="noreferrer noopener">xplORe</a> application development team.`,
                'Work with React.js and React Native.',
            ],
            startDate: '2023/10/01',
            endDate: '2023/11/01',
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
            where: '@20scoope CNX',
            link: defaultValue.tewntyScoops,
            date: 'January 2022 - June 2023',
            description: [
                'Develop a modern website with performant and maintainable code for diverse clients based in Germany.',
                `Support a <a href="${defaultValue.getnuvo}" target="_blank" rel="noreferrer noopener">nuvo</a> team to develop a user platform website.`,
                `Part of an international team to develop a grocery deliveries website for <a href="${defaultValue.bringoo}" target="_blank" rel="noreferrer noopener">Bringoo</a>.`,
                'Work with a variety of different frameworks, and content management systems such as React, Next.js, Tailwind CSS, and Netlify.',
                'Communicate with multi-nationality engineers, designers, and clients on a daily work.',
            ],
            startDate: '2022/01/01',
            endDate: '2023/06/01',
        },
        {
            position: 'Frontend Developer',
            where: '@Tecmove',
            link: defaultValue.tecMove,
            date: 'June - December 2021',
            description: [
                `Developed web-based Point of Sale (POS) application for <a href="${defaultValue.lifeSpace}" target="_blank" rel="noreferrer noopener">Life Space</a>, a co-working space based in Chiang Mai using React and Material UI.`,
                'Developed an internal project to connect with co-working space door access and thermal printer control.',
                'Working with a team of developers, designers, and testers to deliver a quality product.',
            ],
            startDate: '2021/06/01',
            endDate: '2021/12/31',
        },
        {
            position: 'Studying',
            where: 'CMU',
            link: '',
            date: '2017 - 2022',
            description: [],
            startDate: '2021/01/01',
            endDate: '2021/05/01',
        },
    ] as JourneyModel[],
    personalTitle: 'Mix in a pinch of street smarts and... voila!',
    personal: [
        {
            title: 'Training.',
            dataList: [
                'B.Sc, Software Engineering, Chiang Mai University',
                'Understanding of software development process',
                'Basic knowledge in UX/UI design',
                'Human computer interaction',
                'Clean and reusable code',
                '2+ years of frontend development experience',
            ],
        },
        {
            title: 'Skill.',
            dataList: [
                'JavaScript (es6+)',
                'TypeScript',
                'HTML & CSS',
                'Node.js',
                'React / Next.Js',
                'Git',
            ],
        },
        {
            title: 'Personality.',
            dataList: [
                'Conciliatory',
                'Self-contained',
                'Passionate person',
                'Strong listener',
                'Learn from mistakes',
                ' Work great alone, but better on a team',
            ],
        },
    ],
};

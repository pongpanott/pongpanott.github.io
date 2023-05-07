import { JourneyModel } from 'common/types/journey';
import { defaultValue } from '../default';
import { getCurrentDateForJourney } from 'common/utils/date-calculator';

export const meStaticText = {
    meTitle: 'me? Always code.',
    meMessage: `Hello again! My name is Pongpanot and I'm a frontend develop based in Chiang Mai. Focused on creating digital experiences that seamlessly blend visual appealing and highly functional, from the initial concept all the way through to launch.`,
    journeyTitle: 'Previous stops on my journey.',
    journey: [
        {
            position: 'Frontend Developer',
            where: '@20scoope CNX',
            link: 'https://20scoopscnx.com',
            date: 'January 2022 - present',
            description: [
                'Develop a modern website with performant and maintainable code for diverse clients based in Germany.',
                `Support a <a href="${defaultValue.getnuvo}" target="_blank" rel="noreferrer noopener">nuvo</a> team to develop a user platform website.`,
                `Part of an international team to develop a grocery deliveries website for <a href="${defaultValue.bringoo}" target="_blank" rel="noreferrer noopener">Bringoo</a>.`,
                'Work with a variety of different frameworks, and content management systems such as React, Next.js, Tailwind CSS, and Netlify.',
                'Communicate with multi-nationality engineers, designers, and clients on a daily work.',
            ],
            startDate: '2022/01/01',
            endDate: getCurrentDateForJourney(),
        },
        {
            position: 'Frontend Developer',
            where: '@Tecmove',
            link: 'https://tecmove.net',
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

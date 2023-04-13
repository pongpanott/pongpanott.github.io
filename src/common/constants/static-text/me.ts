import { JourneyModel } from 'common/types/journey';

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
                'Develop modern website with performant and maintainable code for diverse of client based in Germany',
                'Support a nuvo team to develop a user platform website',
                'Part of an international team to develop a grocery deliveries website for Bringoo',
                'Work with a variety of different frameworks, and content management systems such as React, Next.js, Tailwind CSS, and Netlify',
                'Communicate with multi nationality engineers, designers, and clients on a daily work',
            ],
        },
        {
            position: 'Frontend Developer',
            where: '@Tecmove',
            link: 'https://tecmove.net',
            date: 'June - December 2021',
            description: [
                'Developed web-based Point of Sale (POS) application for Life Space, co-working space based in Chiang Mai using React and Material UI',
                'Developed an internal project to connect with co-working space door access and thermal printer control',
                'Working with a team of developers, designer, and tester to delivery a quality product',
            ],
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
            dataList: ['JavaScript (es6+)', 'TypeScript', 'HTML & CSS', 'Node.js', 'React', 'Git'],
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
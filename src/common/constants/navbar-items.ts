import { defaultValue } from './default';

export const navbarItems = [
    { label: 'work.', path: '' },
    { label: 'me.', path: '' },
    { label: 'get in touch.', path: (location.href = `mailto:${defaultValue.email}`) },
];

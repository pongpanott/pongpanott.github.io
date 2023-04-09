import * as AppIcon from './icons';

export enum AppIconEnum {
    HAMBURGER = 'hamburger',
    ARROW_DOWN = 'arrow-down',
    INSTAGRAM = 'instafram',
    LINKEDIN = 'linkedin',
}

export const appIconMapping: Record<string, React.ReactNode> = {
    [AppIconEnum.HAMBURGER]: <AppIcon.Hamburger />,
    [AppIconEnum.ARROW_DOWN]: <AppIcon.ArrowDown />,
    [AppIconEnum.INSTAGRAM]: <AppIcon.Instagram />,
    [AppIconEnum.LINKEDIN]: <AppIcon.LinkedIn />,
};

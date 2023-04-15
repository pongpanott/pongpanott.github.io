import * as AppIcon from './icons';

export enum AppIconEnum {
    HAMBURGER = 'hamburger',
    ARROW_DOWN = 'arrow-down',
    GITHUB = 'github',
    LINKEDIN = 'linkedin',
    CLOSE = 'close',
    PORTRAIT = 'portrait',
    ARROW_SINGLE_RIGHT = 'arrow-single-right',
}

export const appIconMapping: Record<string, React.ReactNode> = {
    [AppIconEnum.HAMBURGER]: <AppIcon.Hamburger />,
    [AppIconEnum.ARROW_DOWN]: <AppIcon.ArrowDown />,
    [AppIconEnum.GITHUB]: <AppIcon.Github />,
    [AppIconEnum.LINKEDIN]: <AppIcon.LinkedIn />,
    [AppIconEnum.CLOSE]: <AppIcon.Close />,
    [AppIconEnum.PORTRAIT]: <AppIcon.Portrait />,
    [AppIconEnum.ARROW_SINGLE_RIGHT]: <AppIcon.ArrowSingleRight />,
};

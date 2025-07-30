/* eslint-disable react/display-name */
import { BaseComponentProps } from '../../../types/base-component';
import { AppLogo, WorkCardAppLogoProps } from './work-card.components';
import {
    Body,
    Title,
    WorkCardBodyProps,
    WorkCardTitleProps,
    Description,
    WorkCardDescriptionProps,
} from './work-card.components';
import MobileWorkCard from './container/mobile-work-card';
import TabletWorkCard from './container/tablet-work-card';
import DesktopWorkCard from './container/desktop-work-card';

export type WorkCardProps = BaseComponentProps & {
    id: string;
    title: string;
    description: string;
    themeColor: string;
    gradientColors: string[];
    appLogo: {
        src: string;
        size: {
            s: {
                width: number;
                height: number;
            };
            m: {
                width: number;
                height: number;
            };
            l: {
                width: number;
                height: number;
            };
        };
    };
    appImage: string;
    siteUrl: string | null;
    isHovering: boolean;
    setIsHovering: (isHover: boolean) => void;
};

const WorkCard = (props: WorkCardProps) => {
    return (
        <>
            <MobileWorkCard {...props} />
            <TabletWorkCard {...props} />
            <DesktopWorkCard {...props} />
        </>
    );
};

WorkCard.Title = (props: WorkCardTitleProps) => <Title {...props} />;

WorkCard.Body = (props: WorkCardBodyProps) => <Body {...props} />;

WorkCard.Description = (props: WorkCardDescriptionProps) => <Description {...props} />;

WorkCard.AppLogo = (props: WorkCardAppLogoProps) => <AppLogo {...props} />;

export default WorkCard;

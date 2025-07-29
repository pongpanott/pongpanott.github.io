/* eslint-disable react/display-name */
import { BaseComponentProps } from '../../../types/base-component';
import { AppLogo, WorkCardAppLogo } from './components';
import {
    Body,
    Title,
    WorkCardBodyProps,
    WorkCardTitleProps,
    Description,
    WorkCardDescriptionProps,
} from './components';
import MobileWorkCard from './container/mobile-work-card';
import TabletWorkCard from './container/tablet-work-card';
import DesktopWorkCard from './container/desktop-work-card';

export type BaseWorkCardProps = BaseComponentProps & {
    title: string;
    description: string;
    themeColor: string;
    icon: React.ReactNode;
    appImage: React.ReactNode;
    mobileBackground?: string;
    tabletBackground?: string;
    desktopBackground?: string;
    levitateAppImage?: React.ReactNode;
    siteUrl: string | null;
    levitateImageClassName?: string;
};

const BaseWorkCard = (props: BaseWorkCardProps) => {
    return (
        <>
            <MobileWorkCard {...props} />
            <TabletWorkCard {...props} />
            <DesktopWorkCard {...props} />
        </>
    );
};

BaseWorkCard.Title = (props: WorkCardTitleProps) => <Title {...props} />;

BaseWorkCard.Body = (props: WorkCardBodyProps) => <Body {...props} />;

BaseWorkCard.Description = (props: WorkCardDescriptionProps) => <Description {...props} />;

BaseWorkCard.AppLogo = (props: WorkCardAppLogo) => <AppLogo {...props} />;

export default BaseWorkCard;

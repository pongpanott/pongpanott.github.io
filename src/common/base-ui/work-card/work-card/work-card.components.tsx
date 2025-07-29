import { css, cx } from '@emotion/css';
import { BaseComponentProps } from '../../../types/base-component';
import UnoptimizedImage from 'common/base-ui/unoptimized-image';

export type WorkCardTitleProps = BaseComponentProps & {
    title: string;
    themeColor: string;
};

export type WorkCardBodyProps = BaseComponentProps & { children: React.ReactNode };

export type WorkCardDescriptionProps = BaseComponentProps & {
    description: string;
};

export type WorkCardAppLogoProps = BaseComponentProps & {
    src: string;
    alt: string;
    width: number;
    height: number;
};

export const Title = ({ className, title, themeColor }: WorkCardTitleProps) => (
    <p
        className={cx(
            className,
            'font-poppins whitespace-pre-line md:text-[20px] md:leading-[30px] mb-2 text-[18px] leading-[27px] tracking-[-0.01em]',
            css`
                color: ${themeColor};
            `
        )}
    >
        {title}
    </p>
);

export const Description = ({ className, description }: WorkCardDescriptionProps) => (
    <p className={className}>{description}</p>
);

export const Body = ({ className, children }: WorkCardBodyProps) => (
    <div className={className}>{children}</div>
);

export const AppLogo = (props: WorkCardAppLogoProps) => <UnoptimizedImage {...props} />;

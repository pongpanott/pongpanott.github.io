import { JourneyModel } from 'common/types/journey';
import { BaseComponentProps } from 'common/types/base-component';
import Link from 'next/link';
import { css, cx } from '@emotion/css';
import { useMediaSize } from 'common/hooks/media-size';

type JourneyProps = BaseComponentProps & {
    journey: JourneyModel;
};

const Journey = ({ className, journey }: JourneyProps) => {
    const { isMobile } = useMediaSize();

    return journey.position ? (
        <div className={className}>
            <div className="mb-4">
                <p className="mb-1">
                    {journey.position}
                    <Link
                        href={journey?.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary hover:underline"
                    >
                        {journey.where}
                    </Link>
                </p>
                <p className="text-2xs md:text-xs">{journey.date}</p>
            </div>

            <ul className="flex flex-col gap-y-1">
                {journey.description ? (
                    <>
                        {journey.description.map((item) => (
                            <li key={item} className="flex">
                                <span className="custom-bullet-point" />
                                <span
                                    dangerouslySetInnerHTML={{ __html: item }}
                                    className={cx(
                                        'text-xs md:text-sm',
                                        css`
                                            a {
                                                text-decoration: underline;
                                            }
                                        `
                                    )}
                                />
                            </li>
                        ))}
                    </>
                ) : null}
            </ul>
        </div>
    ) : (
        <>
            {!isMobile ? (
                <div className={className}>
                    <div className="flex flex-col flex-1 items-center justify-center gap-y-2">
                        <p className="text-2xs md:text-xs">{journey.date}</p>
                        On Vacation
                    </div>
                </div>
            ) : null}
        </>
    );
};

export default Journey;

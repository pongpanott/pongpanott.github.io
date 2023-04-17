import { meStaticText } from 'common/constants/static-text/me';
import React from 'react';
import Journey from './journey';
import Timeline from 'common/base-ui/timeline';
import { css, cx } from '@emotion/css';

const TabletJourney = () => {
    return (
        <div className="hidden w-[648px] mx-auto md:flex justify-end gap-x-6 xl:gap-x-8">
            {/* <Timeline /> */}
            {/* TODO: implementjourney timeline */}
            {/* <div className="bg-blue-200 w-[116px] h-[306px] overflow-y-auto">
                <div
                    className={cx(
                        'flex gap-[50px]',
                        css`
                            scroll-snap-type: x mandatory;
                            scroll-behavior: smooth;
                        `
                    )}
                >
                    {Array.from({ length: 100 }).map((_, index) => (
                        <div
                            key={index}
                            className={cx(
                                'w-[100px] flex-shrink-0 h-[100px] bg-red-300',
                                css`
                                    scroll-snap-align: start;
                                `
                            )}
                        />
                    ))}
                </div>
            </div> */}
            <Journey journey={meStaticText.journey[0]} className="w-[435px]" />
            <Journey journey={meStaticText.journey[1]} className="w-[435px]" />
        </div>
    );
};

export default TabletJourney;

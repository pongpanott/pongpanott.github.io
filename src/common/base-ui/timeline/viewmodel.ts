import { meStaticText } from 'common/constants/static-text/me';
import { useRef } from 'react';

export const useViewModel = ({
    setActiveJourney,
}: {
    setActiveJourney: (value: number) => void;
}) => {
    const timelineRef = useRef<HTMLDivElement | null>(null);

    const scrollTo = (position: number) => {
        timelineRef.current?.scrollTo({ top: position, behavior: 'smooth' });
    };

    const selectActiveJourney = (index: number) => {
        const secondLastIndex = meStaticText.journey.length - 2;
        setActiveJourney(index);

        if (index === 0) {
            scrollTo(0);
        } else {
            if (index === secondLastIndex) {
                const totalNodeHeight = meStaticText.journey
                    .map(
                        (_, index) =>
                            document.getElementById(`timeline-node-${index}`)?.offsetTop || 0
                    )
                    .reduce((a, b) => a + b, 0);

                scrollTo(totalNodeHeight);
            } else {
                const nodePosition = document.getElementById(`timeline-node-${index}`)
                    ?.offsetTop as number;
                scrollTo(nodePosition);
            }
        }
    };

    return { timelineRef, selectActiveJourney };
};

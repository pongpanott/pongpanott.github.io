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
        setActiveJourney(index);

        if (index === 0) {
            scrollTo(0);
        } else {
            const nodePosition = document.getElementById(`timeline-node-${index}`)
                ?.offsetTop as number;
            scrollTo(nodePosition);
        }
    };

    return { timelineRef, selectActiveJourney };
};

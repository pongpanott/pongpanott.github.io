'use client';
import { MutableRefObject } from 'react';
import MentalDeeDeeCard from 'common/base-ui/work-card/mental-dee-dee';

const WorkContainer = ({ workRef }: { workRef: MutableRefObject<HTMLDivElement | null> }) => {
    return (
        <div ref={workRef} className="relative">
            <div className="xl:grid-cols-2 xl:w-[668px] xl:grid xl:mx-auto xl:gap-8">
                <MentalDeeDeeCard />
            </div>
        </div>
    );
};

export default WorkContainer;

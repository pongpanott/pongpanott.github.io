import { MutableRefObject } from 'react';

const WorkContainer = ({ workRef }: { workRef: MutableRefObject<HTMLDivElement | null> }) => {
    return <div ref={workRef}>WorkContainer</div>;
};

export default WorkContainer;

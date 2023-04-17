import { cx } from '@emotion/css';

type TimelineNodeProps = {
    id: string;
    isActive: boolean;
    onClick: () => void;
};
const TimelineNode = ({ id, isActive, onClick }: TimelineNodeProps) => {
    return (
        <div
            id={id}
            onClick={onClick}
            className={cx(
                isActive ? 'bg-primary' : 'bg-timeline-node',
                'cursor-pointer w-3 h-3 rounded-lg mx-auto'
            )}
        />
    );
};

export default TimelineNode;

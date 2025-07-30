import { cx } from '@emotion/css';

const NodeTail = ({ className }: { className?: string }) => (
    <div className={cx(className, 'h-[50px] bg-black/10 w-[1px] mx-auto')} />
);

export default NodeTail;

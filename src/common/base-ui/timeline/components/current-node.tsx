import NodeTail from './node-tail';

const CurrentNode = ({ label }: { label: string }) => {
    return (
        <div className="w-fit mx-auto">
            <p className="text-2xs">{label}</p>
            <div className="bg-primary rounded-[100%] mx-auto w-[9px] aspect-square" />
            <NodeTail />
        </div>
    );
};

export default CurrentNode;

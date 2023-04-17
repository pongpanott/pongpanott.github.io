import NodeTail from './node-tail';

const DateNode = ({ label, year }: { label: string; year?: string }) => {
    return (
        <>
            <div className="flex gap-x-1 justify-center items-center mx-auto">
                <p className="text-[6px] leading-[10px] text-[#999896] w-[35px]">{label}</p>
                <div className="relative">
                    <NodeTail className="!h-[10px]" />
                    <div className="w-[3px] top-[4px] left-[-1px] aspect-square absolute rounded-full bg-[#D6D5D3]" />
                </div>
                <p className="text-[4px] leading-[7px] text-[#999896] w-[35px]">{year}</p>
            </div>

            <NodeTail className="!h-[47px]" />
        </>
    );
};

export default DateNode;

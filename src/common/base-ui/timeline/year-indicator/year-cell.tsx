const YearCell = ({ year }: { year: number }) => {
    return (
        <div className="w-full flex flex-col h-[144px]">
            <span className="text-2xs leading-3 mt-auto text-timeline-year">{year}</span>
        </div>
    );
};

export default YearCell;

import YearCell from './year-cell';

const YearIndicator = () => {
    const workYearRange = () => {
        let startYear = 2021;
        const currentYear = new Date().getFullYear();
        const yearRange = [];

        while (startYear <= currentYear) {
            yearRange.push(startYear++);
        }
        return yearRange.reverse();
    };

    return (
        <div className="absolute w-full h-full left-0 top-0">
            {workYearRange().map((item) => (
                <YearCell key={item} year={item} />
            ))}
        </div>
    );
};

export default YearIndicator;

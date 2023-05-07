export const workMonthCalculate = (startDate: string, endDate: string) => {
    const monthDiff = new Date(endDate).getMonth() - new Date(startDate).getMonth() + 1;
    const yearDiff = new Date(endDate).getFullYear() - new Date(startDate).getFullYear();

    return monthDiff + yearDiff * 12;
};

export const getCurrentYear = () => new Date().getFullYear();

export const getCurrentDateForJourney = () => {
    const date = new Date();
    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const day = date.getDate().toString().padStart(2, '0');

    const formattedDate = `${year}/${month}/${day}`;

    return formattedDate;
};

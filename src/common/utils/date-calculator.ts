export const workMonthCalculate = (startDate: string, endDate: string) => {
    const monthDiff = new Date(endDate).getMonth() - new Date(startDate).getMonth() + 1;
    const yearDiff = new Date(endDate).getFullYear() - new Date(startDate).getFullYear();

    return monthDiff + yearDiff * 12;
};

export const getCurrentYear = () => new Date().getFullYear();

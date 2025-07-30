class DateCalculator {
    private static parseDate(dateStr?: string): Date {
        return dateStr ? new Date(dateStr) : new Date();
    }

    private static formatDate(date: Date): string {
        const year = date.getFullYear();
        const month = (date.getMonth() + 1).toString().padStart(2, '0');
        const day = date.getDate().toString().padStart(2, '0');
        return `${year}/${month}/${day}`;
    }

    static workMonthCalculate(startDate: string, endDate: string): number {
        const start = this.parseDate(startDate);
        const end = this.parseDate(endDate);
        const yearDiff = end.getFullYear() - start.getFullYear();
        const monthDiff = end.getMonth() - start.getMonth();
        return yearDiff * 12 + monthDiff + 1;
    }

    static getCurrentYear(): number {
        return this.parseDate().getFullYear();
    }

    static getCurrentDateForJourney(): string {
        return this.formatDate(this.parseDate());
    }

    static getMonthsLeftInYear(): number {
        const now = this.parseDate();
        const currentMonth = now.getMonth() + 1;
        return 12 - currentMonth + 1;
    }
}

export default DateCalculator;

import { DateCalculator } from '../src/common/utils';

describe('DateCalculator', () => {
    describe('workMonthCalculate', () => {
        it('calculates months between two dates in the same year', () => {
            expect(DateCalculator.workMonthCalculate('2024-01-01', '2024-03-01')).toBe(3);
        });

        it('calculates months between two dates across years', () => {
            expect(DateCalculator.workMonthCalculate('2023-11-01', '2024-02-01')).toBe(4);
        });

        it('returns 1 when start and end dates are in the same month', () => {
            expect(DateCalculator.workMonthCalculate('2024-06-01', '2024-06-30')).toBe(1);
        });
    });

    describe('getCurrentYear', () => {
        it('returns the current year', () => {
            const year = new Date().getFullYear();
            expect(DateCalculator.getCurrentYear()).toBe(year);
        });
    });

    describe('getCurrentDateForJourney', () => {
        it('returns the current date in YYYY/MM/DD format', () => {
            const now = new Date();
            const expected = `${now.getFullYear()}/${(now.getMonth() + 1)
                .toString()
                .padStart(2, '0')}/${now.getDate().toString().padStart(2, '0')}`;
            expect(DateCalculator.getCurrentDateForJourney()).toBe(expected);
        });
    });

    describe('getMonthsLeftInYear', () => {
        afterEach(() => {
            jest.restoreAllMocks();
        });

        it('calculates months left in the current year', () => {
            const now = new Date();
            const currentMonth = now.getMonth() + 1;
            const expectedMonthsLeft = 12 - currentMonth + 1;
            expect(DateCalculator.getMonthsLeftInYear()).toBe(expectedMonthsLeft);
        });

        it('returns 1 if the current month is December', () => {
            const decemberDate = new Date('2023-12-01');
            jest.spyOn(global, 'Date').mockImplementation(() => decemberDate as any);
            expect(DateCalculator.getMonthsLeftInYear()).toBe(1);
        });

        it('returns 6 if the current month is July', () => {
            const julyDate = new Date('2023-07-01');
            jest.spyOn(global, 'Date').mockImplementation(() => julyDate as any);
            expect(DateCalculator.getMonthsLeftInYear()).toBe(6);
        });

        it('returns 12 if the current month is January', () => {
            const janDate = new Date('2023-01-01');
            jest.spyOn(global, 'Date').mockImplementation(() => janDate as any);
            expect(DateCalculator.getMonthsLeftInYear()).toBe(12);
        });
    });
});

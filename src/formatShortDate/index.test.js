import { formatShortDate } from "./index";

describe('formatShortDate', () => {
    it('should return a date formatted properly, example: 01/01/2021', () => {
        const sampleDate = new Date('2021-07-15T20:38:18.216551Z');
        const otherSampleDate = '2021-07-15';
        const expected = '07/15/2021';
        expect(formatShortDate(sampleDate)).toEqual(expected);
        expect(formatShortDate(otherSampleDate)).toEqual(expected);
    });
});
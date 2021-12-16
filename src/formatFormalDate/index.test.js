import { formatFormalDate } from "./index";

describe('formatFormalDate', () => {
    it('should return a date formatted properly, example: January 1, 2021', () => {
        const sampleDate = new Date('2021-07-15T20:38:18.216551Z');
        const otherSampleDate = '2021-07-15';
        const expected = 'July 15, 2021';
        expect(formatFormalDate(sampleDate)).toEqual(expected);
        expect(formatFormalDate(otherSampleDate)).toEqual(expected);
    });
});
import { parseISO } from "date-fns";
import { addOneDay } from "./index";

describe('addOneDay', () => {
    it('should return a date one day after the input', () => {
        const sampleDate = new Date('2021-07-15T20:38:18.216551Z');
        const otherSampleDate = '2021-07-15';
        expect(addOneDay(sampleDate)).toEqual(
            new Date('2021-07-16T20:38:18.216551Z')
        );
        expect(addOneDay(otherSampleDate)).toEqual(parseISO('2021-07-16'));
    });
});
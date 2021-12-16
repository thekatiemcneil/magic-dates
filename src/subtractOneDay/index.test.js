import { parseISO } from "date-fns";
import { subtractOneDay } from "./index";

describe('subtractOneDay', () => {
    it('should return a date one day earlier than the input', () => {
        const sampleDate = new Date('2021-07-15T20:38:18.216551Z');
        const otherSampleDate = '2021-07-15';
        expect(subtractOneDay(sampleDate)).toEqual(
            new Date('2021-07-14T20:38:18.216551Z')
        );
        expect(subtractOneDay(otherSampleDate)).toEqual(parseISO('2021-07-14'));
    });
});
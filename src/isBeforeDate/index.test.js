import { parseISO } from "date-fns";
import { isBeforeDate } from "./index";

describe('isBeforeDate', () => {
    it('should return a boolean of if given first date is before given second date', () => {
        const today = new Date();
        const pastDate = new Date('2021-07-15T20:38:18.216551Z');

        expect(isBeforeDate(today, pastDate)).toEqual(false);
        expect(isBeforeDate(pastDate, today)).toEqual(true);
        expect(isBeforeDate('2021-07-08', parseISO('2021-07-09'))).toEqual(true);
        expect(isBeforeDate('2021-07-08', '2021-07-06')).toEqual(false);
    });
});
import { parseISO } from "date-fns";
import { isSameDate } from "./index";

describe('isSameDate', () => {
    it('should return a boolean of if two given dates are the same day', () => {
        const today = new Date();
        const tomorrow = new Date(today.getDate() + 1);
        expect(isSameDate(today, tomorrow)).toEqual(false);
        expect(isSameDate(today, today)).toEqual(true);
        expect(isSameDate('2021-07-08', '2021/07/08')).toEqual(true);
        expect(isSameDate('2021-07-08', parseISO('2021-07-08'))).toEqual(true);
    });
});
import { addDays, subDays } from "date-fns";
import { isPastDate } from "./index";

describe('isPastDate', () => {
    it('should return a boolean to indicate if provided day is a past date', () => {
        const pastDay = subDays(new Date(), 10);
        const futureDay = addDays(new Date(), 10);

        expect(isPastDate(pastDay)).toEqual(true);
        expect(isPastDate(futureDay)).toEqual(false);
    })
});
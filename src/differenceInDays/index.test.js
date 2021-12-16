import {addDays, parseISO, subDays} from "date-fns";
import { differenceInDays } from "./index";

describe('differenceInDays', () => {
    it('should return the number of calendar days between two dates', () => {
        const today = new Date();
        const daysToAdd = 4;

        const futureDay = addDays(new Date(today), daysToAdd);
        expect(differenceInDays(today, futureDay)).toEqual(daysToAdd);

        const pastDay = subDays(new Date(today), daysToAdd);
        expect(differenceInDays(today, pastDay)).toEqual(daysToAdd);

        expect(differenceInDays('2021-07-10', '2021-07-14')).toEqual(4);
        expect(differenceInDays(parseISO('2021-07-07'), '2021-07-07')).toEqual(0);
    });
});
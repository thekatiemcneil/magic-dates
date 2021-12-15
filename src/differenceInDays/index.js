import { differenceInCalendarDays } from "date-fns";
import { convertDate } from "../utils";

export function differenceInDays(dateLeft, dateRight) {
    return Math.abs(
        differenceInCalendarDays(
            new Date(convertDate(dateLeft)),
            new Date(convertDate(dateRight))
        )
    );
}
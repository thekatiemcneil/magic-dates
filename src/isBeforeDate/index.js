import { isBefore } from "date-fns";
import { convertDate } from "../utils";

export function isBeforeDate(date, dateToCompare) {
    return isBefore(
        new Date(convertDate(date)),
        new Date(convertDate(dateToCompare))
    );
}
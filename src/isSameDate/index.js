import { isSameDay } from "date-fns";
import { convertDate } from "../utils";

export function isSameDate(dateLeft, dateRight) {
    return isSameDay(
        new Date(convertDate(dateLeft)),
        new Date(convertDate(dateRight))
    );
}
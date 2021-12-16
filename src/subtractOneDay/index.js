import { subDays } from "date-fns";
import { convertDate } from "../utils";

export function subtractOneDay(date) {
    return subDays(new Date(convertDate(date)), 1);
}
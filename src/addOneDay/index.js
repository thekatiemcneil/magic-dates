import { addDays } from "date-fns";
import { convertDate } from "../utils";

export function addOneDay(date) {
    return addDays(new Date(convertDate(date)), 1);
}
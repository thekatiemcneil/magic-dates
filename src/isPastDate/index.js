import { isPast } from "date-fns";
import { convertDate } from "../utils";

export function isPastDate(date) {
    return isPast(new Date(convertDate(date)));
}

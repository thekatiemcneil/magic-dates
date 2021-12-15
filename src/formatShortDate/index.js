import { format } from "date-fns";
import { convertDate } from "../utils";

export function formatShortDate(date) {
    return format(new Date(convertDate(date)), 'MM/dd/yyyy');
}
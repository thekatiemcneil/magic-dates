import { format } from "date-fns";
import { convertDate } from "../utils";

export function formatFormalDate(date) {
  return format(new Date(convertDate(date)), "MMMM d, yyyy");
}

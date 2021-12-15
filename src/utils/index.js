export function convertDate(date) {
    return typeof date === "string" ? date.replace(/-/g, "/") : date;
}
export function formatFormalDate(date) {
    return format(new Date(convertDate(date)), 'MMMM d, yyyy')
}
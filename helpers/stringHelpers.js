/*
* Remove HTML tags from a string
*/
export const stripHtmlTags = str => str.replace(/<\/?[^>]+(>|$)/g, "")

/*
* Array to comma-separated values
*/
export const arrayToCSV = arr => arr.join(', ')
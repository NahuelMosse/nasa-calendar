export const WeekDays = ["Sun.", "Mon.", "Tue.", "Wed.", "Thu.", "Fri.", "Sat."];
export const Months = ["January", "Frebruary", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

export function formatDate(date: Date): string {
    let month = "" + (date.getMonth() + 1);
    let day = "" + date.getDate();
    const year = date.getFullYear();

    if (month.length < 2)
        month = "0" + month;
    if (day.length < 2)
        day = "0" + day;

    return [year, month, day].join("-");
}

export function getCurrentMonthFirstDay(): Date {
    const today = new Date();
    return new Date(today.getFullYear(), today.getMonth(), 1);
}

export function getMonthLastDay(date: Date): Date {
    return new Date(date.getFullYear(), date.getMonth() + 1, 0);
}

export function getNextMonthFirstDay(date: Date) {

    let year = date.getFullYear();
    let month = date.getMonth();

    if (month < 11) {
        month++;
    } else {
        month = 0;
        year++;
    }

    return new Date(year, month, 1);
}

export function getPrevMonthFirstDay(date: Date) {

    let year = date.getFullYear();
    let month = date.getMonth();

    if (month > 0) {
        month--;
    } else {
        month = 11;
        year--;
    }

    return new Date(year, month, 1);
}

export function getMonthDays(date: Date): Date[] {
    const dateToPush = new Date(date.getFullYear(), date.getMonth(), 1);
    const days = [];
    while (dateToPush.getMonth() === date.getMonth()) {
        days.push(new Date(dateToPush));
        dateToPush.setDate(dateToPush.getDate() + 1);
    }
    return days;
}

export function getCalendarControllerLinks(year: number, month: number): string[] {
    let nextLink: string;
    let prevLink: string;

    if (month < 12 && month > 1) {
        nextLink = `/${year}/${month + 1}`;
        prevLink = `/${year}/${month - 1}`;
    } else if (month >= 12) {
        nextLink = `/${year + 1}/1`;
        prevLink = `/${year}/${month - 1}`;
    } else {
        nextLink = `/${year}/${month + 1}`;
        prevLink = `/${year - 1}/12`;
    }

    return [nextLink, prevLink];
}
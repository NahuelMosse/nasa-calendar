import { nasaApiDateValidationBooleanReturn } from "@/api/nasa-api";

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

export function getMonthLastDay(date: Date): Date {
    return new Date(date.getFullYear(), date.getMonth() + 1, 0);
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
    let nextLinkYear: number;
    let nextLinkMonth: number;
    let prevLinkYear: number;
    let prevLinkMonth: number;

    if (month < 12 && month > 1) {
        nextLinkYear = year;
        nextLinkMonth = month + 1;

        prevLinkYear = year;
        prevLinkMonth = month - 1;
    } else if (month >= 12) {
        nextLinkYear = year + 1;
        nextLinkMonth = 1;

        prevLinkYear = year;
        prevLinkMonth = month - 1;
    } else {
        nextLinkYear = year;
        nextLinkMonth = month + 1;

        prevLinkYear = year - 1;
        prevLinkMonth = 12;
    }

    let nextLink = "";
    let prevLink = "";

    if (isPathValid({ year: nextLinkYear.toString(), month: nextLinkMonth.toString()})) {
        nextLink = `/${nextLinkYear}/${nextLinkMonth}`;
    }

    if (isPathValid({ year: prevLinkYear.toString(), month: prevLinkMonth.toString()})) {
        prevLink = `/${prevLinkYear}/${prevLinkMonth}`;
    }

    return [nextLink, prevLink];
}

export function getTodayLink(): string {
    const today = new Date();
    const year = today.getFullYear();
    const month = today.getMonth() + 1;

    return `/${year}/${month}`;
}

export function isPathValid(pageParams: { year: string, month: string }): boolean {

    const year = Number(pageParams.year);
    const month = Number(pageParams.month);

    return (
        !Number.isNaN(year) &&
        !Number.isNaN(month) &&
        Number.isInteger(year) &&
        Number.isInteger(month) &&
        year >= 0 &&
        month >= 1 &&
        month <= 12 &&
        nasaApiDateValidationBooleanReturn(new Date(year, month - 1, 1))
    );
}
import { NasaImage } from "@/types/nasa-image";
import { Months, formatDate, getMonthLastDay } from "@/utils/date-utils";
import axios from "axios";

export const firstDayWithData = new Date(1995, 6, 1);

export async function getMonthImages(firstMonthDate: Date): Promise<Array<NasaImage>> {
    nasaApiDateValidation(firstMonthDate);

    const monthLastDay = getMonthLastDay(firstMonthDate);

    let endQueryDate = "";
    const today = new Date();

    if (monthLastDay.getTime() < today.getTime()) {
        endQueryDate = formatDate(monthLastDay);
    }

    const stringDate = formatDate(firstMonthDate);
    const { data } = await axios.get<NasaImage[]>("https://api.nasa.gov/planetary/apod", {
        params: {
            api_key: process.env.NASA_API_KEY,
            start_date: stringDate,
            ...endQueryDate && { end_date: endQueryDate }
        }
    });

    return data;
}

function nasaApiDateValidation(firstMonthDate: Date): void {
    const today = new Date();

    if (firstMonthDate.getTime() > today.getTime()) {
        throw new Error(`
                There aren't any picture from ${Months[firstMonthDate.getMonth()] +
                " " + firstMonthDate.getFullYear()}, 
                wait to ${firstMonthDate.toDateString()} to see the first picture in this month
            `);
    }

    if (firstMonthDate.getTime() < firstDayWithData.getTime()) {
        throw new Error(`
            There aren't any picture from ${Months[firstMonthDate.getMonth()] +
            " " + firstMonthDate.getFullYear()}, 
            pictures start in ${firstDayWithData.toDateString()}`);
    }
}

export function nasaApiDateValidationBooleanReturn(firstMonthDate: Date): boolean {
    const today = new Date();

    return firstMonthDate.getTime() <= today.getTime() && firstMonthDate.getTime() >= firstDayWithData.getTime();
}
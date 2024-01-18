import { NasaImage } from "@/types/NasaImage";
import { formatDate, getMonthLastDay } from "@/utils/dateUtils";
import axios, { CanceledError } from "axios";

export async function getMonthImages(firstMonthDate: Date): Promise<Array<NasaImage>> {
    const today = new Date();

    if (firstMonthDate.getTime() > today.getTime()) {
        return [];
    }

    const monthLastDay = getMonthLastDay(firstMonthDate);

    let endQueryDate = "";

    if (monthLastDay.getTime() < today.getTime()) {
        endQueryDate = formatDate(monthLastDay);
    }

    const stringDate = formatDate(firstMonthDate);

    try {
        const { data } = await axios.get<NasaImage[]>("https://api.nasa.gov/planetary/apod", {
            params: {
                api_key: process.env.NEXT_PUBLIC_NASA_API_KEY,
                start_date: stringDate,
                ...endQueryDate && { end_date: endQueryDate }
            }
        });

        return data;
    } catch (error: any) {
        const errorJson = error.toJSON();
        if (errorJson.name === CanceledError.name) {
            return [];
        } else {
            throw error;
        }
    }
}
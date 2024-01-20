import { NasaImage } from "@/types/nasa-image";
import { formatDate, getMonthLastDay } from "@/utils/date-utils";
import axios from "axios";

export async function getMonthImages(firstMonthDate: Date): Promise<Array<NasaImage>> {
    const today = new Date();

    const monthLastDay = getMonthLastDay(firstMonthDate);

    let endQueryDate = "";

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
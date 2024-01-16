import { Suspense } from "react";
import DayWithImage from "./dayWithImage";
import DaySkeleton from "./daySkeleton";

interface DayProps {
    day: Date,
}

type nasaImages = {
    copyright?: string,
    date: string,
    explanation: string,
    hdurl?: string,
    media_type: string,
    service_version: string,
    title: string,
    url: string
}

function formatDate(date: Date): string {
    let month = "" + (date.getMonth() + 1);
    let day = "" + date.getDate();
    const year = date.getFullYear();

    if (month.length < 2)
        month = "0" + month;
    if (day.length < 2)
        day = "0" + day;

    return [year, month, day].join("-");
}

async function getDayImages(date: Date): Promise<nasaImages> {
    const stringDate = formatDate(date);

    const response = await fetch(`https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&date=${stringDate}`);

    if (!response.ok) {
        const message = `An error has occured: ${response.status}`;
        throw new Error(message);
    }

    const daysData = await response.json();

    return daysData;
}

export default async function Day({ day }: DayProps): Promise<JSX.Element> {

    try {
        const { url, media_type } = await getDayImages(day);

        return (
            <Suspense fallback={<DaySkeleton>{day.getDate()}</DaySkeleton>}>
                {media_type === "image"
                    ? <DayWithImage imageUrl={url}>{day.getDate()}</DayWithImage>
                    : <DaySkeleton>{day.getDate()}</DaySkeleton>
                }
            </Suspense>
        );
    } catch (e) {
        return (<DaySkeleton>{day.getDate()}</DaySkeleton>);
    }
}
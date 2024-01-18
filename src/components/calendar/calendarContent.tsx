import { getMonthImages } from "@/api/nasaAPI";
import CalendarNoContent from "./calendarNoContent";
import Day from "../day/day";

type CalendarDay = {
    monthFirstDay: Date
}

export default async function CalendarContent({ monthFirstDay }: CalendarDay): Promise<JSX.Element> {
    const monthImages = await getMonthImages(monthFirstDay);

    return (
        <>
            {
                monthImages.map(nasaImage => {
                    const dayNumber = Number(nasaImage.date.split("-")[2]);
                    return (
                        <Day
                            key={"day-" + nasaImage.date}
                            nasaImage={nasaImage}
                        >
                            {dayNumber}
                        </Day>
                    );
                })
            }
            <CalendarNoContent date={monthFirstDay} quantityFilled={monthImages.length}></CalendarNoContent>
        </>
    );
}
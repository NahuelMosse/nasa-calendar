import { getMonthImages } from "@/api/nasa-api";
import CalendarNoContent from "./calendar-no-content";
import Day from "../day/day";
import CalendarError from "./calendar-error";

type CalendarDay = {
    monthFirstDay: Date
}

export default async function CalendarContent({ monthFirstDay }: CalendarDay): Promise<JSX.Element> {
    try {
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
    } catch(error: unknown) {
        return (
            <CalendarError
                date={monthFirstDay}
            ></CalendarError>
        );
    }
}
import { formatDate, getMonthDays } from "@/utils/date-utils";
import DayWithoutImage from "../day/day-without-image";

interface CalendarNoContentProps {
    date: Date
}

export default function CalendarError({ date }: CalendarNoContentProps): JSX.Element {
    const monthDays = getMonthDays(date);

    return (
        <>
            {
                monthDays.map(day =>
                    <DayWithoutImage key={"no-content-" + formatDate(day)}>{day.getDate()}</DayWithoutImage>
                )
            }
        </>
    );
}
import { formatDate, getMonthDays } from "@/utils/date-utils";
import DayWithoutImage from "../day/day-without-image";

type CalendarNoContentProps = {
    date: Date,
    quantityFilled?: number
}

export default function CalendarNoContent({ date, quantityFilled }: CalendarNoContentProps): JSX.Element {
    const monthDays = getMonthDays(date);

    if (quantityFilled) {
        monthDays.splice(0, quantityFilled);
    }

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
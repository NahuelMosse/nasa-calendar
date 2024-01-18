import { formatDate, getMonthDays } from "@/utils/dateUtils";
import DayWithoutImage from "../day/dayWithoutImage";

type CalendarNoContentProps = {
    date: Date,
    quantityFilled?: number
}

export default function CalendarNoContent({ date, quantityFilled }: CalendarNoContentProps): JSX.Element {
    // can be greatter
    let monthDays = getMonthDays(date);

    if (quantityFilled) {
        monthDays = monthDays.slice(quantityFilled, monthDays.length);
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
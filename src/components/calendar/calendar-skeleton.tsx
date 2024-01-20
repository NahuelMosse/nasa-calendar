import { formatDate, getMonthDays } from "@/utils/date-utils";
import DaySkeleton from "../day/day-skeleton";

type CalendarNoContentProps = {
    date: Date
}

export default function CalendarSkeleton({ date }: CalendarNoContentProps): JSX.Element {
    const monthDays = getMonthDays(date);
    return (
        <>
            {
                monthDays.map(day =>
                    <DaySkeleton key={"skeleton-" + formatDate(day)}>{day.getDate()}</DaySkeleton>
                )
            }
        </>
    );
}
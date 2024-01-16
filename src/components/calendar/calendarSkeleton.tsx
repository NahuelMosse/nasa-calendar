import { formatDate, getMonthDays } from "@/utils/dateUtils";
import DaySkeleton from "../day/daySkeleton";

type CalendarNoContentProps = {
    date: Date
}

export default function CalendarSkeleton({ date }: CalendarNoContentProps) {
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
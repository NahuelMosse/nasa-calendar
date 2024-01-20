import { formatDate, getMonthDays } from "@/utils/date-utils";
import DaySkeleton from "../day/day-skeleton";

interface SkeletonDaysGeneratorProps {
    monthFirstDay: Date
}

export default function SkeletonDaysGenerator({ monthFirstDay }: SkeletonDaysGeneratorProps): JSX.Element {
    const monthDays = getMonthDays(monthFirstDay);

    return (
        <>
            {
                monthDays.map(day =>
                    <DaySkeleton key={formatDate(day)}>{day.getDate()}</DaySkeleton>
                )
            }
        </>
    );
}
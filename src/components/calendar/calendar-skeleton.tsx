import EmptyDaysGenerator from "../days-generators/empty-days-generator";
import SkeletonDaysGenerator from "../days-generators/skeleton-days-generator";

interface CalendarNoContentProps {
    monthFirstDay: Date
}

export default function CalendarSkeleton({ monthFirstDay }: CalendarNoContentProps): JSX.Element {
    return (
        <div className="grid grid-cols-7 sm:gap-4 xs:gap-2 gap-0 h-full auto-rows-min w-full">
            <EmptyDaysGenerator monthFirstDay={monthFirstDay}></EmptyDaysGenerator>
            <SkeletonDaysGenerator monthFirstDay={monthFirstDay}></SkeletonDaysGenerator>
        </div>
    );
}
import EmptyDaysGenerator from "../days-generators/empty-days-generator";
import SkeletonDaysGenerator from "../days-generators/skeleton-days-generator";

interface CalendarNoContentProps {
    monthFirstDay: Date
}

export default function CalendarSkeleton({ monthFirstDay }: CalendarNoContentProps): JSX.Element {
    return (
        <>
            <EmptyDaysGenerator monthFirstDay={monthFirstDay}></EmptyDaysGenerator>
            <SkeletonDaysGenerator monthFirstDay={monthFirstDay}></SkeletonDaysGenerator>
        </>
    );
}
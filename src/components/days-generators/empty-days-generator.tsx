import DayEmpty from "../day/day-empty";

interface EmptyDaysGeneratorProps {
    monthFirstDay: Date
}

export default function EmptyDaysGenerator({ monthFirstDay }: EmptyDaysGeneratorProps): JSX.Element {
    return (
        <>
            {
                monthFirstDay.getDay() > 0 &&
                    Array(monthFirstDay.getDay()).fill(null).map(() => 
                        <DayEmpty key={monthFirstDay.getDay()}></DayEmpty>
                    )
            }
        </>
    );
}
import DayEmpty from "../day/day-empty";

interface EmptyDaysGeneratorProps {
    monthFirstDay: Date
}

export default function EmptyDaysGenerator({ monthFirstDay }: EmptyDaysGeneratorProps): JSX.Element {
    return (
        <>
            {
                monthFirstDay.getDay() > 0 &&
                    Array(monthFirstDay.getDay()).fill(null).map((_, i) => 
                        <DayEmpty key={"empty-" + -(monthFirstDay.getDay()-1-i)}></DayEmpty>
                    )
            }
        </>
    );
}
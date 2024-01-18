import CalendarContent from "./calendarContent";
import HeaderDay from "../day/headerDay";
import { WeekDays} from "@/utils/dateUtils";
import DayEmpty from "../day/dayEmpty";
import { Suspense } from "react";
import CalendarSkeleton from "./calendarSkeleton";
import CalendarMonthController from "./calendarMonthController";

interface CalendarProps {
    monthFirstDay: Date
}

export default function Calendar({ monthFirstDay }: CalendarProps): JSX.Element {

    return (
        <div className="max-w-2xl w-full flex flex-col items-center gap-4 sm:h-5/6">
            <CalendarMonthController monthFirstDay={monthFirstDay}></CalendarMonthController>
            <div className="grid grid-cols-7 sm:gap-4 xs:gap-2 gap-0 h-full auto-rows-min w-full">
                {
                    WeekDays.map(day =>
                        <HeaderDay key={"header-" + day}>{day}</HeaderDay>
                    )
                }
                {
                    monthFirstDay.getDay() > 0 &&
                        Array(monthFirstDay.getDay()).fill(null).map((_, i) => 
                            <DayEmpty key={"empty-" + -(monthFirstDay.getDay()-1-i)}></DayEmpty>
                        )
                }
                <Suspense fallback={<CalendarSkeleton date={monthFirstDay}></CalendarSkeleton>}>
                    <CalendarContent monthFirstDay={monthFirstDay}></CalendarContent>
                </Suspense>
            </div>
        </div>
    );
}
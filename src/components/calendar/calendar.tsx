import CalendarContent from "./calendar-content";
import HeaderDay from "../day/header-day";
import { WeekDays} from "@/utils/date-utils";
import { Suspense } from "react";
import CalendarSkeleton from "./calendar-skeleton";
import CalendarMonthController from "./calendar-month-controller";

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
                        <HeaderDay key={day}>{day}</HeaderDay>
                    )
                }
                
            </div>
            <div className="grid grid-cols-7 sm:gap-4 xs:gap-2 gap-0 h-full auto-rows-min w-full">
                <Suspense fallback={<CalendarSkeleton monthFirstDay={monthFirstDay}></CalendarSkeleton>}>
                    <CalendarContent monthFirstDay={monthFirstDay}></CalendarContent>
                </Suspense>
            </div>
        </div>
    );
}
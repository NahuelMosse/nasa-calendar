"use client";

import { useState } from "react";
import CalendarContent from "./calendarContent";
import CalendarMonthController from "./calendarMonthController";
import HeaderDay from "./headerDay";
import { WeekDays, getCurrentMonthFirstDay } from "@/utils/dateUtils";
import DayEmpty from "../day/dayEmpty";

export default function Calendar(): JSX.Element {

    const [monthFirstDay, setMonth] = useState(getCurrentMonthFirstDay());

    return (
        <div className="w-full flex flex-col gap-4">
            <CalendarMonthController actualMonth={monthFirstDay} changeMonth={setMonth}></CalendarMonthController>
            <div className="grid grid-cols-7 md:gap-4 sm:gap-2 gap-0">
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
                <CalendarContent monthFirstDay={monthFirstDay}></CalendarContent>
            </div>
            <footer className="w-full text-center">
                <p>
                    Cuando la NASA habilite las imagenes restantes, estas apareceran
                </p>
            </footer>
        </div>
    );
}
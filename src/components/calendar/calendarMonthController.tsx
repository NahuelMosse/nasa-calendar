import { Months, getNextMonthFirstDay, getPrevMonthFirstDay } from "@/utils/dateUtils";

type CalendarMonthControllerProps = {
    actualMonth: Date,
    changeMonth: (firstMonthDay: Date) => void
}

enum actions {
    "next" = "next",
    "prev" = "prev"
}

export default function CalendarMonthController({ actualMonth, changeMonth }: CalendarMonthControllerProps) {

    const handleClick = (action: actions): void => {
        let newDate: Date;
        if (action === actions["next"]) {
            newDate = getNextMonthFirstDay(actualMonth);
        } else {
            newDate = getPrevMonthFirstDay(actualMonth);
        }

        changeMonth(newDate)
    };

    return (
        <header className="w-full flex justify-center gap-8 text-2xl">
            <button onClick={() => handleClick(actions["prev"])}
                className="flex items-center justify-center hover:bg-black/10 rounded-full w-8 h-8 rotate-180 pb-1"
            >
                ↣
            </button>
            <h2>
                {Months[actualMonth.getMonth()]}
            </h2>
            <button onClick={() => handleClick(actions["next"])}
                className="flex items-center justify-center hover:bg-black/10 rounded-full w-8 h-8 pb-1"
            >
                ↣
            </button>
        </header>
    );
}
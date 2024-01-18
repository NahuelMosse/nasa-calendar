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

        changeMonth(newDate);
    };

    return (
        <header className="sm:w-2/4 w-3/4 flex justify-between text-xl">
            <button onClick={() => handleClick(actions["prev"])}
                className="flex items-center justify-center hover:bg-black/10 rounded-full w-8 h-8 rotate-180"
            >
                ➜
            </button>
            <h2 className="text-2xl font-black">
                {Months[actualMonth.getMonth()] + " " + actualMonth.getFullYear()}
            </h2>
            <button onClick={() => handleClick(actions["next"])}
                className="flex items-center justify-center hover:bg-black/10 rounded-full w-8 h-8"
            >
                ➜
            </button>
        </header>
    );
}
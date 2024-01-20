import { Months, getCalendarControllerLinks } from "@/utils/date-utils";
import Link from "next/link";

type CalendarMonthControllerProps = {
    monthFirstDay: Date,
}

export default function CalendarMonthController({ monthFirstDay }: CalendarMonthControllerProps): JSX.Element {

    const year = monthFirstDay.getFullYear();
    const month = monthFirstDay.getMonth() + 1;
    const [nextLink, prevLink] = getCalendarControllerLinks(year, month);

    return (
        <header className="sm:w-2/4 w-3/4 flex justify-between text-xl">
            <Link
                href={prevLink}
                className="flex items-center justify-center hover:bg-black/10 rounded-full w-8 h-8 rotate-180"
            >
                ➜
            </Link>
            <h2 className="text-2xl font-black">
                {Months[monthFirstDay.getMonth()] + " " + year}
            </h2>
            <Link
                href={nextLink}
                className="flex items-center justify-center hover:bg-black/10 rounded-full w-8 h-8"
            >
                ➜
            </Link>
        </header>
    );
}
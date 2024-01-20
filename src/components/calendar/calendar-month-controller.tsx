import { Months, getCalendarControllerLinks } from "@/utils/date-utils";
import Link from "next/link";

interface CalendarMonthControllerProps {
    monthFirstDay: Date,
}

export default function CalendarMonthController({ monthFirstDay }: CalendarMonthControllerProps): JSX.Element {

    const year = monthFirstDay.getFullYear();
    const month = monthFirstDay.getMonth() + 1;
    const [nextLink, prevLink] = getCalendarControllerLinks(year, month);

    return (
        <header className="sm:w-2/4 w-3/4 flex justify-between text-xl">
            {
                prevLink
                    ? <Link
                        href={prevLink}
                        className="flex items-center justify-center hover:bg-black/10 rounded-full w-8 h-8 rotate-180"
                    >
                    ➜
                    </Link>
                    : <div className="w-8 h-8"></div>
            }
            <h2 className="text-2xl font-black">
                {Months[monthFirstDay.getMonth()] + " " + year}
            </h2>
            {
                nextLink
                    ? <Link
                        href={nextLink}
                        className="flex items-center justify-center hover:bg-black/10 rounded-full w-8 h-8"
                    >
                    ➜
                    </Link>
                    : <div className="w-8 h-8"></div>
            }
        </header>
    );
}
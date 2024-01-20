import { getTodayLink } from "@/utils/date-utils";
import Link from "next/link";

export default function NotFoundPage(): JSX.Element {

    return (
        <main className="flex flex-col justify-between gap-4 items-center">
            <div className="max-w-2xl w-full gap-4 sm:h-5/6 flex flex-col justify-center items-center p-2">
                <h1 className="text-4xl font-black">
                    404 This page could not be found.
                </h1>
                <p className="text-xl">
                    Maybe you do not know how this page works.
                </p>
                <h2 className="text-3xl font-black">
                    How to use
                </h2>
                <p className="text-center text-xl">
                    In the page url, you can set the year and the month that you want to see. The url ends like this /[year]/[month]. You can replace the year and the month for what you want (only numbers available). For example if you want the 2023 February, you must go to:
                </p>
                <p className="font-black text-xl">
                    Date must be between July, 1995 and today.
                </p>
                <Link
                    className="w-52 h-12 border flex items-center justify-center rounded text-white text-xl m-4 bg-[color:var(--nasa-blue)]"
                    href={getTodayLink()}
                >
                    Go to the calendar
                </Link>
            </div>
        </main>
    );
}

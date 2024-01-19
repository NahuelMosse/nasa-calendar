import { getTodayLink } from "@/utils/dateUtils";
import Link from "next/link";

export default function NotFoundPage(): JSX.Element {

    return (
        <main className="flex flex-col justify-between gap-4 items-center">
            <div className="max-w-2xl w-full gap-4 sm:h-5/6 flex flex-col justify-center items-center p-2">
                <h1 className="text-4xl w-full">
                    404 This page could not be found.
                </h1>
                <p className="w-full">
                    Maybe you do not know how this page works
                </p>
                <h2 className="text-3xl w-full">
                    How to use
                </h2>
                <p>
                In the page url, you can set the year and the month that you want to see. The url ends like this /[year]/[month]. You can replace the year and the month for what you want (only numbers available). For example if you want the 2023 February, you must go to:
                </p>
                <p className="p-2 w-96 border-4 rounded">
                    http://localhost:3000/2023/2
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

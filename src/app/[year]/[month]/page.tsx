import NotFoundPage from "@/app/not-found";
import Calendar from "@/components/calendar/calendar";
import { isPathValid } from "@/utils/dateUtils";

interface MonthPageProps {
    params: { year: string, month: string }
}

export default function MonthPage({ params }: MonthPageProps): JSX.Element {
    
    if (isPathValid(params)) {
        const year = Number(params.year);
        const month = Number(params.month) - 1;
        const firstMonthDay = new Date(year, month, 1);
    
        return (
            <main className="flex flex-col justify-between gap-4 items-center">
                <Calendar monthFirstDay={firstMonthDay}></Calendar>
            </main>
        );
    }

    return (
        <NotFoundPage></NotFoundPage>
    );
}

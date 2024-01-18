import Calendar from "@/components/calendar/calendar";
import Header from "@/components/header/header";
import Image from "next/image";

interface MonthPageProps {
    params: { year: string, month: string }
}

export default function MonthPage({ params }: MonthPageProps): JSX.Element {
    //needs validation
    const year = Number(params.year);
    const month = Number(params.month) - 1;
    const firstMonthDay = new Date(year, month, 1);

    return (
        <main className="flex flex-col justify-between gap-4 items-center">
            <Header title="Calendar"></Header>
            <Calendar monthFirstDay={firstMonthDay}></Calendar>
            <footer className="w-full text-center px-4 bg-black flex justify-center">
                <Image
                    src="/images/NASA_logo.svg"
                    alt={"NASA logo"}
                    width={60}
                    height={60}
                    className="m-2"
                ></Image>
            </footer>
        </main>
    );
}

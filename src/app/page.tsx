import Header from "@/components/header/header";
import Calendar from "../components/calendar/calendar";

export default function Home(): JSX.Element {

    return (
        <main className="flex flex-col justify-between gap-4 items-center">
            <Header title="Calendar"></Header>
            <Calendar></Calendar>
            <footer className="w-full text-center px-4 bg-black">
                <p>
                    @NASA
                </p>
            </footer>
        </main>
    );
}

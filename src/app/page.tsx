import Calendar from "../components/calendar/calendar";

export default function Home(): JSX.Element {

    return (
        <main className="h-full max-w-3xl flex flex-col gap-8 items-center justify-center">
            <h1 className="text-3xl">APOD Calendar</h1>
            <Calendar></Calendar>
        </main>
    );
}

import Calendar from "../components/calendar";

export default function Home(): JSX.Element {

    return (
        <main className="h-full flex flex-col gap-10 items-center justify-center">
            <h1 className="text-3xl">APOD Calendar</h1>
            <Calendar></Calendar>
        </main>
    );
}

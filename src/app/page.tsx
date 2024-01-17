import Calendar from "../components/calendar/calendar";

export default function Home(): JSX.Element {

    return (
        <main className="h-full max-w-3xl flex flex-col items-center justify-evenly">
            <h1 className="text-3xl">APOD Calendar</h1>
            <Calendar></Calendar>
            <footer className="w-full text-center px-4">
                <p>
                    Cuando la NASA habilite las imagenes restantes, estas apareceran
                </p>
            </footer>
        </main>
    );
}

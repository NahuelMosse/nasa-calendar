import Day from "./day";
import DayEmpty from "./dayEmpty";
import HeaderDay from "./headerDay";

function getMonthDays() {
    const today = new Date();
    const date = new Date(today.getFullYear(), today.getMonth(), 1);
    const days = [];
    while (date.getMonth() === today.getMonth()) {
        days.push(new Date(date));
        date.setDate(date.getDate() + 1);
    }
    return days;
}

export default async function Calendar(): Promise<JSX.Element> {
    const today = new Date();
    const firstMonthDay = new Date(today.getFullYear(), today.getMonth(), 1);
    const monthDays = getMonthDays();
    const weekDaysMobile = ["Dom.", "Lun.", "Mar.", "Mie.", "Jue.", "Vie.", "Sab."];

    return (
        <div className="w-full flex flex-col gap-4">
            <header className="w-full flex justify-center gap-8 text-2xl">
                <button
                    className="flex items-center justify-center hover:bg-black/10 rounded-full w-8 h-8 rotate-180 pb-1"
                >
                    ↣
                </button>
                <h2>
                    Enero
                </h2>
                <button 
                    className="flex items-center justify-center hover:bg-black/10 rounded-full w-8 h-8 pb-1"
                >
                    ↣
                </button>
            </header>
            <div className="grid grid-cols-7 md:gap-4 sm:gap-2 gap-0">
                {
                    weekDaysMobile.map(day => 
                        <HeaderDay key={day}>{day}</HeaderDay>
                    )
                }
                {   firstMonthDay.getDay() > 0 
                    ?   Array(firstMonthDay.getDay()).fill(null).map((_, i) => 
                        <DayEmpty key={i}></DayEmpty>
                    )
                    : null
                }
                {
                    monthDays.map(day =>
                        <Day
                            key={day.toString()}
                            day={day}
                        ></Day>
                    )
                }
            </div>
            <footer className="w-full text-center">
                <p>
                    Cuando la NASA habilite las imagenes restantes, estas apareceran
                </p>
            </footer>
        </div>
    );
}
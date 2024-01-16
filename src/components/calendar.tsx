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
    const weekDays = ["Domingo", "Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado"];

    return (
        <div className="border border-current p-6 rounded-lg">
            <div className="grid grid-cols-7 gap-4">
                {
                    weekDays.map(day => 
                        <HeaderDay key={day}>{day}</HeaderDay>
                    )
                }
                {   firstMonthDay.getDay() > 0 
                    ?   Array(firstMonthDay.getDay()).fill(null).map((_, i) => 
                        <DayEmpty key={i}></DayEmpty>
                    )
                    : null

                },
                {
                    monthDays.map(day =>
                        <Day
                            key={day.toString()}
                            day={day}
                        ></Day>
                    )
                }
            </div>
            <footer className="w-full text-center mt-4">
                Cuando la NASA habilite las imagenes restantes, estas apareceran
            </footer>
        </div>
    );
}
import Day from "./day";

export default function Calendar(): JSX.Element {
    const days = Array.from({length: 30}, (_, i) => i + 1);

    return (
        <div className="grid grid-cols-7 gap-4">
            {
                days.map(day => 
                    <Day
                        key={day}
                    >
                        {day}
                    </Day>
                )
            }
            
        </div>
    );
}
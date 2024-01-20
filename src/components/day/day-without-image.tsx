import DayNumber from "./day-number";

interface DayWithoutImageProps {
    children: React.ReactNode
}

export default function DayWithoutImage({ children }: DayWithoutImageProps): JSX.Element {
    return (
        <div
            className="max-w-20 sm:w-20 h-20 overflow-x-clip"
        >
            <div
                className="w-20 h-20 sm:rounded bg-black/20"
            ></div>
            <DayNumber>{children}</DayNumber>
        </div>
    );
}
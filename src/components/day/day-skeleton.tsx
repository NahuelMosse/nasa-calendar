import DayNumber from "./day-number";

interface DaySkeletonProps {
    children: React.ReactNode
}

export default function DaySkeleton({ children }: DaySkeletonProps): JSX.Element {
    return (
        <div
            className="max-w-20 sm:w-20 h-20 overflow-x-clip"
        >
            <div
                className="w-20 h-20 sm:rounded bg-black/20 animate-pulse"
            ></div>
            <DayNumber>{children}</DayNumber>
        </div>
    );
}
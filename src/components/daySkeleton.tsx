interface DaySkeletonProps {
    children: React.ReactNode
}

export default function DaySkeleton({ children }: DaySkeletonProps): JSX.Element {
    return (
        <div
            className="w-20 h-20 flex items-center justify-center rounded text-white bg-black"
        >
            {children}
        </div>
    );
}
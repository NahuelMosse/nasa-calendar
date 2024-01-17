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
            <div className="relative bottom-3 flex justify-center">
                <span className="w-5.5 h-5.5 rounded-full bg-black text-white text-sm flex items-center justify-center">
                    {children}
                </span>
            </div>
        </div>
    );
}
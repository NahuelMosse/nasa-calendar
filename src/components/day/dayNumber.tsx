interface DayNumberProps {
    children: React.ReactNode
}

export default function DayNumber({ children }: DayNumberProps) {
    return (
        <div className="relative bottom-3 flex justify-center z-10">
            <span className="w-5.5 h-5.5 rounded-full bg-black text-white text-sm flex items-center justify-center">
                {children}
            </span>
        </div>
    );
}
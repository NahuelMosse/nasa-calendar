interface DayNumberProps {
    children: React.ReactNode
}

export default function DayNumber({ children }: DayNumberProps) {
    return (
        <div className="relative bottom-3 flex justify-center">
            <span className="w-5.5 h-5.5 rounded-full bg-black text-white text-sm number-font flex items-center justify-center">
                {children}
            </span>
        </div>
    );
}
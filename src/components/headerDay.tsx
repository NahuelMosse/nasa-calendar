interface HeaderDayProps {
    children: React.ReactNode
}

export default function HeaderDay({ children }: HeaderDayProps) {
    return (
        <div className="w-20 text-center">
            {children}
        </div>
    );
}
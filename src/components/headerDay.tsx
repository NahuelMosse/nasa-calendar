interface HeaderDayProps {
    children: React.ReactNode
}

export default function HeaderDay({ children }: HeaderDayProps) {
    return (
        <div className="max-w-20 text-center">
            {children}
        </div>
    );
}
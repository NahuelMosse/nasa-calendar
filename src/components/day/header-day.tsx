interface HeaderDayProps {
    children: React.ReactNode
}

export default function HeaderDay({ children }: HeaderDayProps): JSX.Element {
    return (
        <div className="sm:w-20 max-w-20 text-center">
            {children}
        </div>
    );
}
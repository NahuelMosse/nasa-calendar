interface DayProps {
    children: React.ReactNode
}

export default function Day({ children }: DayProps): JSX.Element {

    return (
        <div className="w-8 h-8 border">{children}</div>
    );
}
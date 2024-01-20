interface CalendarNoContentProps {
    error: any
}

export default function CalendarError({ error }: CalendarNoContentProps): JSX.Element {
    return (
        <div className="bg-[color:var(--nasa-red)] text-white p-4 rounded">
            <h3 className="text-2xl font-black text-center">
                Ups... There was an error
            </h3>
            <p className="text-xl text-center">
                {error?.message}
            </p>
        </div>
    );
}
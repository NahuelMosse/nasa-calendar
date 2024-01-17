import { NasaImage } from "@/types/NasaImage";
import { useEffect, useState } from "react";
import { getMonthImages } from "@/api/nasaAPI";
import Swal from "sweetalert2";
import CalendarSkeleton from "./calendarSkeleton";
import CalendarNoContent from "./calendarNoContent";
import Day from "../day/day";

type CalendarDay = {
    monthFirstDay: Date
}

export default function CalendarContent({ monthFirstDay }: CalendarDay): JSX.Element {
    const [monthImages, setMonthImages] = useState<NasaImage[]>([]);
    const [loading, setLoading] = useState<boolean>(false);

    useEffect(() => {
        setLoading(true);
        const abortController = new AbortController();
        
        getMonthImages(monthFirstDay, abortController.signal)
            .then(nasaImages => {
                setMonthImages(nasaImages);
                setLoading(false); 
            })
            .catch(e => {
                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: `${e}`,
                });
            });
        return () => {
            abortController.abort();
        };
    }, [monthFirstDay]);

    return (
        <>
            {
                loading
                    ? <CalendarSkeleton date={monthFirstDay}></CalendarSkeleton>
                    : <>
                        {
                            monthImages.map(nasaImage => {
                                const dayNumber = Number(nasaImage.date.split("-")[2]);
                                return (
                                    <Day
                                        key={"day-" + nasaImage.date}
                                        mediaUrl={nasaImage.url}
                                        mediaType={nasaImage.media_type}
                                    >
                                        {dayNumber}
                                    </Day>
                                );
                            })
                        }
                        <CalendarNoContent date={monthFirstDay} quantityFilled={monthImages.length}></CalendarNoContent>
                    </>
            }
        </>
    );
}
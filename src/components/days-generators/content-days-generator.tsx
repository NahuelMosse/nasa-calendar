import { NasaImage } from "@/types/nasa-image";
import Day from "../day/day";

interface ContentDaysGeneratorProps {
    monthImages: NasaImage[]
}

export default function ContentDaysGenerator({ monthImages }: ContentDaysGeneratorProps): JSX.Element {
    return (
        <>
            {
                monthImages.map(nasaImage => {
                    const dayNumber = Number(nasaImage.date.split("-")[2]);
                    return (
                        <Day
                            key={nasaImage.date}
                            nasaImage={nasaImage}
                        >
                            {dayNumber}
                        </Day>
                    );
                })
            }
        </>
    );
}
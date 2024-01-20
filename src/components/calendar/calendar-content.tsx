import { getMonthImages } from "@/api/nasa-api";
import NoContentDaysGenerator from "../days-generators/no-content-days-generator";
import CalendarError from "./calendar-error";
import EmptyDaysGenerator from "../days-generators/empty-days-generator";
import ContentDaysGenerator from "../days-generators/content-days-generator";

interface CalendarDayProps {
    monthFirstDay: Date
}

export default async function CalendarContent({ monthFirstDay }: CalendarDayProps): Promise<JSX.Element> {
    try {
        const monthImages = await getMonthImages(monthFirstDay);

        return (
            <div className="grid grid-cols-7 sm:gap-4 xs:gap-2 gap-0 h-full auto-rows-min w-full">
                <EmptyDaysGenerator monthFirstDay={monthFirstDay}></EmptyDaysGenerator>
                <ContentDaysGenerator monthImages={monthImages}></ContentDaysGenerator>
                <NoContentDaysGenerator date={monthFirstDay} quantityFilled={monthImages.length}></NoContentDaysGenerator>
            </div>
        );
    } catch(error: any) {
        return (
            <CalendarError
                error={error}
            ></CalendarError>
        );
    }
}
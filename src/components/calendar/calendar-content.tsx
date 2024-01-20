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
            <>
                <EmptyDaysGenerator monthFirstDay={monthFirstDay}></EmptyDaysGenerator>
                <ContentDaysGenerator monthImages={monthImages}></ContentDaysGenerator>
                <NoContentDaysGenerator date={monthFirstDay} quantityFilled={monthImages.length}></NoContentDaysGenerator>
            </>
        );
    } catch(error: unknown) {
        return (
            <CalendarError
                date={monthFirstDay}
            ></CalendarError>
        );
    }
}
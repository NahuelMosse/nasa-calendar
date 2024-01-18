"use client";

import Image from "next/image";
import DayEmpty from "./dayEmpty";
import DayNumber from "./dayNumber";
import { useState } from "react";
import DayModal from "./dayModal";

interface DayProps {
    mediaUrl: string,
    mediaType: string,
    children: React.ReactNode
}

export default function Day({ children, mediaUrl, mediaType }: DayProps): JSX.Element {
    const [showModal, setShowModal] = useState(false);

    const handleClick = () => {
        setShowModal(!showModal);
    };
    
    return (
        <>
            <button onClick={handleClick}
                className="max-w-20 sm:w-20 h-20"
            >
                <div className="relative w-full h-full">
                    {
                        mediaType === "image"
                            ?
                            <Image
                                src={mediaUrl}
                                alt={"Astronomy Picture of the Day"}
                                fill
                                className="w-full h-full sm:rounded"
                                sizes="80px"
                                style={{ objectFit: "cover" }}
                            ></Image>
                            :   <DayEmpty></DayEmpty>
                    }
                </div>
                <DayNumber>{children}</DayNumber>
            </button>
            { mediaType === "image" && <DayModal closeModal={handleClick} mediaUrl={mediaUrl} show={showModal}></DayModal> }
        </>
    );
}
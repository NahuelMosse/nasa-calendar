"use client";

import Image from "next/image";
import DayNumber from "./day-number";
import { useState } from "react";
import DayModal from "./day-modal";
import { MediaTypes, NasaImage } from "@/types/nasa-image";

interface DayProps {
    nasaImage: NasaImage,
    children: React.ReactNode
}

export default function Day({ children, nasaImage }: DayProps): JSX.Element {
    const [showModal, setShowModal] = useState(false);

    const handleClick = () => {
        setShowModal(!showModal);
    };
    
    return (
        <>
            <button onClick={handleClick}
                className="max-w-20 sm:w-20 h-20"
            >
                <div
                    className="relative w-full h-full flex items-center justify-center overflow-hidden sm:rounded"
                    title={nasaImage.media_type === MediaTypes.Image ? "Click to see the image in a bigger size" : "Click to show the video"}
                >
                    <Image
                        src={nasaImage.media_type === MediaTypes.Image ? nasaImage.url : "/images/APOD_logo.jpg"}
                        fill
                        className="w-full h-full object-cover"
                        sizes="80px"
                        alt="Astronomy Picture of the Day"
                    ></Image>
                </div>
                <DayNumber>{children}</DayNumber>
            </button>
            <DayModal 
                closeModal={handleClick}
                nasaImage={nasaImage}
                show={showModal}
            ></DayModal>
        </>
    );
}
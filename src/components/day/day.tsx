"use client";

import Image from "next/image";
import DayNumber from "./dayNumber";
import { useState } from "react";
import DayModal from "./dayModal";
import { MediaTypes, NasaImage } from "@/types/NasaImage";

interface DayProps {
    nasaImage: NasaImage,
    children: React.ReactNode
}

export default function Day({ children, nasaImage }: DayProps): JSX.Element {
    const [showModal, setShowModal] = useState(false);

    const handleClick = () => {
        setShowModal(!showModal);
    };

    const imageProps = nasaImage.media_type === MediaTypes.Image 
        ? {
            src: nasaImage.url,
            fill: true,
            className: "w-full h-full object-cover",
            sizes: "80px"
        }
        : {
            src: "/images/youtube_play.png",
            width: 48,
            height: 36
        };
    
    return (
        <>
            <button onClick={handleClick}
                className="max-w-20 sm:w-20 h-20"
            >
                <div
                    className={`
                        relative w-full h-full flex items-center justify-center overflow-hidden sm:rounded
                        ${nasaImage.media_type === MediaTypes.Image ? "" : "border"}
                    `}
                >
                    <Image
                        { ...imageProps }
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
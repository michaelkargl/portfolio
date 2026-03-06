import React, {useEffect, useState} from 'react';
import {GRAY8, imageFromURL, intBufferFromImage, RGB565, RGB888} from "@thi.ng/pixel";
import {ditherWith, FLOYD_STEINBERG, orderedDither} from "@thi.ng/pixel-dither";

interface Image95Props {
    src: string;
    alt?: string;
}

const Image95: React.FC<Image95Props> = ({src, alt}) => {
    const [ditheredSrc, setDitheredSrc] = useState<string | null>(null);

    useEffect(() => {
        const ditherAsync = async () => {
            // Bayer ordered dithering with 4x4 matrix and 3 levels per channel
            const image = await imageFromURL(src);
            const buffer = intBufferFromImage(image);
            const ditheredBuffer = orderedDither(buffer.as(RGB888), 4, 3);
            const imageData = ditheredBuffer.toImageData();

            const canvas = document.createElement('canvas');
            canvas.width = buffer.width;
            canvas.height = buffer.height;
            canvas.getContext('2d')!.putImageData(imageData, 0, 0);

            setDitheredSrc(canvas.toDataURL());
        };
        ditherAsync();
    }, [src]);

    if (!ditheredSrc) return null;
    return <img src={ditheredSrc} alt={alt} />;
};

export default Image95;
import React from 'react';

export const VideoPlayer = ({ srcVideo }) => {
    return (
        <video className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full" autoPlay muted loop>
            <source src={srcVideo} type="video/mp4" />
            Seu browser não suporta o video.
        </video>
    );
};

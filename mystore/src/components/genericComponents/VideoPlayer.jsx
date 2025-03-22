// VideoPlayer.jsx
import { useState } from 'react';

export const VideoPlayer = ({ srcVideo, poster = null, autoPlay = true, muted = true, loop = true, controls = false }) => {
    const [isLoading, setIsLoading] = useState(true);
    const [hasError, setHasError] = useState(false);
    
    return (
        <div className="relative h-full w-full overflow-hidden">
            {isLoading && !hasError && (
                <div className="absolute inset-0 flex items-center justify-center bg-gray-200 dark:bg-gray-800">
                    <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
                </div>
            )}
            
            {hasError && (
                <div className="absolute inset-0 flex flex-col items-center justify-center bg-gray-200 dark:bg-gray-800 p-4 text-center">
                    <svg className="w-12 h-12 text-red-500 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                    </svg>
                    <p className="text-gray-700 dark:text-gray-300">Falha ao carregar o vídeo</p>
                </div>
            )}
            
            <video 
                className={`h-full w-full object-cover ${isLoading ? 'invisible' : 'visible'}`}
                poster={poster}
                autoPlay={autoPlay}
                muted={muted}
                loop={loop}
                controls={controls}
                onLoadedData={() => setIsLoading(false)}
                onError={() => {
                    setIsLoading(false);
                    setHasError(true);
                }}
            >
                <source src={srcVideo} type="video/mp4" />
                Seu navegador não suporta a tag de vídeo.
            </video>
        </div>
    );
};

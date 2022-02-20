import { useState, useEffect } from 'react';

function useWindowResize (transitionValue) {
    const [currentWidth, setCurrentWidth] = useState(window.innerWidth);
    const [isGreaterTransition, setIsGreaterTransition] = useState(window.innerWidth > transitionValue);

    function onScreenSizeChange() {
        setCurrentWidth(window.innerWidth);
        setIsGreaterTransition(window.innerWidth > transitionValue);
    }

    useEffect(() => {
        window.addEventListener('resize', onScreenSizeChange);

        return () => {
            window.removeEventListener('resize', onScreenSizeChange);
        }
    }, []);

    return [isGreaterTransition, currentWidth];
}

export default useWindowResize;
import { useState, useEffect } from "react";

const useAvailable = () => {
    const [isOnline, setIsOnline] = useState(true)
    const online = () => setIsOnline(true)
    const offline = () => setIsOnline(false)


    useEffect(() => {
        window.addEventListener("online", online);
        window.addEventListener("offline", offline);

        // unmounting also that is done in return in useEffect
        return () => {
            window.removeEventListener("online", online);
            window.removeEventListener("offline", offline);
        }
    }, []);

    return isOnline;
}

export default useAvailable;
import { cloneElement, useEffect, useRef } from "react";
import "./Popup.css";

export default function Popup({ trigger, children, color }) {
    const popupRef = useRef();
    const triggerRef = useRef();

    useEffect(() => {
        const current = triggerRef.current;
        function handleClick() {
            setTimeout(() => popupRef.current?.classList.add("show"), 100);
            setTimeout(() => popupRef.current?.classList.remove("show"), 3000);
        }
        current.addEventListener("click", handleClick);
        return () => current.removeEventListener("click", handleClick);
    }, [trigger]);

    return (
        <>
            {cloneElement(trigger, { ref: triggerRef })}
            <div
                className="popup"
                ref={popupRef}
                style={{ backgroundColor: color }}
            >
                {children}
            </div>
        </>
    );
}

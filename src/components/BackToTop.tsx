import { useState, useEffect } from "react";

export default function BackToTop() {
    const [visible, setVisible] = useState(false);

    useEffect (() => {
        const onScroll = () => setVisible(window.scrollY > 400);
        window.addEventListener("scroll", onScroll); // SETUP: start listening
        console.log("Effect ran");
        return () => window.removeEventListener("scroll", onScroll); // CLEANUP: stop
    }, [])

    if (!visible) return null; // a component can render nothing - this is valid

    return (
    <button
      className="back-to-top"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label="Back to top"
    >
      ↑
    </button>
    );
}
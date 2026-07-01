import { useEffect, useState } from "react";

function Counter({ end, suffix = "" }) {

    const [count, setCount] = useState(0);

    useEffect(() => {

        let start = 0;

        const duration = 2000;
        const increment = end / 100;

        const timer = setInterval(() => {

            start += increment;

            if (start >= end) {
                setCount(end);
                clearInterval(timer);
            } else {
                setCount(Math.floor(start));
            }

        }, duration / 100);

        return () => clearInterval(timer);

    }, [end]);

    return (
        <>
            {count}
            {suffix}
        </>
    );
}

export default Counter;
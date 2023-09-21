import {useEffect, useState} from "react";

export const useDimensions = () => {
    const [dimensions, setDimensions] = useState({
        width: null,
        height: null,
    })

    useEffect(() => {
        const { innerWidth, innerHeight } = window
        setDimensions({width: innerWidth, height: innerHeight})
        document.title = `${innerWidth} x ${innerHeight}`

        const onResize = (e) => {
            const { innerWidth, innerHeight } = e.target
            setDimensions({width: innerWidth, height: innerHeight})
            document.title = `${innerWidth} x ${innerHeight}`
        }
        window.addEventListener('resize', onResize)

        return () => {
            window.removeEventListener('resize', onResize)
        }
    }, []);

    return dimensions
}
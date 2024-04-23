import React, { useEffect } from 'react'
import { useRef } from 'react'
import { motion, useAnimation, useInView } from "framer-motion"

export const Animate = ({ children, delay, classes }) => {
    const ref = useRef();
    const inView = useInView(ref, { once: true });
    const mainControls = useAnimation();
    useEffect(() => {
        if (inView) {
            mainControls.start("visible")
        }

    }, [inView])

    return (
        <>
            <motion.div
                ref={ref}
                variants={{
                    hidden: { opacity: 0, y: 50 },
                    visible: {
                        opacity: 1,
                        y: 0
                    },

                }}
                initial="hidden"
                animate={mainControls}
                transition={{ type: "tween", stiffness: 220, duration: 0.8, delay: delay }}
                className={classes}

            >
                {children}
            </motion.div>

        </>
    )
}
export default Animate

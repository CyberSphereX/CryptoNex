import React, { useEffect } from 'react'
import { motion, useInView, useAnimation } from "framer-motion"
import { useRef } from 'react';
const WordAnimate = ({ text }) => {
    const words = String(text).split(' '); // Split text into words based on spaces
    const ref = useRef();
    const isInView = useInView(ref, { once: true });
    const mainControls = useAnimation();

    useEffect(() => {
        mainControls.start("visible")
    }, [isInView])
    return (
        <>
            <motion.span
                ref={ref}
                style={{ display: 'inline-flex', flexDirection: 'row', alignItems: 'flex-start', }}
            >
                {words.map((word, wordIndex) => (
                    <React.Fragment key={`word-${wordIndex}`}>
                        {/* Map characters within each word */}
                        {word.split('').map((char, charIndex) => (
                            <motion.span
                                key={`${char}-${charIndex}`}
                                style={{ display: 'inline-block' }}
                                variants={
                                    {
                                        hidden: { opacity: 0, y: -50 },
                                        visible: { opacity: 1, y: 0 }
                                    }
                                }
                                initial="hidden"
                                animate={mainControls}
                                transition={{ type: 'spring', stiffness: 100, ease: "easeIn", delay: wordIndex * 0.2 + charIndex * 0.06, }}
                            >
                                {char}
                            </motion.span>
                        ))}
                        {/* Add space after each word (except the last one) */}
                        {wordIndex < words.length - 1 && <span>&nbsp;</span>}
                    </React.Fragment>
                ))}
            </motion.span>
        </>
    )
}

export default WordAnimate




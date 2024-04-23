import React, { useEffect } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';
import { useRef } from 'react';

const WordAnimate = ({ text }) => {
    const words = text.split(' '); 
    const ref = useRef();
    const isInView = useInView(ref, { triggerOnce: true });
    const mainControls = useAnimation();

    useEffect(() => {
        if (isInView) {
            mainControls.start('visible');
        }
    }, [isInView, mainControls]);

    return (
        <motion.span ref={ref} style={{ display: 'inline-block' }}>
            {words.map((word, wordIndex) => (
                <React.Fragment key={`word-${wordIndex}`}>
                   
                    {word.split('').map((char, charIndex) => (
                        <motion.span
                            key={`${char}-${charIndex}`}
                            variants={{
                                hidden: { opacity: 0, y: -20 },
                                visible: {
                                    opacity: 1,
                                    y: 0,
                                    transition: { delay: wordIndex * 0.2 + charIndex * 0.05, type: "spring", damping: 10, stiffness: 120 , duration:2 },
                                },
                            }}
                            initial="hidden"
                            animate="visible"
                        >
                            {char}
                        </motion.span>
                    ))}
                    
                    {wordIndex < words.length - 1 && <span>&nbsp;</span>}
                </React.Fragment>
            ))}
        </motion.span>
    );
};

export default WordAnimate;

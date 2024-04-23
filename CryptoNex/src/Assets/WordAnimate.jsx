import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useRef } from 'react';

const WordAnimate = ({ text }) => {
    const words = text.split(' ');
    const ref = useRef();
    const mainControls = useAnimation();

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    mainControls.start('visible');
                }
            },
            {
                root: null, // viewport
                rootMargin: '0px',
                threshold: 0.1 // Adjust this value as needed
            }
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => {
            if (ref.current) {
                observer.unobserve(ref.current);
            }
        };
    }, [mainControls]);

    return (
        <motion.span ref={ref} style={{ display: 'inline-block' }} animate={mainControls} initial="hidden">
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
                                    transition: { delay: wordIndex * 0.2 + charIndex * 0.05, type: "spring", damping: 10, stiffness: 120 },
                                },
                            }}
                        >
                            {char}
                        </motion.span>
                    ))}
                    {wordIndex < words.length - 1 && <span> </span>}
                </React.Fragment>
            ))}
        </motion.span>
    );
};

export default WordAnimate;

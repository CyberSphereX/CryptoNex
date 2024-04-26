import React, { useState, useEffect } from 'react';


const CursorFollower = () => {
    const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

    // Update cursor position on mousemove
    const handleMouseMove = (event) => {
        setCursorPosition({ x: event.clientX, y: event.clientY });
    };

    useEffect(() => {
        // Add event listener for mousemove
        document.addEventListener('mousemove', handleMouseMove);

        return () => {
            // Clean up event listener on component unmount
            document.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    return (
        <div className="cursor-follower" style={{ top: cursorPosition.y, left: cursorPosition.x }}>
        </div>
    );
};

export default CursorFollower;

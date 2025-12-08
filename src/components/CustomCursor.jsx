import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const CustomCursor = () => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [isHovering, setIsHovering] = useState(false);

    useEffect(() => {
        const mouseMove = (e) => {
            setMousePosition({
                x: e.clientX,
                y: e.clientY,
            });
        };

        const handleMouseOver = (e) => {
            const target = e.target;
            if (!target || !target.tagName) return;

            const isLink = target.tagName === 'A' || target.closest?.('a');
            const isButton = target.tagName === 'BUTTON' || target.closest?.('button');

            // Use getComputedStyle only if target is an element
            let isPointer = false;
            if (target instanceof Element) {
                try {
                    isPointer = window.getComputedStyle(target).cursor === 'pointer';
                } catch {
                    isPointer = false;
                }
            }

            if (isLink || isButton || isPointer) {
                setIsHovering(true);
            } else {
                setIsHovering(false);
            }
        };

        window.addEventListener("mousemove", mouseMove);
        window.addEventListener("mouseover", handleMouseOver);

        return () => {
            window.removeEventListener("mousemove", mouseMove);
            window.removeEventListener("mouseover", handleMouseOver);
        };
    }, []);

    const variants = {
        default: {
            x: mousePosition.x - 16,
            y: mousePosition.y - 16,
            scale: 1,
        },
        hover: {
            x: mousePosition.x - 16,
            y: mousePosition.y - 16,
            scale: 1.5,
            backgroundColor: "rgba(145, 94, 255, 0.5)",
            border: "1px solid rgba(255, 255, 255, 0.8)",
        },
    };

    return (
        <>
            <motion.div
                className="fixed top-0 left-0 w-8 h-8 rounded-full border-2 border-[#915EFF] pointer-events-none z-[9999] hidden sm:block"
                variants={variants}
                animate={isHovering ? "hover" : "default"}
                transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
            />
            <motion.div
                className="fixed top-0 left-0 w-2 h-2 bg-[#915EFF] rounded-full pointer-events-none z-[9999] hidden sm:block"
                animate={{ x: mousePosition.x - 4, y: mousePosition.y - 4 }}
                transition={{ type: "spring", stiffness: 500, damping: 28 }}
            />
        </>
    );
};

export default CustomCursor;

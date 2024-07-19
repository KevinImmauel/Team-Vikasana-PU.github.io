import React, { useState, useRef, useEffect } from "react";

export default function EventCarausel({ data }) {
    const carouselRef = useRef(null);
    const [isDragging, setIsDragging] = useState(false);
    const [startX, setStartX] = useState(0);
    const [startScroll, setStartScroll] = useState(0);

    useEffect(() => {
        const handleMouseUp = () => setIsDragging(false);
        const handleMouseLeave = () => setIsDragging(false);

        window.addEventListener("mouseup", handleMouseUp);
        window.addEventListener("mouseleave", handleMouseLeave);

        return () => {
            window.removeEventListener("mouseup", handleMouseUp);
            window.removeEventListener("mouseleave", handleMouseLeave);
        };
    }, []);

    const dragStart = (e) => {
        setIsDragging(true);
        setStartX(e.pageX);
        setStartScroll(carouselRef.current.scrollLeft);
    };

    const dragging = (e) => {
        if (!isDragging) return;
        const x = e.pageX;
        carouselRef.current.scrollLeft = startScroll - (x - startX);
    };

    const dragStop = () => {
        setIsDragging(false);
    };

    const scrollRight = () => {
        carouselRef.current.scrollLeft += 412;
    };

    const scrollLeft = () => {
        carouselRef.current.scrollLeft -= 412;
    };
    return (
        <section>
            <div className="relative w-full sm:max-2xl:px-[6vw] px-[6vw] scale-90 flex justify-center">
                <button>
                    <img
                        className="h-20 w-20 absolute top-1/2 sm:max-2xl:left-[2vw] -left-[4vw] z-10"
                        src=".\EventPosters\chevron-left.svg"
                        onClick={scrollLeft}
                    />
                </button>
                <div
                    className="w-fit pt-2 pb-10 flex gap-x-16 overflow-x-scroll  scroll-smooth snap-mandatory snap-x select-none no-scrollbar"
                    ref={carouselRef}
                    onMouseDown={dragStart}
                    onMouseMove={dragging}
                    onMouseUp={dragStop}
                    onMouseLeave={dragStop}
                >
                    {data}
                </div>
                <button>
                    <img
                        className="h-20 w-20 absolute top-1/2 sm:max-2xl:right-[2vw] -right-[4vw] z-10"
                        src=".\EventPosters\chevron-right.svg"
                        onClick={scrollRight}
                    />
                </button>
            </div>
        </section>
    );
}

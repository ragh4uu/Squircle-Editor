import { useMemo } from 'react';
import React from 'react'


function SquirclePath(n: number = 4, width: number = 100, height: number = 100) {
    const points: string[] = [];
    const rx = width / 2;
    const px = height / 2;

    for ( let i=0; i<= 360; i++) {
        const angle = (i * Math.PI) / 180;
        const cosT = Math.cos(angle);
        const sinT = Math.sin(angle);
        const xSign = Math.sign(cosT);
        const ySign = Math.sign(sinT);


        const x = rx + Math.pow(Math.abs(cosT), 2 / n) * rx * xSign;
        const y = px + Math.pow(Math.abs(sinT), 2 / n) * px * ySign;
        points.push(`${x.toFixed(2)},${y.toFixed(2)}`);
    }
  return points.join(" ");
}

interface SquircleProps {
    n?: number;
    width?: number;
    height?: number;
    fill?: string;
    step?: number;
    className?: string;
    children?: React.ReactNode;
}

export const Squircle = ({
    n = 4,
    width = 100,
    height = 100,
    className = "",
    fill = "currentColor",
    step = 1,
    children,
}: SquircleProps ) => {
    const pathData = useMemo(() => SquirclePath(n, width, height), [n, width, height]);
    return (
        <div className={`relative grid isolate place-items-center ${className}`}>
            <svg viewBox='0 0 100 100' 
            preserveAspectRatio='none'
            className='absolute inset-0 -z-10 w-full h-full'
            aria-hidden="true"

            >
                <polygon points={pathData}  fill={fill} />
            </svg>
            {children}
        </div>
    )

}

export default SquirclePath
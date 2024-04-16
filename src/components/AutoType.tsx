"use client";
import { TypeAnimation } from 'react-type-animation';

export default function AutoType() {
    return (
        <TypeAnimation
        sequence={[
            'System Administrator',
            1000,
            'Linux Support',
            1000,
        ]}
        wrapper="span"
        speed={20}
        style={{ display: 'inline-block' }}
        repeat={Infinity}
    />
    );
}
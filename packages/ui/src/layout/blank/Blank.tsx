import React from 'react';

interface BlankProps {
children: React.ReactNode;
}

export default function Blank({ children }: BlankProps) {
    return (
        <div>
            <h1>Blank Component</h1>
            {children}
        </div>
    );
};

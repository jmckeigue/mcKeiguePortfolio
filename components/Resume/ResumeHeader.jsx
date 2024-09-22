import React, { useState } from 'react';
import { useColorScheme } from '../../hooks/useColorScheme';

const ResumeHeader = () => {
    const theme = useColorScheme();

    return (
        <nav>
            <h1>Resume</h1>
        </nav>
    );
};

export default ResumeHeader;

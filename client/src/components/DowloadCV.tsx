import React from 'react';

const DownloadButton = () => {
    const handleDownload = () => {
        const urlCV = '/DincherSelimov.pdf';
        const a = document.createElement('a');
        a.href = urlCV;
        a.download = urlCV; 
        a.style.display = 'none';
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
    };

    return (
        <button onClick={handleDownload}>Download CV</button>
    );
}

export default DownloadButton;

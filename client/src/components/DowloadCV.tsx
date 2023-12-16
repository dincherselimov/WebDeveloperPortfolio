import React from 'react';

const DownloadButton = () => {
    const handleDownload = () => {
        const urlCV = '/Dincher_Nedzhatinov Selimov_Resume.pdf';
        const a = document.createElement('a');
        a.href = urlCV;
        a.download = 'Dincher_Nedzhatinov_Selimov_Resume.pdf'; // Specify the desired file name
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

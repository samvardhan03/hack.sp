import React from 'react';
import './styles/Report.css';

const Report = () => {
    const handleDownload = () => {
        const fileUrl = 'https://github.com/yourusername/yourrepo/raw/main/public/report.pdf'; // Update with your actual URL
        const link = document.createElement('a');
        link.href = fileUrl;
        link.download = 'report.pdf'; // The name of the file to be downloaded
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <div className="report">
            <h2>Download Report</h2>
            <button onClick={handleDownload}>Download Report</button>
        </div>
    );
};

export default Report;

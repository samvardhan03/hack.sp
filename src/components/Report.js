// Report.js
import React, { useState } from 'react';
import './styles/Report.css';

const Report = () => {
    const [productName, setProductName] = useState('');
    const [category, setCategory] = useState('');

    const handleDownload = () => {
        // URL of the PDF file
        const pdfUrl = 'https://github.com/samvardhan03/sparkathon/raw/main/public/Report.pdf';
        // Create a link element
        const link = document.createElement('a');
        link.href = pdfUrl;
        link.download = 'Report.pdf'; // Suggested file name for download
        // Append the link to the body
        document.body.appendChild(link);
        // Programmatically click the link to trigger the download
        link.click();
        // Remove the link from the body
        document.body.removeChild(link);
    };

    return (
        <div className="report">
            <h2>Generate Report</h2>
            <div className="input-container">
                <label>Product Name:</label>
                <input
                    type="text"
                    value={productName}
                    onChange={(e) => setProductName(e.target.value)}
                />
            </div>
            <div className="input-container">
                <label>Category:</label>
                <input
                    type="text"
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                />
            </div>
            <button onClick={handleDownload}>Download Report</button>
        </div>
    );
};

export default Report;

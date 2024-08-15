import React, { useState } from 'react';
import './styles/Report.css';

const Report = () => {
    const [productName, setProductName] = useState('');
    const [category, setCategory] = useState('');

    const handleGenerateReport = () => {
        const pdfUrl = 'https://github.com/samvardhan03/sparkathon/blob/main/public/Report.pdf';

        // Create an invisible anchor element and trigger a download
        const link = document.createElement('a');
        link.href = pdfUrl;
        link.download = 'report.pdf'; // Specify the file name
        document.body.appendChild(link);
        link.click();
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
            <button onClick={handleGenerateReport}>Generate Report</button>
        </div>
    );
};

export default Report;


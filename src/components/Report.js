import React, { useState } from 'react';
import './styles/Report.css';

const Report = () => {
    const [productName, setProductName] = useState('');
    const [category, setCategory] = useState('');

    const handleGenerateReport = () => {
        const pdfUrl = 'https://github.com/samvardhan03/sparkathon/blob/main/public/Report.pdf';

        fetch(pdfUrl)
            .then(response => response.blob())
            .then(blob => {
                const url = window.URL.createObjectURL(blob);
                const a = document.createElement('a');
                a.href = url;
                a.download = 'report.pdf'; // Specify the file name
                document.body.appendChild(a);
                a.click();
                a.remove();
                window.URL.revokeObjectURL(url); // Clean up the URL object
            })
            .catch(error => console.error('Error downloading the file:', error));
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

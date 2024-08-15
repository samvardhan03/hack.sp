import React, { useState } from 'react';
import './styles/Report.css';

const Report = () => {
    const [productName, setProductName] = useState('');
    const [category, setCategory] = useState('');

    // Function to handle file download
    const handleDownload = () => {
        // Define the URL of the static PDF file hosted on GitHub
        const pdfUrl = 'https://github.com/username/repository-name/path/to/your-file.pdf'; // Update this URL

        // Create an anchor element and trigger a download
        const link = document.createElement('a');
        link.href = pdfUrl;
        link.download = `${productName || 'report'}_${category || 'report'}.pdf`;
        link.click();
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
            <button onClick={handleDownload}>Generate Report</button>
        </div>
    );
};

export default Report;

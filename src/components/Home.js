import React from 'react';
import './styles/Home.css';
import apiImage from '../assets/api.png';
import dbImage from '../assets/db.png';

const Home = () => {
    return (
        <div className="home">
            <section className="hero-section">
                <h1 className="hero-title">W.A.L.L.Y</h1>
                <p className="hero-subtitle">(Warehouse Analytics and Logistics Learning for Yield)</p>
                <p className="hero-description">Helping you analyze your sales data using AI</p>
            </section>

            <section className="feature-section">
                <div className="feature-content">
                    <div className="feature-image" style={{ backgroundImage: `url(${apiImage})` }}></div>
                    <div className="feature-text">
                        <h2>Efficient Data Management & API Handling</h2>
                        <ul className="feature-list">
                            <li>Streamline your data processing pipelines.</li>
                            <li>Integrate seamlessly with your existing infrastructure.</li>
                        </ul>
                    </div>
                </div>
            </section>

            <section className="insights-section">
                <div className="insights-content">
                    <div className="insights-text">
                        <h2>AI-Driven Insights</h2>
                        <p>At the heart of WALLY lies the AI service, offering precise market forecasting, personalized promotions, and warehouse optimization.</p>
                        <ul className="insights-list">
                            <li><strong>Dynamic Dashboards:</strong> Visualize sales forecasts, identify trends, and explore insights through graphs and charts.</li>
                            <li><strong>Custom Reports:</strong> Generate detailed reports by selecting product categories or entering specific product names. These reports offer AI-driven marketing suggestions and visual insights for strategic decisions.</li>
                        </ul>
                    </div>
                    <div className="insights-image" style={{ backgroundImage: `url(${dbImage})` }}></div>
                </div>
            </section>
        </div>
    );
};

export default Home;

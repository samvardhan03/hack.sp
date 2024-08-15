import React from 'react';
import './styles/Home.css';

const Home = () => {
    return (
        <div className="home">
            <section className="hero-section">
                <h1 className="hero-title">WALLY</h1>
                <p className="hero-subtitle">Helping you analyze your sales data using AI</p>
            </section>

            <section className="feature-section">
                <h2>Efficient Data Management & API Handling</h2>
                <ul className="feature-list">
                    <li>Streamline your data processing pipelines.</li>
                    <li>Integrate seamlessly with your existing infrastructure.</li>
                </ul>
            </section>

            <section className="insights-section">
                <h2>AI-Driven Insights</h2>
                <p>At the heart of WALLY lies the AI service, offering precise market forecasting, personalized promotions, and warehouse optimization.</p>
                <ul className="insights-list">
                    <li>
                        <strong>Dynamic Dashboards:</strong> Visualize sales forecasts, identify trends, and explore insights through graphs and charts.
                    </li>
                    <li>
                        <strong>Custom Reports:</strong> Generate detailed reports by selecting product categories or entering specific product names. These reports offer AI-driven marketing suggestions and visual insights for strategic decisions.
                    </li>
                </ul>
            </section>
        </div>
    );
};

export default Home;

import React from 'react';
import './styles/Home.css';

const Home = () => {
    return (
        <div className="home-container">
            <section className="section section-1">
                <h2>WALLY</h2>
                <p>Helping you analyze your sales data using AI.</p>
            </section>

            <section className="section section-2">
                <h2>Efficient Data Management & API Handling</h2>
                <ul>
                    <li>Seamless integration with various data sources.</li>
                    <li>Real-time data processing and analysis.</li>
                </ul>
            </section>

            <section className="section section-3">
                <h2>AI-Driven Insights</h2>
                <p>
                    At the heart of WALLY lies the AI service, offering precise market forecasting,
                    personalized promotions, and warehouse optimization.
                </p>
                <ul>
                    <li>
                        <strong>Dynamic Dashboards:</strong> Visualize sales forecasts, identify trends,
                        and explore insights through graphs and charts.
                    </li>
                    <li>
                        <strong>Custom Reports:</strong> Generate detailed reports by selecting product
                        categories or entering specific product names. These reports offer AI-driven marketing
                        suggestions and visual insights for strategic decisions.
                    </li>
                </ul>
            </section>
        </div>
    );
};

export default Home;

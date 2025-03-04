import React, { useEffect, useState } from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, PieChart, Pie, Cell, Legend } from "recharts";
import axios from "axios";
import './Analytics.css'

const linkNames = ["Instagram", "YouTube", "Facebook", "Others"];
const COLORS = ["#8884d8", "#82ca9d", "#ffc658", "#ff8042", "#ff4d4d", "#4dc9ff"];

const Analytics = () => {
    const [data, setData] = useState([]);
    const [monthlyClicks, setMonthlyClicks] = useState([]);

    useEffect(() => {
        fetchAnalytics();
    }, []);

    const token = localStorage.getItem("accessToken");

    const fetchAnalytics = async () => {
        try {
            // const response = await axios.get("http://localhost:5000/api/v2/link/analytics", {
            //     headers: { Authorization: `Bearer ${token}` },
            // });
            const response = await axios.get("https://link-tree-backend-2.onrender.com/api/v2/link/analytics", {
                headers: { Authorization: `Bearer ${token}` },
            });

            console.log("API Response:", response.data);
            const analyticsData = response.data.analytics || [];

            const monthWiseClicks = {};
            analyticsData.forEach(({ createdAt, click_count }) => {
                const month = new Date(createdAt).toLocaleString("default", { month: "short", year: "numeric" });
                monthWiseClicks[month] = (monthWiseClicks[month] || 0) + click_count;
            });

            setMonthlyClicks(Object.keys(monthWiseClicks).map(month => ({ month, totalClicks: monthWiseClicks[month] })));
            setData(analyticsData);
        } catch (error) {
            console.error("Error fetching analytics:", error);
            setData([]);
            setMonthlyClicks([]);
        }
    };

    return (
        <div className="dashboard">
            <h2>Analytics</h2>

            {data.length > 0 ? (
                <>
                    <h3>Total Clicks Over Time</h3>
                    <LineChart width={600} height={300} data={monthlyClicks}>
                        <XAxis dataKey="month" />
                        <YAxis />
                        <CartesianGrid strokeDasharray="3 3" />
                        <Tooltip />
                        <Line type="monotone" dataKey="totalClicks" stroke="#8884d8" />
                    </LineChart>

                    <h3>Clicks per Link</h3>
                    <PieChart width={400} height={400}>
                        <Pie 
                            data={data.map((item, index) => ({
                                name: linkNames[index] || `Link ${index}`,
                                value: item.click_count
                            }))}
                            cx="50%"
                            cy="50%"
                            outerRadius={120}
                            fill="#8884d8"
                            dataKey="value"
                            label
                        >
                            {data.map((_, index) => (
                                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                            ))}
                        </Pie>
                        <Tooltip />
                        <Legend />
                    </PieChart>
                </>
            ) : (
                <p>No data available</p>
            )}
        </div>
    );
};

export default Analytics;

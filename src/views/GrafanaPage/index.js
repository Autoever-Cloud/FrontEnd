import React, { useEffect, useState } from "react";

export default function GrafanaPage() {
    const [embedUrl, setEmbedUrl] = useState(null);
    const dashboardUid = "infra-service-observability-full";
    const API_BASE_URL = process.env.REACT_APP_PROD_BASE_URL;

    useEffect(() => {
        fetch(`${API_BASE_URL}/api/grafana/embed/${dashboardUid}`)
            .then((res) => res.text())
            .then((url) => {
                console.log("받아온 embed URL:", url);
                setEmbedUrl(url); // 이 URL을 iframe src로 써야 함
            })
            .catch((err) => console.error("Failed to load dashboard:", err));
    }, []);

    if (!embedUrl) return <p>Loading dashboard...</p>;

    return (
        <div style={{ padding: '20px' }}>
        <h1 style={{ marginBottom: '30px', color: 'white' }}>📊 통합 매트릭 모니터링 대시보드</h1>
            <div style={{ border: '1px solid #eee', borderRadius: '8px', padding: '16px', marginBottom: '24px', background: '#fff' }}>
                <h3 style={{ marginTop: 0 }}>[Metric] 통합 대시보드</h3>
                <iframe
                    src={embedUrl}
                    width="100%"
                    height="600px"
                    style={{ border: 'none' }}
                    loading="lazy"
                ></iframe>
            </div> 
        </div>
    );
}

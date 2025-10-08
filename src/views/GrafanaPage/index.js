import React, { useEffect, useState } from "react";

export default function GrafanaPage() {
    const [embedUrl, setEmbedUrl] = useState(null);
    const dashboardUid = "infra-service-observability-full";

    useEffect(() => {
        // ✅ 백엔드에서 URL 문자열 받아오기
        fetch(`http://localhost:8080/api/grafana/embed/${dashboardUid}`)
            .then((res) => res.text())
            .then((url) => {
                console.log("✅ 받아온 embed URL:", url);
                setEmbedUrl(url); // 이 URL을 iframe src로 써야 함
            })
            .catch((err) => console.error("❌ Failed to load dashboard:", err));
    }, []);

    if (!embedUrl) return <p>Loading dashboard...</p>;

    return (
        <div style={{ width: "100%", height: "100vh" }}>
            <h2>📊 Grafana 대시보드</h2>
            <iframe
                src={embedUrl} // ✅ 여기서 사용!
                width="100%"
                height="90%"
                frameBorder="0"
                title="Grafana Dashboard"
                style={{
                    border: "1px solid #ccc",
                    borderRadius: "8px",
                    boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
                }}
            ></iframe>
        </div>
    );
}

 

export default function data() {

    const dummyData = [
    {
        id: 1,
        notificationTitle: "[Grafana] CPU 사용률이 90%를 초과했습니다 !!!",
        notificationTime: "2025.10.12 09:47:32",
        content: {
            title: "[긴급] Grafana 인스턴스 CPU 사용률 임계치 초과",
            timestamp: "2025-10-12 09:47:32 UTC",
            alertTime: "2025-10-12 09:47:31.918048739 UTC",
            log: `{ "alert_name": "High CPU Usage", "instance": "grafana-prod-01", "value": 92.5, "threshold": 90.0 }`,
            details: "인스턴스: Grafana-Prod-01\n현재 CPU 사용률: 92.5%\n요약: High CPU Usage Notification",
            guide: [
                "CPU 사용률이 90% 이상인 인스턴스의 프로세스 상태를 점검하세요.",
                "불필요한 백그라운드 작업을 중단하거나, 리소스 할당량을 조정하세요.",
                "필요 시 워크로드를 다른 노드로 분산하거나 스케일 아웃을 고려하세요."
            ]
        }
    },
    {
        id: 2,
        notificationTitle: "[Prometheus] Memory 사용량 85% 초과",
        notificationTime: "2025.10.12 09:45:11",
        content: {
            title: "[주의] Prometheus 서버 메모리 사용량 임계치 근접",
            timestamp: "2025-10-12 09:45:11 UTC",
            alertTime: "2025-10-12 09:45:10.123456789 UTC",
            log: `{ "alert_name": "High Memory Usage", "instance": "prometheus-server", "value": 86.1, "threshold": 85.0 }`,
            details: "인스턴스: prometheus-server\n현재 Memory 사용률: 86.1%\n요약: High Memory Usage Notification",
            guide: [
                "메모리 누수(Memory Leak)가 의심되는 프로세스를 확인하세요.",
                "메모리 할당량(request/limit)이 적절한지 검토하세요.",
                "장기적으로 메모리 용량 증설 계획을 수립하세요."
            ]
        }
    },
    // ... 다른 더미 데이터 추가 가능
];
    return (
        dummyData       
    )
}
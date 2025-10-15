// BookingRestauantList 화면 불러옴
import React from "react";
import KibanaDashboard from "./kibanaDashboard";

export default function KibanaPage(){
    // 각 대시보드의 Iframe URL을 변수로 저장합니다.
  const securityDashboardUrl = "https://172.20.10.4:5601/app/dashboards#/view/772c58ac-624c-4a7d-ae3d-249593574099?embed=true&_g=(refreshInterval%3A(pause%3A!t%2Cvalue%3A60000)%2Ctime%3A(from%3Anow-15m%2Cto%3Anow))&show-time-filter=true";
  const infraDashboardUrl = "https://172.20.10.4:5601/app/dashboards#/view/6f538116-a651-4d9f-927a-b647def372ba?embed=true&_g=(refreshInterval%3A(pause%3A!t%2Cvalue%3A60000)%2Ctime%3A(from%3Anow-15m%2Cto%3Anow))&show-time-filter=true";
  const apiDashboardUrl = "https://172.20.10.4:5601/app/dashboards#/view/6d0771c6-d029-4837-bf59-7c81123dd898?embed=true&_g=(refreshInterval%3A(pause%3A!t%2Cvalue%3A60000)%2Ctime%3A(from%3Anow-15m%2Cto%3Anow))&show-time-filter=true";

    return (
        <div style={{ padding: '20px' }}>
      <h1 style={{ marginBottom: '30px' }}>🚀 통합 로그 모니터링 대시보드</h1>
      
      <KibanaDashboard
        src={securityDashboardUrl}
        title="[Security] 보안 감사 대시보드"
      />
      
      <KibanaDashboard
        src={infraDashboardUrl}
        title="[System] 인프라 상태 대시보드"
      />
      
      <KibanaDashboard
        src={apiDashboardUrl}
        title="[API] 서비스 현황 대시보드"
      />
    </div>
  );
}
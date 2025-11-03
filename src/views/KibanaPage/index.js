// BookingRestauantList 화면 불러옴
import React from "react";
import KibanaDashboard from "./kibanaDashboard";

export default function KibanaPage(){
    // 각 대시보드의 Iframe URL을 변수로 저장합니다.
  const kibana_url = process.env.REACT_APP_KIBANA_URL;
  const securityDashboardUrl = `${kibana_url}/app/dashboards#/view/45856c35-f452-439b-82ea-0404357a2db1?embed=true&_g=(refreshInterval%3A(pause%3A!t%2Cvalue%3A60000)%2Ctime%3A(from%3Anow-15m%2Cto%3Anow))&show-time-filter=true`;
  const infraDashboardUrl = `${kibana_url}/app/dashboards#/view/da7f37b2-3f6d-41ac-94ba-543b444c0c21?embed=true&_g=(refreshInterval%3A(pause%3A!t%2Cvalue%3A60000)%2Ctime%3A(from%3Anow-15m%2Cto%3Anow))&show-time-filter=true`;
  const apiDashboardUrl = `${kibana_url}/app/dashboards#/view/69b1ad35-0a36-4855-b982-d2d8f2b21738?embed=true&_g=(refreshInterval%3A(pause%3A!t%2Cvalue%3A60000)%2Ctime%3A(from%3Anow-15m%2Cto%3Anow))&show-time-filter=true`;

  return (
    <div style={{ padding: '20px' }}>
      <h1 style={{ marginBottom: '30px', color: 'white' }}>통합 로그 모니터링 대시보드</h1>
      
      <KibanaDashboard
        src={securityDashboardUrl}
        title="[Security] 보안 감사 대시보드"
      />S
      
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

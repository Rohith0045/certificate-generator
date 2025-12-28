import React, { useState } from 'react';
import CertificateForm from './components/CertificateForm';
import CertificatePreview from './components/CertificatePreview';
import { generatePDF } from './utils/pdfGenerator';
import './index.css';

function App() {
  const [certificateData, setCertificateData] = useState({
    recipientName: '',
    courseTitle: '',
    instructorName: '',
    directorName: '',
    date: new Date().toISOString().split('T')[0],
    description: 'For successfully completing the comprehensive course requirements with excellence.',
  });

  const handleDownload = () => {
    generatePDF('certificate-preview', `${certificateData.recipientName || 'certificate'}.pdf`);
  };

  return (
    <div className="container">
      <header style={{ width: '100%', marginBottom: '20px' }}>
        <h1>Certificate Generator</h1>
      </header>

      <div style={{ flex: 1, minWidth: '300px', display: 'flex', flexDirection: 'column', gap: '20px' }}>
        <CertificateForm
          data={certificateData}
          onChange={setCertificateData}
        />
        <button className="btn" onClick={handleDownload} style={{ width: '100%', justifyContent: 'center' }}>
          <span>Download PDF</span>
          <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="currentColor"><path d="M480-320 280-520l56-58 104 104v-326h80v326l104-104 56 58-200 200ZM240-160q-33 0-56.5-23.5T160-240v-120h80v120h480v-120h80v120q0 33-23.5 56.5T720-160H240Z" /></svg>
        </button>
      </div>

      <div style={{ flex: 2, display: 'flex', justifyContent: 'center', alignItems: 'flex-start' }}>
        <CertificatePreview
          data={certificateData}
          id="certificate-preview"
        />
      </div>
    </div>
  );
}

export default App;

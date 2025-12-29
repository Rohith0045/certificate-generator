import React from 'react';

const CertificatePreview = ({ data, id }) => {
    const { template, logo } = data;

    return (
        <div style={{ overflow: 'auto', padding: '20px' }}>
            <div id={id} className={`certificate-container ${template || 'classic'}`}>
                <div className="certificate-border"></div>

                {logo && <img src={logo} alt="Logo" className="cert-logo" />}

                <h1 className="cert-header">Certificate of Appreciation</h1>

                <p className="cert-body">This certificate is proudly presented to</p>

                <div className="cert-name">{data.recipientName || '[Recipient Name]'}</div>

                <p className="cert-body">
                    {data.description || 'For successfully completing the course'}
                </p>

                <div className="cert-course">{data.courseTitle || '[Course Title]'}</div>

                <p className="cert-body">on {data.date || '[Date]'}</p>

                <div className="cert-footer">
                    <div className="signature-section">
                        <div className="signature-line">{data.instructorName || '[Instructor]'}</div>
                        <div>Instructor</div>
                    </div>
                    <div className="signature-section">
                        <div className="signature-line">{data.directorName || '[Director]'}</div>
                        <div>Director</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CertificatePreview;

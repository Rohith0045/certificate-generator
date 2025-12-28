import React from 'react';

const CertificateForm = ({ data, onChange }) => {
    const handleChange = (e) => {
        const { name, value } = e.target;
        onChange({ ...data, [name]: value });
    };

    return (
        <div className="glass-panel">
            <h2>Certificate Details</h2>
            <div className="input-group">
                <label className="input-label">Recipient Name</label>
                <input
                    type="text"
                    name="recipientName"
                    value={data.recipientName}
                    onChange={handleChange}
                    className="input-field"
                    placeholder="e.g. John Doe"
                />
            </div>
            <div className="input-group">
                <label className="input-label">Course Title</label>
                <input
                    type="text"
                    name="courseTitle"
                    value={data.courseTitle}
                    onChange={handleChange}
                    className="input-field"
                    placeholder="e.g. Advanced Web Development"
                />
            </div>
            <div className="input-group">
                <label className="input-label">Instructor Name</label>
                <input
                    type="text"
                    name="instructorName"
                    value={data.instructorName}
                    onChange={handleChange}
                    className="input-field"
                    placeholder="e.g. Jane Smith"
                />
            </div>
            <div className="input-group">
                <label className="input-label">Date</label>
                <input
                    type="date"
                    name="date"
                    value={data.date}
                    onChange={handleChange}
                    className="input-field"
                />
            </div>
            <div className="input-group">
                <label className="input-label">Description (Optional)</label>
                <textarea
                    name="description"
                    value={data.description}
                    onChange={handleChange}
                    className="input-field"
                    rows="3"
                    placeholder="For successfully completing..."
                />
            </div>
        </div>
    );
};

export default CertificateForm;

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
                <label className="input-label">Select Template</label>
                <select
                    name="template"
                    value={data.template}
                    onChange={handleChange}
                    className="input-field"
                >
                    <option value="classic">Classic Serif</option>
                    <option value="modern">Modern Tech</option>
                    <option value="minimal">Minimal Clean</option>
                    <option value="elegant">Elegant Gold</option>
                    <option value="creative">Creative Dark</option>
                </select>
            </div>

            <div className="input-group">
                <label className="input-label">Upload Logo</label>
                <input
                    type="file"
                    accept="image/*"
                    onChange={(e) => {
                        const file = e.target.files[0];
                        if (file) {
                            const reader = new FileReader();
                            reader.onloadend = () => {
                                onChange({ ...data, logo: reader.result });
                            };
                            reader.readAsDataURL(file);
                        }
                    }}
                    className="input-field"
                />
            </div>

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
                <label className="input-label">Director Name</label>
                <input
                    type="text"
                    name="directorName"
                    value={data.directorName}
                    onChange={handleChange}
                    className="input-field"
                    placeholder="e.g. Director Name"
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

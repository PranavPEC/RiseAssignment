import React from "react";
import "./FormSection.css";

const FormSection = () => {
  return (
    <div className="form-container">
      <h2 className="form-header">File your Claim (Approx 5 Minutes)</h2>
      <div className="form-grid">
        {/* Claim Value */}
        <div className="form-group">
          <label htmlFor="contractValue">Contract Value</label>
          <input
            type="text"
            id="contractValue"
            placeholder="Enter Contract Value (e.g. $10,000)"
          />
        </div>
        <div className="form-group">
          <label htmlFor="claimValue">Claim Value</label>
          <input
            type="text"
            id="claimValue"
            placeholder="Enter Claim Value (e.g. $15,000)"
          />
        </div>

        {/* Place Selection with Checkboxes */}
        <div className="form-group-wide">
          <label>Select Places for Proceedings</label>
          <div className="checkbox-group">
            <div className="checkbox-item">
              <input type="checkbox" id="place-us" />
              <label htmlFor="place-us">United States</label>
            </div>
            <div className="checkbox-item">
              <input type="checkbox" id="place-uk" />
              <label htmlFor="place-uk">United Kingdom</label>
            </div>
            <div className="checkbox-item">
              <input type="checkbox" id="place-india" />
              <label htmlFor="place-india">India</label>
            </div>
            <div className="checkbox-item">
              <input type="checkbox" id="place-other" />
              <label htmlFor="place-other">Other</label>
            </div>
          </div>
        </div>

        {/* Language */}
        <div className="form-group">
          <label>Language</label>
          <select>
            <option value="">Select Language</option>
            <option value="english">English</option>
            <option value="spanish">Spanish</option>
          </select>
        </div>

        {/* Statement Section */}
        <div className="form-group-wide">
          <label>Statement</label>
          <textarea placeholder="Write your statement here..." />
          <div className="file-upload">
            <label htmlFor="statementUpload" className="upload-btn">
              <span>Upload Statement (PDF)</span>
              <input type="file" id="statementUpload" accept=".pdf" />
            </label>
          </div>
        </div>

        {/* Agreement under Disputes Section */}
        <div className="form-group-wide">
          <label>Agreement under Disputes</label>
          <div className="file-upload-grid">
            <div>
              <label htmlFor="contractUpload" className="upload-btn">
                <span>Upload Contract (Max 2MB, PDF)</span>
                <input type="file" id="contractUpload" accept=".pdf" />
              </label>
            </div>
            <div>
              <label htmlFor="arbitrationUpload" className="upload-btn">
                <span>Upload Arbitration Agreement (Max 2MB, PDF)</span>
                <input type="file" id="arbitrationUpload" accept=".pdf" />
              </label>
            </div>
          </div>
        </div>

        {/* Additional Documentation Section */}
        <div className="form-group-wide">
          <label>Additional Documentation</label>
          <div className="file-upload">
            <label htmlFor="additionalUpload" className="upload-btn">
              <span>Upload Additional Documentation (Max 5MB)</span>
              <input type="file" id="additionalUpload" accept=".pdf" />
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormSection;

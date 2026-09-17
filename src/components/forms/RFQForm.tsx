import React, { useState } from 'react';
import { Upload, CheckCircle2, AlertCircle, ArrowRight, FileText, X } from 'lucide-react';
import './RFQForm.css';

interface FormData {
  fullName: string;
  companyName: string;
  email: string;
  phone: string;
  country: string;
  requirementType: string;
  productComponent: string;
  material: string;
  quantity: string;
  message: string;
  consent: boolean;
}

interface FormErrors {
  fullName?: string;
  email?: string;
  phone?: string;
  message?: string;
  consent?: string;
  file?: string;
}

export const RFQForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    companyName: '',
    email: '',
    phone: '',
    country: 'India',
    requirementType: 'Machined Components',
    productComponent: '',
    material: 'Stainless Steel',
    quantity: '',
    message: '',
    consent: true
  });

  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const validate = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Full Name is required.';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email address is required.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address.';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required.';
    } else if (!/^[+0-9\s-]{7,18}$/.test(formData.phone)) {
      newErrors.phone = 'Please enter a valid phone number.';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Please describe your requirement or specifications.';
    }

    if (!formData.consent) {
      newErrors.consent = 'Please agree to contact terms to proceed.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    if (type === 'checkbox') {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData(prev => ({ ...prev, [name]: checked }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }

    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      // Max 25MB check
      if (file.size > 25 * 1024 * 1024) {
        setErrors(prev => ({ ...prev, file: 'File size must be under 25MB.' }));
        return;
      }
      setSelectedFile(file);
      setErrors(prev => ({ ...prev, file: undefined }));
    }
  };

  const handleRemoveFile = () => {
    setSelectedFile(null);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    // Phase 1 Frontend simulation of form processing
    // Note: Backend SMTP / Admin email routing will be connected in Phase 3.
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 1200);
  };

  const handleReset = () => {
    setFormData({
      fullName: '',
      companyName: '',
      email: '',
      phone: '',
      country: 'India',
      requirementType: 'Machined Components',
      productComponent: '',
      material: 'Stainless Steel',
      quantity: '',
      message: '',
      consent: true
    });
    setSelectedFile(null);
    setErrors({});
    setIsSuccess(false);
  };

  if (isSuccess) {
    return (
      <div className="rfq-success-card">
        <div className="rfq-success-icon">
          <CheckCircle2 size={56} className="text-orange" />
        </div>
        <h3 className="rfq-success-title">Requirement Received Successfully</h3>
        <p className="rfq-success-desc">
          Thank you for sharing your manufacturing requirement. Our technical engineering team at Maruti Engineering (Vadodara) will review your drawing/specifications and connect with you shortly with feasibility details and quotation.
        </p>
        <div className="rfq-summary-box">
          <p><strong>Name:</strong> {formData.fullName}</p>
          <p><strong>Email:</strong> {formData.email}</p>
          <p><strong>Requirement:</strong> {formData.requirementType} ({formData.material})</p>
          {selectedFile && <p><strong>Drawing Attached:</strong> {selectedFile.name}</p>}
        </div>
        <button type="button" onClick={handleReset} className="btn btn-primary">
          <span>Submit Another Requirement</span>
          <ArrowRight size={16} />
        </button>
      </div>
    );
  }

  return (
    <form className="rfq-form-container" onSubmit={handleSubmit} noValidate>
      <div className="rfq-form-header">
        <h3 className="rfq-form-title">Request a Technical Quote (RFQ)</h3>
        <p className="rfq-form-subtitle">
          Share your 2D/3D drawings, material specs, and batch requirements. We review and respond with comprehensive engineering feasibility.
        </p>
      </div>

      <div className="rfq-form-grid">
        {/* Full Name */}
        <div className="form-group">
          <label htmlFor="fullName" className="form-label">
            Full Name <span className="req">*</span>
          </label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            value={formData.fullName}
            onChange={handleInputChange}
            placeholder="e.g. Rajesh Sharma"
            className={`form-input ${errors.fullName ? 'is-error' : ''}`}
          />
          {errors.fullName && <span className="form-error-msg"><AlertCircle size={13} /> {errors.fullName}</span>}
        </div>

        {/* Company Name */}
        <div className="form-group">
          <label htmlFor="companyName" className="form-label">Company Name</label>
          <input
            type="text"
            id="companyName"
            name="companyName"
            value={formData.companyName}
            onChange={handleInputChange}
            placeholder="e.g. Precision Systems Ltd."
            className="form-input"
          />
        </div>

        {/* Email Address */}
        <div className="form-group">
          <label htmlFor="email" className="form-label">
            Email Address <span className="req">*</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            placeholder="name@company.com"
            className={`form-input ${errors.email ? 'is-error' : ''}`}
          />
          {errors.email && <span className="form-error-msg"><AlertCircle size={13} /> {errors.email}</span>}
        </div>

        {/* Phone Number */}
        <div className="form-group">
          <label htmlFor="phone" className="form-label">
            Phone / WhatsApp <span className="req">*</span>
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleInputChange}
            placeholder="+91 98765 43210"
            className={`form-input ${errors.phone ? 'is-error' : ''}`}
          />
          {errors.phone && <span className="form-error-msg"><AlertCircle size={13} /> {errors.phone}</span>}
        </div>

        {/* Country */}
        <div className="form-group">
          <label htmlFor="country" className="form-label">Country</label>
          <input
            type="text"
            id="country"
            name="country"
            value={formData.country}
            onChange={handleInputChange}
            placeholder="India / Export Country"
            className="form-input"
          />
        </div>

        {/* Requirement Type */}
        <div className="form-group">
          <label htmlFor="requirementType" className="form-label">Requirement Type</label>
          <select
            id="requirementType"
            name="requirementType"
            value={formData.requirementType}
            onChange={handleInputChange}
            className="form-select"
          >
            <option value="Machined Components">Machined Components (Turning/Milling)</option>
            <option value="Assemblies">Assemblies & Sub-Units</option>
            <option value="Tooling">Tooling Components & Dies</option>
            <option value="Jigs & Fixtures">Jigs & Fixtures</option>
            <option value="Laser Cutting & Fabrication">Laser Cutting & Fabrication</option>
            <option value="Custom Engineering Parts">Custom Engineering Parts</option>
          </select>
        </div>

        {/* Material */}
        <div className="form-group">
          <label htmlFor="material" className="form-label">Material Required</label>
          <select
            id="material"
            name="material"
            value={formData.material}
            onChange={handleInputChange}
            className="form-select"
          >
            <option value="Stainless Steel">Stainless Steel (SS 304, 316, 316L, 410)</option>
            <option value="Alloy Steel">Alloy Steel (EN8, EN19, EN24, EN31)</option>
            <option value="Aluminium">Aluminium (6061, 6082, 7075)</option>
            <option value="Brass">Brass (IS 319, High Tensile)</option>
            <option value="Copper">Copper (ETP / OFC)</option>
            <option value="Hardox">Hardox (400, 450, 500)</option>
            <option value="Customer Specified">Other / Specified in Drawing</option>
          </select>
        </div>

        {/* Approximate Quantity */}
        <div className="form-group">
          <label htmlFor="quantity" className="form-label">Approximate Quantity / Batch Size</label>
          <input
            type="text"
            id="quantity"
            name="quantity"
            value={formData.quantity}
            onChange={handleInputChange}
            placeholder="e.g. 50 pcs / Monthly 500 pcs / Prototype"
            className="form-input"
          />
        </div>
      </div>

      {/* Product / Component Name */}
      <div className="form-group form-group-full">
        <label htmlFor="productComponent" className="form-label">Component / Part Description</label>
        <input
          type="text"
          id="productComponent"
          name="productComponent"
          value={formData.productComponent}
          onChange={handleInputChange}
          placeholder="e.g. Flanged Bearing Housing / Precision Shaft / Impeller Adapter"
          className="form-input"
        />
      </div>

      {/* Message / Requirement */}
      <div className="form-group form-group-full">
        <label htmlFor="message" className="form-label">
          Detailed Specifications & Notes <span className="req">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          value={formData.message}
          onChange={handleInputChange}
          placeholder="Specify key dimensions, tolerances (e.g. ±0.01mm), surface finish, heat treatment, delivery timeline, or special testing requirements..."
          className={`form-textarea ${errors.message ? 'is-error' : ''}`}
        />
        {errors.message && <span className="form-error-msg"><AlertCircle size={13} /> {errors.message}</span>}
      </div>

      {/* File Upload UI */}
      <div className="form-group form-group-full">
        <label className="form-label">Upload Technical Drawing / Document (PDF, DWG, STEP, ZIP, max 25MB)</label>
        {!selectedFile ? (
          <div className="file-dropzone">
            <input
              type="file"
              id="fileUpload"
              onChange={handleFileChange}
              accept=".pdf,.dwg,.dxf,.step,.stp,.iges,.igs,.zip,.rar,.png,.jpg,.jpeg"
              className="file-input-hidden"
            />
            <label htmlFor="fileUpload" className="file-dropzone-label">
              <Upload size={24} className="file-upload-icon text-orange" />
              <span className="file-upload-main">Click to browse or drag drawing file here</span>
              <span className="file-upload-hint">Supported formats: PDF, DWG, STEP, DXF, IGES, ZIP (Up to 25MB)</span>
            </label>
          </div>
        ) : (
          <div className="selected-file-card">
            <FileText size={22} className="text-orange" />
            <div className="selected-file-info">
              <span className="selected-file-name">{selectedFile.name}</span>
              <span className="selected-file-size">{(selectedFile.size / (1024 * 1024)).toFixed(2)} MB</span>
            </div>
            <button type="button" onClick={handleRemoveFile} className="file-remove-btn" title="Remove file">
              <X size={18} />
            </button>
          </div>
        )}
        {errors.file && <span className="form-error-msg"><AlertCircle size={13} /> {errors.file}</span>}
      </div>

      {/* Consent Checkbox */}
      <div className="form-group form-group-full">
        <label className="consent-checkbox-label">
          <input
            type="checkbox"
            name="consent"
            checked={formData.consent}
            onChange={handleInputChange}
            className="form-checkbox"
          />
          <span>I consent to Maruti Engineering reviewing my technical drawing and contacting me regarding this manufacturing requirement.</span>
        </label>
        {errors.consent && <span className="form-error-msg"><AlertCircle size={13} /> {errors.consent}</span>}
      </div>

      {/* Submit Button */}
      <div className="rfq-submit-wrap">
        <button type="submit" disabled={isSubmitting} className="btn btn-primary btn-lg rfq-submit-btn">
          {isSubmitting ? (
            <span>Processing Requirement...</span>
          ) : (
            <>
              <span>Send Requirement</span>
              <ArrowRight size={18} />
            </>
          )}
        </button>
        <span className="rfq-confidential-note">
          🔒 Strict NDA & drawing confidentiality maintained.
        </span>
      </div>
    </form>
  );
};

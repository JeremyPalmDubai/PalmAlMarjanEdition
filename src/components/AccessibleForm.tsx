import React, { useState, useRef } from 'react';
import { AlertCircle, CheckCircle, Eye, EyeOff } from 'lucide-react';

interface FormField {
  id: string;
  name: string;
  type: 'text' | 'email' | 'tel' | 'password' | 'textarea' | 'select';
  label: string;
  placeholder?: string;
  required?: boolean;
  options?: { value: string; label: string }[];
  validation?: (value: string) => string | null;
  helpText?: string;
  autoComplete?: string;
}

interface AccessibleFormProps {
  fields: FormField[];
  onSubmit: (data: { [key: string]: string }) => Promise<void>;
  submitText?: string;
  className?: string;
}

export const AccessibleForm: React.FC<AccessibleFormProps> = ({
  fields,
  onSubmit,
  submitText = 'Submit',
  className = ''
}) => {
  const [formData, setFormData] = useState<{ [key: string]: string }>({});
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [showPasswords, setShowPasswords] = useState<{ [key: string]: boolean }>({});
  const formRef = useRef<HTMLFormElement>(null);

  // Handle input change
  const handleChange = (fieldId: string, value: string) => {
    setFormData(prev => ({ ...prev, [fieldId]: value }));
    
    // Clear error when user starts typing
    if (errors[fieldId]) {
      setErrors(prev => ({ ...prev, [fieldId]: '' }));
    }
    
    // Real-time validation
    const field = fields.find(f => f.id === fieldId);
    if (field?.validation) {
      const error = field.validation(value);
      if (error) {
        setErrors(prev => ({ ...prev, [fieldId]: error }));
      }
    }
  };

  // Validate form
  const validateForm = () => {
    const newErrors: { [key: string]: string } = {};
    
    fields.forEach(field => {
      const value = formData[field.id] || '';
      
      // Required field validation
      if (field.required && !value.trim()) {
        newErrors[field.id] = `${field.label} is required`;
        return;
      }
      
      // Custom validation
      if (field.validation && value) {
        const error = field.validation(value);
        if (error) {
          newErrors[field.id] = error;
        }
      }
      
      // Built-in validation
      if (field.type === 'email' && value) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(value)) {
          newErrors[field.id] = 'Please enter a valid email address';
        }
      }
      
      if (field.type === 'tel' && value) {
        const phoneRegex = /^[+]?[1-9][\d]{0,15}$/;
        if (!phoneRegex.test(value.replace(/\s/g, ''))) {
          newErrors[field.id] = 'Please enter a valid phone number';
        }
      }
    });
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle form submission
  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    
    if (!validateForm()) {
      // Focus first error field
      const firstErrorField = Object.keys(errors)[0];
      if (firstErrorField) {
        const errorElement = document.getElementById(firstErrorField);
        errorElement?.focus();
      }
      return;
    }
    
    setIsSubmitting(true);
    setSubmitStatus('idle');
    
    try {
      await onSubmit(formData);
      setSubmitStatus('success');
      
      // Announce success to screen readers
      const announcement = document.createElement('div');
      announcement.setAttribute('aria-live', 'polite');
      announcement.className = 'sr-only';
      announcement.textContent = 'Form submitted successfully!';
      document.body.appendChild(announcement);
      setTimeout(() => document.body.removeChild(announcement), 3000);
      
    } catch {
      setSubmitStatus('error');
      
      // Announce error to screen readers
      const announcement = document.createElement('div');
      announcement.setAttribute('aria-live', 'assertive');
      announcement.className = 'sr-only';
      announcement.textContent = 'Form submission failed. Please try again.';
      document.body.appendChild(announcement);
      setTimeout(() => document.body.removeChild(announcement), 3000);
    } finally {
      setIsSubmitting(false);
    }
  };

  // Toggle password visibility
  const togglePasswordVisibility = (fieldId: string) => {
    setShowPasswords(prev => ({ ...prev, [fieldId]: !prev[fieldId] }));
  };

  // Render form field
  const renderField = (field: FormField) => {
    const hasError = !!errors[field.id];
    const fieldValue = formData[field.id] || '';
    const isPassword = field.type === 'password';
    const showPassword = showPasswords[field.id];

    return (
      <div key={field.id} className="space-y-2">
        <label
          htmlFor={field.id}
          className="block text-sm font-medium text-gray-700"
        >
          {field.label}
          {field.required && (
            <span className="text-red-500 ml-1" aria-label="required">*</span>
          )}
        </label>

        <div className="relative">
          {field.type === 'textarea' ? (
            <textarea
              id={field.id}
              name={field.name}
              value={fieldValue}
              onChange={(e) => handleChange(field.id, e.target.value)}
              placeholder={field.placeholder}
              required={field.required}
              autoComplete={field.autoComplete}
              rows={4}
              className={`w-full px-4 py-3 border rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-black focus:border-black resize-vertical ${
                hasError
                  ? 'border-red-500 focus:ring-red-500 focus:border-red-500'
                  : 'border-gray-300'
              }`}
              aria-describedby={`${field.id}-help ${hasError ? `${field.id}-error` : ''}`}
              aria-invalid={hasError}
            />
          ) : field.type === 'select' ? (
            <select
              id={field.id}
              name={field.name}
              value={fieldValue}
              onChange={(e) => handleChange(field.id, e.target.value)}
              required={field.required}
              autoComplete={field.autoComplete}
              className={`w-full px-4 py-3 border rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-black focus:border-black ${
                hasError
                  ? 'border-red-500 focus:ring-red-500 focus:border-red-500'
                  : 'border-gray-300'
              }`}
              aria-describedby={`${field.id}-help ${hasError ? `${field.id}-error` : ''}`}
              aria-invalid={hasError}
            >
              {field.placeholder && (
                <option value="" disabled>
                  {field.placeholder}
                </option>
              )}
              {field.options?.map(option => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          ) : (
            <>
              <input
                id={field.id}
                name={field.name}
                type={isPassword && showPassword ? 'text' : field.type}
                value={fieldValue}
                onChange={(e) => handleChange(field.id, e.target.value)}
                placeholder={field.placeholder}
                required={field.required}
                autoComplete={field.autoComplete}
                className={`w-full px-4 py-3 border rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-black focus:border-black ${
                  isPassword ? 'pr-12' : ''
                } ${
                  hasError
                    ? 'border-red-500 focus:ring-red-500 focus:border-red-500'
                    : 'border-gray-300'
                }`}
                aria-describedby={`${field.id}-help ${hasError ? `${field.id}-error` : ''}`}
                aria-invalid={hasError}
              />
              
              {/* Password visibility toggle */}
              {isPassword && (
                <button
                  type="button"
                  onClick={() => togglePasswordVisibility(field.id)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 w-8 h-8 flex items-center justify-center text-gray-500 hover:text-gray-700 focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2 rounded"
                  aria-label={showPassword ? 'Hide password' : 'Show password'}
                >
                  {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              )}
            </>
          )}
        </div>

        {/* Help text */}
        {field.helpText && (
          <p id={`${field.id}-help`} className="text-sm text-gray-600">
            {field.helpText}
          </p>
        )}

        {/* Error message */}
        {hasError && (
          <p
            id={`${field.id}-error`}
            className="text-sm text-red-600 flex items-center gap-1"
            role="alert"
          >
            <AlertCircle className="w-4 h-4 flex-shrink-0" />
            {errors[field.id]}
          </p>
        )}
      </div>
    );
  };

  return (
    <form
      ref={formRef}
      onSubmit={handleSubmit}
      className={`space-y-6 ${className}`}
      noValidate
    >
      {/* Form fields */}
      {fields.map(renderField)}

      {/* Submit section */}
      <div className="space-y-4">
        {/* Submit button */}
        <button
          type="submit"
          disabled={isSubmitting || submitStatus === 'success'}
          className="w-full tesla-btn-primary disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
        >
          {isSubmitting ? (
            <>
              <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
              Submitting...
            </>
          ) : submitStatus === 'success' ? (
            <>
              <CheckCircle className="w-4 h-4" />
              Submitted Successfully
            </>
          ) : (
            submitText
          )}
        </button>

        {/* Status messages */}
        {submitStatus === 'success' && (
          <div
            className="p-4 bg-green-50 border border-green-200 rounded-lg text-green-800 flex items-center gap-2"
            role="alert"
            aria-live="polite"
          >
            <CheckCircle className="w-5 h-5 flex-shrink-0" />
            <span>Your form has been submitted successfully!</span>
          </div>
        )}

        {submitStatus === 'error' && (
          <div
            className="p-4 bg-red-50 border border-red-200 rounded-lg text-red-800 flex items-center gap-2"
            role="alert"
            aria-live="assertive"
          >
            <AlertCircle className="w-5 h-5 flex-shrink-0" />
            <span>There was an error submitting your form. Please try again.</span>
          </div>
        )}
      </div>

      {/* Form instructions for screen readers */}
      <div className="sr-only">
        <p>
          Form with {fields.length} fields. Required fields are marked with an asterisk. 
          Error messages will appear below each field if validation fails.
        </p>
      </div>
    </form>
  );
};
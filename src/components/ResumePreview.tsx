// src/components/ResumePreview.tsx
'use client';
import { useRef } from 'react';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import { ResumeData } from '@/types/resume';

interface ResumePreviewProps {
  formData: ResumeData;
}

export default function ResumePreview({ formData }: ResumePreviewProps) {
  const resumeRef = useRef<HTMLDivElement>(null);

  const downloadPDF = async () => {
    if (!resumeRef.current) return;
    
    const element = resumeRef.current;
    const canvas = await html2canvas(element);
    const data = canvas.toDataURL('image/png');

    const pdf = new jsPDF();
    const imgProperties = pdf.getImageProperties(data);
    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = (imgProperties.height * pdfWidth) / imgProperties.width;

    pdf.addImage(data, 'PNG', 0, 0, pdfWidth, pdfHeight);
    pdf.save('resume.pdf');
  };

  return (
    <div>
      <button
        onClick={downloadPDF}
        className="mb-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        Download PDF
      </button>

      <div ref={resumeRef} className="bg-white p-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">{formData.personalInfo.name}</h1>
          <div className="text-gray-600">
            <p>{formData.personalInfo.email} | {formData.personalInfo.phone}</p>
            <p>{formData.personalInfo.location}</p>
          </div>
          <p className="mt-4">{formData.personalInfo.summary}</p>
        </div>

        {formData.experience.length > 0 && (
          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Experience</h2>
            {formData.experience.map((exp) => (
              <div key={exp.id} className="mb-4">
                <h3 className="font-bold">{exp.position}</h3>
                <p className="text-gray-600">{exp.company}</p>
                <p className="text-sm text-gray-500">
                  {exp.startDate} - {exp.endDate}
                </p>
                <p>{exp.description}</p>
              </div>
            ))}
          </div>
        )}

        {formData.education.length > 0 && (
          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Education</h2>
            {formData.education.map((edu) => (
              <div key={edu.id} className="mb-4">
                <h3 className="font-bold">{edu.institution}</h3>
                <p>{edu.degree}</p>
                <p className="text-sm text-gray-500">
                  Graduated: {edu.graduationDate} | GPA: {edu.gpa}
                </p>
              </div>
            ))}
          </div>
        )}

        {formData.skills.length > 0 && (
          <div>
            <h2 className="text-2xl font-bold mb-4">Skills</h2>
            <div className="flex flex-wrap gap-2">
              {formData.skills.map((skill, index) => (
                <span
                  key={index}
                  className="bg-gray-200 px-3 py-1 rounded"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
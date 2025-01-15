'use client';
import { useState } from 'react';
import ResumePreview from './ResumePreview';

interface FormData {
  personalInfo: {
    name: string;
    email: string;
    phone: string;
    location: string;
    summary: string;
  };
  experience: Array<{
    id: string;
    company: string;
    position: string;
    startDate: string;
    endDate: string;
    description: string;
  }>;
  education: Array<{
    id: string;
    institution: string;
    degree: string;
    graduationDate: string;
    gpa: string;
  }>;
  skills: string[];
}

const initialFormData: FormData = {
  personalInfo: {
    name: '',
    email: '',
    phone: '',
    location: '',
    summary: '',
  },
  experience: [{
    id: '1',
    company: '',
    position: '',
    startDate: '',
    endDate: '',
    description: ''
  }],
  education: [{
    id: '1',
    institution: '',
    degree: '',
    graduationDate: '',
    gpa: ''
  }],
  skills: []
};

export default function ResumeBuilder() {
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [newSkill, setNewSkill] = useState('');
  const [showPreview, setShowPreview] = useState(false);

  const handlePersonalInfoChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      personalInfo: {
        ...formData.personalInfo,
        [e.target.name]: e.target.value,
      },
    });
  };

  const handleExperienceChange = (id: string, field: string, value: string) => {
    setFormData({
      ...formData,
      experience: formData.experience.map(exp =>
        exp.id === id ? { ...exp, [field]: value } : exp
      ),
    });
  };

  const handleEducationChange = (id: string, field: string, value: string) => {
    setFormData({
      ...formData,
      education: formData.education.map(edu =>
        edu.id === id ? { ...edu, [field]: value } : edu
      ),
    });
  };

  const addExperience = () => {
    setFormData({
      ...formData,
      experience: [
        ...formData.experience,
        {
          id: Date.now().toString(),
          company: '',
          position: '',
          startDate: '',
          endDate: '',
          description: '',
        },
      ],
    });
  };

  const addEducation = () => {
    setFormData({
      ...formData,
      education: [
        ...formData.education,
        {
          id: Date.now().toString(),
          institution: '',
          degree: '',
          graduationDate: '',
          gpa: '',
        },
      ],
    });
  };

  const addSkill = (e: React.FormEvent) => {
    e.preventDefault();
    if (newSkill && !formData.skills.includes(newSkill)) {
      setFormData({
        ...formData,
        skills: [...formData.skills, newSkill],
      });
      setNewSkill('');
    }
  };

  const removeSkill = (skillToRemove: string) => {
    setFormData({
      ...formData,
      skills: formData.skills.filter(skill => skill !== skillToRemove),
    });
  };

  return (
    <div className="max-w-4xl mx-auto">
      {!showPreview ? (
        <div className="bg-white p-6 rounded-lg shadow-md space-y-8">
          {/* Personal Information */}
          <section>
            <h2 className="text-xl font-semibold mb-4">Personal Information</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block mb-1">Full Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.personalInfo.name}
                  onChange={handlePersonalInfoChange}
                  className="w-full px-3 py-2 border rounded"
                />
              </div>
              <div>
                <label className="block mb-1">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.personalInfo.email}
                  onChange={handlePersonalInfoChange}
                  className="w-full px-3 py-2 border rounded"
                />
              </div>
              <div>
                <label className="block mb-1">Phone</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.personalInfo.phone}
                  onChange={handlePersonalInfoChange}
                  className="w-full px-3 py-2 border rounded"
                />
              </div>
              <div>
                <label className="block mb-1">Location</label>
                <input
                  type="text"
                  name="location"
                  value={formData.personalInfo.location}
                  onChange={handlePersonalInfoChange}
                  className="w-full px-3 py-2 border rounded"
                />
              </div>
            </div>
            <div className="mt-4">
              <label className="block mb-1">Professional Summary</label>
              <textarea
                name="summary"
                value={formData.personalInfo.summary}
                onChange={handlePersonalInfoChange}
                className="w-full px-3 py-2 border rounded"
                rows={4}
              />
            </div>
          </section>

          {/* Work Experience */}
          <section>
            <h2 className="text-xl font-semibold mb-4">Work Experience</h2>
            {formData.experience.map((exp, index) => (
              <div key={exp.id} className="mb-6 p-4 border rounded">
                <h3 className="font-medium mb-2">Experience {index + 1}</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block mb-1">Company</label>
                    <input
                      type="text"
                      value={exp.company}
                      onChange={(e) => handleExperienceChange(exp.id, 'company', e.target.value)}
                      className="w-full px-3 py-2 border rounded"
                    />
                  </div>
                  <div>
                    <label className="block mb-1">Position</label>
                    <input
                      type="text"
                      value={exp.position}
                      onChange={(e) => handleExperienceChange(exp.id, 'position', e.target.value)}
                      className="w-full px-3 py-2 border rounded"
                    />
                  </div>
                  <div>
                    <label className="block mb-1">Start Date</label>
                    <input
                      type="date"
                      value={exp.startDate}
                      onChange={(e) => handleExperienceChange(exp.id, 'startDate', e.target.value)}
                      className="w-full px-3 py-2 border rounded"
                    />
                  </div>
                  <div>
                    <label className="block mb-1">End Date</label>
                    <input
                      type="date"
                      value={exp.endDate}
                      onChange={(e) => handleExperienceChange(exp.id, 'endDate', e.target.value)}
                      className="w-full px-3 py-2 border rounded"
                    />
                  </div>
                  <div className="md:col-span-2">
                    <label className="block mb-1">Description</label>
                    <textarea
                      value={exp.description}
                      onChange={(e) => handleExperienceChange(exp.id, 'description', e.target.value)}
                      className="w-full px-3 py-2 border rounded"
                      rows={3}
                    />
                  </div>
                </div>
              </div>
            ))}
            <button
              type="button"
              onClick={addExperience}
              className="text-blue-500 hover:text-blue-600"
            >
              + Add Another Experience
            </button>
          </section>

          {/* Education */}
          <section>
            <h2 className="text-xl font-semibold mb-4">Education</h2>
            {formData.education.map((edu, index) => (
              <div key={edu.id} className="mb-6 p-4 border rounded">
                <h3 className="font-medium mb-2">Education {index + 1}</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block mb-1">Institution</label>
                    <input
                      type="text"
                      value={edu.institution}
                      onChange={(e) => handleEducationChange(edu.id, 'institution', e.target.value)}
                      className="w-full px-3 py-2 border rounded"
                    />
                  </div>
                  <div>
                    <label className="block mb-1">Degree</label>
                    <input
                      type="text"
                      value={edu.degree}
                      onChange={(e) => handleEducationChange(edu.id, 'degree', e.target.value)}
                      className="w-full px-3 py-2 border rounded"
                    />
                  </div>
                  <div>
                    <label className="block mb-1">Graduation Date</label>
                    <input
                      type="date"
                      value={edu.graduationDate}
                      onChange={(e) => handleEducationChange(edu.id, 'graduationDate', e.target.value)}
                      className="w-full px-3 py-2 border rounded"
                    />
                  </div>
                  <div>
                    <label className="block mb-1">GPA</label>
                    <input
                      type="text"
                      value={edu.gpa}
                      onChange={(e) => handleEducationChange(edu.id, 'gpa', e.target.value)}
                      className="w-full px-3 py-2 border rounded"
                    />
                  </div>
                </div>
              </div>
            ))}
            <button
              type="button"
              onClick={addEducation}
              className="text-blue-500 hover:text-blue-600"
            >
              + Add Another Education
            </button>
          </section>

          {/* Skills */}
          <section>
            <h2 className="text-xl font-semibold mb-4">Skills</h2>
            <form onSubmit={addSkill} className="mb-4">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={newSkill}
                  onChange={(e) => setNewSkill(e.target.value)}
                  className="flex-1 px-3 py-2 border rounded"
                  placeholder="Enter a skill"
                />
                <button
                  type="submit"
                  className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                >
                  Add Skill
                </button>
              </div>
            </form>
            <div className="flex flex-wrap gap-2">
              {formData.skills.map((skill, index) => (
                <span
                  key={index}
                  className="bg-gray-200 px-3 py-1 rounded flex items-center gap-2"
                >
                  {skill}
                  <button
                    onClick={() => removeSkill(skill)}
                    className="text-red-500 hover:text-red-600"
                  >
                    ×
                  </button>
                </span>
              ))}
            </div>
          </section>

          <div className="flex justify-end mt-8">
            <button
              onClick={() => setShowPreview(true)}
              className="px-6 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            >
              Preview Resume
            </button>
          </div>
        </div>
      ) : (
        <div>
          <button
            onClick={() => setShowPreview(false)}
            className="mb-4 px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600"
          >
            Back to Edit
          </button>
          <ResumePreview formData={formData} />
        </div>
      )}
    </div>
  );
}

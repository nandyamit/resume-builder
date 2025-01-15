# Resume Builder

A modern, responsive web application built with Next.js that allows users to create and download professional resumes in PDF format.

## 🚀 Features

- Single-page resume builder interface
- Real-time preview
- PDF download functionality
- Responsive design
- Section-based form input
- Skills management with add/remove capability

## 📋 Sections

| Section | Features |
|---------|----------|
| Personal Information | Name, Email, Phone, Location, Professional Summary |
| Experience | Company, Position, Dates, Description |
| Education | Institution, Degree, Graduation Date, GPA |
| Skills | Add/Remove Skills |

## 🛠️ Technologies Used

| Technology | Version | Purpose |
|------------|---------|----------|
| Next.js | 14.1.0 | Framework |
| React | 18 | UI Library |
| TypeScript | 5 | Type Safety |
| Tailwind CSS | 3.3.0 | Styling |
| html2canvas | 1.4.1 | PDF Generation |
| jsPDF | 2.5.1 | PDF Generation |

## 🚀 Quick Start

1. **Clone the repository**
   ```bash
   git clone https://github.com/nandyamit/resume-builder
   ```

2. **Install dependencies**
   ```bash
   cd resume-builder
   npm install
   ```

3. **Run development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   ```
   http://localhost:3000
   ```

## 📁 Project Structure

```
resume-builder/
├── src/
│   ├── app/
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   └── page.tsx
│   ├── components/
│   │   ├── ResumeBuilder.tsx
│   │   └── ResumePreview.tsx
│   └── types/
│       └── resume.ts
└── [configuration files...]
```

## 💻 Component Overview

| Component | Purpose |
|-----------|----------|
| ResumeBuilder | Main form component with all input sections |
| ResumePreview | Displays resume preview and handles PDF generation |

## 🔍 Type Definitions

```typescript
interface PersonalInfo {
  name: string;
  email: string;
  phone: string;
  location: string;
  summary: string;
}

interface Experience {
  id: string;
  company: string;
  position: string;
  startDate: string;
  endDate: string;
  description: string;
}

interface Education {
  id: string;
  institution: string;
  degree: string;
  graduationDate: string;
  gpa: string;
}
```

## 🌐 Deployment

The application is deployed on Vercel. Visit [Resume Builder](https://vercel.com/amits-projects-78ff77ba/resume-builder) to see it live.

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License.

## 👥 Authors

- Amit Nandy - [GitHub Profile](https://github.com/nandyamit/resume-builder)

## 🙏 Acknowledgments

- Next.js team for the amazing framework
- Vercel for hosting

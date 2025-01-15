import ResumeBuilder from '@/components/ResumeBuilder';

export default function Home() {
  return (
    <main className="min-h-screen p-8 bg-gray-50">
      <h1 className="text-3xl font-bold mb-8 text-center">Resume Builder</h1>
      <ResumeBuilder />
    </main>
  );
}
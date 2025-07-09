
import { useState } from "react";
import Header from "@/components/Header";
import UploadSection from "@/components/UploadSection";
import ProcessingSection from "@/components/ProcessingSection";
import DownloadSection from "@/components/DownloadSection";
import Footer from "@/components/Footer";

type AppState = 'upload' | 'processing' | 'complete';

const Index = () => {
  const [appState, setAppState] = useState<AppState>('upload');
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);

  const handleFileUpload = (file: File) => {
    console.log('File uploaded:', file.name);
    setUploadedFile(file);
    setAppState('processing');
  };

  const handleProcessingComplete = () => {
    console.log('Processing completed');
    setAppState('complete');
  };

  const handleReset = () => {
    console.log('Resetting application');
    setAppState('upload');
    setUploadedFile(null);
  };

  return (
    <div className="min-h-screen">
      <Header />
      
      <main className="py-12">
        {appState === 'upload' && (
          <UploadSection 
            onFileUpload={handleFileUpload} 
            isProcessing={false}
          />
        )}
        
        {appState === 'processing' && uploadedFile && (
          <ProcessingSection 
            fileName={uploadedFile.name}
            onComplete={handleProcessingComplete}
          />
        )}
        
        {appState === 'complete' && uploadedFile && (
          <DownloadSection 
            fileName={uploadedFile.name}
            onReset={handleReset}
          />
        )}
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;

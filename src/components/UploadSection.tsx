
import { useState, useCallback } from "react";
import { Upload, FileText, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

interface UploadSectionProps {
  onFileUpload: (file: File) => void;
  isProcessing: boolean;
}

const UploadSection = ({ onFileUpload, isProcessing }: UploadSectionProps) => {
  const [isDragOver, setIsDragOver] = useState(false);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const handleDragOver = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(true);
  }, []);

  const handleDragLeave = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(false);
  }, []);

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(false);
    
    const files = e.dataTransfer.files;
    if (files.length > 0 && files[0].type === 'application/pdf') {
      setSelectedFile(files[0]);
    }
  }, []);

  const handleFileSelect = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files.length > 0) {
      setSelectedFile(files[0]);
    }
  }, []);

  const handleUpload = () => {
    if (selectedFile) {
      onFileUpload(selectedFile);
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-6">
      <div className="text-center mb-12 animate-fade-in">
        <h2 className="text-5xl font-serif font-semibold text-navy-900 mb-4">
          Transform Your Documents
        </h2>
        <p className="text-xl text-navy-600 max-w-2xl mx-auto leading-relaxed">
          Convert your PDF documents into premium audiobooks with our sophisticated narration technology. 
          Experience the elegance of audio learning.
        </p>
      </div>

      <Card className="glass-effect elegant-shadow border-0 p-8 md:p-12">
        <div
          className={`relative border-2 border-dashed rounded-2xl p-12 text-center transition-all duration-300 ${
            isDragOver
              ? 'border-gold-400 bg-gold-50/50'
              : selectedFile
              ? 'border-green-400 bg-green-50/50'
              : 'border-navy-300 hover:border-gold-400 hover:bg-gold-50/20'
          }`}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
        >
          <input
            type="file"
            accept=".pdf"
            onChange={handleFileSelect}
            className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
            disabled={isProcessing}
          />
          
          <div className="space-y-4">
            {selectedFile ? (
              <div className="space-y-4">
                <div className="w-16 h-16 mx-auto bg-green-100 rounded-full flex items-center justify-center">
                  <FileText className="w-8 h-8 text-green-600" />
                </div>
                <div>
                  <p className="text-lg font-medium text-navy-900">{selectedFile.name}</p>
                  <p className="text-sm text-navy-600">
                    {(selectedFile.size / (1024 * 1024)).toFixed(2)} MB • PDF Document
                  </p>
                </div>
                <Button
                  onClick={handleUpload}
                  disabled={isProcessing}
                  className="bg-navy-900 hover:bg-navy-800 text-white px-8 py-3 rounded-xl font-medium transition-all duration-200 hover:scale-105"
                >
                  {isProcessing ? 'Processing...' : 'Convert to Audiobook'}
                </Button>
              </div>
            ) : (
              <div className="space-y-4">
                <div className="w-16 h-16 mx-auto bg-navy-100 rounded-full flex items-center justify-center">
                  <Upload className="w-8 h-8 text-navy-600" />
                </div>
                <div>
                  <p className="text-xl font-medium text-navy-900 mb-2">
                    Upload Your PDF Document
                  </p>
                  <p className="text-navy-600">
                    Drag and drop your PDF file here, or click to browse
                  </p>
                </div>
                <div className="flex items-center justify-center text-sm text-navy-500 space-x-2">
                  <AlertCircle className="w-4 h-4" />
                  <span>PDF files only • Maximum 50MB</span>
                </div>
              </div>
            )}
          </div>
        </div>
        
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
          <div className="space-y-2">
            <div className="w-8 h-8 mx-auto bg-gold-100 rounded-full flex items-center justify-center">
              <span className="text-sm font-semibold text-gold-700">1</span>
            </div>
            <h3 className="font-medium text-navy-900">Upload</h3>
            <p className="text-sm text-navy-600">Select your PDF document</p>
          </div>
          <div className="space-y-2">
            <div className="w-8 h-8 mx-auto bg-gold-100 rounded-full flex items-center justify-center">
              <span className="text-sm font-semibold text-gold-700">2</span>
            </div>
            <h3 className="font-medium text-navy-900">Process</h3>
            <p className="text-sm text-navy-600">AI converts text to audio</p>
          </div>
          <div className="space-y-2">
            <div className="w-8 h-8 mx-auto bg-gold-100 rounded-full flex items-center justify-center">
              <span className="text-sm font-semibold text-gold-700">3</span>
            </div>
            <h3 className="font-medium text-navy-900">Download</h3>
            <p className="text-sm text-navy-600">Get your audiobook file</p>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default UploadSection;

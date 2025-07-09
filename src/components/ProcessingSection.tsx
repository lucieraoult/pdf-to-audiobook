
import { useState, useEffect } from "react";
import { Loader2, CheckCircle, BookOpen, Headphones } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

interface ProcessingSectionProps {
  fileName: string;
  onComplete: () => void;
}

const ProcessingSection = ({ fileName, onComplete }: ProcessingSectionProps) => {
  const [progress, setProgress] = useState(0);
  const [currentStep, setCurrentStep] = useState(0);
  
  const steps = [
    { name: "Analyzing Document", description: "Extracting text and structure" },
    { name: "Optimizing Content", description: "Preparing for narration" },
    { name: "Voice Synthesis", description: "Converting to premium audio" },
    { name: "Quality Enhancement", description: "Finalizing audiobook" }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        const newProgress = prev + Math.random() * 15;
        if (newProgress >= 100) {
          clearInterval(interval);
          setTimeout(onComplete, 1000);
          return 100;
        }
        return Math.min(newProgress, 100);
      });
    }, 800);

    const stepInterval = setInterval(() => {
      setCurrentStep(prev => Math.min(prev + 1, steps.length - 1));
    }, 2500);

    return () => {
      clearInterval(interval);
      clearInterval(stepInterval);
    };
  }, [onComplete]);

  return (
    <div className="max-w-4xl mx-auto px-6">
      <Card className="glass-effect elegant-shadow border-0 p-8 md:p-12">
        <div className="text-center mb-8">
          <div className="w-20 h-20 mx-auto mb-6 bg-navy-900 rounded-full flex items-center justify-center animate-pulse-gold">
            <Headphones className="w-10 h-10 text-gold-400" />
          </div>
          <h2 className="text-3xl font-serif font-semibold text-navy-900 mb-2">
            Creating Your Audiobook
          </h2>
          <p className="text-navy-600 mb-2">{fileName}</p>
          <p className="text-sm text-navy-500">
            Our AI is transforming your document into premium audio
          </p>
        </div>

        <div className="space-y-8">
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-sm font-medium text-navy-700">Progress</span>
              <span className="text-sm font-medium text-navy-700">{Math.round(progress)}%</span>
            </div>
            <Progress 
              value={progress} 
              className="h-3 bg-navy-100"
            />
          </div>

          <div className="space-y-4">
            {steps.map((step, index) => (
              <div
                key={index}
                className={`flex items-center space-x-4 p-4 rounded-xl transition-all duration-500 ${
                  index === currentStep
                    ? 'bg-gold-50 border border-gold-200'
                    : index < currentStep
                    ? 'bg-green-50 border border-green-200'
                    : 'bg-gray-50 border border-gray-200'
                }`}
              >
                <div className="flex-shrink-0">
                  {index < currentStep ? (
                    <CheckCircle className="w-6 h-6 text-green-600" />
                  ) : index === currentStep ? (
                    <Loader2 className="w-6 h-6 text-gold-600 animate-spin" />
                  ) : (
                    <div className="w-6 h-6 rounded-full border-2 border-gray-300" />
                  )}
                </div>
                <div className="flex-grow">
                  <h3 className={`font-medium ${
                    index <= currentStep ? 'text-navy-900' : 'text-navy-500'
                  }`}>
                    {step.name}
                  </h3>
                  <p className={`text-sm ${
                    index <= currentStep ? 'text-navy-600' : 'text-navy-400'
                  }`}>
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-8 p-6 bg-navy-50 rounded-xl border border-navy-100">
          <div className="flex items-center space-x-3">
            <BookOpen className="w-5 h-5 text-navy-600" />
            <div>
              <p className="text-sm font-medium text-navy-900">Premium Quality</p>
              <p className="text-xs text-navy-600">
                Using advanced AI voice synthesis for natural narration
              </p>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default ProcessingSection;

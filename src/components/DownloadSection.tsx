
import { Download, BookOpen, Music, Share2, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

interface DownloadSectionProps {
  fileName: string;
  onReset: () => void;
}

const DownloadSection = ({ fileName, onReset }: DownloadSectionProps) => {
  const audioFileName = fileName.replace('.pdf', '');

  const handleDownloadMP3 = () => {
    // Simulate MP3 download
    const link = document.createElement('a');
    link.href = '#';
    link.download = `${audioFileName}.mp3`;
    link.click();
  };

  const handleOpenInBooks = () => {
    // Simulate opening in iBooks/Apple Books
    window.open('https://books.apple.com/', '_blank');
  };

  return (
    <div className="max-w-4xl mx-auto px-6">
      <Card className="glass-effect elegant-shadow border-0 p-8 md:p-12">
        <div className="text-center mb-8">
          <div className="w-20 h-20 mx-auto mb-6 bg-green-100 rounded-full flex items-center justify-center">
            <Star className="w-10 h-10 text-green-600" />
          </div>
          <h2 className="text-3xl font-serif font-semibold text-navy-900 mb-2">
            Your Audiobook is Ready
          </h2>
          <p className="text-navy-600 mb-2">{audioFileName}</p>
          <p className="text-sm text-navy-500">
            Premium quality audio conversion completed
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <Card className="p-6 border border-navy-200 hover:border-gold-300 transition-colors">
            <div className="flex items-center space-x-4 mb-4">
              <div className="w-12 h-12 bg-navy-100 rounded-xl flex items-center justify-center">
                <Music className="w-6 h-6 text-navy-600" />
              </div>
              <div>
                <h3 className="font-semibold text-navy-900">MP3 Audio</h3>
                <p className="text-sm text-navy-600">Standard audio format</p>
              </div>
            </div>
            <p className="text-sm text-navy-600 mb-4">
              High-quality MP3 file compatible with all audio players and devices.
            </p>
            <Button
              onClick={handleDownloadMP3}
              className="w-full bg-navy-900 hover:bg-navy-800 text-white rounded-xl"
            >
              <Download className="w-4 h-4 mr-2" />
              Download MP3
            </Button>
          </Card>

          <Card className="p-6 border border-navy-200 hover:border-gold-300 transition-colors">
            <div className="flex items-center space-x-4 mb-4">
              <div className="w-12 h-12 bg-gold-100 rounded-xl flex items-center justify-center">
                <BookOpen className="w-6 h-6 text-gold-600" />
              </div>
              <div>
                <h3 className="font-semibold text-navy-900">Apple Books</h3>
                <p className="text-sm text-navy-600">Enhanced audiobook</p>
              </div>
            </div>
            <p className="text-sm text-navy-600 mb-4">
              Optimized format with chapters and metadata for the best experience.
            </p>
            <Button
              onClick={handleOpenInBooks}
              className="w-full bg-gold-600 hover:bg-gold-700 text-white rounded-xl"
            >
              <BookOpen className="w-4 h-4 mr-2" />
              Open in Books
            </Button>
          </Card>
        </div>

        <div className="bg-gradient-to-r from-navy-50 to-gold-50 p-6 rounded-xl border border-navy-100 mb-6">
          <div className="flex items-center space-x-3">
            <Share2 className="w-5 h-5 text-navy-600" />
            <div>
              <p className="font-medium text-navy-900">Share Your Experience</p>
              <p className="text-sm text-navy-600">
                Enjoy your new audiobook and share it with colleagues
              </p>
            </div>
          </div>
        </div>

        <div className="text-center">
          <Button
            onClick={onReset}
            variant="outline"
            className="border-navy-300 text-navy-700 hover:bg-navy-50 rounded-xl px-8"
          >
            Convert Another Document
          </Button>
        </div>
      </Card>
    </div>
  );
};

export default DownloadSection;

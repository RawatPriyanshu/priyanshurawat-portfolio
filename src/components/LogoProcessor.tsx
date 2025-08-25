import { useEffect, useState } from 'react';
import { removeBackground, loadImageFromUrl } from '@/utils/backgroundRemoval';

const LogoProcessor = ({ onProcessed }: { onProcessed: (url: string) => void }) => {
  const [isProcessing, setIsProcessing] = useState(false);

  useEffect(() => {
    const processLogo = async () => {
      try {
        setIsProcessing(true);
        console.log('Loading uploaded logo...');
        
        // Load the uploaded image
        const imageElement = await loadImageFromUrl('/lovable-uploads/beef1e60-e864-4357-9372-8d10ba9fedd0.png');
        console.log('Image loaded successfully');
        
        // Remove background
        const processedBlob = await removeBackground(imageElement);
        console.log('Background removed successfully');
        
        // Create URL for the processed image
        const processedUrl = URL.createObjectURL(processedBlob);
        onProcessed(processedUrl);
        
      } catch (error) {
        console.error('Error processing logo:', error);
        // Fallback to original uploaded image if processing fails
        onProcessed('/lovable-uploads/beef1e60-e864-4357-9372-8d10ba9fedd0.png');
      } finally {
        setIsProcessing(false);
      }
    };

    processLogo();
  }, [onProcessed]);

  if (isProcessing) {
    return (
      <div className="w-8 h-8 bg-primary/20 rounded animate-pulse flex items-center justify-center">
        <div className="w-4 h-4 border-2 border-primary border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  return null;
};

export default LogoProcessor;
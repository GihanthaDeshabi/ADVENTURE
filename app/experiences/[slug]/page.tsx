"use client";
import { useEffect, useState } from 'react';
import { ArrowLeft, Info, Image as ImageIcon } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { Experience, experiences } from '@/constants/experience';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

const ExperienceDetail = () => {
  const { slug } = useParams() as { slug?: string };
  const router = useRouter();
  const [experience, setExperience] = useState<Experience | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (!slug) return;
  
    const foundExperience = experiences.find(exp =>
      exp.href.split('/').pop() === slug
    );
    setExperience(foundExperience || null);
    setIsLoading(false);
  }, [slug]);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-gray-900"></div>
          <p className="text-sm text-gray-600 tracking-wider">LOADING...</p>
        </div>
      </div>
    );
  }

  if (!experience) {
    return (
      <div className="min-h-screen bg-white flex flex-col items-center justify-center px-4">
        <div className="max-w-md text-center">
          <div className="w-20 h-20 border-2 border-black flex items-center justify-center mx-auto mb-6">
            <Info className="w-10 h-10 text-black" />
          </div>
          <h1 className="text-3xl font-light text-black mb-4 tracking-tight">
            Experience Not Found
          </h1>
          <p className="text-gray-600 mb-8">
            The experience you're looking for doesn't exist or has been removed.
          </p>
          <button 
            onClick={() => router.push('/')}
            className="inline-flex items-center bg-black text-white px-8 py-4 hover:bg-gray-900 transition-colors tracking-widest text-sm font-medium"
          >
            <ArrowLeft className="w-4 h-4 mr-3" />
            RETURN HOME
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative h-[500px] mt-[140px]">
        <img
          src={experience.coverImage}
          alt={experience.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent" />
        
        <div className="absolute inset-0 flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <div className="max-w-3xl">
              {/* Back Button */}
              <button 
                onClick={() => router.push('/')}
                className="inline-flex items-center text-white/80 hover:text-white mb-8 transition-colors group"
              >
                <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
                <span className="text-sm tracking-wide">BACK </span>
              </button>

              <h1 className="text-5xl md:text-6xl font-light text-white mb-6 tracking-tight leading-tight">
                {experience.title}
              </h1>
              
              
            </div>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 ">
        {/* About Section */}
        <div className="max-w-5xl mx-auto mb-20 ">
          <div className="mb-12 text-center">
            <h2 className="text-3xl md:text-4xl font-light text-black mb-4 tracking-tight">
              About This Experience
            </h2>
            
          </div>

          <div className="bg-white border border-gray-200 p-8 md:p-12 rounded-md">
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-600 text-lg leading-relaxed whitespace-pre-line text-center">
                {experience.description}
              </p>
            </div>
          </div>
        </div>

        {/* Gallery Section */}
        <div>
          <div className="mb-12 text-center">
            <div className="flex items-center justify-center mb-4">
              <ImageIcon className="w-6 h-6 text-black mr-3" />
              <h2 className="text-3xl md:text-4xl font-light text-black tracking-tight">
                Gallery
              </h2>
            </div>
            <div className="w-16 h-px bg-black mx-auto"></div>
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-gray-300 border border-gray-300">
            {experience.gallery.map((image, index) => (
              <div 
                key={index}
                className="relative aspect-[4/3] overflow-hidden group bg-white"
              >
                <img
                  src={image}
                  alt={`${experience.title} - Image ${index + 1}`}
                  className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-opacity duration-500" />
                
                {/* Image Number Overlay */}
                <div className="absolute top-4 left-4 w-10 h-10 border border-white/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <span className="text-white text-sm font-medium">{index + 1}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-black text-white py-16 mb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-light mb-6 tracking-tight">
            Ready to Experience This?
          </h2>
          <p className="text-white/80 mb-8 max-w-2xl mx-auto leading-relaxed">
            Get in touch with us to plan your perfect Sri Lankan adventure and create unforgettable memories.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/Contact/#Contact">
              <button className="bg-white text-black px-10 py-4 hover:bg-gray-100 transition-colors tracking-widest text-sm font-medium">
                CONTACT US
              </button>
            </Link>
            <Link href="/#book">
              <button className="border border-white text-white px-10 py-4 hover:bg-white hover:text-black transition-colors tracking-widest text-sm font-medium">
                BOOK NOW
              </button>
            </Link>
          </div>
        </div>
      </div>

     
    </div>
  );
};

export default ExperienceDetail;
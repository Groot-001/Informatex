import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { GALLERY_EVENTS } from '../data/mockData';
import { ArrowLeft, Calendar, MapPin, Camera } from 'lucide-react';
import { motion } from 'framer-motion';

export const EventPhotosPage: React.FC = () => {
  const { eventId } = useParams<{ eventId: string }>();
  const navigate = useNavigate();

  const event = GALLERY_EVENTS.find((e) => e.id === eventId);

  if (!event) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-slate-50 px-4 pt-32 pb-24">
        <div className="text-center max-w-md">
          <div className="w-20 h-20 rounded-full bg-slate-100 flex items-center justify-center mx-auto mb-6">
            <Camera className="w-8 h-8 text-slate-400" />
          </div>
          <h1 className="text-2xl font-bold text-slate-900 mb-2">Event Not Found</h1>
          <p className="text-sm text-slate-600 mb-6">The event you're looking for doesn't exist or may have been removed.</p>
          <button
            onClick={() => navigate('/gallery')}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#003152] text-white font-semibold text-sm hover:bg-[#00243d] transition-colors cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Gallery
          </button>
        </div>
      </div>
    );
  }

  const handleBack = () => {
    navigate('/gallery');
    // Scroll reset on route change is handled globally by <ScrollToTop />.
  };

  return (
    <div className="min-h-screen bg-slate-50 pb-24">
      {/* Header Banner */}
      <div className="relative bg-[#001c31] text-white pt-32 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden border-b border-slate-800">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#003152]/40 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20" />
        <div className="absolute bottom-0 left-1/4 w-72 h-72 bg-[#62aff0]/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto relative z-10">
          {/* Back + Breadcrumb */}
          <button
            onClick={handleBack}
            className="inline-flex items-center gap-2 text-sm text-[#a7d5fa] hover:text-white transition-colors mb-6 cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Gallery</span>
          </button>

          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#003152]/60 border border-[#62aff0]/30 text-xs font-semibold uppercase tracking-wider text-[#62aff0] mb-4">
                {event.category}
              </div>
              <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
                {event.title}
              </h1>
              <p className="text-slate-300 text-base mt-3 max-w-2xl leading-relaxed">
                {event.description}
              </p>
              <div className="flex flex-wrap items-center gap-4 mt-4 text-sm text-slate-400">
                <span className="flex items-center gap-1.5">
                  <Calendar className="w-4 h-4 text-[#62aff0]" />
                  {event.date}
                </span>
                <span className="flex items-center gap-1.5">
                  <MapPin className="w-4 h-4 text-[#62aff0]" />
                  {event.location}
                </span>
                <span className="flex items-center gap-1.5">
                  <Camera className="w-4 h-4 text-[#62aff0]" />
                  {event.photos.length} photos
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Pinterest-Style Masonry Photo Grid */}
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 -mt-8 relative z-20">
        <div className="bg-white rounded-2xl p-3 sm:p-6 shadow-xl border border-slate-200/80">
          {/* Photo counter */}
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-bold text-slate-900">
              Event Photos
            </h2>
            <span className="text-xs font-semibold text-slate-500 bg-slate-100 px-3 py-1 rounded-full">
              {event.photos.length} photos
            </span>
          </div>

          {/* Masonry Grid */}
          <div className="columns-2 sm:columns-2 md:columns-3 lg:columns-3 xl:columns-4 gap-2.5 sm:gap-4 space-y-2.5 sm:space-y-4">
            {event.photos.map((photo, idx) => (
              <motion.div
                key={photo.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35, delay: idx * 0.05 }}
                className="break-inside-avoid group relative rounded-xl sm:rounded-2xl overflow-hidden shadow-md hover:shadow-2xl hover:-translate-y-0.5 transition-all duration-300"
              >
                <img
                  src={photo.url}
                  alt={photo.caption || event.title}
                  className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                {/* Hover caption overlay */}
                {photo.caption && (
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent p-2.5 pt-8 sm:p-5 sm:pt-12 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <p className="text-white text-[10px] sm:text-sm font-medium leading-snug">
                      {photo.caption}
                    </p>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
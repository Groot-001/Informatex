import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { GALLERY_EVENTS } from '../data/mockData';
import { PageHeader } from '../components/layout/PageHeader';
import { Badge } from '../components/ui/Badge';
import { FilterTabs } from '../components/ui/FilterTabs';
import { Calendar, MapPin, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

export const GalleryPage: React.FC = () => {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', 'Project Launch', 'Team Summit', 'Innovation Lab', 'Client Workshop', 'Industry Conference'];

  const filteredEvents = GALLERY_EVENTS.filter(
    (event) => selectedCategory === 'All' || event.category === selectedCategory
  );

  const handleEventClick = (eventId: string) => {
    navigate(`/events/${eventId}`);
    // Scroll reset on route change is handled globally by <ScrollToTop />.
  };

  return (
    <div className="bg-slate-50 min-h-screen pb-24">
      <PageHeader
        title="Gallery"
        subtitle="Explore Informatech events, project launches, workshops, and team moments through curated photo stories."
      />

      {/* CATEGORY TABS */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 relative z-20">
        <div className="bg-white rounded-2xl p-3 sm:p-4 shadow-xl border border-slate-200/80">
          <FilterTabs categories={categories} selected={selectedCategory} onSelect={setSelectedCategory} />
        </div>
      </div>

      {/* EVENT CARDS GRID */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        {filteredEvents.length === 0 ? (
          <div className="text-center py-16 bg-white rounded-3xl border border-slate-200 p-8">
            <p className="text-slate-600 font-semibold text-lg">No events found in this category.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredEvents.map((event, idx) => (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: idx * 0.06 }}
                onClick={() => handleEventClick(event.id)}
                className="group cursor-pointer bg-white rounded-3xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={event.coverImage}
                    alt={event.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />

                  <div className="absolute bottom-4 left-4 right-4">
                    <Badge variant="dark" className="mb-2">
                      {event.category}
                    </Badge>
                    <h3 className="text-xl font-bold text-white leading-tight line-clamp-2">
                      {event.title}
                    </h3>
                  </div>

                  <div className="absolute top-4 right-4 flex items-center gap-1.5 bg-black/60 text-white text-xs px-2.5 py-1 rounded-full">
                    <Calendar className="w-3 h-3" />
                    <span>{event.date.split(',')[0]}</span>
                  </div>
                </div>

                <div className="p-5 text-sm">
                  <div className="flex items-center gap-2 text-slate-500 text-xs mb-3">
                    <MapPin className="w-3.5 h-3.5" />
                    <span>{event.location}</span>
                  </div>
                  <p className="text-slate-600 line-clamp-2 text-sm">
                    {event.description}
                  </p>
                  <div className="mt-4 flex items-center justify-between">
                    <span className="text-xs text-slate-400">
                      {event.photos.length} photos
                    </span>
                    <span className="text-xs font-semibold text-[#003152] flex items-center gap-1 group-hover:gap-2 transition-all">
                      VIEW GALLERY <ArrowRight className="w-3 h-3" />
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
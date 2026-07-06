import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ServiceItem } from "../types";
import { SERVICES_DATA } from "../data/mockData";
import { PageHeader } from "../components/layout/PageHeader";
import { Button } from "../components/ui/Button";
import { Badge } from "../components/ui/Badge";
import { DynamicIcon } from "../components/ui/DynamicIcon";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "../components/ui/Dialog";
import { FilterTabs } from "../components/ui/FilterTabs";
import {
  Search,
  ArrowRight,
  CheckCircle2,
  Layers,
  Cpu,
  ShieldCheck,
  Terminal,
  Workflow,
} from "lucide-react";
import { motion } from "framer-motion";

export const ServicesPage: React.FC = () => {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [activeModalService, setActiveModalService] =
    useState<ServiceItem | null>(null);

  const categories = [
    "All",
    "Development",
    "Marketing",
    "Content",
    "Analytics",
    "Design",
  ];

  const filteredServices = SERVICES_DATA.filter((service) => {
    const matchesCategory =
      selectedCategory === "All" || service.category === selectedCategory;
    const matchesSearch =
      service.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      service.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      service.fullDetails.technologies.some((t) =>
        t.toLowerCase().includes(searchQuery.toLowerCase()),
      );
    return matchesCategory && matchesSearch;
  });

  const openModal = (service: ServiceItem) => {
    setActiveModalService(service);
  };

  const closeModal = () => {
    setActiveModalService(null);
  };

  const handleDialogOpenChange = (open: boolean) => {
    if (!open) closeModal();
  };

  const handleNavClick = (path: string) => {
    navigate(path);
    // Scroll reset on route change is handled globally by <ScrollToTop />.
  };

  const deliveryPhases = [
    {
      step: "01",
      title: "Discovery & Planning",
      desc: "We understand your goals, audience, and existing assets to define a clear, results-driven roadmap.",
      icon: Layers,
    },
    {
      step: "02",
      title: "Design & Prototyping",
      desc: "We craft wireframes, designs, or content prototypes that align with your brand before development begins.",
      icon: Terminal,
    },
    {
      step: "03",
      title: "Build & Optimize",
      desc: "We develop, write, analyze, or market your solution using modern tools and iterative feedback loops.",
      icon: Cpu,
    },
    {
      step: "04",
      title: "Deliver & Scale",
      desc: "We launch, measure performance, and refine continuously to maximize long-term impact and ROI.",
      icon: ShieldCheck,
    },
  ];

  return (
    <div className="min-h-screen pb-24 bg-white">
      <PageHeader
        title="Our Digital Solutions"
        subtitle="Modern development, marketing, content, and analytics services designed to help your business grow online."
      />

      {/* FILTER & SEARCH BAR */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 relative z-20">
        <div className="bg-white rounded-2xl p-3 sm:p-6 shadow-xl border border-slate-200/80 flex flex-col md:flex-row items-center justify-between gap-3 md:gap-4">
          {/* Category Tabs */}
          <FilterTabs
            categories={categories}
            selected={selectedCategory}
            onSelect={setSelectedCategory}
            className="md:w-auto"
          />

          {/* Search Input */}
          <div className="relative w-full md:w-72 shrink-0">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search services (e.g. SEO, app)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-slate-50 border border-slate-300 text-slate-800 placeholder-slate-400 text-xs sm:text-sm focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#003152]"
            />
          </div>
        </div>
      </div>

      {/* SERVICES GRID */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        {filteredServices.length === 0 ? (
          <div className="text-center py-16 bg-white/80 backdrop-blur rounded-3xl border border-slate-200 p-8">
            <p className="text-slate-600 font-semibold text-lg">
              No services match your search terms.
            </p>
            <Button
              variant="outline"
              size="sm"
              onClick={() => {
                setSelectedCategory("All");
                setSearchQuery("");
              }}
              className="mt-4"
            >
              Reset Filters
            </Button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.map((service, idx) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
              >
                <div className="group relative h-full flex flex-col rounded-3xl border border-slate-200 bg-white shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-300 overflow-hidden p-7">
                  <div className="flex items-start justify-between mb-6 relative z-10">
                    <div className="w-14 h-14 rounded-2xl bg-[#003152] text-white flex items-center justify-center shadow-md group-hover:scale-105 transition-transform">
                      <DynamicIcon
                        name={service.iconName}
                        className="w-7 h-7"
                      />
                    </div>
                    <span className="px-3 py-1 rounded-full bg-[#003152]/10 text-[#003152] text-[10px] font-bold uppercase tracking-wider">
                      {service.category}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-[#003152] transition-colors relative z-10">
                    {service.title}
                  </h3>

                  <p className="text-xs font-semibold text-[#003152]/70 mb-4 relative z-10">
                    {service.subtitle}
                  </p>

                  <p className="text-slate-600 text-sm leading-relaxed mb-6 flex-1 relative z-10">
                    {service.description}
                  </p>

                  {/* Tool stack chips */}
                  <div className="mb-6 pt-5 border-t border-slate-100 relative z-10">
                    <span className="block text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-2.5">
                      Key Tools
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {service.fullDetails.technologies
                        .slice(0, 4)
                        .map((tech) => (
                          <span
                            key={tech}
                            className="px-2 py-0.5 rounded-md bg-slate-100 text-slate-700 text-xs font-medium border border-slate-200"
                          >
                            {tech}
                          </span>
                        ))}
                      {service.fullDetails.technologies.length > 4 && (
                        <span className="px-2 py-0.5 rounded-md bg-slate-50 text-slate-400 text-xs font-medium border border-slate-200">
                          +{service.fullDetails.technologies.length - 4} more
                        </span>
                      )}
                    </div>
                  </div>

                  <Button
                    variant="outline"
                    className="w-full justify-between border-slate-300 text-slate-700 hover:border-[#003152] hover:text-[#003152] relative z-10"
                    onClick={() => openModal(service)}
                    icon={<ArrowRight className="w-4 h-4" />}
                  >
                    View Service Details
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>

      {/* DELIVERY METHODOLOGY PIPELINE */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-24">
        <div className="rounded-3xl p-8 sm:p-12 border border-slate-200 bg-slate-50 shadow-sm">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#003152]/10 text-[#003152] border border-[#003152]/20 text-xs font-bold uppercase tracking-wider mb-2">
              <Workflow className="w-3.5 h-3.5" /> Delivery Lifecycle
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
              Our Proven 4-Phase Delivery Framework
            </h2>
            <p className="text-slate-600 text-sm mt-2">
              Every Informatech engagement follows a predictable, results-driven
              delivery model.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 relative">
            {deliveryPhases.map((phase, idx) => {
              const Icon = phase.icon;
              return (
                <div
                  key={phase.step}
                  className="relative p-6 rounded-2xl bg-white border border-slate-200 shadow-sm group hover:border-[#003152]/40 hover:shadow-md transition-all"
                >
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-3xl font-black text-[#003152]/20 group-hover:text-[#003152] transition-colors font-mono">
                      {phase.step}
                    </span>
                    <div className="p-2.5 rounded-xl bg-[#003152] text-white shadow-sm">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>
                  <h3 className="font-bold text-slate-900 text-base mb-2">
                    {phase.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {phase.desc}
                  </p>
                  {idx < 3 && (
                    <div className="hidden lg:block absolute top-1/2 -right-4 w-6 h-0.5 bg-slate-300 z-10" />
                  )}
                </div>
              );
            })}
          </div>

          <div className="mt-12 pt-8 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-xs sm:text-sm text-slate-600 font-medium">
              Ready to start your next app, campaign, content, or analytics
              project?
            </p>
            <Button
              size="sm"
              onClick={() => handleNavClick("/contact")}
              icon={<ArrowRight className="w-4 h-4" />}
            >
              Start Your Project
            </Button>
          </div>
        </div>
      </div>

      {/* SERVICE DETAILS DRILL-DOWN DIALOG (shadcn/ui Dialog) */}
      <Dialog open={!!activeModalService} onOpenChange={handleDialogOpenChange}>
        {activeModalService && (
          <DialogContent
            open={!!activeModalService}
            className="max-w-3xl w-[calc(100%-2rem)] sm:w-full"
          >
            <div className="p-6 sm:p-10">
              <DialogHeader className="mb-4">
                <div className="flex items-center gap-3">
                  <div className="p-3 rounded-2xl bg-[#003152] text-white">
                    <DynamicIcon
                      name={activeModalService.iconName}
                      className="w-6 h-6"
                    />
                  </div>
                  <div>
                    <Badge variant="brand" className="mb-1">
                      {activeModalService.category}
                    </Badge>
                    <DialogTitle>{activeModalService.title}</DialogTitle>
                  </div>
                </div>
              </DialogHeader>

              <DialogDescription className="text-base font-semibold text-[#003152] mb-6">
                {activeModalService.subtitle}
              </DialogDescription>

              {/* Overview */}
              <div className="mb-8">
                <h4 className="text-sm font-bold uppercase tracking-wider text-slate-400 mb-2">
                  Executive Overview
                </h4>
                <p className="text-slate-700 text-sm leading-relaxed bg-slate-50 p-4 rounded-2xl border border-slate-200">
                  {activeModalService.fullDetails.overview}
                </p>
              </div>

              {/* Key Features */}
              <div className="mb-8">
                <h4 className="text-sm font-bold uppercase tracking-wider text-slate-400 mb-3">
                  Architectural Highlights & Capabilities
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {activeModalService.fullDetails.keyFeatures.map((feat, i) => (
                    <div
                      key={i}
                      className="flex items-start gap-2.5 p-3 rounded-xl bg-white border border-slate-200/80 shadow-2xs"
                    >
                      <CheckCircle2 className="w-4 h-4 text-[#003152] shrink-0 mt-0.5" />
                      <span className="text-xs font-semibold text-slate-800">
                        {feat}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Deliverables */}
              <div className="mb-8">
                <h4 className="text-sm font-bold uppercase tracking-wider text-slate-400 mb-3">
                  Guaranteed Deliverables
                </h4>
                <ul className="space-y-2">
                  {activeModalService.fullDetails.deliverables.map(
                    (deliv, i) => (
                      <li
                        key={i}
                        className="flex items-center gap-3 text-xs sm:text-sm text-slate-700"
                      >
                        <span className="w-2 h-2 rounded-full bg-[#003152] shrink-0" />
                        <span>{deliv}</span>
                      </li>
                    ),
                  )}
                </ul>
              </div>

              {/* Technologies */}
              <div className="mb-10 pt-6 border-t border-slate-200">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
                  Supported Tech Stack
                </h4>
                <div className="flex flex-wrap gap-2">
                  {activeModalService.fullDetails.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1.5 rounded-lg bg-[#003152]/10 text-[#003152] font-mono text-xs font-bold border border-[#003152]/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Dialog CTA */}
              <div className="pt-6 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
                <Button
                  size="md"
                  onClick={() => {
                    closeModal();
                    handleNavClick("/contact");
                  }}
                  icon={<ArrowRight className="w-4 h-4" />}
                  className="w-full sm:w-auto"
                >
                  Inquire About This Service
                </Button>
                <button
                  onClick={closeModal}
                  className="text-xs font-bold text-slate-500 hover:text-slate-800 cursor-pointer"
                >
                  Close Window
                </button>
              </div>
            </div>
          </DialogContent>
        )}
      </Dialog>
    </div>
  );
};

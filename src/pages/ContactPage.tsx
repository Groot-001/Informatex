import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import confetti from "canvas-confetti";
import { OFFICES_DATA, FAQ_DATA, QUICK_CONTACTS_DATA } from "../data/mockData";
import { QuickContact } from "../types";
import { PageHeader } from "../components/layout/PageHeader";
import { Input, Textarea } from "../components/ui/FormControls";
import { Button } from "../components/ui/Button";
import { Card } from "../components/ui/Card";
import {
  Phone,
  Mail,
  Clock,
  CheckCircle2,
  Send,
  HelpCircle,
  ChevronDown,
  ChevronUp,
  ExternalLink,
  Navigation,
  MessageCircle,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
// import { sendEmail } from "@/lib/email";
import axios from "axios";

const contactFormSchema = z.object({
  name: z.string().min(3, { message: "Name must be at least 3 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  subject: z
    .string()
    .min(3, { message: "Subject must be at least 3 characters." }),
  description: z.string().min(10, {
    message:
      "Description must be at least 10 characters to ensure detailed routing.",
  }),
});

type ContactFormValues = z.infer<typeof contactFormSchema>;

const QuickContactCard: React.FC<{ contact: QuickContact }> = ({ contact }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      className="group h-full"
    >
      <div className="relative h-full bg-white rounded-3xl border border-slate-200 p-6 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden">
        {/* Subtle top sheen line */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent group-hover:via-[#62aff0] transition-colors" />

        {/* Avatar + status */}
        <div className="flex items-start gap-4 mb-4">
          <div className="relative shrink-0">
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#62aff0] to-[#003152] -m-0.5" />
            <img
              src={contact.avatar}
              alt={contact.name}
              className="relative w-16 h-16 rounded-full object-cover border-2 border-white"
            />
            <span
              className="absolute -bottom-0.5 -right-0.5 w-4 h-4 rounded-full bg-emerald-500 border-2 border-white"
              title="Online"
            />
          </div>
          <div className="flex-1 min-w-0">
            <h3 className="text-base font-bold text-slate-900 group-hover:text-[#003152] transition-colors">
              {contact.name}
            </h3>
            <p className="text-xs font-semibold text-[#003152]">
              {contact.role}
            </p>
            <p className="text-[11px] text-slate-500 mt-0.5">{contact.desk}</p>
          </div>
        </div>

        {/* Response time badge */}
        <div className="mb-4 flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-50 border border-emerald-200 w-fit">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
          <span className="text-[11px] font-semibold text-emerald-700">
            {contact.responseTime}
          </span>
        </div>

        {/* Specialties tags */}
        <div className="mb-5 flex flex-wrap gap-1.5">
          {contact.specialties.map((tag) => (
            <span
              key={tag}
              className="px-2 py-0.5 rounded-md bg-slate-100 text-slate-600 text-[10px] font-medium border border-slate-200"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Contact info */}
        <div className="space-y-2.5 text-xs text-slate-600 border-t border-slate-100 pt-4">
          <div className="flex items-center gap-2.5">
            <Mail className="w-3.5 h-3.5 text-[#003152] shrink-0" />
            <a
              href={`mailto:${contact.email}`}
              className="hover:text-[#003152] transition-colors truncate"
            >
              {contact.email}
            </a>
          </div>
          <div className="flex items-center gap-2.5">
            <Phone className="w-3.5 h-3.5 text-[#003152] shrink-0" />
            <a
              href={`tel:${contact.phone}`}
              className="hover:text-[#003152] transition-colors"
            >
              {contact.phone}
            </a>
          </div>
          <div className="flex items-center gap-2.5">
            <Clock className="w-3.5 h-3.5 text-[#003152] shrink-0" />
            <span>{contact.availability}</span>
          </div>
        </div>

        {/* CTA buttons */}
        <div className="mt-5 flex items-center gap-2">
          <a
            href={`mailto:${contact.email}`}
            className="flex-1 inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-xl bg-[#003152] hover:bg-[#00243d] text-white text-xs font-semibold transition-colors"
          >
            <Mail className="w-3.5 h-3.5" />
            Email
          </a>
          <a
            href={`tel:${contact.phone}`}
            className="flex-1 inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-xl border border-slate-300 hover:border-[#003152] hover:text-[#003152] text-slate-700 text-xs font-semibold transition-colors"
          >
            <Phone className="w-3.5 h-3.5" />
            Call
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export const ContactPage: React.FC = () => {
  const office = OFFICES_DATA[0];
  // console.log("Office Data:", office);
  const [openFaqIdx, setOpenFaqIdx] = useState<number | null>(0);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      description: "",
    },
  });

  const onSubmit = async (data: ContactFormValues) => {
    axios.post("https://formspree.io/f/xwvdwyqd", data);
    // await sendEmail({
    //   name: "Pratik",
    //   email: "pratik@gmail.com",
    //   message: "Hello",
    // });
    // await new Promise((resolve) => setTimeout(resolve, 1000));
    console.log("Form Submitted successfully:", data);

    // Trigger celebratory confetti
    confetti({
      particleCount: 120,
      spread: 70,
      origin: { y: 0.6 },
      colors: ["#003152", "#62aff0", "#10b981"],
    });

    setIsSubmitted(true);
    reset();
  };

  return (
    <div className="bg-slate-50 min-h-screen pb-24">
      <PageHeader
        title="Connect With Our Principal Architects"
        subtitle="Initiate your architectural assessment, schedule a confidential security briefing, or reach our global leadership pod."
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
          {/* LEFT: VALIDATED CONTACT FORM */}
          <div className="lg:col-span-7">
            <Card className="p-8 sm:p-10 bg-white shadow-xl border border-slate-200/80 h-full">
              <div className="mb-8">
                <span className="inline-block px-3 py-1 rounded-full bg-[#003152]/10 text-[#003152] text-xs font-bold uppercase tracking-wider mb-2">
                  Confidential Inquiry
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                  Start Your Consultation
                </h2>
                <p className="text-slate-600 text-sm mt-1">
                  Fill out the details below. Our technical routing system
                  connects you directly to a senior lead within 4 business
                  hours.
                </p>
              </div>

              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-emerald-50 border border-emerald-200 rounded-3xl p-8 text-center space-y-4 my-6"
                >
                  <div className="w-16 h-16 bg-emerald-500 text-white rounded-full flex items-center justify-center mx-auto shadow-lg shadow-emerald-500/20">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900">
                    Inquiry Received Successfully
                  </h3>
                  <p className="text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                    Thank you for reaching out to Informatech. Your request has
                    been securely logged and assigned to our solutions
                    engineering team. We will review your requirements and
                    respond shortly.
                  </p>
                  <div className="pt-4">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => setIsSubmitted(false)}
                      className="border-slate-300"
                    >
                      Send Another Message
                    </Button>
                  </div>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <Input
                      label="Name"
                      placeholder="e.g. Sarah Jenkins"
                      required
                      error={errors.name?.message}
                      {...register("name")}
                    />
                    <Input
                      label="Email"
                      type="email"
                      placeholder="s.jenkins@enterprise.com"
                      required
                      error={errors.email?.message}
                      {...register("email")}
                    />
                  </div>

                  <Input
                    label="Subject"
                    placeholder="e.g. Multi-Region AWS Architecture Review"
                    required
                    error={errors.subject?.message}
                    {...register("subject")}
                  />

                  <Textarea
                    label="Description"
                    placeholder="Describe your technical roadmap, timeline, or infrastructure challenge..."
                    required
                    error={errors.description?.message}
                    {...register("description")}
                  />

                  <div className="pt-2 flex justify-end border-t border-slate-100">
                    <Button
                      type="submit"
                      size="lg"
                      isLoading={isSubmitting}
                      icon={<Send className="w-4 h-4" />}
                      className="w-full sm:w-auto"
                    >
                      Submit Technical Inquiry
                    </Button>
                  </div>
                </form>
              )}
            </Card>
          </div>

          {/* RIGHT: EMBEDDED MAP (matches form height) */}
          <div className="lg:col-span-5">
            <Card className="overflow-hidden bg-white border border-slate-200/80 shadow-xl h-full flex flex-col">
              <div className="p-4 bg-[#001c31] border-b border-slate-800 flex items-center justify-between shrink-0">
                <div className="flex items-center gap-2 text-xs font-bold text-white">
                  <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span>Map View</span>
                </div>
                <a
                  href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                    `${office.address}, ${office.city.split(" (")[0]}, ${office.country}`,
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 text-[10px] font-mono text-[#62aff0] hover:text-[#a7d5fa] transition-colors"
                >
                  Open in Maps <ExternalLink className="w-3 h-3" />
                </a>
              </div>

              {/* Real Embedded Google Map */}
              <div className="relative flex-1 min-h-[360px] bg-slate-100">
                <iframe
                  title={`Map of Informatech ${office.city} office`}
                  className="absolute inset-0 w-full h-full border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  src={`https://www.google.com/maps?q=${encodeURIComponent(
                    `${office.address}, ${office.city.split(" (")[0]}, ${office.country}`,
                  )}&output=embed`}
                />

                {/* Bottom Overlay label */}
                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between bg-white/95 backdrop-blur-md px-3 py-2 rounded-xl border border-slate-200 shadow-md text-xs pointer-events-none">
                  <span className="text-slate-700 font-semibold truncate flex items-center gap-1.5">
                    <Navigation className="w-3.5 h-3.5 text-[#003152] shrink-0" />
                    {office.city}
                  </span>
                  <span className="text-[#003152] font-bold shrink-0 ml-2">
                    Active Hub
                  </span>
                </div>
              </div>
            </Card>
          </div>
        </div>

        {/* QUICK CONTACTS SECTION */}
        <div className="mt-20 sm:mt-24">
          <div className="text-center mb-10 sm:mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#003152]/10 text-[#003152] text-xs font-bold uppercase tracking-wider mb-2">
              <MessageCircle className="w-3.5 h-3.5" /> Quick Contacts
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
              Reach Our Front Desk
            </h2>
            <p className="text-slate-600 text-sm mt-2 max-w-2xl mx-auto">
              Connect directly with the team members who can guide your inquiry
              to the right principal architect.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {QUICK_CONTACTS_DATA.map((contact) => (
              <QuickContactCard key={contact.id} contact={contact} />
            ))}
          </div>
        </div>

        {/* FAQ ACCORDION SECTION */}
        <div className="mt-24 max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#003152]/10 text-[#003152] text-xs font-bold uppercase tracking-wider mb-2">
              <HelpCircle className="w-3.5 h-3.5" /> Frequently Asked Questions
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
              Engagement & Architecture FAQs
            </h2>
            <p className="text-slate-600 text-sm mt-1">
              Common questions from executive stakeholders considering strategic
              technology partnerships.
            </p>
          </div>

          <div className="space-y-4">
            {FAQ_DATA.map((faq, idx) => {
              const isOpen = openFaqIdx === idx;
              return (
                <div
                  key={idx}
                  className="bg-white rounded-2xl border border-slate-200/80 overflow-hidden shadow-2xs transition-all"
                >
                  <button
                    onClick={() => setOpenFaqIdx(isOpen ? null : idx)}
                    className="w-full px-6 py-5 text-left flex items-center justify-between gap-4 focus:outline-none cursor-pointer"
                  >
                    <span className="font-bold text-slate-900 text-base">
                      {faq.question}
                    </span>
                    <div
                      className={`p-1.5 rounded-full transition-colors ${isOpen ? "bg-[#003152] text-white" : "bg-slate-100 text-slate-600"}`}
                    >
                      {isOpen ? (
                        <ChevronUp className="w-4 h-4" />
                      ) : (
                        <ChevronDown className="w-4 h-4" />
                      )}
                    </div>
                  </button>
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        <div className="px-6 pb-5 pt-1 text-slate-600 text-sm leading-relaxed border-t border-slate-100">
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

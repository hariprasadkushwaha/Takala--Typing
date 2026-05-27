import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import {
  FaChevronDown,
  FaCircleCheck,
  FaFileLines,
  FaFileShield,
  FaShieldHalved,
  FaStamp,
  FaWhatsapp,
} from 'react-icons/fa6';

const whatsappNumber = '916266383257';

const popularServices = [
  {
    title: 'KCC लोन / KCC समरी',
    icon: FaFileLines,
    documents: [
      'ऋण पुस्तिका',
      'खसरा नं. जानकारी',
      'B1 / खसरा जानकारी',
      'खाता नंबर जानकारी',
      'खेती प्रमाण पत्र / पटवारी द्वारा प्रमाणित',
      'मलकीयत प्रमाण पत्र / पटवारी द्वारा प्रमाणित',
    ],
  },
  {
    title: 'Notice / Party Name',
    icon: FaShieldHalved,
    documents: ['पिता का नाम', 'पता', 'मोबाइल नं.', 'जन्मतिथि', 'आधार कार्ड'],
  },
  {
    title: 'डेथ क्लेम / बीमा',
    icon: FaFileShield,
    documents: [
      'मृतक का मृत्यु प्रमाण पत्र',
      'पासबुक',
      'आधार कार्ड',
      'समग्र खाता नंबर (ओटीपी द्वारा प्रमाण)',
      'नोट: समग्र खाता नंबर में मृतक की माता का नाम होगा',
      'दो गवाह - आधार कार्ड',
      'बैंक पासबुक (उसी बैंक की)',
      'खसरा नं.',
      'मोबाइल नं.',
      '2-2 फोटो',
    ],
  },
  {
    title: 'ई-स्टाम्प सेवा',
    icon: FaStamp,
    documents: [
      'लोन एग्रीमेंट दस्तावेज - आधार कार्ड + मोबाइल नंबर + OTP / फिंगर / आइरिश',
      'बैंक गारंटी एग्रीमेंट - आधार कार्ड + मोबाइल नंबर',
      'आधार से लिंक मोबाइल एवं OTP / फिंगर / आइरिश',
      'ई-स्टाम्प - ₹50, ₹100, ₹200,₹500, ₹1000',
    ],
  },
];

function getWhatsappLink(title) {
  const message = `Takala Typing Enquiry
Service: ${title}
Query: Please share details for this service.`;

  return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
}

export default function PopularFarmerBankingServices() {
  const [openCard, setOpenCard] = useState(null);

  const toggleCard = (index) => {
    setOpenCard((current) => (current === index ? null : index));
  };

  return (
    <section className="relative overflow-hidden bg-slate-50 py-16">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-48 bg-gradient-to-b from-royal/10 to-transparent blur-3xl" />
      <div className="section-shell relative">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.55, ease: 'easeOut' }}
          className="max-w-3xl"
        >
          <p className="font-black uppercase tracking-[0.18em] text-wine">Popular Services</p>
          <h2 className="mt-3 text-3xl font-black leading-tight text-navy sm:text-4xl">
            Popular Farmer & Banking Services
          </h2>
          <p className="mt-4 max-w-2xl font-semibold leading-7 text-slate-600">
            KCC, Loan, Notice, Insurance and E-Stamp related documentation support.
          </p>
        </motion.div>

        <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4">
          {popularServices.map((service, index) => {
            const Icon = service.icon;
            const isOpen = openCard === index;

            return (
              <motion.article
                key={service.title}
                initial={{ opacity: 0, y: 34 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: index * 0.06, ease: 'easeOut' }}
                whileHover={{ y: -8, scale: 1.015 }}
                className="group glass relative overflow-hidden rounded-2xl p-5 shadow-glass"
              >
                <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-wine via-royal to-saffron" />
                <div className="pointer-events-none absolute -right-14 -top-14 h-36 w-36 rounded-full bg-gradient-to-br from-wine/15 to-royal/10 blur-2xl transition-transform duration-500 group-hover:scale-125" />

                <div className="relative flex h-full flex-col">
                  <div className="mb-5 flex items-start justify-between gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-wine to-royal text-white shadow-glow">
                      <Icon size={24} />
                    </div>
                    <span className="rounded-full bg-wine/10 px-3 py-1 text-[11px] font-black uppercase tracking-wider text-wine">
                      Help
                    </span>
                  </div>

                  <h3 className="min-h-[56px] text-lg font-extrabold leading-snug text-navy">
                    {service.title}
                  </h3>

                  <div className="mt-5 space-y-3">
                    <button
                      type="button"
                      onClick={() => toggleCard(index)}
                      aria-expanded={isOpen}
                      className="focus-ring flex w-full items-center justify-between gap-3 rounded-xl bg-gradient-to-r from-wine to-[#651042] px-4 py-2.5 text-sm font-black text-white shadow-[0_12px_30px_rgba(123,17,44,0.22)] transition hover:-translate-y-0.5 hover:shadow-glow"
                    >
                      <span>Required Documents</span>
                      <FaChevronDown
                        size={18}
                        className={`shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
                      />
                    </button>

                    <a
                      href={getWhatsappLink(service.title)}
                      target="_blank"
                      rel="noreferrer"
                      className="focus-ring flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-emerald-600 to-green-700 px-4 py-2.5 text-sm font-black text-white shadow-[0_12px_30px_rgba(22,163,74,0.22)] transition hover:-translate-y-0.5 hover:shadow-[0_18px_42px_rgba(22,163,74,0.32)]"
                    >
                      <FaWhatsapp size={17} />
                      WhatsApp Enquiry
                    </a>
                  </div>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.32, ease: 'easeInOut' }}
                        className="overflow-hidden"
                      >
                        <div className="mt-5 rounded-2xl border border-wine/10 bg-white/75 p-4 shadow-inner backdrop-blur">
                          <ul className="space-y-3">
                            {service.documents.map((document) => (
                              <li
                                key={document}
                                className="flex gap-2 text-sm font-bold leading-6 text-slate-700"
                              >
                                <FaCircleCheck
                                  size={17}
                                  className="mt-1 shrink-0 text-wine"
                                />
                                <span>{document}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { FaArrowRight, FaCircleCheck, FaQuoteLeft } from 'react-icons/fa6';
import Hero from '../components/Hero';
import PopularFarmerBankingServices from '../components/PopularFarmerBankingServices';
import ServiceCard from '../components/ServiceCard';
import { generalServices } from '../servicesData';

export default function Home() {
  const { t } = useTranslation();
  const why = t('why', { returnObjects: true });
  const process = t('process', { returnObjects: true });
  const testimonials = t('testimonials', { returnObjects: true });
  const faq = t('faq', { returnObjects: true });

  return (
    <>
      <Hero />
      <section className="bg-slate-50 py-16">
        <div className="section-shell">
          <div className="max-w-2xl">
            <p className="font-black uppercase tracking-[0.18em] text-wine">{t('sections.why')}</p>
            <h2 className="mt-3 text-3xl font-black text-navy sm:text-4xl">{t('siteTitle')}</h2>
          </div>
          <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {why.map((item, index) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.06 }}
                className="glass rounded-2xl p-5 shadow-glass"
              >
                <FaCircleCheck className="text-2xl text-wine" />
                <p className="mt-4 font-bold leading-7 text-navy">{item}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <PopularFarmerBankingServices />

      <section className="py-16">
        <div className="section-shell">
          <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <p className="font-black uppercase tracking-[0.18em] text-wine">{t('sections.services')}</p>
              <h2 className="mt-3 text-3xl font-black text-navy sm:text-4xl">{t('serviceGroups.general')}</h2>
            </div>
            <Link to="/services" className="inline-flex items-center gap-2 font-black text-wine">
              {t('actions.viewAll')} <FaArrowRight />
            </Link>
          </div>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {generalServices.map(([key, Icon], index) => (
              <ServiceCard key={key} icon={Icon} title={t(key)} index={index} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-br from-navy via-royal to-wine py-16 text-white">
        <div className="section-shell">
          <p className="font-black uppercase tracking-[0.18em] text-white/70">{t('sections.process')}</p>
          <div className="mt-10 grid gap-5 md:grid-cols-4">
            {process.map((step, index) => (
              <motion.div
                key={step}
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                className="rounded-2xl border border-white/20 bg-white/10 p-5 backdrop-blur"
              >
                <span className="text-4xl font-black text-white/28">0{index + 1}</span>
                <p className="mt-4 text-lg font-black">{step}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-16">
        <div className="section-shell grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <p className="font-black uppercase tracking-[0.18em] text-wine">{t('sections.testimonials')}</p>
            <h2 className="mt-3 text-3xl font-black text-navy sm:text-4xl">{t('about.trust')}</h2>
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            {testimonials.map((item) => (
              <div key={item.name} className="glass rounded-2xl p-5 shadow-glass">
                <FaQuoteLeft className="text-2xl text-wine" />
                <p className="mt-4 text-sm leading-7 text-slate-600">{item.text}</p>
                <p className="mt-4 font-black text-navy">{item.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="section-shell grid gap-8 lg:grid-cols-2">
          <div>
            <p className="font-black uppercase tracking-[0.18em] text-wine">{t('sections.faq')}</p>
            <h2 className="mt-3 text-3xl font-black text-navy sm:text-4xl">{t('sections.contactCta')}</h2>
            <Link to="/contact" className="mt-6 inline-flex items-center gap-2 rounded-xl bg-wine px-5 py-3 font-black text-white shadow-glow">
              {t('nav.contact')} <FaArrowRight />
            </Link>
          </div>
          <div className="space-y-4">
            {faq.map((item) => (
              <details key={item.q} className="glass rounded-2xl p-5 shadow-glass">
                <summary className="cursor-pointer font-black text-navy">{item.q}</summary>
                <p className="mt-3 leading-7 text-slate-600">{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

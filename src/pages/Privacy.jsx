
import React, { useState } from 'react';
import privacyLayout from '../assets/image4.jpg';

const sections = [
  {
    id: 'info',
    title: 'What information we collect',
    body: (
      <>
        <p>
          We collect account and contact information such as your name, email
          address, phone number, delivery address and login credentials when
          you create an account or place an order.
        </p>
        <p>
          Order information includes products purchased, dosage strength,
          quantity, payment method and transaction identifiers. Limited medical
          information such as allergies or notes to the pharmacist is collected
          only if you choose to provide it and is treated as sensitive health
          data.
        </p>
      </>
    ),
  },
  {
    id: 'use',
    title: 'How we use your information',
    body: (
      <>
        <p>
          Personal data is used to create and manage your account, process
          orders, deliver products, provide customer support and comply with
          pharmacy and financial record‑keeping obligations.
        </p>
        <p>
          We also process data to improve our services, perform analytics and
          prevent fraud. Where required, we use anonymised or aggregated data so
          that individuals cannot be identified.
        </p>
      </>
    ),
  },
  {
    id: 'cookies',
    title: 'Cookies and tracking',
    body: (
      <>
        <p>
          We use essential cookies to keep you signed in, remember items in your
          cart and maintain security of your session.
        </p>
        <p>
          With your consent, we may use analytics and marketing cookies or
          similar technologies to understand how the site is used and to show
          relevant offers. You can control cookies through your browser or
          privacy settings.
        </p>
      </>
    ),
  },
  {
    id: 'sharing',
    title: 'Sharing with third parties',
    body: (
      <>
        <p>
          We share data only with service providers who help operate the
          platform, such as licensed pharmacies, payment processors, logistics
          partners, IT hosting providers and analytics vendors.
        </p>
        <p>
          Health‑related information is shared only with the dispensing pharmacy
          or where required by law, and never sold to advertisers or other third
          parties.
        </p>
      </>
    ),
  },
  {
    id: 'security',
    title: 'Data storage, security and retention',
    body: (
      <>
        <p>
          Data is stored on secure servers with technical and organisational
          measures including encryption in transit (HTTPS), access controls and
          regular monitoring for suspicious activity.
        </p>
        <p>
          We retain personal data only for as long as necessary to provide
          services, meet legal obligations and resolve disputes, after which it
          is deleted or irreversibly anonymised.
        </p>
      </>
    ),
  },
  {
    id: 'rights',
    title: 'Your privacy rights',
    body: (
      <>
        <p>
          Depending on your jurisdiction, you may have the right to access,
          correct or delete your personal data, restrict or object to certain
          processing and request a copy of your data in a portable format.
        </p>
        <p>
          Where processing is based on consent, you can withdraw that consent at
          any time without affecting the lawfulness of processing carried out
          before withdrawal.
        </p>
      </>
    ),
  },
  {
    id: 'contact',
    title: 'Contacting us',
    body: (
      <>
        <p>
          If you have questions or concerns about this Privacy &amp; Policy or
          the way your data is handled, you can contact our Data Protection
          Officer at <span className="font-semibold">privacy@edpharma.example</span>.
        </p>
        <p>
          Please include your name, contact details and, where applicable, your
          order number so that we can respond efficiently.
        </p>
      </>
    ),
  },
];

const Privacy = () => {
  const [openId, setOpenId] = useState('info');

  const toggle = (id) => {
    setOpenId((current) => (current === id ? null : id));
  };

  return (
    <section className="px-4 md:px-8 lg:px-10 py-8 md:py-12">
      <div className="max-w-5xl mx-auto grid gap-10 lg:grid-cols-[1.1fr,1.3fr] items-start">
        {/* Visual column inspired by image4 */}
        <div className="space-y-6">
          <div className="rounded-3xl overflow-hidden shadow-soft border border-slate-100 bg-white">
            <img
              src={privacyLayout}
              alt="Mobile screens showing a privacy policy accordion layout"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="rounded-2xl bg-brand-light/60 px-5 py-4">
            <h2 className="text-lg md:text-xl font-semibold text-slate-900">
              How we protect health data
            </h2>
            <p className="mt-2 text-sm md:text-base text-slate-700">
              Medical and health‑related information is considered sensitive
              personal data. We collect it only with your explicit consent, use
              it strictly for dispensing and safety checks, protect it with
              strong security controls and never share it for advertising.
            </p>
          </div>
        </div>

        {/* Accordion column */}
        <div className="rounded-3xl bg-white/90 p-5 md:p-7 shadow-soft">
          <header className="mb-4">
            <h1 className="text-2xl md:text-3xl font-bold text-slate-900">
              Privacy &amp; Policy
            </h1>
            <p className="mt-2 text-sm md:text-base text-slate-600">
              This notice explains how EDpharma collects, uses, stores
              and protects your personal data when you browse our website or
              place an order for pharmaceutical products.
            </p>
          </header>

          <div className="divide-y divide-slate-200">
            {sections.map((section) => {
              const isOpen = openId === section.id;
              return (
                <div key={section.id}>
                  <button
                    type="button"
                    onClick={() => toggle(section.id)}
                    className="flex w-full items-center justify-between gap-3 py-3 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-brand"
                    aria-expanded={isOpen}
                    aria-controls={`${section.id}-panel`}
                  >
                    <span className="text-sm md:text-base font-semibold text-slate-900">
                      {section.title}
                    </span>
                    <span
                      className="flex h-7 w-7 items-center justify-center rounded-full border border-slate-300 text-slate-600"
                      aria-hidden="true"
                    >
                      {isOpen ? '−' : '+'}
                    </span>
                  </button>
                  <div
                    id={`${section.id}-panel`}
                    hidden={!isOpen}
                    className="pb-3 text-xs md:text-sm leading-relaxed text-slate-700 space-y-2"
                  >
                    {section.body}
                  </div>
                </div>
              );
            })}
          </div>

          <p className="mt-4 text-[11px] md:text-xs text-slate-500">
            This Privacy &amp; Policy may be updated from time to time. The
            latest version will always be available on this page and the
            effective date will be indicated in your account area or order
            confirmation where required.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Privacy;

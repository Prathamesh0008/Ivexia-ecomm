import React, { useState } from "react";
import privacyLayout from "../assets/image4.jpg";

const sections = [
  {
    id: "info",
    title: "What information we collect",
    body: (
      <>
        <p>
          We collect account and contact information such as your name, email,
          phone number, delivery address and login credentials when you create
          an account or place an order.
        </p>
        <p>
          Order information includes products purchased, dosage strength,
          quantity, payment method and transaction identifiers. Limited medical
          information such as allergies or notes to the pharmacist is collected
          only if you choose to provide it.
        </p>
      </>
    ),
  },
  {
    id: "use",
    title: "How we use your information",
    body: (
      <>
        <p>
          Personal data is used to create and manage your account, process
          orders, deliver products, provide customer support and comply with
          regulatory obligations.
        </p>
        <p>
          We also process data to improve services, perform analytics and
          prevent fraud. Anonymised or aggregated data is used where possible.
        </p>
      </>
    ),
  },
  {
    id: "cookies",
    title: "Cookies and tracking",
    body: (
      <>
        <p>
          We use essential cookies to keep you signed in, maintain cart
          information and ensure platform security.
        </p>
        <p>
          With consent, analytics/marketing cookies may be used to improve user
          experience and show relevant offers.
        </p>
      </>
    ),
  },
  {
    id: "sharing",
    title: "Sharing with third parties",
    body: (
      <>
        <p>
          We share data only with trusted service providers including licensed
          pharmacies, payment processors, logistic partners and IT hosting
          providers.
        </p>
        <p>
          Health-related information is shared only where required by law and
          never sold to advertisers.
        </p>
      </>
    ),
  },
  {
    id: "security",
    title: "Data storage, security and retention",
    body: (
      <>
        <p>
          Data is stored on secure servers protected by encryption, access
          controls and active monitoring.
        </p>
        <p>
          Information is retained only as long as legally required or necessary
          for service delivery.
        </p>
      </>
    ),
  },
  {
    id: "rights",
    title: "Your privacy rights",
    body: (
      <>
        <p>
          You may have rights to access, correct or delete your personal data,
          restrict processing and request a portable copy.
        </p>
        <p>
          Consent-based processing can be withdrawn at any time.
        </p>
      </>
    ),
  },
  {
    id: "contact",
    title: "Contacting us",
    body: (
      <>
        <p>
          For privacy-related questions, contact our Data Protection Officer at{" "}
          <span className="font-semibold">privacy@edpharma.example</span>.
        </p>
        <p>
          Please include your name and order number so we can respond quickly.
        </p>
      </>
    ),
  },
];

export default function Privacy() {
  const [openId, setOpenId] = useState("info");
  const toggle = (id) => setOpenId((curr) => (curr === id ? null : id));

  return (
    <section className="min-h-screen bg-[#020617] text-slate-100 px-4 md:px-8 lg:px-10 py-10">
      <div className="max-w-7xl mx-auto grid gap-10 lg:grid-cols-[1.1fr,1.3fr] items-start">

        {/* LEFT IMAGE + CARD */}
        <div className="space-y-6">

          {/* Image block */}
          <div className="rounded-3xl overflow-hidden border border-[#233554] bg-white/5 backdrop-blur-lg shadow-[0_0_40px_rgba(15,23,42,0.8)]">
            <img
              src={privacyLayout}
              alt="Privacy layout preview"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Info card */}
          <div className="rounded-2xl bg-white/5 border border-[#233554] px-5 py-5 shadow-[0_0_30px_rgba(15,23,42,0.6)]">
            <h2 className="text-lg md:text-xl font-semibold text-white">
              How we protect health data
            </h2>
            <p className="mt-2 text-sm text-slate-300">
              Health-related information is considered sensitive. We collect it
              with consent, protect it using strong encryption and share it only
              for dispensing or legal compliance.
            </p>
          </div>

        </div>

        {/* RIGHT ACCORDION */}
        <div className="rounded-3xl bg-white/5 border border-[#233554] p-6 md:p-8 backdrop-blur-xl shadow-[0_0_40px_rgba(15,23,42,0.7)]">
          <header className="mb-6">
            <h1 className="text-3xl font-bold text-white">Privacy Policy</h1>
            <p className="mt-2 text-sm text-slate-300">
              How Ivexia collects, stores and protects your information when you
              use our platform or purchase pharmaceutical products.
            </p>
          </header>

          <div className="divide-y divide-[#1e293b]">
            {sections.map((section) => {
              const isOpen = openId === section.id;

              return (
                <div key={section.id} className="py-3">
                  <button
                    type="button"
                    onClick={() => toggle(section.id)}
                    className="flex w-full items-center justify-between gap-3 py-2 text-left"
                  >
                    <span className="text-sm md:text-base font-semibold text-white">
                      {section.title}
                    </span>

                    <span
                      className="flex h-7 w-7 items-center justify-center rounded-full border border-slate-500 text-slate-300"
                    >
                      {isOpen ? "−" : "+"}
                    </span>
                  </button>

                  {isOpen && (
                    <div className="pt-2 text-xs md:text-sm leading-relaxed text-slate-300 space-y-2">
                      {section.body}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          <p className="mt-6 text-[11px] text-slate-400">
            This Privacy Policy may be updated periodically. The latest version
            will always be available here.
          </p>
        </div>
      </div>
    </section>
  );
}

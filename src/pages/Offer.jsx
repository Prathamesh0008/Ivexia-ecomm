


// import React from 'react';
// import { Link } from 'react-router-dom';
// import heroDesktop from '../assets/image1.jpg';
// import heroMobile from '../assets/image1_mobile.jpg';
// import vitD3Img from '../assets/vitamin-d3.jpg';
// import allergyImg from '../assets/allergy-relief.jpg';
// import omegaImg from '../assets/omega-3.jpg';

// const products = [
//   {
//     name: 'Vitamin D3 Softgels',
//     description:
//       'High-absorption vitamin D3 capsules to support bone and immune health.',
//     price: '₹349',
//     image: vitD3Img,
//     alt: 'Blister pack of Vitamin D3 softgel capsules on a table',
//     to: '/products/vitamin-d3',
//   },
//   {
//     name: 'Allergy Relief Tablets',
//     description:
//       'Non-drowsy antihistamine tablets for seasonal allergies.',
//     price: '₹279',
//     image: allergyImg,
//     alt: 'Box of allergy relief tablets with a tissue box nearby',
//     to: '/products/allergy-relief',
//   },
//   {
//     name: 'HeartCare Omega-3',
//     description:
//       'Purified omega-3 capsules to support cardiovascular wellness.',
//     price: '₹599',
//     image: omegaImg,
//     alt: 'Bottle of omega-3 capsules next to a heart-shaped object',
//     to: '/products/heartcare-omega-3',
//   },
// ];

// const Offer = () => {
//   return (
//     <section className="px-4 md:px-8 lg:px-10 py-8 md:py-12">
//       <div className="max-w-6xl mx-auto space-y-10">
//         {/* Hero */}
//         <div className="grid gap-8 lg:grid-cols-2 items-center">
//           <div className="space-y-5">
//             <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900">
//               Develop safer care in a new and trusted way.
//             </h1>
//             <p className="text-sm md:text-base text-slate-600">
//               Order prescription and over-the-counter medicines from licensed
//               pharmacies with temperature-controlled delivery and pharmacist
//               review.
//             </p>
//             <div className="flex flex-wrap gap-3">
//               <button
//                 type="button"
//                 className="rounded-full bg-brand px-6 py-2.5 text-sm md:text-base font-semibold text-white shadow-soft hover:bg-brand-dark focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-brand"
//               >
//                 Shop medicines
//               </button>
//               <button
//                 type="button"
//                 className="rounded-full border border-brand px-6 py-2.5 text-sm md:text-base font-semibold text-brand hover:bg-brand-light/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-brand"
//               >
//                 View all products
//               </button>
//             </div>
//             <p className="text-xs md:text-sm text-slate-500">
//               Always consult a registered medical practitioner before starting
//               any new medicine. Read the package insert carefully before use.
//             </p>
//           </div>

//           <div className="relative">
//             <div className="rounded-[32px] bg-gradient-to-br from-brand to-pink-400 p-[3px] shadow-soft">
//               <picture>
//                 <source srcSet={heroMobile} media="(max-width: 768px)" />
//                 <img
//                   src={heroDesktop}
//                   alt="Customers exploring online pharma products and offers"
//                   className="h-full w-full rounded-[28px] object-cover"
//                 />
//               </picture>
//             </div>
//           </div>
//         </div>

//         {/* Trust badges */}
//         <div className="flex flex-wrap items-center justify-center gap-6 rounded-2xl bg-white/70 px-6 py-4 shadow-soft">
//           <span className="text-xs md:text-sm font-medium text-slate-600">
//             Licensed pharmacies only
//           </span>
//           <span className="h-1 w-1 rounded-full bg-slate-300" />
//           <span className="text-xs md:text-sm font-medium text-slate-600">
//             Cold-chain compliant delivery partners
//           </span>
//           <span className="h-1 w-1 rounded-full bg-slate-300" />
//           <span className="text-xs md:text-sm font-medium text-slate-600">
//             Secure payments &amp; data encryption
//           </span>
//         </div>

//         {/* Search */}
//         <div className="rounded-2xl bg-white/80 px-6 py-6 shadow-soft space-y-4">
//           <h2 className="text-lg md:text-xl font-semibold text-slate-900">
//             Search medicines and wellness products
//           </h2>
//           <form
//             className="flex flex-col gap-3 sm:flex-row"
//             onSubmit={(e) => e.preventDefault()}
//           >
//             <label className="sr-only" htmlFor="search">
//               Search products
//             </label>
//             <input
//               id="search"
//               type="search"
//               placeholder="Search by product name, salt or brand"
//               className="flex-1 rounded-full border border-slate-200 bg-white px-4 py-2.5 text-sm md:text-base text-slate-900 placeholder:text-slate-400 focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand-light"
//             />
//             <button
//               type="submit"
//               className="rounded-full bg-brand px-6 py-2.5 text-sm md:text-base font-semibold text-white shadow-soft hover:bg-brand-dark focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-brand"
//             >
//               Search
//             </button>
//           </form>
//         </div>

//         {/* Product cards – clickable */}
//         <section aria-labelledby="popular-products">
//           <div className="flex items-baseline justify-between mb-4">
//             <h2
//               id="popular-products"
//               className="text-xl md:text-2xl font-semibold text-slate-900"
//             >
//               Popular pharma products
//             </h2>
//             <span className="text-xs md:text-sm text-slate-500">
//               Curated by licensed pharmacists
//             </span>
//           </div>
//           <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
//             {products.map((product) => (
//               <Link
//                 key={product.name}
//                 to={product.to}
//                 className="flex flex-col rounded-2xl bg-white/80 p-5 shadow-soft hover:shadow-lg transition-shadow focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-brand"
//                 aria-label={`View details for ${product.name}`}
//               >
//                 <div className="mb-3 h-32 rounded-xl overflow-hidden bg-gradient-to-br from-brand-light to-white">
//                   <img
//                     src={product.image}
//                     alt={product.alt}
//                     className="h-full w-full object-cover"
//                   />
//                 </div>
//                 <h3 className="text-base md:text-lg font-semibold text-slate-900">
//                   {product.name}
//                 </h3>
//                 <p className="mt-1 flex-1 text-xs md:text-sm text-slate-600">
//                   {product.description}
//                 </p>
//                 <div className="mt-4 flex items-center justify-between">
//                   <span className="rounded-full bg-accent/10 px-3 py-1 text-xs font-semibold text-accent">
//                     {product.price}
//                   </span>
//                   <span className="text-[11px] md:text-xs text-brand font-semibold">
//                     View more →
//                   </span>
//                 </div>
//               </Link>
//             ))}
//           </div>
//         </section>
//       </div>
//     </section>
//   );
// };

// export default Offer;

import React from 'react';
import { Link } from 'react-router-dom';
import heroDesktop from '../assets/image1.jpg';
import heroMobile from '../assets/image1_mobile.jpg';
import malegra50Img from '../assets/malegra-50.jpg'; // Example image for sildenafil product
import penonCreamImg from '../assets/penon-cream.jpg'; // Example image for allergy/herbal product
import malegraProImg from '../assets/malegra-pro.jpg'; // Example image for omega-3 or heart health related product if none use omegaImg

const products = [
  {
    name: 'Malegra 50 Sildenafil Tablets',
    description:
      'Effective treatment for erectile dysfunction to help achieve and maintain an erection.',
    price: '₹91',
    image: malegra50Img,
    alt: 'Box of Malegra 50 Sildenafil Tablets',
    to: '/products/malegra-50',
  },
  {
    name: 'Penon Cream Herbal Massage',
    description:
      'Natural herbal cream to enhance sexual health and male performance.',
    price: '₹250',
    image: penonCreamImg,
    alt: 'Tube of Penon Herbal Massage Cream',
    to: '/products/penon-cream',
  },
  {
    name: 'Malegra Pro 50 Sildenafil Tablets',
    description:
      'Professional grade sildenafil tablets to support male sexual function and confidence.',
    price: '₹120',
    image: malegraProImg,
    alt: 'Box of Malegra Pro 50 Sildenafil Tablets',
    to: '/products/malegra-pro-50',
  },
];

const Offer = () => {
  return (
    <section className="px-4 md:px-8 lg:px-10 py-8 md:py-12">
      <div className="max-w-6xl mx-auto space-y-10">
        {/* Hero */}
        <div className="grid gap-8 lg:grid-cols-2 items-center">
          <div className="space-y-5">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900">
              Develop safer care in a new and trusted way.
            </h1>
            <p className="text-sm md:text-base text-slate-600">
              Order prescription and over-the-counter medicines from licensed
              pharmacies with temperature-controlled delivery and pharmacist
              review.
            </p>
            <div className="flex flex-wrap gap-3">
              <button
                type="button"
                className="rounded-full bg-brand px-6 py-2.5 text-sm md:text-base font-semibold text-white shadow-soft hover:bg-brand-dark focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-brand"
              >
                Shop medicines
              </button>
              <button
                type="button"
                className="rounded-full border border-brand px-6 py-2.5 text-sm md:text-base font-semibold text-brand hover:bg-brand-light/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-brand"
              >
                View all products
              </button>
            </div>
            <p className="text-xs md:text-sm text-slate-500">
              Always consult a registered medical practitioner before starting
              any new medicine. Read the package insert carefully before use.
            </p>
          </div>

          <div className="relative">
            <div className="rounded-[32px] bg-gradient-to-br from-brand to-pink-400 p-[3px] shadow-soft">
              <picture>
                <source srcSet={heroMobile} media="(max-width: 768px)" />
                <img
                  src={heroDesktop}
                  alt="Customers exploring online pharma products and offers"
                  className="h-full w-full rounded-[28px] object-cover"
                />
              </picture>
            </div>
          </div>
        </div>

        {/* Trust badges */}
        <div className="flex flex-wrap items-center justify-center gap-6 rounded-2xl bg-white/70 px-6 py-4 shadow-soft">
          <span className="text-xs md:text-sm font-medium text-slate-600">
            Licensed pharmacies only
          </span>
          <span className="h-1 w-1 rounded-full bg-slate-300" />
          <span className="text-xs md:text-sm font-medium text-slate-600">
            Cold-chain compliant delivery partners
          </span>
          <span className="h-1 w-1 rounded-full bg-slate-300" />
          <span className="text-xs md:text-sm font-medium text-slate-600">
            Secure payments &amp; data encryption
          </span>
        </div>

        {/* Search */}
        <div className="rounded-2xl bg-white/80 px-6 py-6 shadow-soft space-y-4">
          <h2 className="text-lg md:text-xl font-semibold text-slate-900">
            Search medicines and wellness products
          </h2>
          <form
            className="flex flex-col gap-3 sm:flex-row"
            onSubmit={(e) => e.preventDefault()}
          >
            <label className="sr-only" htmlFor="search">
              Search products
            </label>
            <input
              id="search"
              type="search"
              placeholder="Search by product name, salt or brand"
              className="flex-1 rounded-full border border-slate-200 bg-white px-4 py-2.5 text-sm md:text-base text-slate-900 placeholder:text-slate-400 focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand-light"
            />
            <button
              type="submit"
              className="rounded-full bg-brand px-6 py-2.5 text-sm md:text-base font-semibold text-white shadow-soft hover:bg-brand-dark focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-brand"
            >
              Search
            </button>
          </form>
        </div>

        {/* Product cards – clickable */}
        <section aria-labelledby="popular-products">
          <div className="flex items-baseline justify-between mb-4">
            <h2
              id="popular-products"
              className="text-xl md:text-2xl font-semibold text-slate-900"
            >
              Popular pharma products
            </h2>
            <span className="text-xs md:text-sm text-slate-500">
              Curated by licensed pharmacists
            </span>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {products.map((product) => (
              <Link
                key={product.name}
                to={product.to}
                className="flex flex-col rounded-2xl bg-white/80 p-5 shadow-soft hover:shadow-lg transition-shadow focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-brand"
                aria-label={`View details for ${product.name}`}
              >
                <div className="mb-3 h-32 rounded-xl overflow-hidden bg-gradient-to-br from-brand-light to-white">
                  <img
                    src={product.image}
                    alt={product.alt}
                    className="h-full w-full object-cover"
                  />
                </div>
                <h3 className="text-base md:text-lg font-semibold text-slate-900">
                  {product.name}
                </h3>
                <p className="mt-1 flex-1 text-xs md:text-sm text-slate-600">
                  {product.description}
                </p>
                <div className="mt-4 flex items-center justify-between">
                  <span className="rounded-full bg-accent/10 px-3 py-1 text-xs font-semibold text-accent">
                    {product.price}
                  </span>
                  <span className="text-[11px] md:text-xs text-brand font-semibold">
                    View more →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </section>
  );
};

export default Offer;

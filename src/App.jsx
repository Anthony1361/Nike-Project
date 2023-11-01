// export default function App() {
//   return (
//     <h1 className="text-3xl font-bold underline">
//       Hello world!
//     </h1>
//   )
// }

import Hero from "./sections/Hero";
import CustomerReviews from "./sections/CustomerReviews";
import Footer from "./sections/Footer";
import PopularProducts from "./sections/PopularProducts";
import Services from "./sections/Services";
import SpecialOffer from "./sections/SpecialOffer";
import Subscribe from "./sections/Subscribe";
import SuperQuality from "./sections/SuperQuality";

import Nav from "./components/Nav";


// import {
//   Hero, CustomerReviews, Footer, PopularProducts, Services,
//   SpecialOffer, Subscribe, SuperQuality
// } from './sections';

const App = () => (
  <main className="relative">

    <Nav></Nav> 

    <section className="xl:padding-l wide:padding-r padding-b">
      <Hero></Hero>
    </section>

    <section className="padding">
      <PopularProducts></PopularProducts>
    </section>

    <section className="padding">
      <SuperQuality></SuperQuality>
    </section>

    <section className="padding-x py-10">
      <Services></Services>
    </section>

    <section className="padding">
      <SpecialOffer></SpecialOffer>
    </section>

    <section className="bg-pale-blue padding">
      <CustomerReviews/>
    </section>

    <section className="padding-x sm:py-32 py-16 w-full">
      <Subscribe/>
    </section>

    <section className="bg-black padding-x padding-t pb-8">
      <Footer/>
    </section>
  </main>
);

export default App
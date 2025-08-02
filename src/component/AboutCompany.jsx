import React from "react";
import { Layouts } from "../Pages/Layouts";
import modelwork from "../assets/modelwork.png";
import siteData from "../DataWeb/SideData";

export const AboutCompany = () => {
  return (
    <Layouts>
      <div className="px-16">
        {/* <!-- Hero Section --> */}
        <section className="mt-12 px-6 flex flex-col items-center text-center ">
          <h2 className="text-sm">Buy A Package, Give A Package</h2>
          <h1 className="text-xl font-semibold mt-3">The whole story begins with you</h1>
          <p className="text-xs  mt-3">
            Since the beginning, Arliva has believed that taking care of
            yourself is a form of love — not only for your skin, but also for
            those around you. With every product you choose, you help bring
            someone else skincare. Because with Arliva, beauty is not just about
            what you see. But it’s also what you give.
          </p>
            {/* <!-- Image Model --> */}
          <div className="w-fit grid grid-cols-3  gap-4 mt-16">
            {siteData.AboutSection.map((item) => (              
              <img src={item.gambar} alt="" className="w-full" key={item.id}/>
            ))}
          </div>
        </section>

        {/* <!-- How It Works --> */}
        <section className="w-full mt-24 px-12 flex flex-col justify-between lg:flex-row items-center ">
          <div className="w-md space-y-3 ">
            <h2 className="text-xl font-semibold text-center">How it works</h2>
            {siteData.PargrafAbout.map((item) => (
            <p className="text-sm text-center mb-6" key={item.id}>
            {item.text}
            </p> 
            ))}
          </div>
          <img
            src={modelwork}
            alt="How it works"
            className=" rounded-lg"
          />
        </section>

        {/* <!-- Power of Skincare --> */}
        <section className="mt-24 text-center space-y-6">
          <h2 className="text-xl font-semibold">The power of skincare</h2>
          <div className="w-fit grid grid-cols-1 md:grid-cols-3 gap- place-items-center">
            {siteData.PowerSkincare.map((item) => (
              <div className="w-full h-full  flex flex-col items-center space-y-7 px-4 rounded-xl shadow py-9" key={item.id}>
              <img src={item.icon} alt="" className="" />
              <p className="text-sm text-start">
                {item.benefit}
              </p>
            </div>
            ))}
          </div>
        </section>

        {/* <!-- Partners --> */}
        <section className="text-center space-y-6 mt-24">
          <h2 className="text-xl font-semibold">Our partners</h2>
          <p className="text-sm text-center">
           Yayasan Sehat Seutuhnya Together with this foundation, Arliva supports skin health 
           education in underprivileged communities through workshops and distribution of basic skin care products.
          </p>
          <p className="text-sm text-center">
            Bright Teen Clinic We collaborate with local medical personnel to provide free skin 
            consultations and build teenagers' confidence with the right skin care.</p>
          <p className="text-sm text-center">
            Great Mother Community
            As part of women's empowerment, we work together to provide basic skincare training and
            trial products for housewives in remote areas.
          </p>
          <p className="text-sm text-center">
            Clean and Healthy School Movement
            Arliva supports school activities that teach facial cleanliness and the importance of skin care from an early age 
            through a visit program to elementary schools.
          </p>
        </section>

        {/* <!-- Testimoni Slide --> */}
        <section className="relative">
          <img
            src="depok-treatment.jpg"
            alt="Treatment"
            className="w-full rounded-lg"
          />
          <div className="absolute bottom-4 left-4 text-white text-xs">
            Depok, Indonesia
          </div>
        </section>

        {/* <!-- Indonesia Map --> */}
        <section className="text-center space-y-4">
          <h2 className="text-sm font-medium">Doing good at network</h2>
          <p className="text-xs">From Sabang to Merauke, our impact has reached</p>
          <h3 className="text-xl font-semibold">30+ Provinsi</h3>
          <img
            src="indonesia-map.png"
            alt="Peta Indonesia"
            className="mx-auto max-w-4xl"
          />
        </section>

        {/* <!-- Closing Grid Foto --> */}
        <section className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <img src="closing1.jpg" alt="" className="rounded-lg" />
          <img src="closing2.jpg" alt="" className="rounded-lg" />
          <img src="closing3.jpg" alt="" className="rounded-lg" />
          <img src="closing4.jpg" alt="" className="rounded-lg" />
          <img src="closing5.jpg" alt="" className="rounded-lg" />
          <img src="closing6.jpg" alt="" className="rounded-lg" />
        </section>
        {/* 
  <!-- Final Quote --> */}
        <section className="text-center mt-10">
          <p className="text-xs max-w-xl mx-auto">
            This is just the start but our sleeves are rolled up, and we’re
            excited to move forward together.
          </p>
        </section>
      </div>
    </Layouts>
  );
};

"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactSplitForm from '@/components/sections/contact/ContactSplitForm';
import FooterBaseCard from '@/components/sections/footer/FooterBaseCard';
import HeroBillboardScroll from '@/components/sections/hero/HeroBillboardScroll';
import NavbarLayoutFloatingInline from '@/components/navbar/NavbarLayoutFloatingInline';
import ProductCardThree from '@/components/sections/product/ProductCardThree';
import TestimonialAboutCard from '@/components/sections/about/TestimonialAboutCard';
import TestimonialCardOne from '@/components/sections/testimonial/TestimonialCardOne';
import { Leaf } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="text-shift"
        defaultTextAnimation="background-highlight"
        borderRadius="rounded"
        contentWidth="medium"
        sizing="largeSmallSizeMediumTitles"
        background="noise"
        cardStyle="glass-elevated"
        primaryButtonStyle="radial-glow"
        secondaryButtonStyle="glass"
        headingFontWeight="bold"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarLayoutFloatingInline
      navItems={[
        {
          name: "Home",
          id: "hero",
        },
        {
          name: "Story",
          id: "about",
        },
        {
          name: "Menu",
          id: "products",
        },
        {
          name: "Visit",
          id: "contact",
        },
      ]}
      brandName="Matcha"
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroBillboardScroll
      background={{
        variant: "sparkles-gradient",
      }}
      title="Embrace the Calm of Matcha"
      description="Authentic ceremonial grade matcha, crafted to bring serenity to your daily routine."
      buttons={[
        {
          text: "Discover Our Menu",
          href: "#products",
        },
      ]}
      imageSrc="https://pixabay.com/get/ged27b76e8a4e857d961c65b1f70cea8f8a6b9c7206dfdaa36281f35f45bb12562636d27543a2ab386ae6176a66da8c8874209aa3c29ac04c0a83b7fa4d50db74_1280.jpg"
    />
  </div>

  <div id="about" data-section="about">
      <TestimonialAboutCard
      useInvertedBackground={true}
      tag="Our Philosophy"
      title="Cultivating Serenity"
      description="We source the finest shade-grown tea leaves from Uji, Japan, to ensure every cup is a moment of pure bliss."
      subdescription="Our commitment to quality and sustainability guides every step of our process, from farm to whisk."
      icon={Leaf}
      imageSrc="https://pixabay.com/get/g77233fce6a4e6920bf6392eb29eaf38e237b9467673a989b1dc955e9bda0597122efe57d05161f051b8e02b812642a4fc25167ee96a1c7aaf37249be75bc901a_1280.jpg"
      mediaAnimation="blur-reveal"
    />
  </div>

  <div id="products" data-section="products">
      <ProductCardThree
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="three-columns-all-equal-width"
      useInvertedBackground={false}
      products={[
        {
          id: "p1",
          name: "Ceremonial Latte",
          price: "$6.50",
          imageSrc: "https://pixabay.com/get/gd4ea8ad1464390e6987a77cceb3b154c6d9efc799c8c73e2339d2b78eb8d65f62e2cd4682778befcf523ab63eb01b57fb4bfaa45ef8d6c9a7be785a64b17cd67_1280.jpg",
        },
        {
          id: "p2",
          name: "Matcha Mochi Treat",
          price: "$4.00",
          imageSrc: "https://pixabay.com/get/g6e26f027a6e3b7d0e9f709e5bf19d8b483760c88aa46ddd5a0aa8d67b33d94a2677504c6b6991f690f01aed355a238e86e308af8fbbeac46c168014eb29fb499_1280.jpg",
        },
        {
          id: "p3",
          name: "Premium Whisk Set",
          price: "$25.00",
          imageSrc: "https://pixabay.com/get/g597a08e083dda55d9c0e81959b31304ea9e1f048300e0680871c117ca8ad17678e697cd85eb64ccb0992a6bb5d318c856d6055e2f7ff7b0f1e77233b87cad27f_1280.jpg",
        },
      ]}
      title="Artisanal Matcha Selection"
      description="Experience our signature blends and curated matcha-inspired treats."
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardOne
      animationType="depth-3d"
      textboxLayout="default"
      gridVariant="four-items-2x2-equal-grid"
      useInvertedBackground={true}
      testimonials={[
        {
          id: "1",
          name: "Elena R.",
          role: "Designer",
          company: "Creative Lab",
          rating: 5,
          imageSrc: "https://pixabay.com/get/g44b3f8bfa6b66d40ebf9bfd604e3527a2837870119cad2cc48f48f92cfe5a0a209a79e8239b4e3cb8c8f75ba40707da60defef1bd98c03adb3c356b402fe22db_1280.jpg",
        },
        {
          id: "2",
          name: "Marcus J.",
          role: "Architect",
          company: "Urban Studio",
          rating: 5,
          imageSrc: "https://pixabay.com/get/gdda4a0f13b18cb7e615137512b47a9201253f200db0dcf94b8ed3b3f8c23c6dd181d830e97268e20b5ef92a298818196ddd34e9c8037ec6672cd86f2f3fd5738_1280.jpg",
        },
        {
          id: "3",
          name: "Sophie L.",
          role: "Student",
          company: "University",
          rating: 5,
          imageSrc: "https://pixabay.com/get/g5fd97f70a3c5561dc8406b4dc0259bd467fa9d72b1f93e7491e27f6d4ee7d2464d9b94a0398e01b55bc8338d1c84729eb62ccc8a988e99edfac5706f971c47e9_1280.jpg",
        },
        {
          id: "4",
          name: "David W.",
          role: "Regular",
          company: "Community",
          rating: 5,
          imageSrc: "https://pixabay.com/get/g7a6d830e7ede6053243ad8446739cca477ce9bc185348d02713b1d7aced9904ef822866d42681663c7ee84b0883e99cdbaf9e648cc93feecd83d61d41e69e3bf_1280.jpg",
        },
        {
          id: "5",
          name: "Sarah K.",
          role: "Writer",
          company: "Zen Journals",
          rating: 5,
          imageSrc: "https://pixabay.com/get/g44b3f8bfa6b66d40ebf9bfd604e3527a2837870119cad2cc48f48f92cfe5a0a209a79e8239b4e3cb8c8f75ba40707da60defef1bd98c03adb3c356b402fe22db_1280.jpg",
        },
      ]}
      title="A Moment of Peace"
      description="Hear what our community says about their Matcha experience."
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactSplitForm
      useInvertedBackground={false}
      title="Visit Our Matcha Oasis"
      description="Have questions about our sourcing or hosting an event? We'd love to connect."
      inputs={[
        {
          name: "name",
          type: "text",
          placeholder: "Your Name",
          required: true,
        },
        {
          name: "email",
          type: "email",
          placeholder: "Email Address",
          required: true,
        },
      ]}
      textarea={{
        name: "message",
        placeholder: "How can we help?",
        rows: 4,
      }}
      imageSrc="https://pixabay.com/get/g8160ecc1104208b228c3d2d2074375fe8ef3c635a47e9085632cedbdbe12277db5c2a328f402e48d5d94e727442aaf1ba80238fb6586f730dcd4dcb17d7c30f7_1280.jpg"
      mediaAnimation="blur-reveal"
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterBaseCard
      logoText="Matcha"
      columns={[
        {
          title: "Explore",
          items: [
            {
              label: "About Us",
              href: "#about",
            },
            {
              label: "Our Menu",
              href: "#products",
            },
          ],
        },
        {
          title: "Connect",
          items: [
            {
              label: "Instagram",
              href: "#",
            },
            {
              label: "Visit Us",
              href: "#contact",
            },
          ],
        },
      ]}
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}

"use client";

import { Header } from "@/components/Header";
import BlurText from "@/components/BlurText";
import DarkVeil from "@/components/DarkVeil";
import PhoneCarousel, { ImageItem } from "@/components/ui/phone-carousel";
import Image from "next/image";
import { CircleArrowDown, CirclePlay } from "lucide-react";
import CurvedLoop from "@/components/CurvedLoop";
import Masonry from "@/components/Masonry";
import TriplePhoneHero from "@/components/ui/triple-phone";
import { Iphone17Pro } from "@/components/ui/iphone-17-pro";
import StatsCount from "@/components/ui/statscount";
import { StickyFooter } from "@/components/ui/StickyFooter";

export default function HeroSection() {
  const exampleImages: ImageItem[] = [
    { src: "/wall1.avif", alt: "Wallpaper 1" },
    { src: "/wall2.avif", alt: "Wallpaper 2" },
    { src: "/wall3.avif", alt: "Wallpaper 3" },
    { src: "/wall4.avif", alt: "Wallpaper 4" },
    { src: "/wall5.avif", alt: "Wallpaper 5" },
    { src: "/wall6.avif", alt: "Wallpaper 6" },
  ];
  const items = [
    { id: "1", img: "image1.avif", height: 200, width: 600 },
    { id: "2", img: "image2.avif", height: 1100, width: 600 },
    { id: "3", img: "image3.avif", height: 1100, width: 600 },
    { id: "4", img: "image4.avif", height: 1100, width: 600 },
    { id: "5", img: "image5.avif", height: 200, width: 600 },
    { id: "6", img: "image6.avif", height: 1100, width: 600 },
    { id: "7", img: "image7.avif", height: 1100, width: 600 },
    { id: "8", img: "image8.avif", height: 1100, width: 600 },
    { id: "9", img: "image9.avif", height: 1100, width: 600 },
    { id: "10", img: "image10.avif", height: 200, width: 600 },
    { id: "11", img: "image11.avif", height: 1100, width: 600 },
    { id: "12", img: "image12.avif", height: 1100, width: 600 },
    { id: "13", img: "image13.avif", height: 1100, width: 600 },
    { id: "14", img: "image14.avif", height: 1100, width: 600 },
    { id: "15", img: "image15.avif", height: 1100, width: 600 },
    { id: "16", img: "image16.avif", height: 1100, width: 600 },
  ];
  const stats = [
    { value: 40, suffix: "K+", label: "Handcrafted animated components" },
    { value: 0, suffix: "K+", label: "ADs" },
    { value: 400, suffix: "+", label: "Wallpapers" },
  ];
  const handleAnimationComplete = () => {
    console.log("Blur animation finished!");
  };

  return (
    <>
      <section className="relative w-full min-h-screen overflow-hidden flex flex-col items-center">
        <div className="absolute inset-0 z-0">
          <DarkVeil />
        </div>

        <div className="fixed top-0 left-0 w-full z-30">
          <Header />
        </div>

        <div className="relative z-20 flex flex-col items-center justify-center text-center max-w-3xl px-4 mt-32 sm:mt-38">
          <div className="inline-flex items-center rounded-full backdrop-blur-md bg-white/10 border border-white/20 shadow-lg mb-6 px-5 py-1">
            <Image
              src="/logo.png"
              alt="R logo"
              width={36}
              height={36}
              className="drop-shadow-sm"
            />
            <span className="text-white font-bold text-xl tracking-tight -ml-2">
              adiance <span className="opacity-80">2.0</span>
            </span>
          </div>

          <BlurText
            text=" Let's make the world's best wallpapers."
            delay={10}
            animateBy="letters"
            direction="bottom"
            onAnimationComplete={handleAnimationComplete}
            className="text-4xl md:text-6xl font-semibold text-white text-center drop-shadow-lg justify-center flex leading-tight max-w-2xl"
            style={{ fontFamily: "'Stack Sans Headline', sans-serif" }}
          />

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mt-10">
            <button className="px-6 py-3 rounded-full bg-white text-black shadow-md hover:bg-gray-100 transition inline-flex items-center gap-0.5">
              <CircleArrowDown className="h-5 w-5" />
              <span>Download for iOS</span>
            </button>

            <button className="px-6 py-3 rounded-full backdrop-blur-md bg-white/10 border border-white/20 text-white font-semibold hover:bg-white/20 transition shadow-md inline-flex items-center gap-0.5">
              <CirclePlay className="h-5 w-5" />
              <span>Watch the film</span>
            </button>
          </div>
        </div>

        {/* 📱 Phone Carousel */}
        <div className="relativeflex items-center justify-center w-full mt-5 sm:mt-12">
          <PhoneCarousel images={exampleImages} />
        </div>
      </section>
      <section className="relative w-full bg-black text-white py-24 px-6 md:px-12 flex flex-col items-center">
        {/* Content */}
        <div className="max-w-3xl text-left">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-3">
            Meet the Library
          </h2>
          <h3 className="text-lg md:text-xl font-medium text-gray-300 mb-8">
            Made by humans
          </h3>

          <p className="text-gray-400 leading-relaxed mb-4">
            You can be sure that your wallpapers you download are made by real
            artists and designers, meaning the only artificial intelligence used
            is object removal, on photography.
          </p>

          <p className="text-gray-400 leading-relaxed mb-4">
            We work closely with our artists to bring wallpapers loved by the
            community to Radiance, along with plenty of Radiance originals, like
            the extended Nectar collection seen in featured videos.
          </p>

          <p className="text-gray-400 leading-relaxed">
            Photography collections like the Austin TX collection, are captured
            and edited with a wallpaper’s aspect ratio in mind.
          </p>
        </div>

        {/* Image (iPhone mockup) */}
        <div className="relative w-full max-w-2xl mt-16">
          <div className="relative overflow-hidden rounded-3xl shadow-2xl">
            <Image
              src="/library.avif" // replace with your image path
              alt="Library phone preview"
              width={1200}
              height={800}
              className="w-full h-auto"
            />
          </div>
        </div>

        <div className="absolute w-full left-1/2 -translate-x-1/2 bottom-[-450px] md:bottom-[-490px]">
          <CurvedLoop marqueeText="Let's make the world's best wallpapers ✦" />
        </div>
      </section>
      <section className="relative w-full text-white py-[400px] px-6 md:px-12 flex flex-col items-center mb-[120%]">
        <div className="max-w-3xl text-left">
          <h3 className="text-xl md:text-5xl font-medium text-gray-300 mb-8">
            Beautiful Design.
          </h3>
          <p className="text-gray-400 leading-relaxed mb-4">
            Radiance is designed with the user in mind. We wanted to create a
            distraction-less experience that focuses on the content. Finding and
            downloading wallpapers is the center of the libraries design.
          </p>
          <Masonry
            items={items}
            ease="power3.out"
            duration={0.6}
            stagger={0.05}
            animateFrom="bottom"
            scaleOnHover={true}
            hoverScale={0.95}
            blurToFocus={true}
            colorShiftOnHover={false}
          />
        </div>
      </section>

      <section className="relative w-full text-white py-[400px] px-6 md:px-12 flex flex-col items-center">
        <div className="max-w-3xl text-left mb-96">
          <h2 className="text-4xl md:text-6xl mb-3">Create your own.</h2>
          <h3 className="text-lg md:text-xl font-medium text-gray-300 mb-8">
            Edit your Wallpapers
          </h3>
          <p className="text-gray-400 leading-relaxed mb-4 texy-lg">
            Radiance gives you the ability to edit any wallpaper from the
            library, along with your own photos. By infusing a colored gradient,
            you can change the vibe of a wallpaper you already love to make it
            even more unique. And you can turn your own photos into beautiful
            designs that are both personal and modern.
          </p>
          <TriplePhoneHero
            imageLeftSrc="/wall1.avif"
            imageCenterSrc="/wall4.avif"
            imageRightSrc="/wall6.avif"
          />
        </div>

        <div className="w-full flex flex-col md:flex-row items-center md:items-start md:gap-4 py-16 px-6 md:px-12 max-w-4xl">
          {/* Phone on the left */}
          <div className="flex-1 flex justify-center md:justify-start">
            <Iphone17Pro
              src="/image11.avif"
              className="h-[600px] w-full max-w-[350px] md:max-w-none"
            />
          </div>

          {/* Text on the right */}
          <div className="flex-1 text-left md:pl-4">
            <h2 className="text-4xl md:text-5xl font-extrabold mb-3">
              Mesh Gradient Tool
            </h2>
            <p className="text-gray-400 leading-relaxed mb-4 text-md">
              Elevate your device's personality by creating a one-of-a-kind mesh
              gradient wallpaper.
              <br />
              <br />
              With the design of our Mesh Gradient Tool, it was imperative that
              we create a minimal, easy-to-learn user interface, so that you can
              create beautiful wallpapers with ease. Your wallpaper takes up the
              entire screen, and all other UI is kept out of the way. This isn't
              only a stylistic choice, but a functional one — it keeps the focus
              on your wallpaper, and allows you to visualize it applied to your
              device.
              <br />
              <br />
              It's easy and intuitive — simply drag the points on display to
              wherever you want. Click on them to change colors. Adjust the
              brightness of the wallpaper to your liking.
              <br />
              <br />
              When you're finished, you can save it to Photos and apply it to
              your device. There has never been a faster way to create a great
              wallpaper.
            </p>
          </div>
        </div>
      </section>

      <section className="relative w-full text-white px-6 md:px-1 flex flex-col items-center ">
        <div className="max-w-3xl text-left mb-10">
          <h2 className="text-4xl md:text-5xl mb-3">The mission</h2>
          <h3 className="text-lg md:text-xl font-medium text-gray-300 mb-8">
            Why make Radiance?
          </h3>
          <p className="text-gray-400 leading-relaxed mb-4 texy-lg">
            Radiance was born from my desire for an app that I could use to
            create amazing wallpapers to make my phone look great without
            interacting with annoying ads. Or having key features limited
            because I don’t pay for them.
          </p>
          <p className="text-gray-400 leading-relaxed mb-4 texy-lg">
            Software is a huge part of our lives, something we use every day
            without even thinking about it. It should be used to help its users,
            by enabling them to do things they otherwise couldn’t.
          </p>
          <span>— Asher Dipprey, Creator</span>
          <h3 className="text-lg md:text-xl font-medium text-gray-300 mb-8">
            Why is Radiance free?
          </h3>
          <p className="text-gray-400 leading-relaxed mb-4 texy-lg">
            Good wallpapers that look great without being distracting are
            difficult to make. Creating images like these take skill, and it is
            perfectly honorable to charge for them.
            <br />
            <br />
            Radiance, it's feature set, and diverse wallpaper library are all
            free because they are a gift to the community.
          </p>
        </div>
      </section>

      <section>
        <div className="w-full max-w-3xl mx-auto">
          <StatsCount
            stats={stats}
            className=" text-white font-extrabold "
          />
        </div>
      </section>

      <StickyFooter />
    </> 
  );
}

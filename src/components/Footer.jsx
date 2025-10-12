"use client";
export default function Footer() {
  return (
    <>
      {/* Desktop Footer */}
      <section
        className="hidden lg:block w-full rounded-[20px] mt-40 relative overflow-hidden px-6 py-16 bg-cover bg-center"
        style={{ backgroundImage: "url('/images/footer-bg.png')" }}
      >
        <div className="relative max-w-[93%] mx-auto grid grid-cols-[85%_15%] gap-8 text-white">
          {/* Vertical Divider (between columns) */}
          <div
            className="absolute w-[1px] bg-white opacity-40"
            style={{
              left: "85%",
              top: "-63px",
              bottom: "-63px",
            }}
          ></div>

          {/* Horizontal Divider (between rows) */}
          <div
            className="absolute h-[1px] bg-white opacity-40"
            style={{
              top: "23%",
              left: "-73px",
              right: "-73px",
            }}
          ></div>

          {/* Left Column */}
          <div className="flex flex-col justify-between space-y-10">
            {/* Row 1: Logo */}
            <div>
              <img
                src="/logos/Footer.png"
                alt="Guardian Ride Logo"
                className="sm:h-12 w-auto object-contain"
                style={{height:"40px"}}
              />
            </div>

            {/* Row 2: Tagline */}
            <div>
              <h1 className="font-lexend text-[2rem] sm:text-[3rem] lg:text-[80px] leading-[100px] font-[500]">
                Driven by <br /> Care, Powered <br /> by Technology.
              </h1>
            </div>
          </div>

          {/* Right Column */}
          <div className="flex flex-col justify-between text-right">
            {/* Row 1: Contact Us */}
            <div>
              <h3 className="font-lexend text-2xl sm:text-3xl font-[500] text-left">
                Contact Us
              </h3>
            </div>

            {/* Row 2: Social Links */}
            <div className="flex flex-col items-start space-y-8 font-outfit font-lexend text-2xl sm:text-3xl font-[500]">
              <a href="#" className="hover:text-white transition">
                Facebook
              </a>
              <a href="#" className="hover:text-white transition">
                LinkedIn
              </a>
              <a href="#" className="hover:text-white transition">
                Instagram
              </a>
              <a href="#" className="hover:text-white transition">
                X (Twitter)
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Mobile Footer */}
      <section
        className="lg:hidden w-full mt-24 rounded-[20px] relative overflow-hidden px-6 py-16 bg-cover bg-center"
        style={{ backgroundImage: "url('/images/footer-bg.png')" }}
      >
        <div className="max-w-[93%] mx-auto grid grid-cols-1 gap-8 text-white">
          {/* Left Column */}
          <div className="flex flex-col justify-between space-y-6">
            {/* Row 1: Logo */}
            <div>
              <img
                src="/logos/Footer.png"
                alt="Guardian Ride Logo"
                className="sm:h-12 w-auto object-contain"
                style={{height:"40px"}}
              />
            </div>

            {/* Row 2: Tagline */}
            <div>
              <h1 className="font-lexend text-3xl sm:text-4xl font-[500] leading-[45px]">
                Driven by <br /> Care, Powered <br /> by Technology.
              </h1>
            </div>
          </div>

          {/* Right Column */}
          <div
            className="flex flex-col justify-start items-start mt-4"
            style={{ marginTop: "15px" }}
          >
            <h3 className="font-lexend text-2xl sm:text-3xl font-[500] text-left">
              Contact Us
            </h3>
            <div
              className="flex flex-col items-start space-y-2 font-outfit font-lexend text-2xl sm:text-3xl font-[500]"
              style={{ marginTop: "15px" }}
            >
              <a href="#" className="hover:text-white transition">
                Facebook
              </a>
              <a href="#" className="hover:text-white transition">
                LinkedIn
              </a>
              <a href="#" className="hover:text-white transition">
                Instagram
              </a>
              <a href="#" className="hover:text-white transition">
                X (Twitter)
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Secondary Footer Section */}
      <section className="w-full bg-transparent py-6">
        <div className="max-w-[93%] mx-auto flex flex-col sm:flex-row justify-between items-center text-sm font-outfit space-y-4 sm:space-y-0">
          {/* Left Text */}
          <p className="text-center sm:text-left">
            Copyright 2012 - 2016 Avada | © 2025 GuardianRide. All rights
            reserved.
          </p>

          {/* Right Links */}
          <div className="flex space-x-6">
            <a href="#" className="hover:text-gray-500 transition">
              Disclaimer
            </a>
            <a href="#" className="hover:text-gray-500 transition">
              Cookies Statement
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

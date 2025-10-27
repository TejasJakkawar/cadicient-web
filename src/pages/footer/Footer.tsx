import "./footer.css";
import ScrollAnimated from "../../components/ScrollAnimated/ScrollAnimated";
import StaggeredAnimation from "../../components/StaggeredAnimation/StaggeredAnimation";

export default function Footer() {
  return (
    <ScrollAnimated animation="slideUp" delay={0.2}>
      <footer className="footer-component w-full">
        <div className="footer-page">
          <div className="background-effects">
            <div className="floating-orb orb-1"></div>
            <div className="floating-orb orb-2"></div>
            <div className="floating-orb orb-3"></div>
            <div className="grid-overlay"></div>
          </div>
          {/* Main Footer Grid */}
          <div className="w-full flex justify-center px-4">
            <StaggeredAnimation staggerDelay={0.15}>
              <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-4 gap-y-12 gap-x-10">
                {/* Brand/Info */}
                <div className="flex flex-col items-center md:items-start text-center md:text-left">
                  <div className="font-bold text-3xl mb-1 tracking-wide">
                    <span className="text-[#F36B39]">CAD</span>
                    <span className="text-white">ICIENT</span>
                  </div>
                  <div className="text-white text-lg leading-snug mb-7 mt-2 font-medium max-w-xs">
                    Delivering innovative and precise civil engineering solutions
                    with a focus on quality, sustainability, and client
                    satisfaction.
                  </div>
                  <div className="flex items-center gap-2 mt-3 mb-1">
                    {/* Support Icon */}
                    <svg
                      width={22}
                      height={22}
                      fill="none"
                      stroke="#F36B39"
                      strokeWidth={2}
                      viewBox="0 0 24 24"
                    >
                      <circle cx="12" cy="12" r="10" />
                      <path d="M12 12v5" />
                      <path d="M12 7h.01" />
                    </svg>
                    <span className="font-bold text-white text-base">
                      TALK TO OUR SUPPORT
                    </span>
                  </div>
                  <div className="font-bold text-[#F36B39] text-lg mb-3 ml-6">
                    +91 9988141401
                  </div>
                  <div className="flex items-center gap-2 ml-1">
                    {/* Mail Icon */}
                    <svg
                      width={20}
                      height={20}
                      fill="none"
                      stroke="#F36B39"
                      strokeWidth={2}
                      viewBox="0 0 24 24"
                    >
                      <rect x="4" y="8" width="16" height="8" rx="2" />
                      <path d="M4 8l8 5 8-5" />
                    </svg>
                    <span className="text-white text-base font-medium">
                      info@cadicient.com
                    </span>
                  </div>
                </div>
                {/* Services */}
                <div className="flex flex-col items-center md:items-start">
                  <div className="text-2xl font-bold mb-5 text-[#F36B39]">
                    Services
                  </div>
                  <ul className="space-y-2 text-white text-base font-medium">
                    <li className="text-left">CAD DRAFTING</li>
                    <li className="text-left">CIVIL ENGINEERING</li>
                    <li className="text-left">SURVEY AND GEOSPATIAL SERVICES</li>
                    <li className="text-left">ENVIRONMENTAL STUDIES</li>
                  </ul>
                </div>
                {/* Quick Links */}
                <div className="flex flex-col md:items-start">
                  <div className="text-2xl font-bold mb-5 text-[#F36B39]">
                    Quick Links
                  </div>
                  <ul className="space-y-2 text-white text-base font-medium">
                    <li className="text-left">HOMEPAGE</li>
                    <li className="text-left">ABOUT US</li>
                    <li className="text-left">LATEST PROJECT</li>
                    <li className="text-left">FAQ</li>
                    <li className="text-left">CONTACT</li>
                    <li className="text-left">PRIVACY POLICY</li>
                  </ul>
                </div>
                {/* Featured Posts */}
                <div className="flex flex-col items-center md:items-start">
                  <div className="text-2xl font-bold mb-5 text-[#F36B39]">
                    Featured Posts
                  </div>
                  <div className="space-y-6 w-full">
                    <div className="flex items-center gap-4">
                      <img
                        src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=cover&w=54&q=80"
                        alt="Post 1"
                        className="w-11 h-11 object-cover rounded-md shadow"
                      />
                      <div>
                        <div className="font-bold text-base text-white leading-tight">
                          The Power Of 3D CAD Modeling In Civil Engineering
                        </div>
                        <div className="text-gray-400 text-xs mt-1">
                          July 9, 2024 - No Comments
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <img
                        src="https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=cover&w=54&q=80"
                        alt="Post 2"
                        className="w-11 h-11 object-cover rounded-md shadow"
                      />
                      <div>
                        <div className="font-bold text-base text-white leading-tight">
                          Unveiling The Power Of Efficiency In CAD Drafting For
                          Civil Engineering
                        </div>
                        <div className="text-gray-400 text-xs mt-1">
                          July 9, 2024 - No Comments
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </StaggeredAnimation>
          </div>
          {/* Copyright - aligned with columns */}
          <ScrollAnimated animation="fadeIn" delay={0.6}>
            <div className="w-full flex justify-center text-gray-400 text-xs pt-10 pb-6">
              {/* <div className="max-w-6xl w-full  text-right mt-9 pr-1"> */}©{" "}
              {new Date().getFullYear()} CADICIENT. All rights reserved.
              {/* </div> */}
            </div>
          </ScrollAnimated>
        </div>
      </footer>
    </ScrollAnimated>
  );
}

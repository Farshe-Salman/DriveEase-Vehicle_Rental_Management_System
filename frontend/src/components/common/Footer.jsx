const Footer = () => {
  return (

    <footer className="w-full bg-[#020028] py-24">

      {/* MAIN CONTAINER */}
      <div className="max-w-[1500px] mx-auto px-24 scale-80">

        <div className="grid grid-cols-4 gap-24 text-white">

          {/* LOGO + ABOUT */}
          <div>

            <h2 className="text-[38px] font-bold">

              Drive<span className="text-orange-500">Ease</span>

            </h2>

            <p className="text-gray-300 text-[22px] leading-10 mt-8">

              Your trusted partner for premium vehicle rentals.
              Explore the world with comfort and style.

            </p>

            
            <div className="flex items-center gap-6 mt-10 text-[28px]">

              <i className="fa-brands fa-facebook-f"></i>
              <i className="fa-brands fa-twitter"></i>
              <i className="fa-brands fa-instagram"></i>
              <i className="fa-brands fa-linkedin-in"></i>

            </div>

          </div>

          {/* QUICK LINKS */}
          <div>

            <h3 className="text-[32px] font-bold mb-10">

              Quick Links

            </h3>

            <ul className="space-y-6 text-gray-300 text-[22px]">

              <li>Browse Links</li>
              <li>My Dashboard</li>
              <li>How it Works</li>
              <li>Pricing</li>

            </ul>

          </div>

          {/* SUPPORT */}
          <div>

            <h3 className="text-[32px] font-bold mb-10">

              Support

            </h3>

            <ul className="space-y-6 text-gray-300 text-[22px]">

              <li>Help Center</li>
              <li>Terms & Conditions</li>
              <li>Privacy Policy</li>
              <li>FAQs</li>

            </ul>

          </div>

          {/* CONTACT */}
          <div>

            <h3 className="text-[32px] font-bold mb-10">

              Contact Us

            </h3>

            <ul className="space-y-6 text-gray-300 text-[22px] leading-10">

              <li>
                📍 123 D Building, AIUB, Kuril, Dhaka, 1232
              </li>

              <li>
                📞 +880 1319-946481
              </li>

              <li>
                ✉ support@driveease.com
              </li>

            </ul>

          </div>

        </div>

      </div>

    </footer>

  );
};

export default Footer;
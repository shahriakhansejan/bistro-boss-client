import { FaFacebookSquare, FaInstagramSquare } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="text-white font-medium bottom-0">
      <div className="flex flex-col md:flex-row justify-stretch">
        <aside className="bg-[#1F2937] w-full md:w-1/2 py-12">
          <div className="w-2/3 lg:w-1/2 mx-auto">
            <h2 className="text-3xl mb-8">CONTACT US</h2>
            <span className="flex flex-col gap-2">
              <p>Mohakhali, Banani,</p>
              <p>Dhaka-1212.</p>
              <p>Sun - Thu : 10:00am - 06:00pm</p>
            </span>
          </div>
        </aside>
        <nav className="bg-[#111827] w-full md:w-1/2 py-12">
          <div className="w-2/3 lg:w-1/2 mx-auto">
            <h2 className="text-3xl mb-8">FOLLOW US</h2>

            <p>Join us on Social Media</p>
            <span className="text-3xl flex gap-6 mt-3">
              <a target="_blank" className="hover:bg-[#323232] rounded-lg p-2" href="https://www.facebook.com">
                <FaFacebookSquare />
              </a>
              <a target="_blank" className="hover:bg-[#323232] rounded-lg p-2" href="https://www.instagram.com">
                <FaInstagramSquare />
              </a>
              <a target="_blank" className="hover:bg-[#323232] rounded-lg p-2" href="https://x.com">
                <FaXTwitter />
              </a>
            </span>
          </div>
        </nav>
      </div>
      <aside className="bg-[#151515] text-center py-4">
        <p>
          Copyright © {new Date().getFullYear()} - All right reserved by Bistro-Boss-Restaurant</p>
      </aside>
    </footer>
  );
};

Footer.propTypes = {};

export default Footer;

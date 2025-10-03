import Link from "next/link"
import { Heart, Instagram, Facebook, Linkedin, Mail } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <img src="/general-images/logo wtm.png" alt="WTM Logo" className="h-10 w-30" />
              <span className="text-2xl font-bold">Women TechMakers</span>
            </div>
            <p className="text-gray-300 mb-4 max-w-md">
              Empowering women in technology through community, education, and mentorship. Join us in creating a more
              inclusive tech world! 💜
            </p>
            <div className="flex space-x-4">
              <a href="https://www.instagram.com/wtm_algiers/" className="text-gray-300 hover:text-[#16E7B4] transition-colors">
                <Instagram className="w-6 h-6" />
              </a>
              <a href="https://www.facebook.com/WomenTechmakersAlgiers/" className="text-gray-300 hover:text-[#16E7B4] transition-colors">
                <Facebook className="w-6 h-6" />
              </a>
              <a href="https://www.linkedin.com/company/wtm-algiers/" className="text-gray-300 hover:text-[#16E7B4] transition-colors">
                <Linkedin className="w-6 h-6" />
              </a>
              <a href="wtm.algiers@esi.dz" className="text-gray-300 hover:text-[#16E7B4] transition-colors">
                <Mail className="w-6 h-6" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-gray-300 hover:text-[#16E7B4] transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/events" className="text-gray-300 hover:text-[#16E7B4] transition-colors">
                  Events
                </Link>
              </li>
              <li>
                <Link href="/blogs" className="text-gray-300 hover:text-[#16E7B4] transition-colors">
                  Blogs
                </Link>
              </li>
              <li>
                <Link href="/team" className="text-gray-300 hover:text-[#16E7B4] transition-colors">
                  Team
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-[#16E7B4] transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Community</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-300 hover:text-[#16E7B4] transition-colors">
                  Join Us
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-[#16E7B4] transition-colors">
                  Mentorship
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-[#16E7B4] transition-colors">
                  Resources
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-[#16E7B4] transition-colors">
                  Newsletter
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-300">
            Made with <Heart className="w-4 h-4 inline text-pink-400" /> by Women Techmakers Community
          </p>
        </div>
      </div>
    </footer>
  )
}

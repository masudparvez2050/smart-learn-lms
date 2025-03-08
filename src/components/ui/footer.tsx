import Link from "next/link";
import { Facebook, Twitter, Instagram, Linkedin, Youtube } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    {
      title: "Learn & Explore",
      links: [
        { name: "Courses", href: "/courses" },
        { name: "Tutorials", href: "/tutorials" },
        { name: "Certifications", href: "/certifications" },
        { name: "Free Resources", href: "/resources" },
        { name: "Career Paths", href: "/career-paths" },
      ],
    },
    {
      title: "Business & Enterprise",
      links: [
        { name: "For Teams", href: "/teams" },
        { name: "For Business", href: "/business" },
        { name: "Become an Instructor", href: "/teach" },
        { name: "Partner Program", href: "/partners" },
        { name: "Affiliate Program", href: "/affiliates" },
      ],
    },
    {
      title: "Support",
      links: [
        { name: "Help Center", href: "/help" },
        { name: "Contact Us", href: "/contact" },
        { name: "FAQ", href: "/faq" },
        { name: "Terms & Conditions", href: "/terms" },
        { name: "Privacy Policy", href: "/privacy" },
      ],
    },
  ];

  const socialLinks = [
    { icon: <Facebook size={18} />, href: "https://facebook.com" },
    { icon: <Twitter size={18} />, href: "https://twitter.com" },
    { icon: <Instagram size={18} />, href: "https://instagram.com" },
    { icon: <Linkedin size={18} />, href: "https://linkedin.com" },
    { icon: <Youtube size={18} />, href: "https://youtube.com" },
  ];

  return (
    <footer className="bg-gray-900 text-gray-200">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <Link href="/" className="inline-block mb-4">
              <span className="text-xl font-bold text-orange-500">
                SmartLearn
              </span>
            </Link>
            <p className="text-sm text-gray-400 mb-4">
              SmartLearn is a comprehensive learning platform designed to help
              you master new skills, advance your career, and explore your
              creativity.
            </p>
            <div className="flex space-x-3">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-800 p-2 rounded-full hover:bg-gray-700 transition-colors"
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>

          {footerLinks.map((column, index) => (
            <div key={index}>
              <h3 className="font-semibold text-white mb-4">{column.title}</h3>
              <ul className="space-y-2">
                {column.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <Link
                      href={link.href}
                      className="text-sm text-gray-400 hover:text-white transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-500 mb-4 md:mb-0">
            © {currentYear} SmartLearn. All rights reserved.
          </p>
          <div className="flex space-x-4">
            <Link
              href="/terms"
              className="text-xs text-gray-500 hover:text-white transition-colors"
            >
              Terms of Service
            </Link>
            <Link
              href="/privacy"
              className="text-xs text-gray-500 hover:text-white transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="/cookies"
              className="text-xs text-gray-500 hover:text-white transition-colors"
            >
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

import { FC } from "react";

import TripGuideLogo from "@/svg/logos/tripGuide";

interface Props {
  title: string;
    sublinks: {
        name: string;
        href: string;
    }[];
};

const footerLinks = [
  {
    title: 'Services',
    sublinks: [
      { name: 'Travel Booking', href: '#' },
      { name: 'Flight Booking', href: '#' },
      { name: 'Car Booking', href: '#' },
      { name: 'Fivestar Hotel', href: '#' },
      { name: 'Traveling', href: '#' },
    ],
  },
  {
    title: 'Support',
    sublinks: [
      { name: 'Account', href: '#' },
      { name: 'Legal', href: '#' },
      { name: 'Contact', href: '#' },
      { name: 'Terms & Condition', href: '#' },
      { name: 'Privacy Policy', href: '#' },
    ],
  },
  {
    title: 'Business',
    sublinks: [
      { name: 'Success', href: '#' },
      { name: 'About Locato', href: '#' },
      { name: 'Blog', href: '#' },
      { name: 'Information', href: '#' },
      { name: 'Travel Guide', href: '#' },
    ],
  },

];

const Footer: FC<Props> = (Props) => {

  return (
    <footer className="bg-[#F4F5F6]" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="mx-auto max-w-6xl py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-8 xl:col-span-1">
            <div className="flex items-center">
              <TripGuideLogo width="148" height="100%" />
            </div>
            <p className="text-base text-gray-500">
              This is the team that specializes in
              making sure in the find it a 
              your interior looks cool and
            </p>
          </div>
          <div className="mt-12 grid grid-cols-1 gap-8 xl:col-span-2 xl:mt-0">
            <div className="md:grid md:grid-cols-3 md:gap-8">
              {footerLinks.map((item) => (
              <div>
                <h3 className="text-base font-medium text-gray-900">{item.title}</h3>
                <ul role="list" className="mt-4 space-y-4">
                  {item.sublinks.map((item) => (
                    <li key={item.name}>
                      <a href={item.href} className="text-base text-gray-500 hover:text-gray-900">
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-12 border-t border-gray-200 pt-8">
          <p className="text-base text-gray-400 xl:text-center">&copy; 2022 Trip Guide, Inc. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer;
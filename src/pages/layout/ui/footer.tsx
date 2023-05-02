import { FC } from 'react';
import {
  AiFillFacebook,
  AiFillInstagram,
  AiFillLinkedin,
  AiFillTwitterSquare,
  AiFillYoutube,
} from 'react-icons/all';

import { ReactComponent as AppStore } from 'assets/appStore.svg';
import { ReactComponent as GooglePlay } from 'assets/googlePlay.svg';
import { AppLink } from 'shared/ui/links';
import { Logo } from 'shared/ui/logo';

const footerLinks = [
  {
    title: 'About',
    links: [
      { text: 'About us', to: '/about' },
      { text: 'Find store', to: '/find-store' },
      { text: 'Categories', to: '/categories' },
      { text: 'Blogs', to: '/blogs' },
    ],
  },
  {
    title: 'Information',
    links: [
      { text: 'Help Center', to: '/help-center' },
      { text: 'Money Refund', to: '/money-refund' },
      { text: 'Shipment', to: '/shipment' },
      { text: 'Contact us', to: '/contact-us' },
    ],
  },
  {
    title: 'For users',
    links: [
      { text: 'Login', to: '/login' },
      { text: 'Register', to: '/register' },
      { text: 'Settings', to: '/settings' },
      { text: 'My orders', to: '/my-orders' },
    ],
  },
  {
    title: 'Partnership',
    links: [
      { text: 'Become a partner', to: '/partner' },
      { text: 'Advertise', to: '/advertise' },
    ],
  },
];

const externalLinks = [
  {
    to: 'https://www.facebook.com',
    icon: <AiFillFacebook size={30} />,
  },
  {
    to: 'https://www.twitter.com',
    icon: <AiFillTwitterSquare size={30} />,
  },
  {
    to: 'https://www.linkedin.com',
    icon: <AiFillLinkedin size={30} />,
  },
  {
    to: 'https://www.instagram.com',
    icon: <AiFillInstagram size={30} />,
  },
  {
    to: 'https://www.youtube.com/',
    icon: <AiFillYoutube size={30} />,
  },
];

export const Footer: FC = () => (
  <footer className={'container-fluid bg-white'}>
    <div className={'container pt-10 pb-14'}>
      <div className={'flex gap-14 lg:flex-col lg:items-start'}>
        <div
          className={
            'w-1/4 lg:w-full lg:items-center lg:justify-center lg:flex lg:flex-col'
          }>
          <Logo className={'mb-4'} />
          <p className={'text-gray-dark lg:text-center'}>
            Best information about the company gies here but now lorem ipsum is
          </p>
          <div className={'mt-4 flex gap-2.5'}>
            {externalLinks.map(link => (
              <AppLink to={link.to} key={link.to} className={'text-gray-deep'}>
                {link.icon}
              </AppLink>
            ))}
          </div>
        </div>
        <div
          className={
            'flex gap-16 lg:justify-between  lg:items-start lg:w-full md:flex-wrap md:justify-center md:items-start md:w-full'
          }>
          {footerLinks.map(linkGroup => (
            <div className={'flex flex-col gap-1 w-1/3'} key={linkGroup.title}>
              <h6
                className={
                  'mb-1.5 font-medium text-black lg:text-center md:text-center whitespace-nowrap'
                }>
                {linkGroup.title}
              </h6>
              {linkGroup.links.map(link => (
                <AppLink
                  key={link.to}
                  to={link.to}
                  className={
                    'items-start lg:items-center lg:whitespace-nowrap'
                  }>
                  {link.text}
                </AppLink>
              ))}
            </div>
          ))}
        </div>
        <div className={'ml-auto lg:m-auto'}>
          <h6 className={'mb-4 text-black font-medium lg:text-center'}>
            Get app
          </h6>
          <AppLink className={'mb-2'} to={'/download'}>
            <AppStore className={'rect-hover'} />
          </AppLink>
          <AppLink to={'/download'}>
            <GooglePlay className={'rect-hover'} />
          </AppLink>
        </div>
      </div>
    </div>
    <div className={'bg-gray-pale border-t border-gray-medium'}>
      <div className={'container pt-5 pb-5 '}>
        <p className={'text-gray-dark'}>© 2023 Ecommerce.</p>
      </div>
    </div>
  </footer>
);
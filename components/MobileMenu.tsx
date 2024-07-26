import Link from 'next/link';

export const menuItems = [
  { label: 'Our Company', key: 'ourCompany', href: '/about' },
  { label: 'Locations', key: 'locations', href: '/locations' },
  { label: 'Contact', key: 'contact', href: '/contact' },
];

export default function MobileMenu() {
  return (
    <ul className='menu-list absolute left-0 top-24 z-0 flex w-full -translate-y-full flex-col gap-8 overflow-hidden bg-primary-black px-6 py-12 md:hidden'>
      {menuItems.map((item) => (
        <li
          key={item.key}
          className='menu-list-item origin-[-20px_50%] text-mobile-menu uppercase tracking-2px text-white'
        >
          <Link href={item.href}>{item.label}</Link>
        </li>
      ))}
    </ul>
  );
}

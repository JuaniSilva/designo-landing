import { menuItems } from './MobileMenu';

export default function NavMenu({ className }: { className?: string }) {
  return (
    <nav className={className}>
      <ul className='flex w-full flex-col gap-8 font-normal'>
        {menuItems.map((item) => (
          <li
            key={item.key}
            className='text-nav uppercase tracking-2px text-white'
          >
            {item.label}
          </li>
        ))}
      </ul>
    </nav>
  );
}

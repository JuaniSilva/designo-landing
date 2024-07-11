import { cn } from '@/lib/utils';

export function CloseIcon({ className }: { className?: string }) {
  return (
    <svg
      width='20'
      height='20'
      className={cn('fill-[#1D1C1E]', className)}
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M17.071.1L19.9 2.93l-7.071 7.07 7.071 7.072-2.828 2.828L10 12.828l-7.071 7.071L.1 17.071 7.17 10 .102 2.929 2.929.1l7.07 7.07 7.072-7.07z'
        fillRule='evenodd'
      />
    </svg>
  );
}

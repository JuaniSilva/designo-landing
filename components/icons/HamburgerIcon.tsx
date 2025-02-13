import { cn } from '@/lib/utils';

export default function HamburguerIcon({ className }: { className?: string }) {
  return (
    <svg
      width='24'
      height='20'
      xmlns='http://www.w3.org/2000/svg'
      className={cn('fill-[#1D1C1E]', className)}
    >
      <g fillRule='evenodd'>
        <path d='M0 0h24v4H0zM0 8h24v4H0zM0 16h24v4H0z' />
      </g>
    </svg>
  );
}

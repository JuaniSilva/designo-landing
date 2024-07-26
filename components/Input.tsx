import { cn } from '@/lib/utils';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  className?: string;
  errorMessage?: string;
}
export default function Input({
  className,
  errorMessage,
  ...props
}: InputProps) {
  return (
    <div className={cn('relative', className)}>
      <input
        type='text'
        className={
          'transiton-all w-full border-b border-white bg-transparent pb-3 pl-4 font-medium text-white outline-none placeholder:text-white/50 focus:border-b-[3px]'
        }
        {...props}
      />
      {errorMessage && (
        <span className='absolute bottom-3 right-0 flex items-center gap-2 text-xs italic text-white'>
          <p>{errorMessage}</p>
          <img src='/images/contact/desktop/icon-error.svg' alt='error icon' />
        </span>
      )}
    </div>
  );
}

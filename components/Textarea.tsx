import { cn } from '@/lib/utils';

interface TextAreaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  className?: string;
  errorMessage?: string;
}
export default function TextArea({
  className,
  errorMessage,
  ...props
}: TextAreaProps) {
  return (
    <div className={cn('relative h-20 md:h-24', className)}>
      <textarea
        className={cn(
          'transiton-all h-full w-full border-b border-white bg-transparent pb-3 pl-4 font-medium text-white outline-none placeholder:text-white/50 focus:border-b-[3px]'
        )}
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

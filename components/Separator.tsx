interface SeparatorProps {
  className?: string;
  theme: 'light' | 'dark';
}
export default function Separator({ className, theme }: SeparatorProps) {
  const separatorClass =
    theme === 'light' ? 'border-primary-white/10' : 'border-primary-black/10';
  return (
    <hr className={`w-full border-t-[1px] ${separatorClass} ${className}`} />
  );
}

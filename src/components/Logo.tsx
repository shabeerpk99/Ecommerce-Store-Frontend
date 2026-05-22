import logoSrc from '../assets/images/brand/logo-colored.png';

export function Logo({ className = '' }: { className?: string }) {
  return (
    <img
      src={logoSrc}
      alt="Brand logo"
      className={className}
      width={150}
      height={46}
    />
  );
}

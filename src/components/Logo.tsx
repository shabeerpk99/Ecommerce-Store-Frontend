import logoSrc from '../assets/images/brand/logo-colored.png';
import { Link } from 'react-router-dom';

export function Logo({ className = '' }: { className?: string }) {
  return (
    <Link to="/">
      <img
        src={logoSrc}
        alt="Brand logo"
        className={className}
        width={150}
        height={46}
      />
    </Link>
  );
}

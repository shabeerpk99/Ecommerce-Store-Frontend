import { Link } from 'react-router-dom';
import { Container } from '../components/Container';

export default function NotFoundPage() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center">
      <Container>
        <div className="text-center py-16">
          <div className="mb-6">
            <h1 className="text-6xl font-bold text-gray-900 mb-2">404</h1>
            <h2 className="text-2xl font-semibold text-gray-700">Page Not Found</h2>
          </div>
          <p className="text-gray-600 text-lg mb-8 max-w-md mx-auto">
            The page you're looking for doesn't exist or has been moved.
          </p>
          <Link
            to="/"
            className="inline-block px-8 py-3 bg-blue-600 text-white rounded-3xl hover:bg-blue-700 transition font-semibold"
          >
            ← Back to Home
          </Link>
        </div>
      </Container>
    </div>
  );
}

import { useState } from 'react';
import { BRANDS, FEATURES, CONDITIONS } from '../data/productsData';

interface CategoryFilterProps {
  onFilterChange: (filters: FilterState) => void;
}

export interface FilterState {
  brands: string[];
  features: string[];
  priceRange: [number, number];
  condition: string[];
  rating: number;
  verified: boolean;
  featured: boolean;
}

export function CategoryFilter({ onFilterChange }: CategoryFilterProps) {
  const [filters, setFilters] = useState<FilterState>({
    brands: [],
    features: [],
    priceRange: [0, 500],
    condition: [],
    rating: 0,
    verified: false,
    featured: false,
  });

  const [expandedSections, setExpandedSections] = useState({
    brands: true,
    features: true,
    price: true,
    condition: true,
    rating: true,
    manufacturer: true,
  });

  const toggleSection = (section: keyof typeof expandedSections) => {
    setExpandedSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  const handleBrandChange = (brand: string) => {
    const newBrands = filters.brands.includes(brand)
      ? filters.brands.filter((b) => b !== brand)
      : [...filters.brands, brand];
    const newFilters = { ...filters, brands: newBrands };
    setFilters(newFilters);
    onFilterChange(newFilters);
  };

  const handleFeatureChange = (feature: string) => {
    const newFeatures = filters.features.includes(feature)
      ? filters.features.filter((f) => f !== feature)
      : [...filters.features, feature];
    const newFilters = { ...filters, features: newFeatures };
    setFilters(newFilters);
    onFilterChange(newFilters);
  };

  const handlePriceChange = (type: 'min' | 'max', value: number) => {
    const [min, max] = filters.priceRange;
    const newRange: [number, number] = type === 'min' ? [value, max] : [min, value];
    const newFilters = { ...filters, priceRange: newRange };
    setFilters(newFilters);
    onFilterChange(newFilters);
  };

  const handleConditionChange = (condition: string) => {
    const newCondition = filters.condition.includes(condition)
      ? filters.condition.filter((c) => c !== condition)
      : [...filters.condition, condition];
    const newFilters = { ...filters, condition: newCondition };
    setFilters(newFilters);
    onFilterChange(newFilters);
  };

  const handleRatingChange = (rating: number) => {
    const newRating = filters.rating === rating ? 0 : rating;
    const newFilters = { ...filters, rating: newRating };
    setFilters(newFilters);
    onFilterChange(newFilters);
  };

  return (
    <div className="w-72 bg-white border border-gray-200 rounded-lg p-4 space-y-6 h-fit sticky top-20">
      {/* Brands Filter */}
      <div>
        <button
          onClick={() => toggleSection('brands')}
          className="flex items-center justify-between w-full font-semibold text-gray-900 hover:text-blue-600"
        >
          <span>Brands</span>
          <span className={`transform transition ${expandedSections.brands ? 'rotate-180' : ''}`}>
            ▼
          </span>
        </button>
        {expandedSections.brands && (
          <div className="mt-3 space-y-2">
            {BRANDS.map((brand) => (
              <label key={brand} className="flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  checked={filters.brands.includes(brand)}
                  onChange={() => handleBrandChange(brand)}
                  className="w-4 h-4 rounded border-gray-300 text-blue-600"
                />
                <span className="ml-2 text-sm text-gray-700">{brand}</span>
              </label>
            ))}
          </div>
        )}
      </div>

      {/* Features Filter */}
      <div className="border-t pt-4">
        <button
          onClick={() => toggleSection('features')}
          className="flex items-center justify-between w-full font-semibold text-gray-900 hover:text-blue-600"
        >
          <span>Features</span>
          <span className={`transform transition ${expandedSections.features ? 'rotate-180' : ''}`}>
            ▼
          </span>
        </button>
        {expandedSections.features && (
          <div className="mt-3 space-y-2">
            {FEATURES.map((feature) => (
              <label key={feature} className="flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  checked={filters.features.includes(feature)}
                  onChange={() => handleFeatureChange(feature)}
                  className="w-4 h-4 rounded border-gray-300 text-blue-600"
                />
                <span className="ml-2 text-sm text-gray-700">{feature}</span>
              </label>
            ))}
          </div>
        )}
      </div>

      {/* Price Range Filter */}
      <div className="border-t pt-4">
        <button
          onClick={() => toggleSection('price')}
          className="flex items-center justify-between w-full font-semibold text-gray-900 hover:text-blue-600"
        >
          <span>Price Range</span>
          <span className={`transform transition ${expandedSections.price ? 'rotate-180' : ''}`}>
            ▼
          </span>
        </button>
        {expandedSections.price && (
          <div className="mt-3 space-y-3">
            <div className="flex gap-2">
              <input
                type="number"
                value={filters.priceRange[0]}
                onChange={(e) => handlePriceChange('min', Number(e.target.value))}
                placeholder="Min"
                className="w-1/2 px-2 py-1 border border-gray-300 rounded text-sm"
              />
              <input
                type="number"
                value={filters.priceRange[1]}
                onChange={(e) => handlePriceChange('max', Number(e.target.value))}
                placeholder="Max"
                className="w-1/2 px-2 py-1 border border-gray-300 rounded text-sm"
              />
            </div>
          </div>
        )}
      </div>

      {/* Condition Filter */}
      <div className="border-t pt-4">
        <button
          onClick={() => toggleSection('condition')}
          className="flex items-center justify-between w-full font-semibold text-gray-900 hover:text-blue-600"
        >
          <span>Condition</span>
          <span className={`transform transition ${expandedSections.condition ? 'rotate-180' : ''}`}>
            ▼
          </span>
        </button>
        {expandedSections.condition && (
          <div className="mt-3 space-y-2">
            {CONDITIONS.map((condition) => (
              <label key={condition} className="flex items-center cursor-pointer">
                <input
                  type="radio"
                  name="condition"
                  value={condition}
                  checked={filters.condition.includes(condition)}
                  onChange={() => handleConditionChange(condition)}
                  className="w-4 h-4 border-gray-300 text-blue-600"
                />
                <span className="ml-2 text-sm text-gray-700 capitalize">
                  {condition === 'brand-new' ? 'Brand New' : condition.charAt(0).toUpperCase() + condition.slice(1)}
                </span>
              </label>
            ))}
          </div>
        )}
      </div>

      {/* Rating Filter */}
      <div className="border-t pt-4">
        <button
          onClick={() => toggleSection('rating')}
          className="flex items-center justify-between w-full font-semibold text-gray-900 hover:text-blue-600"
        >
          <span>Rating</span>
          <span className={`transform transition ${expandedSections.rating ? 'rotate-180' : ''}`}>
            ▼
          </span>
        </button>
        {expandedSections.rating && (
          <div className="mt-3 space-y-2">
            {[5, 4, 3, 2, 1].map((star) => (
              <label key={star} className="flex items-center cursor-pointer">
                <input
                  type="radio"
                  name="rating"
                  checked={filters.rating === star}
                  onChange={() => handleRatingChange(star)}
                  className="w-4 h-4 border-gray-300 text-blue-600"
                />
                <span className="ml-2 flex items-center text-sm text-gray-700">
                  {'⭐'.repeat(star)} {star}-Star
                </span>
              </label>
            ))}
          </div>
        )}
      </div>

      {/* Manufacturer Filter */}
      <div className="border-t pt-4">
        <button
          onClick={() => toggleSection('manufacturer')}
          className="flex items-center justify-between w-full font-semibold text-gray-900 hover:text-blue-600"
        >
          <span>Manufacturer</span>
          <span className={`transform transition ${expandedSections.manufacturer ? 'rotate-180' : ''}`}>
            ▼
          </span>
        </button>
        {expandedSections.manufacturer && (
          <select className="w-full mt-3 px-3 py-2 border border-gray-300 rounded text-sm">
            <option>All Manufacturers</option>
            <option>Direct Manufacturer</option>
            <option>Official Distributor</option>
          </select>
        )}
      </div>
    </div>
  );
}

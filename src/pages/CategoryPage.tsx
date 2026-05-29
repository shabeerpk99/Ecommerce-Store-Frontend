import { useState, useMemo, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Container } from '../components/Container';
import { CategoryFilter } from '../components/CategoryFilter';
import type { FilterState } from '../components/CategoryFilter';
import { ProductCard } from '../components/ProductCard';
import { FilterChips } from '../components/FilterChips';
import { Pagination } from '../components/Pagination';
import { productsData, filterProducts } from '../data/productsData';
import { electronicsCategories } from '../data/homeData';

export default function CategoryPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const categoryParam = searchParams.get('cat') || '';
  const [filters, setFilters] = useState<FilterState>({
    brands: [],
    manufacturers: [],
    features: [],
    priceRange: [0, 500],
    condition: [],
    rating: 0,
    verified: false,
    featured: false,
  });

  const categoryMap: Record<string, string> = {
    'Mobile accessory': 'Accessories',
    Smartphones: 'Electronics',
    'Modern tech': 'Electronics',
    Electronics: 'Electronics',
  };

  const effectiveCategory = categoryMap[categoryParam] || categoryParam;

  const leftCategories = ['Mobile accessory', 'Electronics', 'Smartphones', 'Modern tech'];

  const handleCategorySelect = (category: string) => {
    const params = new URLSearchParams(searchParams);
    if (!category) {
      params.delete('cat');
    } else {
      params.set('cat', category);
    }
    setSearchParams(params);
  };

  const [viewMode, setViewMode] = useState<'grid' | 'list'>('list');
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [sortBy, setSortBy] = useState<'relevant' | 'newest' | 'priceLow' | 'priceHigh'>('relevant');

  useEffect(() => {
    if (categoryParam) {
      setCurrentPage(1);
      setTimeout(() => {
        const el = document.getElementById('products-grid');
        if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 200);
    }
  }, [categoryParam]);

  // Filter products
  const filteredProducts = useMemo(() => {
    let filtered = filterProducts(productsData, {
      category: categoryParam ? effectiveCategory : undefined,
      brands: filters.brands.length > 0 ? filters.brands : undefined,
      manufacturers: filters.manufacturers.length > 0 ? filters.manufacturers : undefined,
      features: filters.features.length > 0 ? filters.features : undefined,
      priceRange: filters.priceRange,
      condition: filters.condition.length > 0 ? filters.condition : undefined,
      rating: filters.rating > 0 ? filters.rating : undefined,
      verified: filters.verified || undefined,
      featured: filters.featured || undefined,
    });

    // Sort products
    switch (sortBy) {
      case 'newest':
        filtered = [...filtered].reverse();
        break;
      case 'priceLow':
        filtered = [...filtered].sort((a, b) => a.price - b.price);
        break;
      case 'priceHigh':
        filtered = [...filtered].sort((a, b) => b.price - a.price);
        break;
      default:
        break;
    }

    return filtered;
  }, [filters, sortBy, categoryParam]);

  // Pagination
  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
  const paginatedProducts = filteredProducts.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  // Get active filter chips
  const filterChips = useMemo(() => {
    const chips: { id: string; label: string }[] = [];

    filters.brands.forEach((brand) => {
      chips.push({ id: `brand-${brand}`, label: brand });
    });

    filters.features.forEach((feature) => {
      chips.push({ id: `feature-${feature}`, label: feature });
    });

    if (filters.condition.length > 0) {
      filters.condition.forEach((condition) => {
        chips.push({
          id: `condition-${condition}`,
          label: condition === 'brand-new' ? 'Brand New' : condition,
        });
      });
    }

    if (filters.rating > 0) {
      chips.push({ id: 'rating', label: `${filters.rating}-Star` });
    }

    if (filters.verified) {
      chips.push({ id: 'verified', label: 'Verified Only' });
    }

    if (filters.featured) {
      chips.push({ id: 'featured', label: 'Featured' });
    }

    filters.manufacturers.forEach((manufacturer) => {
      chips.push({ id: `manufacturer-${manufacturer}`, label: `Manufacturer: ${manufacturer}` });
    });

    if (categoryParam) {
      chips.unshift({ id: `category-${categoryParam}`, label: `Category: ${categoryParam}` });
    }

    return chips;
  }, [filters, categoryParam]);

  const handleRemoveChip = (chipId: string) => {
    const [type, value] = chipId.split('-', 2);

    if (type === 'category') {
      const newParams = new URLSearchParams(searchParams);
      newParams.delete('cat');
      setSearchParams(newParams, { replace: true });
      return;
    }

    if (type === 'brand') {
      setFilters({
        ...filters,
        brands: filters.brands.filter((b) => b !== value),
      });
    } else if (type === 'feature') {
      setFilters({
        ...filters,
        features: filters.features.filter((f) => f !== value),
      });
    } else if (type === 'condition') {
      setFilters({
        ...filters,
        condition: filters.condition.filter((c) => c !== value),
      });
    } else if (type === 'manufacturer') {
      setFilters({
        ...filters,
        manufacturers: filters.manufacturers.filter((m) => m !== value),
      });
    } else if (type === 'rating') {
      setFilters({ ...filters, rating: 0 });
    } else if (type === 'verified') {
      setFilters({ ...filters, verified: false });
    } else if (type === 'featured') {
      setFilters({ ...filters, featured: false });
    }
  };

  const handleClearAllFilters = () => {
    setFilters({
      brands: [],
      manufacturers: [],
      features: [],
      priceRange: [0, 500],
      condition: [],
      rating: 0,
      verified: false,
      featured: false,
    });
    setCurrentPage(1);
  };

  return (
    <div className="bg-gray-50 py-8">
      <Container>
        {/* Header */}
        <div className="mb-6">
          <nav className="text-sm text-gray-500 mb-3">Home / Clothings / Men's wear / <span className="text-gray-800">{categoryParam || 'All products'}</span></nav>

          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">{filteredProducts.length.toLocaleString()} items in <span className="text-blue-600">{categoryParam || 'All categories'}</span></h1>
              <p className="text-gray-600 mt-1">Refine results using the filters</p>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex gap-6">
          <aside className="w-[280px] space-y-6">
            <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm">
              <div className="text-sm font-semibold text-gray-900 mb-4">Category</div>
              <div className="space-y-2">
                {leftCategories.map((category) => {
                  const active = category === categoryParam;
                  return (
                    <button
                      key={category}
                      type="button"
                      onClick={() => handleCategorySelect(category)}
                      className={`w-full text-left rounded-lg px-4 py-3 transition ${
                        active
                          ? 'bg-blue-600 text-white'
                          : 'bg-gray-50 text-gray-700 hover:bg-gray-100'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span>{category}</span>
                        <span className="text-xs text-gray-500">{productsData.filter((product) => product.category === categoryMap[category] || product.category === category).length}</span>
                      </div>
                    </button>
                  );
                })}
                <button
                  type="button"
                  onClick={() => handleCategorySelect('')}
                  className="w-full text-left rounded-lg px-4 py-3 text-sm text-blue-600 hover:bg-gray-100"
                >
                  See all
                </button>
              </div>
            </div>

            <CategoryFilter onFilterChange={setFilters} />
          </aside>

          {/* Main Content Area */}
          <div className="flex-1">
            <div className="mb-6 grid gap-4 lg:grid-cols-4">
              {electronicsCategories.slice(0, 4).map((category) => (
                <div key={category.name} className="overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-sm">
                  <div className="flex items-center gap-4 p-4">
                    <div className="flex-1">
                      <p className="text-sm font-semibold text-gray-900">{category.name}</p>
                      <p className="text-xs text-gray-500 mt-1">{category.price}</p>
                    </div>
                    <img src={category.image} alt={category.name} className="h-20 w-20 object-contain" />
                  </div>
                </div>
              ))}
            </div>
            {/* Active Filters Chips */}
            <FilterChips
              chips={filterChips}
              onRemove={handleRemoveChip}
              onClearAll={handleClearAllFilters}
            />

            {/* Toolbar */}
            <div className="flex items-center justify-between mb-6 p-4 bg-white rounded-lg border border-gray-200">
              <div className="flex items-center gap-4">
                {/* Sort Dropdown */}
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value as any)}
                  className="px-3 py-2 border border-gray-300 rounded text-sm"
                >
                  <option value="relevant">Sort by: Relevant</option>
                  <option value="newest">Sort by: Newest</option>
                  <option value="priceLow">Sort by: Price (Low to High)</option>
                  <option value="priceHigh">Sort by: Price (High to Low)</option>
                </select>

                {/* View Mode Toggle */}
                <div className="flex gap-2 border border-gray-300 rounded p-1">
                  <button
                    onClick={() => setViewMode('grid')}
                    className={`px-3 py-1 rounded transition ${
                      viewMode === 'grid'
                        ? 'bg-blue-600 text-white'
                        : 'text-gray-600 hover:text-gray-900'
                    }`}
                  >
                    ⊞ Grid
                  </button>
                  <button
                    onClick={() => setViewMode('list')}
                    className={`px-3 py-1 rounded transition ${
                      viewMode === 'list'
                        ? 'bg-blue-600 text-white'
                        : 'text-gray-600 hover:text-gray-900'
                    }`}
                  >
                    ☰ List
                  </button>
                </div>
              </div>

              {/* Filter Options */}
              <div className="flex items-center gap-3">
                <label className="flex items-center gap-2 cursor-pointer text-sm">
                  <input
                    type="checkbox"
                    checked={filters.verified}
                    onChange={(e) => setFilters({ ...filters, verified: e.target.checked })}
                    className="w-4 h-4 rounded"
                  />
                  <span>Verified Only</span>
                </label>

                <label className="flex items-center gap-2 cursor-pointer text-sm">
                  <input
                    type="checkbox"
                    checked={filters.featured}
                    onChange={(e) => setFilters({ ...filters, featured: e.target.checked })}
                    className="w-4 h-4 rounded"
                  />
                  <span>Featured</span>
                </label>
              </div>
            </div>

            {/* Products Grid/List */}
            {paginatedProducts.length > 0 ? (
              <div
                id="products-grid"
                className={
                  viewMode === 'grid'
                    ? 'grid grid-cols-3 gap-4 mb-8'
                    : 'space-y-4 mb-8'
                }
              >
                {paginatedProducts.map((product) => (
                  <ProductCard key={product.id} product={product} view={viewMode} />
                ))}
              </div>
            ) : (
              <div className="text-center py-16 bg-white rounded-lg">
                <p className="text-gray-600 text-lg">No products found matching your filters.</p>
                <button
                  onClick={handleClearAllFilters}
                  className="mt-4 px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
                >
                  Clear All Filters
                </button>
              </div>
            )}

            {/* Pagination */}
            {paginatedProducts.length > 0 && (
              <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={setCurrentPage}
                itemsPerPage={itemsPerPage}
                onItemsPerPageChange={(items) => {
                  setItemsPerPage(items);
                  setCurrentPage(1);
                }}
                totalItems={filteredProducts.length}
              />
            )}
          </div>
        </div>
      </Container>
    </div>
  );
}

import { X } from 'lucide-react';

interface FilterChip {
  id: string;
  label: string;
}

interface FilterChipsProps {
  chips: FilterChip[];
  onRemove: (id: string) => void;
  onClearAll: () => void;
}

export function FilterChips({ chips, onRemove, onClearAll }: FilterChipsProps) {
  if (chips.length === 0) return null;

  return (
    <div className="flex items-center gap-2 flex-wrap mb-6 p-3 bg-gray-50 rounded-lg">
      {chips.map((chip) => (
        <div
          key={chip.id}
          className="flex items-center gap-2 bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm"
        >
          <span>{chip.label}</span>
          <button
            onClick={() => onRemove(chip.id)}
            className="hover:text-blue-900 transition"
          >
            <X size={16} />
          </button>
        </div>
      ))}
      {chips.length > 0 && (
        <button
          onClick={onClearAll}
          className="text-xs text-red-600 hover:text-red-700 font-semibold ml-2 underline"
        >
          Clear all
        </button>
      )}
    </div>
  );
}

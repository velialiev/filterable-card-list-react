import { useEffect, useState } from 'react';

export const useFilterForm = (onFiltersChange) => {
  const [levelFilter, setLevelFilter] = useState();
  const [categoryFilter, setCategoryFilter] = useState();
  const [languageFilter, setLanguageFilter] = useState();
  const [textFilter, setTextFilter] = useState('');

  useEffect(() => {
    onFiltersChange({
      level: levelFilter,
      category: categoryFilter,
      language: languageFilter,
      text: textFilter,
    });
  }, [levelFilter, categoryFilter, languageFilter, textFilter]);

  return {
    levelFilter: [levelFilter, setLevelFilter],
    categoryFilter: [categoryFilter, setCategoryFilter],
    languageFilter: [languageFilter, setLanguageFilter],
    textFilter: [textFilter, setTextFilter],
  };
};

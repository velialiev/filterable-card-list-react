import { useEffect, useState } from 'react';
import { getFilters } from '../controllers/filters.controller';

export const useFilters = () => {
  const [filters, setFilters] = useState([]);
  useEffect(() => {
    (async () => {
      const result = await getFilters();
      const serializedResult = await result.json();

      setFilters(serializedResult);
    })();
  }, []);

  return [filters, setFilters];
};

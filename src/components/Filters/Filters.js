import React from 'react';
import Input from '../Input/Input';
import Select from '../Select/Select';
import styles from './Filters.module.scss';
import { useFilterForm } from '../../hooks/FilterForm.hook';
import { useFilters } from '../../hooks/Filters.hook';

const Filters = ({ onFiltersChange }) => {

  const [filters] = useFilters();

  const {
    levelFilter: [levelFilter, setLevelFilter],
    categoryFilter: [categoryFilter, setCategoryFilter],
    languageFilter: [languageFilter, setLanguageFilter],
    textFilter: [textFilter, setTextFilter],
  } = useFilterForm((filtersValue) => { onFiltersChange(filtersValue) });

  return (
    <div className={styles['filters']}>
      <div className="container">
        <div className={styles['filters-line']}>
            <span className={styles['filters-line-title']}>
              Поиск по ключевым словам:
            </span>
          <div className={styles['filters-line-inputs']}>
            <Input value={textFilter}
                   onChange={({ target: { value } }) => setTextFilter(value)}
                   placeholder={'Поиск'}/>
          </div>
        </div>
        <div className={styles['filters-line']}>
            <span className={styles['filters-line-title']}>
              Фильтровать статьи по:
            </span>
          <div className={styles['filters-line-inputs']}>
            <Select emptyValue="Любой Уровень"
                    options={filters.levels}
                    value={levelFilter}
                    onChange={({ target: { value } }) => { setLevelFilter(value) }} />

            <Select emptyValue="Все Категории"
                    options={filters.categories}
                    value={categoryFilter}
                    onChange={({ target: { value } }) => { setCategoryFilter(value) }} />

            <Select emptyValue="Все Языки"
                    options={filters.languages}
                    value={languageFilter}
                    onChange={({ target: { value } }) => { setLanguageFilter(value) }} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Filters;

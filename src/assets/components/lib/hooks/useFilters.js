import { useState } from "react";
import { SORT_OPTIONS } from "../../../constants/sortOptions";

export const useFilters = () => {
  const [filters, setFilters] = useState({
    search: "",
    onlyActive: false,
    sortBy: SORT_OPTIONS.DEFAULT,
    page: 1,
    itemsPerPage: 4
  });
  const setSearch = (search) =>
    setFilters({
      ...filters,
      page: 1,
      search,
    });

  const setOnlyActive = (onlyActive) => {
    const newSortBy =
      onlyActive && filters.sortBy === SORT_OPTIONS.ACTIVE
        ? SORT_OPTIONS.DEFAULT
        : filters.sortBy;
    setFilters({
        ...filters,
        page: 1,
        sortBy: newSortBy,
        onlyActive
    });
  };
  const setSortBy = (sortBy) =>
    setFilters({
      ...filters,
      page: 1,
      sortBy,
    });

  const setPage = newPage =>
    setFilters({
      ...filters,
      page: newPage
    })
  const setItemsPerPage = newItemsPerPage =>
    setFilters({
      ...filters,
      page: 1,
      itemsPerPage: newItemsPerPage
    })
  return {
    filters,
    setSearch,
    setSortBy,
    setOnlyActive,
    setPage,
    setItemsPerPage
  };
};

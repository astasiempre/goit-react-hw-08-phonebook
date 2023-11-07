import { FilterContainer, FilterLabel, FilterInput } from './Filter.styled';

const Filter = ({ filterTerm, onFilterChange }) => {
  return (
    <FilterContainer>
      <FilterLabel>
        <span>Filter contacts by name:</span>
        <FilterInput
          onChange={e => onFilterChange(e.target.value)}
          value={filterTerm}
          type="text"
        />
      </FilterLabel>
    </FilterContainer>
  );
};

export default Filter;

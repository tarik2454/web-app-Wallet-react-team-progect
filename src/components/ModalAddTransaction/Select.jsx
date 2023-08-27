import { StyledSelect } from 'components/DiagramTab/DiagramTab.styled';
import React from 'react';
import { useSelector } from 'react-redux';
import { selectChoosenCategorie } from 'redux/TransactionCategories/selectors';

export const SelectExpenses = ({ handleCategoriId, values }) => {
  const categories = useSelector(selectChoosenCategorie);
  const normalized = categories.map(({ id, name }) => ({
    value: id,
    label: name,
  }));
  let initialValue = { value: '', label: '' };
  if (values.value) {
    initialValue = normalized.find(e => e.value === values.value);
  }

  return (
    <StyledSelect
      options={normalized}
      defaultValue={initialValue}
      value={initialValue}
      onChange={e => handleCategoriId(e)}
    ></StyledSelect>
  );
};

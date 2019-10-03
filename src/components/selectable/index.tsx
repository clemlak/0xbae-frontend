import * as React from 'react';
import styled from 'styled-components';

interface SelectableProps {
  isSelected: boolean,
  onClick: Function,
  children: string | JSX.Element | JSX.Element[],
}

interface SelectableStyledProps {
  isSelected: boolean
}

const SelectableStyled = styled.div<SelectableStyledProps>`
  display: inline-flex;
  border-width: 1.5px;
  border-style: solid;
  border-color: ${(props) => (props.isSelected ? props.theme.colors.main : 'transparent')};
  border-radius: 15px;
  padding: 5px 18px;
  align-items: center;

  &:hover {
    cursor: pointer;
    border-color: ${(props) => (props.isSelected ? props.theme.colors.main : props.theme.colors.grey3)};
  }
`;

const Content = styled.div<SelectableStyledProps>`
  color: ${(props) => (props.isSelected ? props.theme.colors.main : props.theme.colors.grey4)};
  font-family: 'Nunito Sans', sans-serif;
  display: contents;

  ${SelectableStyled}:hover & {
    color: ${(props) => (props.isSelected ? props.theme.colors.main : props.theme.colors.grey3)};
  }
`;

const Selectable = (selectableProps: SelectableProps) => {
  const {
    onClick,
    children,
    isSelected,
  } = selectableProps;

  return (
    <SelectableStyled
      isSelected={isSelected}
      onClick={() => onClick()}
    >
      <Content isSelected={isSelected}>
        {children}
      </Content>
    </SelectableStyled>
  );
};

export default Selectable;

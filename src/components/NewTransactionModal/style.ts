import styled from "styled-components";
import { darken } from 'polished';

export const Container = styled.form`
  h2 {
    margin-bottom: 2rem;
    color: var(--text-title);
    font-size: 1.5rem;
  }

  input {
    width: 100%;
    height: 4rem;
    padding: 0 1.5rem;
    background-color: #e7e9ee;
    border-radius: 0.25rem;
    border: 1px solid #d7d7d7;
    font-weight: 400;
    font-size: 1rem;
    &::placeholder {
      color: var(--text-body);
    }

    & + input {
      margin-top: 1rem;
    }
  }

  button[type="submit"] {
    width: 100%;
    height: 4rem;
    margin-top: 1.5rem;
    padding: 0 1.5rem;
    background-color: var(--green);
    border: 0;
    border-radius: 0.25rem;
    color: #FFF;
    font-size: 1rem;
    font-weight: 600;
    transition: filter 0.2s;

    &:hover {
      filter: brightness(0.9);
    }
  }
`;

export const TransactionTypeContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.5rem;
  margin: 1rem 0;
`;

interface RadioBoxPorps {
  isActive: boolean;
}

export const RadioBox = styled.button<RadioBoxPorps>`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 4rem;
  border: 1px solid #d7d7d7;
  background-color: ${props => props.isActive ? '#ccc' : 'transparent'};
  transition: border-color 0.2s;

  img {
    width: 20px;
    height: 20px;
  }

  span {
    display: inline-block;
    margin-left: 1rem;
    font-size: 1rem;
    color: var(--text-title);
  }

  &:hover {
    border-color: ${darken(0.1, '#d7d7d7')};
  }
`;
import styled from "styled-components";

export const Container = styled.header`
  width: 100%;
  padding: 1rem 2rem;
  background-color: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.text};
  display: flex;
  justify-content: space-between;
  align-items: center;

  h1 {
    color: ${({ theme }) => theme.colors.text};
    font-weight: bold;

    &:hover {
      color: ${({ theme }) => theme.colors.primary};
    }
  }
`;

export const Nav = styled.nav`
  display: flex;
  gap: 1.5rem;

  a {
    color: ${({ theme }) => theme.colors.text};
    font-weight: bold;

    &:hover {
      color: ${({ theme }) => theme.colors.primary};
    }
  }
`;

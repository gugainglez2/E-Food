import styled from 'styled-components'

export const ListContainer = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 32px;
  margin: 56px 0 80px;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    padding: 0 20px;
  }
`

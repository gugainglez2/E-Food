import styled from 'styled-components'

export const Container = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 32px;
  margin: 56px 0 80px;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr 1fr;
    padding: 0 32px;
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    max-width: 90%;
    margin-inline: auto;
  }
`

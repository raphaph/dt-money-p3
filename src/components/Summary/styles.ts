import styled, { css } from 'styled-components'

export const SummaryContainer = styled.section`
  width: 100%;
  max-width: 1120px;
  margin: 0 auto;
  padding: 0 1.5rem;

  display: grid;
  grid-template-columns: repeat(3, 1fr); // 3 colunas com o mesmo tamanho
  gap: 2rem;
  margin-top: -5rem;
`

interface SummaryCardProps {
  variant?: 'lightgreen' // caso o elemento receba a variant, o valor será greenm (não obrigatório)
  // essa variant precisa ser passada no card variant="green"
}

export const SummaryCard = styled.div<SummaryCardProps>`
  background-color: white;
  box-shadow: 0 0 5px 2px ${(props) => props.theme['gray-300']};
  border-radius: 6px;
  padding: 2rem;

  header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: black;
  }

  strong {
    display: block;
    margin-top: 1rem;
    font-size: 2rem;
  }

  ${(props) =>
    props.variant === 'lightgreen' &&
    css`
      // se um card enviar a variant="green" será aplicado o style abaixo
      background: #0aed91;
    `}
`

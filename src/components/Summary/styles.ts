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
  variant?: 'green' // caso o elemento receba a variant, o valor será greenm (não obrigatório)
  // essa variant precisa ser passada no card variant="green"
}

export const SummaryCard = styled.div<SummaryCardProps>`
  background-color: ${(props) => props.theme['gray-600']};
  border-radius: 6px;
  padding: 2rem;

  header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: ${(props) => props.theme['gray-300']};
  }

  strong {
    display: block;
    margin-top: 1rem;
    font-size: 2rem;
  }

  ${(props) =>
    props.variant === 'green' &&
    css`
      // se um card enviar a variant="green" será aplicado o style abaixo
      background: ${props.theme['green-700']};
    `}
`

import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import styled from 'styled-components'

export const SyntaxHighlighterContainer = styled.div`
  width: 100%;
  max-width: 1120px;
  margin: 0 auto;
  padding: 0 1.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const TitleLang = styled.span`
  width: 100%;
  max-width: 1120px;
`

export const SyntaxHighlighterContent = styled(SyntaxHighlighter)`
  border-radius: 6px;
  border: 1px solid rgb(70, 70, 70);
  width: 100%;
`

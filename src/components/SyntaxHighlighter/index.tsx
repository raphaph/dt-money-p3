import { materialDark } from 'react-syntax-highlighter/dist/esm/styles/prism'
import {
  SyntaxHighlighterContainer,
  SyntaxHighlighterContent,
  TitleLang,
} from './styles'

const codeStringHtml = `<div class='class'>
  <strong>Hello</strong>
</div>`

const codeStringCss = `.class {
  background: #fff;
  height: 100vh;
  width: 100vw;
}`

export default function CodeDisplay() {
  return (
    <SyntaxHighlighterContainer>
      <TitleLang>
        <strong>HTML</strong>
      </TitleLang>

      <SyntaxHighlighterContent
        language="html"
        style={materialDark}
        showLineNumbers
        wrapLines
      >
        {codeStringHtml}
      </SyntaxHighlighterContent>
      <TitleLang>
        <strong>CSS</strong>
      </TitleLang>

      <SyntaxHighlighterContent
        language="css"
        style={materialDark}
        showLineNumbers
        wrapLines
      >
        {codeStringCss}
      </SyntaxHighlighterContent>
    </SyntaxHighlighterContainer>
  )
}

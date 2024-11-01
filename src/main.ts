import './style.css'
import typescriptLogo from './typescript.svg'
import viteLogo from '/vite.svg'
import './typescriptFiles/1.1'
import './typescriptFiles/1.3'
import './typescriptFiles/1.12'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <a href="https://vite.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://www.typescriptlang.org/" target="_blank">
      <img src="${typescriptLogo}" class="logo vanilla" alt="TypeScript logo" />
    </a>
    
  </div>
`


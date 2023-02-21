
import './css/styles.scss'
import Header from './components/Header'
import Sidebar from './components/Sidebar'
import Preview from './assets/icon-show-preview.svg'
import { useState } from 'react'
function App() {
const [expanded, setExpanded] = useState(false)
console.log(expanded)
  return (
    <>
    <section className='outer-container'>
        <section className={expanded ? 'sidebar expand' : 'sidebar'}>
        </section>
    <section className={expanded ? 'container expand' : 'container'}>
    <Header expanded={expanded} func={() => setExpanded(!expanded)}/>
    <section className='editor-space'>
      <section className='markdown part'>
        <div className='header-editor'>
          <span>MARKDOWN</span>
        </div>
        <textarea>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum quidem placeat nostrum distinctio voluptates ratione laudantium quaerat delectus maiores quo nam perspiciatis quos repellendus iste, et, earum molestias accusantium adipisci.</textarea>
      </section>
       <section className='preview part'>
       <div className='header-editor'>
   
          <span>PREVIEW</span>
          <div className='clickable'>
          <img src={Preview} alt='preview icon'></img>
          </div>
        </div>
       </section>
    </section>
 
    </section>
    </section>
    </>
  )
}

export default App

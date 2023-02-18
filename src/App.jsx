
import './css/styles.scss'
import Header from './components/Header'
import Preview from './assets/icon-show-preview.svg'
function App() {


  return (
    <>
    <section className='container'>
    <Header/>
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
    </>
  )
}

export default App

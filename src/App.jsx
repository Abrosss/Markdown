
import './css/styles.scss'
import Header from './components/Header'
import Preview from './assets/icon-show-preview.svg'
import HidePreview from './assets/icon-hide-preview.svg'
import { useState } from 'react'
import ReactMarkdown from 'react-markdown'
function App() {
  const data = [
    {
      "createdAt": "04-01-2022",
      "name": "untitled-document.md",
      "content": ""
    },
    {
      "createdAt": "04-01-2022",
      "name": "welcome.md",
      "content": "# Welcome to Markdown\n\nMarkdown is a lightweight markup language that you can use to add formatting elements to plaintext text documents.\n\n## How to use this?\n\n1. Write markdown in the markdown editor window\n2. See the rendered markdown in the preview window\n\n### Features\n\n- Create headings, paragraphs, links, blockquotes, inline-code, code blocks, and lists\n- Name and save the document to access again later\n- Choose between Light or Dark mode depending on your preference\n\n> This is an example of a blockquote. If you would like to learn more about markdown syntax, you can visit this [markdown cheatsheet](https://www.markdownguide.org/cheat-sheet/).\n\n#### Headings\n\nTo create a heading, add the hash sign (#) before the heading. The number of number signs you use should correspond to the heading level. You'll see in this guide that we've used all six heading levels (not necessarily in the correct way you should use headings!) to illustrate how they should look.\n\n##### Lists\n\nYou can see examples of ordered and unordered lists above.\n\n###### Code Blocks\n\nThis markdown editor allows for inline-code snippets, like this: `<p>I'm inline</p>`. It also allows for larger code blocks like this:\n\n```\n<main>\n  <h1>This is a larger code block</h1>\n</main>\n```"
    }
  ]
  const [documents, setDocuments] = useState(data)
  
  const [expanded, setExpanded] = useState(false)
  const [previewFull, setpreviewFull] = useState(false)

  const [markdown, setMarkdown] = useState()
  console.log(documents)

  function addDocument() {
    setDocuments(docs => [...docs, {name: 'okoko'}])
  }
  function deleteDocument(index) {
    documents.splice(index, 1)
    setDocuments([...documents])
  }
  console.log(markdown)
 
  return (
    <>
      <section className='outer-container'>
        <aside className={expanded ? 'sidebar expand' : 'sidebar'}>
        </aside>
        <section className={expanded ? 'container expand' : 'container'}>
          <Header expanded={expanded} func={() => setExpanded(!expanded)} />
          <section className='editor-space'>
            <section className={previewFull ? 'markdown part hidden' : 'markdown part'}>
              <div className='header-editor'>
                <span onClick={addDocument}>MARKDOWN</span>
              </div>
              <textarea onChange={(e) => setMarkdown(e.target.value)}></textarea>
            </section>
            <section className={previewFull ? 'preview part full' : 'preview part'}>
              <div className='header-editor'>

                <span onClick={() => deleteDocument(1)}>PREVIEW</span>
                <div onClick={() => setpreviewFull(!previewFull)} className='clickable'>
                  <img src={previewFull ? HidePreview : Preview} alt='preview icon'></img>
                </div>

              </div>
              <div className='preview-content'><ReactMarkdown>{markdown}</ReactMarkdown></div>
            </section>
          </section>

        </section>
      </section>
    </>
  )
}

export default App

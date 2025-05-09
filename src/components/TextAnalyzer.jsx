import nlp from 'compromise'
import { useState } from 'react'

export default function TextAnalyzer() {
  const [input, setInput] = useState("")
  const [nouns, setNouns] = useState([])

  const analyze = () => {
    const doc = nlp(input)
    const extractedNouns = doc.nouns().out('array')
    setNouns(extractedNouns)
  }

  return (
    <div style={{ padding: "2rem" }}>
      <h2>🧠 Analisador de Texto</h2>
      <textarea
        rows="4"
        cols="60"
        placeholder="Digite um texto aqui..."
        value={input}
        onChange={e => setInput(e.target.value)}
      />
      <br /><br />
      <button onClick={analyze}>Analisar</button>
      <h3>Substantivos detectados:</h3>
      <ul>
        {nouns.map((n, i) => <li key={i}>{n}</li>)}
      </ul>
    </div>
  )
}

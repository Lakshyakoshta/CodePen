import reacr,{useState,useEffect} from "react";
import './App.css';
import Editor from './components/Editor';
import useLocalStorage from "./hooks/useLocalStorage";

function App() {
  

  useEffect(() => {
    document.title = 'Codepen.io';
  }, []);

  const[html,setHtml]=useLocalStorage("html",'');
  const[css,setCss]=useLocalStorage('css','');
  const[js,setJs]=useLocalStorage("js",'');
  const [srcDoc ,setSrcDoc] = useState('') 
  
  useEffect(()=>{
    const timeout=setTimeout(()=>{
      setSrcDoc(`
  <html>
    <body>
      ${html}
    </body>
    <style>
      ${css}
    </style>
    <script>
      ${js}
    </script>
  </html>
  `)
    },250)

    return ()=>clearTimeout(timeout)
  },[html,css,js])



  return (
    <div className="App h-lvh">
      <div className="flex justify-evenly font-bold text-white text-3xl p-2 bg-gray-900">CODEPEN</div>

      <div className='pane top-pane bg-gray-600 h-1/2 flex'>
        <Editor 
          language="xml" 
          dispalyName="HTML" 
          value={html} 
          onChange={setHtml}
        />
        <Editor 
          language="css" 
          dispalyName="CSS" 
          value={css} 
          onChange={setCss}
        />
        <Editor 
          language="javascript" 
          dispalyName="Javascript" 
          value={js} 
          onChange={setJs}
        />
        
      </div>
      <div className='pane h-80'>
        <iframe
          srcDoc={srcDoc}
          title='output'
          sandbox='allow-scripts'
          frameBorder="0"
          width="100%"
          height="100%"
        ></iframe>
      </div>
    </div>
  );
}

export default App;

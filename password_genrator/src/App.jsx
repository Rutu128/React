import { useState, useCallback, useEffect,useRef } from "react"

function App() {
  const [length, setLength] = useState(8)
  const [numberallowed, setNumberAllowed] = useState(false)
  const [charallowed, setCharAllowed] = useState(false)
  const [password, setPassword] = useState()
  //use Refhhook
  const passwordRef  = useRef(null)
  const passwordGenrator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if (numberallowed) str += "0123456789";
    if (charallowed) str += "!@#$%^&{}[]"
    console.log(str)
    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char)
    }
    setPassword(pass)

  }, [length, numberallowed, charallowed, setPassword])
  const copyPasswordToClipboard = useCallback(()=>{
    passwordRef.current?.select()
    window.navigator.clipboard.writeText(password)
  },[password])
  useEffect(() => { passwordGenrator() }, [length, numberallowed, charallowed, passwordGenrator])
  return (

    <div className="w-full ml-80 mx-auto max-w-md  shadow-md rounded-lg px-4 py-3 my-8 text-white bg-gray-800">
      <h1 className="text-center text-white my-3">Password Genrator</h1>
      <div className="flex shadow rounded-lg text-black overflow-hidden mb-4">
        <input type="text"
          value={password}
          className="outline-none w-full py-1 px-3 mr-2 mb-2 rounded-lg"
          placeholder="Password"
          readOnly
          ref={passwordRef}
        />
        <button
        onClick={copyPasswordToClipboard}
          class=" rounded-lg outline-none bg-blue-700 text-white px-3 py-0.5 mb-2 shrink-0">Copy</button>
      </div>
      <div className="flex text-sm gap-x-2">
        <div
          className="flex items-center gap-x-1">
          <input type="range"
            min={8}
            max={20}
            value={length}
            className="cursor-pointer"
            onChange={(e) => { setLength(e.target.value) }}
          />
          <label >Length : {length}</label>
        </div>
        <div className="flex items-center gap-x-1">
          <input type="checkbox"
            defaultChecked={numberallowed}
            id="numberInput"
            onChange={() => {
              setNumberAllowed((prev) => !prev);
            }} />
          <label htmlFor="numberInput">Numbers</label>
        </div>
        <div className="flex items-center gap-x-1">
          <input type="checkbox"
            defaultChecked={charallowed}
            id="charInput"
            onChange={() => {
              setCharAllowed((prev) => !prev);
            }} />
          <label htmlFor="char Input">Character</label>
        </div>
      </div>
    </div>

  )
}

export default App

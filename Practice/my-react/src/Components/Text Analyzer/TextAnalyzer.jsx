import React, { useState } from 'react'
import Alert from './Alert'

const TextAnalyzer = (props) => {

   const [Text, setText] = useState("")

   const onChangeHandler = (event) => {
      setText(event.target.value)
   }

   const upperHandler = () => {
      let newText = Text.toUpperCase()
      setText(newText)
      props.showAlert('Converted to Upper Case.!')
   }

   const lowerHandler = () => {
      let newText = Text.toLowerCase()
      setText(newText)
      props.showAlert('Converted to Lower Case.!')
   }

   const lineRemoverHandler = () => {
      let newText = Text.replace("\n", ' ')
      setText(newText)
      props.showAlert('Removed Extra Lines.!')
   }

   const capitalizeHandler = () => {
      // let newText = Text.charAt(0).toUpperCase() + Text.slice(1)
      let newText = Text.replace(/\b\w/g, match => match.toUpperCase())
      setText(newText)
      props.showAlert('Capitalized the Starting Letter of the Word.!')
   }

   let SpaceRemoverHandler = () => {
      let newText = Text.split(' ').filter(word => word !== '').join(' ');
      setText(newText)
      props.showAlert('Extra Space Removed.!')
   }

   const CopyHandler = () => {
      navigator.clipboard.writeText(Text)
      props.showAlert('Copied The Text.!')
   }

   const clearHandler = () => {
      setText("")
      props.showAlert('Clear The Text.!')
   }

   return <>

      <div className="container mt-5">
         <h3>Type Your Text To Analyze It...</h3>
         <div className="row mt-3">
            <div className="col-md-9">
               <textarea className='form-control' value={Text} rows="10" onChange={onChangeHandler}></textarea>
               <div className='mt-5'>
                  <button disabled={Text.length === 0} className='btn btn-outline-primary m-2' onClick={upperHandler} >Upper Case</button>
                  <button disabled={Text.length === 0} className='btn btn-outline-primary m-2' onClick={lowerHandler} >Lower Case</button>
                  <button disabled={Text.length === 0} className='btn btn-outline-primary m-2' onClick={capitalizeHandler} >Capitalize</button>
                  <button disabled={Text.length === 0} className='btn btn-outline-primary m-2' onClick={lineRemoverHandler} >Line Remover</button>
                  <button disabled={Text.length === 0} className='btn btn-outline-primary m-2' onClick={SpaceRemoverHandler} >Space Remover</button>
                  <button disabled={Text.length === 0} className='btn btn-outline-primary m-2' onClick={CopyHandler} >Copy Text</button>
                  <button disabled={Text.length === 0} className='btn btn-outline-primary m-2' onClick={clearHandler} >Clear Text</button>
               </div>
               <div className='mt-4'>
                  {/* <h6> {Text.split(" ").length} Words and {Text.length} Character</h6> */}
                  <h6> {Text.split(" ").filter((element) => { return element.length !== 0 }).length} Words and {Text.length} Character </h6>
               </div>
            </div>
         </div>
      </div>
   </>
}

export default TextAnalyzer

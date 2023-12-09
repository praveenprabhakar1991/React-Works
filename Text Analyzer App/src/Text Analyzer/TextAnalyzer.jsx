import React, { useState } from 'react'

const TextAnalyzer = (props) => {

   const [Text, setText] = useState("")

   let onChangeHandler = (event) => {
      setText(event.target.value)
   }

   let UpperHandler = () => {
      let newText = Text.toUpperCase()
      setText(newText)
      props.showAlert('Converted to Uppercase.!')
   }

   let LowerHandler = () => {
      let newText = Text.toLowerCase()
      setText(newText)
      props.showAlert('Converted to Lowercase.!')
   }

   let CapitalizeHandler = () => {
      // let newText = Text.charAt(0).toUpperCase() + Text.slice(1);
      let newText = Text.replace(/\b\w/g, match => match.toUpperCase());
      setText(newText)
      props.showAlert('Converted to Capitalized.!')
   }

   let SpaceRemoverHandler = () => {
      let newText = Text.split(' ').filter(word => word !== '').join(' ');
      setText(newText)
      props.showAlert('Removed Extra Spaces.!')
   }

   let LineRemoverHandler = () => {
      let newText = Text.replace("\n", ' ')
      setText(newText)
      props.showAlert('Removed Extra Lines.!')
   }

   let CopyTextHandler = () => {
      navigator.clipboard.writeText(Text)
      props.showAlert('Copied to Clipboard.!')
   }

   let ClearTextHandler = () => {
      let newText = ""
      setText(newText)
      props.showAlert('Text Cleared.!')
   }

   return <>

      <div className="container mt-3 ">
         <h3 className='my-3' > Type Something To Analyze Your Text... </h3>
         <div className="form-group">
            <textarea className="form-control" value={Text} onChange={onChangeHandler} rows="8"></textarea>
         </div>
         <button disabled={Text.length === 0} className="btn btn-outline-primary m-2" onClick={UpperHandler}>Uppercase</button>
         <button disabled={Text.length === 0} className="btn btn-outline-primary m-2" onClick={LowerHandler}>Lowercase</button>
         <button disabled={Text.length === 0} className="btn btn-outline-primary m-2" onClick={CapitalizeHandler}>Capitalize</button>
         <button disabled={Text.length === 0} className="btn btn-outline-primary m-2" onClick={SpaceRemoverHandler}>Remove Spaces</button>
         <button disabled={Text.length === 0} className="btn btn-outline-primary m-2" onClick={LineRemoverHandler}>Remove Lines</button>
         <button disabled={Text.length === 0} className="btn btn-outline-primary m-2" onClick={CopyTextHandler}>Copy Text</button>
         <button disabled={Text.length === 0} className="btn btn-outline-primary m-2" onClick={ClearTextHandler}>Clear Text</button>
         <hr />

         <div>
            {/* <p> {Text.split(" ").length} Words and {Text.length} Characters </p>             */}
            <h6> {Text.split(" ").filter((element) => { return element.length !== 0 }).length} Words and {Text.length} Characters </h6>
            <h6> {0.008 * Text.split(" ").filter((element) => { return element.length !== 0 }).length} Minutes To Read </h6>
         </div>
      </div>
   </>
}

export default TextAnalyzer

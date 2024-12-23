import react,{useState} from 'react';

export default function TextForm(props){
    const [text,setText] = useState('Enter text here')
    const handleUpClick = () =>{
        //console.log('upperclick');
        let newText = text.toUpperCase();
        setText(newText)
    }

    const handleOnChange = (event) => {
        // console.log('onchange');
        setText(event.target.value)
        // console.log(event.target.value);
    }

    const handleLoClick = () => {
        let lowerCase = text.toLowerCase()
        setText(lowerCase)
    }

    const handleClearClick = () => {
        setText('');
    }
    
    return(
        <>
        <div  >
            <div className='container'>
                <h1>{props.heading}</h1>
                
                <div className="mb-3">
                    <textarea className="form-control" onChange={handleOnChange} style={{backgroundColor:props.mode=='light'?"white":"#27294a",color:props.mode=='light'?"black":"white"}}  value={text} rows="8">
                    </textarea>
                </div>           
                
                <button disabled={text.length===0} onClick={handleUpClick} className="btn btn-primary mx-2 my-1">Convert to Upper Case</button> 
                <button  disabled={text.length===0} onClick={handleLoClick} className="btn btn-info mx-2 my-1">Convert to Lower Case</button> 
                <button  disabled={text.length===0} onClick={handleClearClick} className="btn btn-info mx-2 my-1">Clear Text</button>            

            </div>
            <div className='container my-5'>
                <h2>Your Text Summary</h2>
                <p> {text.split(/\s+/).filter((element) => {return element.length!=0}).length} word and  {text.length} characters</p>
                <p>{0.008 * text.split(/\s+/).filter((element) => {return element.length!=0}).length} minutes to read</p>
                <h2 className='my-3'>Preview</h2>
                <p>{text}</p>
            </div>
        </div>
        </>
    )
}
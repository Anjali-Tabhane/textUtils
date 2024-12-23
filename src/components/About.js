import react, { useState } from 'react';

export default function About(props){
    
    const [myStyle,setMystyle] = useState({
        color:"black",
        backgroundColor:"white"
    });
    const [btnText,setBtnText] = useState('Enabled Dark Mode')

    const toggleButton = () => {
        //console.log('toggle',myStyle.color);
        if(myStyle.color == 'white'){
            setMystyle({
                color:"black",
                backgroundColor:"white"
            })
            setBtnText('Enabled Dark Mode')
        }else{
            setMystyle({
                color:"white",
                backgroundColor:"black"
            })
            setBtnText('Enabled White Mode')
        }
        
    }
    return(
        <>
        <div className='container my-2'  style={{backgroundColor:props.mode=='light'?"white":"black",color:props.mode=='light'?"black":"white"}}>
            <h1>About Us</h1>
            <div className="accordion my-2" id="accordionExample" style={{paddingBottom:"10px"}}>
                <div className="accordion-item" style={{backgroundColor:props.mode=='light'?"white":"black",color:props.mode=='light'?"black":"white"}}>
                    <h2 className="accordion-header">
                    <button className="accordion-button" style={{backgroundColor:props.mode=='light'?"white":"black",color:props.mode=='light'?"black":"white"}} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                    Word and Character Count
                    </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                        <strong>This feature helps users analyze the number of words,</strong>  characters (with or without spaces), and paragraphs in a given text. It's useful for tasks like writing essays, reports, or social media posts, ensuring the content meets specific word or character limits.
                    </div>
                    </div>
                </div>
                <div className="accordion-item" style={{backgroundColor:props.mode=='light'?"white":"black",color:props.mode=='light'?"black":"white"}}>
                    <h2 className="accordion-header">
                        <button className="accordion-button collapsed" style={{backgroundColor:props.mode=='light'?"white":"black",color:props.mode=='light'?"black":"white"}} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                            Text Case Conversion:
                        </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            <strong>Offer functionality to convert text to different cases, </strong>such as Uppercase, Lowercase, Title Case, Sentence Case, and more This feature is helpful when users need to standardize or format their text for better readability or consistency.
                        </div>
                    </div>
                </div>
                <div className="accordion-item" style={{backgroundColor:props.mode=='light'?"white":"black",color:props.mode=='light'?"black":"white"}}>
                    <h2 className="accordion-header">
                    <button style={{backgroundColor:props.mode=='light'?"white":"black",color:props.mode=='light'?"black":"white"}} className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                    Text Cleaning & Formatting:
                    </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                        <strong>Provide tools to remove extra spaces,</strong>  line breaks, special characters, or unnecessary punctuation. This feature can be especially helpful when cleaning up copied text from different sources, ensuring it’s properly formatted and ready for use.
                    </div>
                    </div>
                </div>
            </div>
            {/* <button className='btn btn-info' onClick={toggleButton}>{btnText}</button> */}
        </div>
        
        </>
    )
}
  
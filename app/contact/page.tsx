import Navbar from "../components/Navbar"

function Contact() {
  return ( <>
    <Navbar/>
    <div className="flex flex-col items-center justify-center h-screen pt-5">
    <div className="parentBox">
    <div className="box mt-60 " id="contacMe">
        <span className="borderLine"></span>
        <form >
            <h2>Contact US</h2>
            <div className="inputBox" >
                <input type="text" id="fullName" required/>
                <span>Full name</span>
                <i></i>
            </div>
            <div className="inputBox" >
                <input type="email" id="email" required/>
                <span>Your email</span>
                <i></i>
            </div>
            <div className="inputBox">
                <input type="number" id="number" autoComplete="off" required/>
                <span>Enter your number</span>
                <i></i>
            </div>
            <div className="textArea">
                <textarea name="text"  cols={45} rows={10} ></textarea>
                <span>How we can help you</span>
               <i></i>
            </div >
            <input type="submit" value="Submit" className="text-black"/>
        </form>
        
    </div>

    </div>
    </div>
    </>
  )
}

export default Contact
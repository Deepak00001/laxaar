import React , {useState}  from "react";
import Header from "./Header"
import Footer from "./Footer";
import CreateNote from "./CreateNote";
import Note from "./Note";

const App = () => {
  const [addItems, setAddItems] = useState([]);
  const addNote = (note) => {
      
       setAddItems((preData) => {
           return[...preData, note];
       });
       console.log(note);
  } 

  const onDelete = (id) => {
    setAddItems((olddata) => 
      olddata.filter((currdata, indx) =>{
          return indx !== id;
      })                        
    );
  }
  
    return (
      <>
        <Header/>
        <CreateNote 
            passNote={addNote}
        />
        <div className="notecontainer">
            {addItems.map((val,index) =>{
                return(
                    <Note
                        key={index}
                        id={index}
                        title={val.title}
                        content={val.content}
                        deleteItem={onDelete}
                    />
                )
            })}
            </div>
        <Footer/>
      </>
    );
}

export default App;

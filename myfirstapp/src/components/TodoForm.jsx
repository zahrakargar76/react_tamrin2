

const TodoForm =()=> {
    const todo = [
        { name: "", priority: "" },
        { name: "", priority: "" },
    ]
    function deleteT() {
        var element = document.getElementById("DeleteText");
        element.parentNode.removeChild(element);
    }
    function line(){
     document.getElementById("LineText").style.textDecoration="line-through";
     document.getElementById("LineText").style.color="gray";
    
    
    }
  
    return(
     <div
     style={{
        display: "flex",
        justifyContent:"center",
        alignItems: "center",
        width:"100%",
        height:"100%",
        border:"3px solid black",
        minHeight:100,
       flexDirection:"column",
       background:"pink",
     }}
     >
        <h1
              style={{ 
                fontSize:"4rem",
              }}>My Todo</h1>
            {todo.map((element,index) => (
                <div key={index}>
                    {element.name} {element.priority}
                </div>
            ))}
            <form>
                <input type="text" name="n" defaultValue="Name:"
                style={{
                    display:"block",
                    marginBottom:10,
                }}
                >
                </input>
                <input type="text" name="n" defaultValue="Email:"
                style={{
                    display:"block",
                    marginBottom:5,
                    
                }}
                >
                </input>
                </form>
                
                <button 
                style={{
                    background:"green",
                    marginBottom:5,
                    width:80,
                }}
                >Submit</button>
                <h1 id="DeleteText"
                style={{
                    color:"blue",
                }}
                >Delete this text.</h1>
        <button onClick={deleteT} 
        style={{
            width:80,
            background:"red",
        }}
        >Delete</button>
        
        <h1 id="LineText"
        style={{
            color:"gray",
        }}
        >Line this text.</h1>
        <button onClick={line} 
        style={{
            width:80,
            background:"black",
            color:"white",
            marginBottom:20,
        }}
        >Add</button>
     </div>
    );
};

export default TodoForm;




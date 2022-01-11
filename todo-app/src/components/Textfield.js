import { useState, useEffect } from "react";

const Textfield = ({currentItems, setCurrentItems}) => {

    const [itemValue, setItemValue] = useState("");
    //const [itemList, setItemList] = useState([]);

    useEffect(() => {
        setCurrentItems(currentItems);

    }, [currentItems]);

    let textEnter = (a) => {
        if(a.charCode === 13) {
            addItem();
        }
    }


    let addItem = () => {
        let rand = Math.random();
        if(itemValue.length > 0 ){
            setCurrentItems([...currentItems, {name: itemValue, id: rand}]); 
            setItemValue("");
        }
        else {
            alert("Hey, you have to write something first...");
        }
    }

    let removeValue = () => {
        setItemValue("")
    }

    return ( 
        <div className="textfield">
            <div className="enterContent">
                <input type="text" value={itemValue} onChange={(event) => setItemValue(event.target.value)} onKeyPress={(e) => textEnter(e)} placeholder="What to do?" />
                <div className="delete">
                    {itemValue.length > 0 ? <i onClick={removeValue} className="far fa-times-circle"></i> : ""}
                </div>
            </div>
            <div className="submitContent">
                <button onClick={addItem}>Submit</button>
            </div>
        </div>
    );
}
 
export default Textfield;
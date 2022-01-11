import { useEffect } from "react";

const TodoList = ({currentItems, setCurrentItems}) => {

    let a = false;

    let done = (id) => {
        let checkNormalId = document.getElementById(id);
        let checkPrId = document.getElementById("p" +id);

        if(checkPrId.classList.contains("finished")){
            checkPrId.classList.remove("finished");

            checkNormalId.classList.remove("animate__headShake")
            checkNormalId.classList.add("animate__tada");
        }
        else {
            checkPrId.classList.add("finished");

            if(checkNormalId.classList.contains("animate__backInLeft")){
                checkNormalId.classList.remove("animate__backInLeft")
            }

            checkNormalId.classList.remove("animate__tada")
            checkNormalId.classList.add("animate__headShake");
        }
    }

    let remove = (id) => {
        // setCurrentItems(currentItems.slice(0, index).concat(currentItems.slice(index + 1, currentItems.length)));   
        let checkNormalId = document.getElementById(id);
        checkNormalId.style.display = "none";
        a = true;
        document.querySelector(".showItems").style.display = "block";
        document.querySelector(".showItems").classList.add("animate__tada")
    }

    let showDeletedItems = () => {
        let items = document.querySelectorAll(".todoItem");

        for(let i = 0; i<items.length; i++){
            if(items[i].style.display == "none") {
                items[i].style.display = "flex";
            }
        }

        document.querySelector(".showItems").style.display = "none";
        document.querySelector(".showItems").classList.remove("animate__tada")
    }

    useEffect(() => {
        // setCurrentItems(currentItems);
    }, [currentItems, remove]);

    return (  
            <div className="todos">
                <div>
            {
                currentItems.map((currentItem, index) => (
                    
                    <div className="todoItem animate__animated animate__backInLeft" id={currentItem.id} key={index}>
                        <div className="itemContext">
                            <p id={"p" + currentItem.id}>{currentItem.name}</p>
                        </div>
                        <div className="edit">
                            <div onClick={() => done(currentItem.id)} className="done">
                                <i className="far fa-check-circle"></i>
                            </div>
                            <div onClick={() => remove(currentItem.id)} className="remove">
                                <i className="far fa-trash-alt"></i>
                            </div>
                        </div>
                    </div>
                ))
            }
            </div>

                <button className="showItems animate__animated" onClick={showDeletedItems}>Show All Deleted Items</button>
            </div>
    );
}
 
export default TodoList;
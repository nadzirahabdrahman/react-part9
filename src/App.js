import './App.css';
import { useState } from 'react';

function App() {

  // array to store itemList, set useState for an empty array
  const [itemList, setItemList] = useState([]);

  // each item has name and purchased status set to false, which new item added to list has not purchased yet
  // const [item, setItem] = useState({
  //   name: '', 
  //   purchased: false
  // })

  // ADD ITEM
  const addItem = (event) => {
    event.preventDefault(); // prevent page keep reload after click button

    let form = event.target; // get value 
    let formData = new FormData(form); // hold the value in FormData
    let formDataObj = Object.fromEntries(formData.entries()); // create object from formData
    // console.log(formDataObj); // output: item: 'ayam' 

    formDataObj.purchased = false; // add new key = purchased: initialize purchased status of each item to false == not buy yet
    setItemList([...itemList, formDataObj]); // set purchased status in the array of existing setItemList

  }

  // DELETE ITEM
  const deleteItem = (event) => {
    let deleteList = event.target.value; // get value to delete
    // console.log(deleteList); 

    let currentList = itemList.filter(function(list) {
      if(deleteList === list.item) { // if deleteList value === itemList value 
        return false; 
      } else {
        return true;
      }
    });
    setItemList(currentList); // new array of setItemList
  }

  // CHECKED ITEM
  const checkedItem = (event) => {
    let checkedList = event.target.value;
    itemList.map(function(val, index) {
      if(checkedList === val.item) {
        val.purchased = true;
      } 
    })
    setItemList([...itemList]);

  }

  return (
    <>
    <div>
      <h1>to-buy-list</h1>

      <div>
        <form onSubmit={addItem}>
          <input type='text' name='item' placeholder='What item?'/> {/* name='item' is a key */}
          &nbsp;
          <button className='button-add' type='submit'>add</button>
        </form>
      </div>
      {/* display itemList that has been added */}
      {
        itemList.map(function(val, index) {
          // index: nth of array for each val(value)
          return (
            <div className='frame-list' key={index}>
              <input value={val.item}/> {/* value/name of the itemList */}
              &nbsp;
              <div>
                <button className='button-check' onClick={checkedItem}>Checked</button>
                &nbsp;
                <button className='button-del' onClick={deleteItem} value={val.item}>Delete</button>
              </div>
            </div>
          );
        })
      }
    </div>
    </>
  );
}

export default App;

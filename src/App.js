import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function App() {
  return (
    <>
    <div className='frame'>
      <div className='title'>
        <h1>To-buy-list</h1>
      </div>

      <div className='add-list'>
        <input className='input-add' type='text'/>
        <button className='button-add' type='button' onClick="alert('Added!')">
          +
        </button>
      </div>
      
    </div>
    </>
  );
}

export default App;

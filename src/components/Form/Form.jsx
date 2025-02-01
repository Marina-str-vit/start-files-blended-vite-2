import { FiSearch } from 'react-icons/fi';
import style from './Form.module.css';
import { useState } from 'react';

const Form = ({onSubmit}) => {
  console.log(onSubmit);
  
  const [searchQuery, setSearchQuery] = useState('');

   const handleChange = e =>{
    setSearchQuery(e.target.value) //асинхроний
    console.log(searchQuery);
    
   } 

   const handleSubmit = e =>{
    e.preventDefault()
    if(!searchQuery.trim()){
      return alert('not be empty')
    }
    onSubmit(searchQuery.trim()); // цу місце виклику функції onHandleSubmit 7ряд Photos
    setSearchQuery('');
  }
   
//від баться до дитини пропсом від дитини до батька колбек функцією
  return (
  <form className={style.form} onSubmit={handleSubmit}>
    <button className={style.button} type="submit">
      <FiSearch size="16px" />
    </button>
  
    <input
      className={style.input}
      placeholder="What do you want to write?"
      name="search"
      value={searchQuery}
      onChange={handleChange}
      required
      autoFocus
    />
  </form>
  )
};

export default Form;

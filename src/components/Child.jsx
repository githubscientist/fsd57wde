const Child = () => {

  const handleClick = (e) => {
    // get the data from the input field
    // const childInput = document.querySelector('input[name="childInput"]').value;
    e.preventDefault();

    // console.log(e.target.form.elements[0].value);
    console.log(e.target.form.elements.childInput.value);
  }

  return (
    <div>
      <form>
        <input 
          type="text"
          placeholder="Child Component..."
          name="childInput"
        />
        <button onClick={handleClick}>Send to Parent</button>
      </form>
    </div>
  )
}

export default Child;
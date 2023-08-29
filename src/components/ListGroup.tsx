
function ListGroup() {

    let items=  [
        'New York',
        'SAn Francisco',
        'Tokyo',
        'London',
        'Paris'
    ];
    
    
    return (
        <>

    <h1>List</h1>
    {items.length ===0 && <p>No items Found</p>}
    <ul className="list-group">

      { items.map((item) => (<li className="list-group-item" key={item} onClick={()=> console.log(item)}>{item}</li>))}
    </ul>
    </>
  );
}

export default ListGroup;

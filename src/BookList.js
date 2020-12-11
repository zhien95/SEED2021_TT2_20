import data from './data'
import Book from './Book';
import Album from './Album';
function BookList(){
    return (
      <>
      <center><h1>Top Selling Book Section</h1></center>
        <div className='booklist'>
          {data.map((data)=>{
              return Book(data)
            })}
        </div>
        </>
      )
  }

  export default BookList;
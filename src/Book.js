import './index.css'

export default function Book (props) {
    const {id,img, title, author} = props;
    return(        
        <center>
        <article className ='book' id = {id}>
            <img
            src = {img} width = '240' height = '280'
            />
            <h1>{title}</h1>
            <span>Author: {author}</span>
        </article>
        </center>
    )   
}




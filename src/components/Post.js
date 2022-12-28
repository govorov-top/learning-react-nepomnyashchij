export default function Post (props){
    const {id,name,postDelete} = props;
    return (
        <div className="Post">
            <p>{name} <button data-id={id} onClick={() => postDelete(id)}>delete</button></p>
        </div>
    ) ;
}
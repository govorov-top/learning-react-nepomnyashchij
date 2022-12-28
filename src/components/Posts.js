import Post from './Post';
export default function Posts ({posts,postDelete}){
    return (
        <div className="posts">
            {
                posts.map(p => (
                    <Post key={p.id} id={p.id} name={p.name} postDelete={postDelete}/>
                ))
            }
        </div>
    ) ;
}
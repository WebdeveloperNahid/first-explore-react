
export default function Post ({post}) {
    return (
        <div className="posts">
            <h2>{post.id}</h2>
            <h2>{post.title}</h2>
            <h2>{post.body}</h2>
        </div>
    )
}
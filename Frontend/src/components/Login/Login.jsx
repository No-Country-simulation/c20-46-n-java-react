import axios from "axios";
import React from "react";

const baseURL = "https://jsonplaceholder.typicode.com/posts/1";

export default function Login() {
    const [post, setPost] = React.useState(null);

    React.useEffect(() => {
        axios.get(baseURL).then((response) => {
            setPost(response.data);
        });
    }, []);

    if (!post) return null;

    return (
        <div>
            <h1 className="text-bold p-5 text-cyan-300 text-4xl underline">{post.title}</h1>
            <p>{post.body}</p>
        </div>
    );
}
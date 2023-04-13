import axios from "axios";

async function getData(id) {
    const {data: user} = await axios("https://jsonplaceholder.typicode.com/users/"+ id);

    const {data: post} = await axios("https://jsonplaceholder.typicode.com/posts/"+ id);

    const userInfo = {...user,...post}
    console.log(userInfo)
}



export default getData;

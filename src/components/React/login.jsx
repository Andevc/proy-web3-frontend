



function Login() {
    const fetchAPI = async () =>{
        const response = await axios.get();
        console.log(response.data.users)
    }
}
function SignUp(){
    async function signUp(){
        const rst = await fetch("http://localhost:3001/auth/signin");
        return rst.json();
    }
    return (
        <form onSubmit={signUp}>


        </form>
    );
}

export default SignUp;
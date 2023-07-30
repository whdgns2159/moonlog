import NextAuth, {NextAuthOptions} from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions: NextAuthOptions = {
    // Configure one or more authentication providers
    providers: [
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                username: { label: "Username", type: "text", placeholder: "jsmith" },
                password: { label: "Password", type: "password" }
            },
            async authorize(credentials, req) {
                const { username, password } = credentials as any;
                const res = await fetch("/api/auth/login", {
                    method: "POST",
                    headers: {
                        "Content-Type":"application/json",
                    },
                    body: JSON.stringify({
                        username,
                        password,
                    }),
                });

                const user = await res.json();

                if(res.ok && user){
                    // 해당 세션값을 사용하기위해선 getSession 함수를 사용하면 된다.
                    return user;
                }else return null;
            }
        })
        // ...add more providers here
    ],

    session:{
        strategy:"jwt"
    },
    pages:{
        signIn: "/user/login"
    }
}

export default NextAuth(authOptions)
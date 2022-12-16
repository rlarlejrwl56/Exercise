import { providers, signIn ,getSession, csrfToken } from'next-auth/react';


function goGo({providers}){
    return (
        <div>
            {Object.values(providers).map((provider)=> {
                return (
                    <div key={provider.name}>
                        <button onClick={() => signIn(provider.id)}>
                            SignIn with {provider.name}
                        </button>
                    </div>
                );
            })}
        </div>
    );
}


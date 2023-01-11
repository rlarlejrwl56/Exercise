import { useState } from 'react';

const useInput = (input : string) => {
    const [ value, setValue ] = useState(input);
    const [isEmail, setIsEmail ] = useState(true);
    const [isPassword, setIsPassword] = useState(true);
    const onChange = (e : React.ChangeEvent<HTMLInputElement>) => {
        if(e.target.name === 'userId'){
            const emailRegex =
                /([\w-.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
            if(!emailRegex.test(value) || e.target.value === null){
                setIsEmail(false);
            }else {
                setIsEmail(true);
            }
        }
        if(e.target.name === 'password'){
            console.log(value);
            const passwordRegex =
                /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,16}$/;
            if(!passwordRegex.test(value) || e.target.value === null){
                setIsPassword(false);
            }else {
                setIsPassword(true);
            }
        }
        //alert(isPassword);
        setValue(e.target.value);
        console.log(value);
    };
    return {value,isEmail,isPassword, onChange}
};

export default useInput;
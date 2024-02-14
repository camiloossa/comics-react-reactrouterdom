import { useState } from 'react';


const useForm = ( initialForm = {} ) => {

    const [formState, setFromState] = useState( initialForm );

    const onInputChange = ({ target }) => {
        const { name, value } = target;
        setFromState({...formState, [ name ]: value });
    }

    const onResetForm = () => {
        setFromState( initialForm );
    }

    return {
        ...formState,
        formState,
        onInputChange,
        onResetForm
    }
}

export  { useForm }

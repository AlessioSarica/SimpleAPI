import supabase from ".";

export const createUser = async (email: string, password: string, salt: string) => {
    const {data, error } = await supabase.from('Users').insert([{email, hashPassword: password, salt, sessionToken: ""}]);
    if (error) {
        console.log(error);
    }

    return data;
};

export const getUserBySessionToken = async (sessionToken: string) => {
    const { data, error } = await supabase.from('Users').select('*').eq('sessionToken', sessionToken);
    if (error) {
        console.log(error);
    }

    return data;
}

export const getUserByEmail = async (email: string) => {
    const { data, error } = await supabase.from('Users').select('*').eq('email', email);
    if (error) {
        console.log(error);
    }

    return data;
}

export const getAllUsers = async () => {
    const { data, error } = await supabase.from('Users').select('*');
    if (error) {
        console.log(error);
    }

    return data;
}

export const deleteUserByEmail = async (email: string) => {
    const { data, error } = await supabase.from('Users').delete().eq('email', email);
    if (error) {
        console.log(error);
    }

    return data;
}

export const updateSessionToken = async (email: string, sessionToken: string) => {
    const { data, error } = await supabase.from('Users').update({sessionToken}).eq('email', email);
    if (error) {
        console.log(error);
    }

    return data;
}
import supabase from ".";

export const createProduct = async (name: string, quantity: number, description: string, price: number) => {
    const {data, error } = await supabase.from('Products').insert([{name, quantity, description, price}]);
    if (error) {
        return "Internal Database Error";
    }

    return data;
};

export const getProduct = async (id: string) => {
    const { data, error } = await supabase.from('Products').select('*').eq('id', id);
    if (error) {
        return "Internal Database Error";
    }

    return data;
}

export const getAllProducts = async () => {
    const { data, error } = await supabase.from('Products').select('*');
    if (error) {
        return "Internal Database Error";
    }

    return data;
}

export const deleteProduct = async (id: string) => {
    const { data, error } = await supabase.from('Products').delete().eq('id', id);
    if (error) {
        return "Internal Database Error";
    }

    return data;
}
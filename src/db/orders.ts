import supabase from ".";

export const createOrder = async (userId: number, productId: number) => {
    const {data, error } = await supabase.from('Orders').insert([{fk_user: userId, fk_product: productId}]);
    if (error) {
        console.log(error);
    }

    return data;
};

export const getOrder = async (orderCode: string) => {
    const { data, error } = await supabase.from('Orders').select('*').eq('orderCode', orderCode);
    if (error) {
        console.log(error);
    }

    return data;
}

export const getAllOrders = async (userId: number) => {
    const { data, error } = await supabase.from('Orders').select('*').filter('fk_user', 'eq', userId);
    if (error) {
        console.log(error);
    }

    return data;
}

export const deleteOrder = async (orderCode: string) => {
    const { data, error } = await supabase.from('Orders').delete().eq('orderCode', orderCode);
    if (error) {
        console.log(error);
    }

    return data;
}
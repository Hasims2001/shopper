export const RequestConstant = (request, result) => {
    return {
        type: request,
        data: result,
    };
};

export const ResponseConstant = (success, error, result) => {

    return {
        type: result.success === true ? success : error,
        data: result.data,
    };
};
export const CommonConstants = {
    GET_ALl_SIZES_REQUEST: 'GET_ALl_SIZES_REQUEST',
    GET_ALl_SIZES_SUCCESS: 'GET_ALl_SIZES_SUCCESS',
    GET_ALl_SIZES_FAILURE: 'GET_ALl_SIZES_FAILURE',

    GET_ALl_COLORS_REQUEST: 'GET_ALl_COLORS_REQUEST',
    GET_ALl_COLORS_SUCCESS: 'GET_ALl_COLORS_SUCCESS',
    GET_ALl_COLORS_FAILURE: 'GET_ALl_COLORS_FAILURE',

    GET_ALl_SETTINGS_REQUEST: 'GET_ALl_SETTINGS_REQUEST',
    GET_ALl_SETTINGS_SUCCESS: 'GET_ALl_SETTINGS_SUCCESS',
    GET_ALl_SETTINGS_FAILURE: 'GET_ALl_SETTINGS_FAILURE',

    GET_CURRENT_CURRENCY_REQUEST: 'GET_CURRENT_CURRENCY_REQUEST',
    GET_CURRENT_CURRENCY_SUCCESS: 'GET_CURRENT_CURRENCY_SUCCESS',
    GET_CURRENT_CURRENCY_FAILURE: 'GET_CURRENT_CURRENCY_FAILURE',

    GET_ALL_SHIPPING_METHODS_REQUEST: 'GET_ALL_SHIPPING_METHODS_REQUEST',
    GET_ALL_SHIPPING_METHODS_SUCCESS: 'GET_ALL_SHIPPING_METHODS_SUCCESS',
    GET_ALL_SHIPPING_METHODS_FAILURE: 'GET_ALL_SHIPPING_METHODS_FAILURE',

    GET_ALl_SUPPORTERS_REQUEST: 'GET_ALl_SUPPORTERS_REQUEST',
    GET_ALl_SUPPORTERS_SUCCESS: 'GET_ALl_SUPPORTERS_SUCCESS',
    GET_ALl_SUPPORTERS_FAILURE: 'GET_ALl_SUPPORTERS_FAILURE',
};

import axios from "axios";

export const loadParts = () => {
    const API_URL = 'http://portalapi.partscheck.com.au/api.php?class=Access&method=fetchExtensionQuoteDetails&hash=DDD123456xx';
    return axios.get(API_URL).then((res) => res.data);
}
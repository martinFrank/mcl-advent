import { useState, useEffect } from 'react';
import { getCookie, setCookie } from '../utils/cookieUtils';

const USER_ID_COOKIE_NAME = 'userId';
const COOKIE_EXPIRY_DAYS = 365;

export const useUserIdentification = () => {
    const [userId, setUserId] = useState<string | null>(null);

    useEffect(() => {
        let id = getCookie(USER_ID_COOKIE_NAME);
        if (!id) {
            id = crypto.randomUUID();
            setCookie(USER_ID_COOKIE_NAME, id, COOKIE_EXPIRY_DAYS);
        }
        setUserId(id);
    }, []);

    return userId;
};

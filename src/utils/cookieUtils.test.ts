import { getCookie, setCookie } from './cookieUtils';

describe('cookieUtils', () => {
    beforeEach(() => {
        // Clear cookies before each test
        document.cookie.split(";").forEach((c) => {
            document.cookie = c.replace(/^ +/, "").replace(/=.*/, "=;expires=" + new Date().toUTCString() + ";path=/");
        });
    });

    it('should set and get a cookie', () => {
        const name = 'testCookie';
        const value = 'testValue';
        setCookie(name, value, 1);
        expect(getCookie(name)).toBe(value);
    });

    it('should return null for non-existent cookie', () => {
        expect(getCookie('nonExistent')).toBeNull();
    });

    it('should overwrite an existing cookie', () => {
        const name = 'testCookie';
        setCookie(name, 'value1', 1);
        setCookie(name, 'value2', 1);
        expect(getCookie(name)).toBe('value2');
    });
});

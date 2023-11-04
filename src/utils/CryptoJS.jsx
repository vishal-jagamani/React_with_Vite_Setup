import CryptoJS from 'crypto-js';
import Config from '../config/Config';

export const encryptData = (rawData) => {
    // CryptoJS?.AES?.encrypt(JSON.stringify(data), CryptoJS_Secret)?.toString();
    const encryptedData = CryptoJS?.AES?.encrypt(JSON.stringify(rawData), Config?.CryptoJS_Secret).toString();
    return encryptedData;
};

export const decryptData = (encryptedData) => {
    const decryptedData = CryptoJS?.AES?.decrypt(encryptedData, Config?.CryptoJS_Secret).toString(CryptoJS.enc.Utf8);
    return decryptedData;
};

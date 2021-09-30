import i18n from "i18next";
import { initReactI18next } from "react-i18next";
const resources = {
    en: {
        translation: {
            "Please Log in Below": "Please Log in Below",
            "User Name": "User Name",
            "Password": "Password",
            "Login": "Login",
            "Logout": "Logout",
            "Home": "Home",
            "Form": "Form",
        }
    },
    es: {
        translation: {
            "Please Log in Below": "Por favor inicie sesión",
            "User Name": "Usuario",
            "Password": "Contraseña",
            "Login": "Ingresar",
            "Logout": "Cerrar Sesión",
            "Home": "Panel",
            "Form": "Formulario",
        }
    }
};

i18n
    .use(initReactI18next) // passes i18n down to react-i18next
    .init({
        resources,
        lng: "en",

        keySeparator: false, // we do not use keys in form messages.welcome

        interpolation: {
            escapeValue: false // react already safes from xss
        },
        fallbackOnEmpty: true
    });

export default i18n;
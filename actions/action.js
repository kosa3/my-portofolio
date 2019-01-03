export const sendContactForm = (form) => {
    return {
        type: 'SEND_FORM',
        payload: {
            form
        }
    }
}
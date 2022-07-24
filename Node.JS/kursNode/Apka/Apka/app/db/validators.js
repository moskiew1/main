module.exports = {
    checkForbidenString(value, checkForbidenString)  {
        if(value === checkForbidenString) {
        throw new Error('Nazwa slug jest zabroniona!')
        }
    }
};  
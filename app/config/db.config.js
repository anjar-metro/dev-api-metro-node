const config = {
    HOST: "localhost",
    USER: "mongoadmin",
    PASSWORD: "mongoadmin",
    DB: "metrotest01",
    PORT: 27018,
    URL: function() { 
        return `mongodb://${this.USER}:${this.PASSWORD}@${this.HOST}:${this.PORT}`
        // return 'hello'
    }
}
module.exports = config
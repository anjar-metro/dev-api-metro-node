/** Data Provider : For data Table Provider  */
const QueryHelper  = require('./QueryHelper')


const dataProviderHelper = {
    template: {
        data: [],
        total: null, per_page: 10,
        current_page: null, last_page: null,
        next_page_url: null, prev_page_url: null,
        from: null, to: null
    },

    /**  
     * @param   {object} Collection Object Collection
     * @returns json     string     Json String      
     */
    async fetchData(req, collection){
        this.template.data = await this._queryData(req, collection)
        await this._formatPaging(req, collection)

        return this.template
    },
    async _queryData(req, collection){
        let per_page = parseInt(req.query.per_page) || 10
        let current_page = parseInt(req.query.page) || 1

        let no = current_page > 1 ? 
            ( ( ( current_page - 1 ) * per_page ) + 1) : 1
        
        // let _data = await QueryHelper.getQueryDataDocument(req, collection)
        let _data = await QueryHelper.getQueryDataDocument(req, collection)
            _data.forEach((item, index) => {
                _data[index].no = no 
                no++
            }) 
        return _data
    },
    async _formatPaging(req, collection){
        this.template.per_page = parseInt(req.query.per_page ) || 10
        this.template.current_page = parseInt(req.query.page) || 1
        return QueryHelper.countAllDocument(collection)
        .then( totalItem => {
            this.template.total =  totalItem
            this.template.last_page =  Math.ceil(totalItem / this.template.per_page )
            this.template.next_page_url = `http://${req.headers.host}/area/ListArea?page=${parseInt(req.query.page) >= this.template.last_page ? this.template.last_page : (parseInt(req.query.page)+1)}&per_page=${req.query.per_page}&sort=${req.query.sort||null}`
            this.template.prev_page_url = `http://${req.headers.host}/area/ListArea?page=${parseInt(req.query.page) <= 1 ? 1 : (parseInt(req.query.page)-1)}&per_page=${req.query.per_page}&sort=${req.query.sort||null}`
            this.template.from = ( ( this.template.current_page - 1 ) * this.template.per_page ) + 1
            this.template.to   = this.template.from  + this.template.data.length -1
                return this.template 
            })
            .catch(err => {
                console.log('Error @dataProviderHelper:_formatPaging', err)
            })

    }
}

module.exports = dataProviderHelper
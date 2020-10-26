class jsQuery{
    constructor(selector,context){
        // HANDLE: $(""), $(null), $(undefined), $(false)
        if (!selector) return this
        this.init(selector,context)
    }
    init(selector,context=document){
        var nodeList = context.querySelectorAll(selector)
        this.length = nodeList.length
        for (var i=0; i<this.length; i+=1) {
            this[i] = nodeList[i] 
        }
        return this
    }
}

window.$=function(selector,context){
    return new jsQuery(selector,context)
}


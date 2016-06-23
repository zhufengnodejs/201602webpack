/**
 * 此工具方法帮助我们操作localstorage
 */
module.exports = {
    list(){
        var data = localStorage.comments;
        return data?JSON.parse(data):[];
    },
    add(msg){
        msg.id = ''+Date.now();
        var data = this.list();
        localStorage.comments = JSON.stringify(data.concat(msg));
    },

    del(id){
        var data = this.list();
        localStorage.comments = JSON.stringify(data.filter(item => item.id !=id));
    },

    deleteAll(){
        localStorage.comments = JSON.stringify([]);
    }
}
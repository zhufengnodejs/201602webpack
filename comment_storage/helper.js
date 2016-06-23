/**
 * 此工具方法帮助我们操作localstorage
 */
module.exports = {
    list(){
        var data = localStorage.comments;
        return data?JSON.parse(data):[];
    },
    add(msg){
        var data = this.list();
        localStorage.comments = JSON.stringify(data.concat(msg));
    }
}
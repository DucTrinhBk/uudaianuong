function getRe(type){
    switch(type){
        case TYPE_CATEGORY:
            return RegExp(window.origin+'/chuyen-muc-(?:.+-)(\\d+)(?:\\?page=(\\d+)(?:\&isMobile=(true|false))?)?');
        case TYPE_SEARCH:
            return RegExp(window.origin+'/tim-kiem/search=(.*)'); 
    }
    return RegExp(window.origin+'/chuyen-muc-(?:.+-)(\\d+)(?:\\?page=(\\d+)(?:\&isMobile=(true|false))?)?');
}
export const TYPE_CATEGORY = 'category';
export const TYPE_SEARCH = 'search';
export const VIDEO_PAGESIZE = 4;
export const NHAHANGNGON_PAGESIZE = 4;
export const getUrl = (path)=>(window.location.origin+"/"+path);
export const isDeveloper = true;
export const getParams = (url,type)=>{
    var re = getRe(type);
    var rs = re.exec(url);
    if (rs){
        if(rs['length'] > 1){
            var i;
            var values = []
            for (i = 1;i<rs['length'];i++){
                values.push(rs[i]);
            }
            return values;
        }
    }
    return null;
}
export const IsMobile = window.navigator.userAgent.toLowerCase().includes("mobi");
var list = require('./list.json');
var listmore = require('./morelist.json');
var video = require('./video.json');
var videomore = require('./videomore.json');

module.exports = function() {
    return {
        "list": list,
        "listmore":listmore,
        "video":video,
        "videomore":videomore
    }
}

// restful

var request = require('request');
exports.search = function(tag,cb) {

  request.get('https://www.instagram.com/explore/tags/'+tag, function (error, response, body) {
      if (!error && response.statusCode == 200) {
        var object = body.split('window._sharedData =')[1];
          var insta_json = object.split(';</script>')[0];
        var data=JSON.parse(insta_json)



        cb(data.entry_data.TagPage[0].tag.media.nodes);

  }else{
    console.error(error);// throw error
  }

  });
}

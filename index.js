var request = require('request');
exports.search = function(tag,cb) {

  request.get('https://www.instagram.com/explore/tags/'+tag, function (error, response, body) {
      if (!error && response.statusCode == 200) {

        var object = body.split('window._sharedData =')[1].split(';</script>')[0];
        console.log(object)

     var data=JSON.parse(object)

        cb(data.entry_data);

  }else{
    console.error(error);// throw error
  }

  });
}

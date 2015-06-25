$(document).ready(function(){
  var streamers = ["freecodecamp", "storbeck", "terakilobyte", "habathcx","RobotCaleb","comster404","brunofin","thomasballinger","noobs2ninjas","beohoff", "meclipse", "nightblue3", "medrybw"];
  
$('.search input').keyup(function() {
    var val = $.trim($(this).val()).replace(/ +/g, ' ').toLowerCase();
      $('.channel-link').show().filter(function() {
        var text = $(this).children(0).children(1).children(0).text().replace(/\s+/g, ' ').toLowerCase();
        return !~text.indexOf(val);
    }).hide();
});
  var url = "";
  for (var i = 0; i < streamers.length; i++) {
    url = "https://api.twitch.tv/kraken/streams/" + streamers[i];
    var currentStreamer = streamers[i];
    $.ajax({
       type: 'GET',
        url: url,
        async: true,
        contentType: "application/json",
        dataType: 'jsonp',
        success: function(json) {
            if (json.stream) {
              var channelSnippet = '<a class="channel-link" href="' + json.stream.channel.url + '">' +
                '<div class="channel">' +
                  '<img src="' + json.stream.channel.logo + '" alt="" />' +
                  '<div class="text">' +
                    '<h4 class="title">' + json.stream.channel.display_name + ' <i style="color:rgb(74, 195, 55); font-size: 0.8em;" class="glyphicon glyphicon-ok"></i></h4>' +
                    '<p class="subtext">' + json.stream.channel.status.substring(0, 35).trim() + '...</p>' +
                  '</div>' +
                '</div></a>';
              $('#online').append(channelSnippet);
              $('#all').append(channelSnippet);
            } else {
                url = json._links.channel;
                $.ajax({
                   type: 'GET',
                    url: url,
                    async: true,
                    contentType: "application/json",
                    dataType: 'jsonp',
                    success: function(json) {
                      if(json.logo) {
                        var image = json.logo;
                      } else {
                        var image = 'https://placehold.it/64x64';
                      }
                      var channelSnippet = '<a class="channel-link" href="' + json.url + '">' +
                        '<div class="channel">' +
                          '<img src="' + image + '" alt="" />' +
                          '<div class="text">' +
                            '<h4 class="title">' + json.display_name + ' <i style="color:rgb(234, 68, 68); font-size: 0.8em;" class="glyphicon glyphicon-remove"></i></h4>' +
                            '<p class="subtext"></p>' +
                          '</div>' +
                        '</div></a>';
                      $('#offline').append(channelSnippet);
                      $('#all').append(channelSnippet);
                    }
                });
            }
        }
    });
  }
});
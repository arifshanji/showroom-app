define([
  'marionette',
  'application',
  'jsmpeg',
  'hbs!modules/player/templates/playerVideoView'
], function (Marionette, app, jsmpeg, template, config) {

    return Marionette.ItemView.extend({
      tagName   : 'div',
      template  : template,
      id        : "theVideoHolder",
      canPlay   : false,
      video     : '',
      player    : '',
      playCount : 0,

      initialize: function() {
      },

      onShow: function() {
        app.vent.on('seek', this.onSeek, this);
        app.vent.on('pause', this.pause, this);
        app.vent.on('replay', this.replay, this);
        app.vent.on('play', this.play, this);

        if (app.isiPhone() == null) {
          this.$('video')[0].currentTime = this.$('video')[1].currentTime;
        }
      },

      onRender: function() {
        this.$('video').hide();

        if (app.isiPhone()) {
          this.renderiPhoneCanvas();
          this.checkVideoTime();
        } else if (app.isMobileSafari()) {
          this.renderiPadVideo();
        } else {
          this.renderRegularVideo();
        }
      },

      renderiPhoneCanvas: function() {
        this.$('video').remove();

        var that      = this;
        var videoPath = app.config.baseVideoPath + app.config.iphone_video_src;
        var soundPath = app.config.baseVideoPath + app.config.iphone_audio_src;
        var video     = this.$('canvas');
        var canvasEl  = video[0];
        var ctx       = canvasEl.getContext('2d');

        var loader = '<svg version="1.1" id="Layer_1" class="spinner" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="100%" height="100%" viewBox="0 0 1280 720" enable-background="new 0 0 1280 720" xml:space="preserve"><path class="top-left-path" fill="#FFFFFF" stroke="#FFFFFF" stroke-width="4" d="M640.001,311.5v-3c-28.397,0-51.5,23.104-51.5,51.5h3C591.501,333.258,613.258,311.5,640.001,311.5z"/><path class="top-right-path" fill="#FFFFFF" stroke="#FFFFFF" stroke-width="4" d="M688.499,360h3c0-28.397-23.103-51.5-51.499-51.5v3C666.742,311.5,688.499,333.257,688.499,360z"/><path class="bottom-right-path" fill="#FFFFFF" stroke="#FFFFFF" stroke-width="4" d="M640,408.499v3c28.397,0,51.5-23.103,51.5-51.499h-3C688.5,386.742,666.743,408.499,640,408.499z"/><path class="bottom-left-path" fill="#FFFFFF" stroke="#FFFFFF" stroke-width="4" d="M591.501,359.999h-3c0,28.397,23.103,51.5,51.499,51.5v-3C613.258,408.499,591.501,386.742,591.501,359.999z" /></svg>';
        $(loader).appendTo('#player-poster-region');
        this.repaintSpinner();

        video.css({
          width: '100%',
          height: '100%'
        });

        var duration = function(player) {
          $('#player-poster-region').hide();
          that.onTimeUpdate(that.player.getVideoTime(), that.player.calculateDuration());
        }

        this.player = new window.jsmpeg(videoPath, { canvas: canvasEl, autoplay: false, audioUrl: soundPath, onload: duration});
      },

      renderRegularVideo: function() {
        var that = this;
        var allVideos = this.$('video');
        var mainVideo = this.$('#theVideo');
        var beaconVideo = this.$('#beacon-video');

        mainVideo
          .append("<source src='static/movies/" + app.config.mp4_video_src_med + "' type='video/mp4'></source>")
          .append("<source src='static/movies/" + app.config.webm_video_src_med + "' type='video/webm'></source>");

        beaconVideo
          .append("<source src='static/movies/" + app.config.beacon_video_mp4 + "' type='video/mp4'></source>")
          .append("<source src='static/movies/" + app.config.beacon_video_webm + "' type='video/webm'></source>");

        allVideos.bind("timeupdate", function(event) {
          that.onTimeUpdate(this.currentTime, this.duration);
        });

        mainVideo[0].volume   = 1.0;
        beaconVideo[0].volume = 0.0;
      },

      renderiPadVideo: function() {
        this.$('#theVideo').remove();
        var beaconVideo = this.$('#beacon-video');

        beaconVideo
          .append("<source src='static/movies/" + app.config.beacon_video_mp4 + "' type='video/mp4'></source>")
          .append("<source src='static/movies/" + app.config.beacon_video_webm + "' type='video/webm'></source>");

        beaconVideo.bind("timeupdate", function(event) {
          this.onTimeUpdate(this.currentTime, this.duration);
        }.bind(this));

        beaconVideo[0].volume = 1.0;
      },

      repaintSpinner: function() {
        if (app.config.spinnerColor != null) {
          $('.top-left-path, .top-right-path, .bottom-left-path, .bottom-right-path').attr('stroke', app.config.spinnerColor);
        }
      },

      checkVideoTime: function() {
        var that = this;

        window.setInterval(function() {
          that.onTimeUpdate(that.player.getVideoTime(), that.player.calculateDuration());
        }, 200);
      },

      onTimeUpdate: function(currentTime, duration) {
        var currentTime = currentTime != null ? currentTime : $('video')[0].currentTime;
        var duration    = duration != null ? duration : $('video')[0].duration;
        app.vent.trigger('timeUpdate', { 'currentTime': currentTime, 'duration': duration });
        this.$('video').show();
      },

      onSeek: function(timeSig) {
        this.$('video')[0].currentTime = timeSig;

        if (app.isiPhone() == null) {
          this.$('video')[1].currentTime = timeSig;
        }
      },

      pause: function() {
        if (app.isiPhone()) {
          this.player.pause();
        } else if (app.isMobileSafari()) {
          this.$('video')[0].pause();
        } else {
          this.$('video')[0].pause();
          this.$('video')[1].pause();
        }

        app.isPlaying = false;

        app.Analytics.pauseButtonControlBarClick();
      },

      play: function() {
        if (this.playCount === 0) {
          var keenClickEvent = {
            vendor : app.config.gaVendorName,
            video  : app.config.videoName
          }

          app.keenAnalytics.client.addEvent('playCount', keenClickEvent, function(err, res) {
            if (!err) console.log(res);
          });

          this.playCount++;
        }

        if (app.isiPhone()) {
          this.player.play();
        } else if (app.isMobileSafari()) {
          this.$('video')[0].play();
        } else {
          this.$('video')[0].play();
          this.$('video')[1].play();
        }

        $('.play-button').hide();
        $('.replay-button').hide();
        app.isPlaying = true;
        app.Analytics.logAnalyticEvent(app.Analytics.analyticVars.CB_PLAYBUTTON_CLICK, { 'vendor' : app.config.gaVendorName });
      },

      replay: function() {
        this.playCount = 0;

        if (app.isiPhone()) {
          this.player.restart();
        } else {
          this.onSeek(0.0);
          this.play();
        }
      }
    });
});

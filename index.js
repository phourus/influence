module.exports = {
  config: {
    views: 10000,
    comments: 200,
    popularity: 100,
    votes: 1000,
    time: 1
  },
  configure: function (config) {
    var self = this;
    Object.keys(config).forEach(function (item) {
      self[item] = config[item];
    });
  },
  calculate: function (stats, weight) {
    if (weight) {
      this.configure(weight);
    }
    return this._calculate(stats);
  },
  _calculate: function (stats, weight) {
    var config = this.config;
    var total = 0;
    var ratios = [
      stats.views / config.views,
      stats.comments / config.comments,
      stats.popularity / config.popularity,
      stats.votes / config.votes
    ];
    ratios.forEach(function (ratio) {
      total += ratio;
    });
    return this._time(total / ratios.length);
  },
  _time: function (score) {
    return parseInt(score * 100);
  }
};

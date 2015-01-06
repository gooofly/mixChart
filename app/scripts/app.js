

$(function() {
  'use strict';

  var data11 = [
    // [
      {x: '2011 M1', y: 12, url: '1'},
      {x: '2011 M2', y: 32, url: '2'},
      {x: '2011 M3', y: 28, url: '3'},
      {x: '2011 M4', y: 15, url: '4'},
      {x: '2011 M5', y: 25, url: '5'},
      {x: '2011 M6', y: 6, url: '6'}
    // ]
  ];
  new Mix.Graph({
    element: 'barchart11',
    charts: ['bar'],
    data: {
      data: data11
    },
    axis: {
      grid: {
        latitude: 9
      },
      label: {
        urlBase: 'http://www.baidu.com/',
        urlkey: 'url',
      }
    }
  });

  var data12 = [
    [
      {x: '2011 M1', y: 12},
      {x: '2011 M2', y: 32},
      {x: '2011 M3', y: 28},
      {x: '2011 M4', y: 15},
      {x: '2011 M5', y: 25},
      {x: '2011 M6', y: 6}
    ], [
      {x: '2011 M1', y: 10},
      {x: '2011 M2', y: 14},
      {x: '2011 M3', y: 33},
      {x: '2011 M4', y: 28},
      {x: '2011 M6', y: 38}
    ], [
      {x: '2011 M1', y: 3},
      {x: '2011 M2', y: 23},
      {x: '2011 M3', y: 11},
      {x: '2011 M4', y: 35},
      {x: '2011 M6', y: 18}
    ]
  ];
  new Mix.Graph({
    element: 'barchart12',
    charts: ['bar'],
    data: {
      data: data12
    },
    axis: {
      grid: {
        latitude: 9
      }
    }
  });

  var data13 = [
    [
      {x: '2011 M1', y: [12, 10, 3]},
      {x: '2011 M2', y: [32, 14, 23]},
      {x: '2011 M3', y: [28, 33, 11]},
      {x: '2011 M4', y: [15, 28, 35]},
      {x: '2011 M5', y: [25, 38, 18]},
      {x: '2011 M6', y: [6]}
    ]
  ];
  new Mix.Graph({
    element: 'barchart13',
    charts: ['bar'],
    data: {
      data: data13
    },
    axis: {
      grid: {
        latitude: 9
      }
    }
  });

  var data14 = [
    [
      {x: '2011 M1', y: [12, 10, 3]},
      {x: '2011 M2', y: [32, 14, 23]},
      {x: '2011 M3', y: [28, 33, 11]},
      {x: '2011 M4', y: [15, 28, 35]},
      {x: '2011 M5', y: [25, 38, 18]},
      {x: '2011 M6', y: [6]}
    ], [
      {x: '2011 M1', y: [34, 27, 33]},
      {x: '2011 M2', y: [22, 14, 13]},
      {x: '2011 M3', y: [18, 23, 9]},
      {x: '2011 M4', y: [25, 18, 25]},
      {x: '2011 M5', y: [16, 7, 28]},
      {x: '2011 M6', y: [9, 18, 26]}
    ], [
      {x: '2011 M1', y: [14 ,12, 8]},
      {x: '2011 M2', y: [28, 7, 12]},
      {x: '2011 M3', y: [8, 26, 18]},
      {x: '2011 M4', y: [28 ,13]},
      {x: '2011 M5', y: [28, 17, 33]},
      {x: '2011 M6', y: [8, 17, 29]}
    ]
  ];
  new Mix.Graph({
    element: 'barchart14',
    charts: ['bar'],
    data: {
      data: data14
    },
    axis: {
      grid: {
        latitude: 9
      }
    }
  });

  new Mix.Graph({
    element: 'barchart31',
    charts: ['bar'],
    horizontal: true,
    gutter: 10,
    gap: 0,
    data: {
      data: data11
    },
    axis: {
      grid: {
        longitude: 9
      },
      label: {
        yWidth: 40 // 纵轴上label的宽度
      }
    }
  });
  new Mix.Graph({
    element: 'barchart32',
    charts: ['bar'],
    horizontal: true,
    gutter: 10,
    gap: 0,
    data: {
      data: data12
    },
    axis: {
      grid: {
        longitude: 9
      },
      label: {
        yWidth: 40 // 纵轴上label的宽度
      }
    }
  });
  new Mix.Graph({
    element: 'barchart33',
    charts: ['bar'],
    horizontal: true,
    gutter: 10,
    gap: 0,
    data: {
      data: data13
    },
    axis: {
      grid: {
        longitude: 9
      },
      label: {
        yWidth: 40 // 纵轴上label的宽度
      }
    }
  });
  new Mix.Graph({
    element: 'barchart34',
    charts: ['bar'],
    horizontal: true,
    gutter: 10,
    gap: 0,
    data: {
      data: data14
    },
    axis: {
      grid: {
        longitude: 9
      },
      label: {
        yWidth: 40 // 纵轴上label的宽度
      }
    }
  });

  var data01 = [
    [
      {x: '2011 M1', y: 12},
      {x: '2011 M2', y: 32},
      {x: '2011 M3', y: 28},
      {x: '2011 M4', y: 15},
      {x: '2011 M5', y: 25},
      {x: '2011 M6', y: 6}
    ]
  ];

  new Mix.Graph({
    element: 'barchart01',
    charts: ['line', 'bar'],
    data: {
      data: data01
    },
    axis: {
      grid: {
        latitude: 9
      }
    }
  });


  var data02 = [
    [
      {x: '2011 M1', y: 12},
      {x: '2011 M2', y: 32},
      {x: '2011 M3', y: 28},
      {x: '2011 M4', y: 15},
      {x: '2011 M5', y: 25},
      {x: '2011 M6', y: 6}
    ], [
      {x: '2011 M1', y: 10},
      {x: '2011 M2', y: 14},
      {x: '2011 M3', y: 33},
      {x: '2011 M4', y: 28},
      {x: '2011 M6', y: 38}
    ], [
      {x: '2011 M1', y: 3},
      {x: '2011 M2', y: 23},
      {x: '2011 M3', y: 11},
      {x: '2011 M4', y: 35},
      {x: '2011 M6', y: 18}
    ]
  ];

  new Mix.Graph({
    element: 'barchart02',
    charts: ['line', 'bar'],
    data: {
      data: data02
    },
    axis: {
       grid: {
        latitude: 9
      }
    }
  });

  var data21 = [
    [
      {x: '2011 M1', y: 12},
      {x: '2011 M2', y: 32},
      {x: '2011 M3', y: 28},
      {x: '2011 M4', y: 15},
      {x: '2011 M5', y: 25},
      {x: '2011 M6', y: 6}
    ]
  ];

  new Mix.Graph({
    element: 'barchart21',
    charts: ['line'],
    data: {
      data: data21
    },
    axis: {
      grid: {
        latitude: 9
      }
    }
  });


  var data22 = [
    [
      {x: '2011 M1', y: 12},
      {x: '2011 M2', y: 32},
      {x: '2011 M3', y: 28},
      {x: '2011 M4', y: 15},
      {x: '2011 M5', y: 25},
      {x: '2011 M6', y: 6}
    ], [
      {x: '2011 M1', y: 10},
      {x: '2011 M2', y: 14},
      {x: '2011 M3', y: 33},
      {x: '2011 M4', y: 28},
      {x: '2011 M6', y: 38}
    ], [
      {x: '2011 M1', y: 3},
      {x: '2011 M2', y: 23},
      {x: '2011 M3', y: 11},
      {x: '2011 M4', y: 35},
      {x: '2011 M6', y: 18}
    ]
  ];

  new Mix.Graph({
    element: 'barchart22',
    charts: ['line'],
    tip: function(el, data) {console.log(data)
      el.css({
        width: '100px',
        height: '50px',
        background: '#ccc'
      }).text(data['y']);
    },
    data: {
      data: data22
    },
    axis: {
      grid: {
        latitude: 9
      }
    }
  });

  var data23 = [
    [
      {x: '2011 M1', y: 12},
      {x: '2011 M2', y: 32},
      {x: '2011 M3', y: 28},
      {x: '2011 M4', y: 15},
      {x: '2011 M5', y: 25},
      {x: '2011 M6', y: 6},
      {x: '2011 M7', y: 10},
      {x: '2011 M8', y: 14},
      {x: '2011 M9', y: 33},
      {x: '2011 M10', y: 28},
      {x: '2011 M11', y: 38},
      {x: '2011 M12', y: 3},
      {x: '2011 M13', y: 23},
      {x: '2011 M14', y: 11},
      {x: '2011 M15', y: 35},
      {x: '2011 M16', y: 18}
    ]
  ];
  var data2333 = data23[0].slice(0,6);

  var start = 0;
  new Mix.Graph({
    element: 'barchart23',
    charts: ['line'],
    data: {
      data: data2333,
      callback: function(graph, scale, offset) {
        var data, i, len;
        if (offset > 0) {
          start += scale;
          data = [];
          for (i = 0, len = data23.length; i < len; i++) {
            if (start + 5 > data23[i].length) {
              start = data23[i].length - 5;
              data.push(data23[i].slice(start));
            }
            else {
              data.push(data23[i].slice(start, start + 5));
            }
          }
        }
        else {
          start -= scale;
          start = start >= 0 ? start : 0;
          data = [];
          for (i = 0, len = data23.length; i < len; i++) {
            data.push(data23[i].slice(start, start + 5));
          }
        }
        graph.update(data);
      }
    },
    axis: {
      grid: {
        latitude: 9,
        longitude: 15
      },
      slider: {
        use: true
      }
    }
  });

  var time = Date.now();
  $.get('testdata.php', {
    timeinterval: 300000,
    dataSize: 6,
    'point_time': time
  }, function(res) {
    new Mix.Graph({
      element: 'barchart24',
      charts: ['line', 'bar'],
      data: {
        data: $.parseJSON(res),
        callback: function(graph, scale, offset) {
          $.get('testdata.php', {
            timeinterval: 300000,
            dataSize: 6,
            'point_time': time + scale * 3000000
          }, function(res) {
            graph.update($.parseJSON(res));
          });
        },
      },
      axis: {
        grid: {
          latitude: 9
        },
        slider: {
          use: true
        },
        label: {
          xLabelFormat: function(time) {
            var d = new Date(time),
                // y = d.getFullYear(),
                // months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'],
                // m = d.getMonth(),
                // day = d.getDate(),
                hour = d.getHours(),
                minute = d.getMinutes();

            return hour +'h '+ minute +'m';
          }
        }
      }
    });
  });


  var data25 = [[
    {x: 12, y: 8},
    {x: 13, y: 24},
    {x: 14, y: 18},
    {x: 15, y: 21},
    {x: 16, y: 38},
    {x: 17, y: 29},
    {x: 18, y: 37},
    {x: 19, y: 49},
    {x: 20, y: 37},
    {x: 21, y: 12},
    {x: 22, y: 58},
    {x: 23, y: 96},
    {x: 24, y: 45},
    {x: 25, y: 7},
    {x: 26, y: 45},
    {x: 27, y: 26},
    {x: 28, y: 28},
    {x: 29, y: 5},
    {x: 30, y: 96},
    {x: 1, y: 67},
    {x: 2, y: 36},
    {x: 3, y: 49},
    {x: 4, y: 58},
    {x: 5, y: 25},
    {x: 6, y: 15},
    {x: 7, y: 37},
    {x: 8, y: 69},
    {x: 9, y: 85},
    {x: 10, y: 48},
    {x: 11, y: 68},
    {x: 12, y: 25},
    {x: 13, y: 36},
    {x: 14, y: 37},
    {x: 15, y: 29},
    {x: 16, y: 27},
    {x: 17, y: 16},
    {x: 18, y: 37},
    {x: 19, y: 29},
    {x: 20, y: 67},
    {x: 21, y: 19},
    {x: 22, y: 94},
    {x: 23, y: 58},
    {x: 24, y: 67},
    {x: 25, y: 59},
    {x: 26, y: 57},
    {x: 27, y: 19},
    {x: 28, y: 18},
    {x: 29, y: 37},
    {x: 30, y: 67},
    {x: 1, y: 49},
    {x: 2, y: 37},
    {x: 3, y: 67},
    {x: 4, y: 19},
    {x: 5, y: 67},
    {x: 6, y: 49},
    {x: 7, y: 38},
    {x: 8, y: 27},
    {x: 9, y: 24}]
  ];
  var seg = [
    12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30,
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
    22, 23, 24, 25, 26, 27, 28, 29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9
  ];
  var data26 = data25[0].slice(23, 29);
  new Mix.Graph({
    element: 'barchart25',
    charts: ['line'],
    data: {
      data: [],
    },
    axis: {
      grid: {
        latitude: 9
      },
      segment: {
        use: true,
        data: seg,
        trackLimit: [19, 39],
        limit: [23, 28],
        callback: function(graph, limit) {
          var data = data25[0].slice(limit[0], limit[1]);
          graph.update(data);
        },
        labelFormat: function(text) {
          return text;
        }
      }
    }
  });

  var data27 = [
      {x: '2011 M1', y: 12},
      {x: '2011 M2', y: 32},
      {x: '2011 M3', y: 28},
      {x: '2011 M5', y: 25},
      {x: '2011 M6', y: 6}
    ];

  new Mix.Pie({
    element: 'barchart26',
    data: data27,
    padding: 20,
    xkey: 'x',
    ykey: 'y',
    title: '这是一个饼图',
    titleFont: {
      'font-size': 25,
      'stroke': '#fff',
      'fill': '#fff'
    },
    stepColors: ['#009999', '#057887', '#0a6779', '#115366', '#115366'],
    strokeWidth: 50,
    titleFn: function(el, data) {
      var title = data['x'], val = data['y'], per = data.per;

      var html = '<div><span style="display: block; font-size: 20px; padding-top: 30px; color: #f60">'+ title +'</span><span style="display: block; color: #0cf; font-size: 50px;">'+ per +'%</span></div>';
      el.html(html);
    }
  });

});
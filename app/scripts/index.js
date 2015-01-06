/**
 * 
 * @authors Wangfei (wangfei.f2e@gmail.com; QQ: 941721234)
 * @date    2014-02-26 14:22:04
 * @version $Id$
 */

(function() {
    'use strict';

    function CreateChart(id, data) {
        this.id = id;
        this.data = data;
        this.el = $('#'+ id);
        console.log(this.el)
        this.el.append('<div class="data-title"></div><canvas></canvas>');

        this.init();
    }

    CreateChart.prototype = {
        constructor: CreateChart,

        init: function() {
            var me = this, canvas;

            canvas = me.el.find('canvas');
            me.context = canvas[0].getContext('2d');

            me.cw = me.el.width() - 20;
            me.ch = me.el.height();

            me.el.css('position', 'relative');
            canvas.attr('width', me.cw).attr('height', me.ch);

            me.labelWidth = 30;
            me.leftX = me.labelWidth;
            me.rightX = me.cw;
            me.topY = 10;
            me.botY = me.ch - me.labelWidth;
            me.yLabels = 6;
            me.xLabels = 11;


            me.context.lineWidth = 1;
            me.context.strokeStyle = '#b5b5b5';
            me.context.moveTo(me.leftX, me.topY);
            me.context.lineTo(me.leftX, me.botY);
            me.context.lineTo(me.rightX, me.botY);
            me.context.stroke();

            me.calculateGrid();
            me.drawlabels(me.context);
            me.drawDashLine(me.context);
            me.drawData(me.context, me.data, me.leftX, me.rightX, me.botY, me.topY, me.gutters);
        },

        calculateGrid: function() {
            var me = this,
                yRemainder = (me.ch - me.labelWidth) %  me.yLabels,
                yGutter = (me.ch - me.labelWidth - yRemainder) / me.yLabels,
                xRemainder = (me.cw - me.labelWidth) % me.xLabels,
                xGutter = (me.cw - me.labelWidth - xRemainder) / me.xLabels;
            
            me.gutters =  {
                x: xGutter,
                y: yGutter
            };
        },

        dashedLine: function(c, satart, end, y) {
            var tie = 4,
                gutter = 3;
            c.strokeStyle = '#d8d8d8';
            c.beginPath();
            c.moveTo(end, y);
            while(end > satart) {
                end -= tie;
                c.lineTo(end, y);
                end -= gutter;
                c.moveTo(end, y);
            }
            c.stroke();
        },

        drawDashLine: function(c) {
            var i = 1,
                me = this;
      
            for(; i < me.yLabels; i++) {
                me.dashedLine(c, me.leftX, me.rightX, (me.botY - me.gutters.y * i + 1));
            }
        },

        drawlabels: function(c) {
            var me = this,
                yLabelArray = [0, 20, 40, 60, 80, 100],
                xLabelArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
                label, labelX, labelY,
                i = 0, len;
            c.font = '12px serif';
            c.fillStyle = '#60636a';
            c.textAlign = 'end';

            for (len = yLabelArray.length; i < len; i++) {
                label = i === 0 ? 0 :  yLabelArray[i] + '%';
                labelX = me.leftX - 6;
                labelY = me.botY - me.gutters.y * i + 8;
                c.fillText(label, labelX, labelY);
            }

            for (i = 0, len = xLabelArray.length; i < len; i++ ) {
                label = xLabelArray[i] + '周';
                labelX = me.leftX + me.gutters.x * i + 10;
                labelY = me.botY + 20;
                c.fillText(label, labelX, labelY);
            }
        },

        drawData: function(c, data, leftX, rightX, botY, topY, gutters) {
            var me = this,
                i, j, len,
                x, y,
                largestData, allData = [];
            
            c.lineWidth = 2;
            //绘制折线
            for (i = data.length - 1; i >= 0; i--) {
                len = data[i].data.length - 1;
                x = leftX + gutters.x * len;
                y = botY -  (botY - topY) * data[i].data[len];

                me.el.find('.data-title').append('<span><span style="background:'+ data[i].stroke +'"></span>'+ data[i].title +'</span>');

                c.strokeStyle = data[i].stroke;
                c.fillStyle = data[i].fill;
                c.beginPath();
                c.moveTo(x, y);
                c.fill();
                for (j = len - 1; j >= 0; j--) {
                    x = leftX + gutters.x * j;
                    y = botY -  (botY - topY) * data[i].data[j];
                    c.lineTo(x, y);
                }
                c.stroke();
            }
            //绘制大面积填充
            // for (i = data.length - 1; i >= 0; i--) {
            //     len = data[i].data.length - 1;
            //     x = leftX + gutters.x * len;
            //     y = botY -  (botY - topY) * data[i].data[len];

            //     c.fillStyle = data[i].fill;
            //     c.beginPath();
            //     c.moveTo(leftX, botY);
            //     c.lineTo(x, botY);
            //     c.lineTo(x, y);
            //     for (j = len - 1; j >= 0; j--) {
            //         x = leftX + gutters.x * j;
            //         y = botY -  (botY - topY) * data[i].data[j];
            //         c.lineTo(x, y);
            //     }
            //     c.closePath();
            //     c.fill();
            // }
            //绘制圆点
            for (i = data.length - 1; i >= 0; i--) {
                len = data[i].data.length - 1;
                x = leftX + gutters.x * len;
                y = botY -  (botY - topY) * data[i].data[len];

                // c.strokeStyle = data[i].stroke;
                c.fillStyle = '#fff';

                c.beginPath();
                // c.moveTo(x, y);
                // c.arc(x, y, 4, 0, Math.PI*2, false);
                // c.fill();
                for (j = len - 1; j > 0; j--) {
                    x = leftX + gutters.x * j;
                    y = botY -  (botY - topY) * data[i].data[j];
                    c.moveTo(x, y);
                    c.arc(x, y, 6, 0, Math.PI*2, false);
                }
                // c.stroke();
                c.fill();
            }
            //绘制圆点
            for (i = data.length - 1; i >= 0; i--) {
                len = data[i].data.length - 1;
                x = leftX + gutters.x * len;
                y = botY -  (botY - topY) * data[i].data[len];

                // context.strokeStyle = data[i].stroke;
                c.fillStyle = data[i].stroke;

                c.beginPath();
                // c.moveTo(x, y);
                // c.arc(x, y, 4, 0, Math.PI*2, false);
                // c.fill();
                for (j = len - 1; j > 0; j--) {
                    x = leftX + gutters.x * j;
                    y = botY -  (botY - topY) * data[i].data[j];
                    c.moveTo(x, y);
                    c.arc(x, y, 4, 0, Math.PI*2, false);
                }
                // c.stroke();
                c.fill();
            }

            for (i = data.length - 1; i >= 0; i--) {
                allData = allData.concat(data[i].data);
            }

            largestData = Math.max.apply(Math, allData);
            for (i = data.length - 1; i >= 0; i--) {
                var index = data[i].data.indexOf(largestData);
                if (index !== -1) {
                    x = leftX + gutters.x * index;
                    y = botY -  (botY - topY) * largestData;

                    c.fillStyle = data[i].stroke;
                    c.beginPath();
                    c.moveTo(x, y);
                    c.arc(x, y, 7, 0, Math.PI*2, false);
                    c.closePath();
                    c.fill();

                    c.fillStyle = '#e1eaef';
                    c.beginPath();
                    c.moveTo(x, y+7);
                    c.lineTo(x+3, y+12);
                    c.lineTo(x+35, y+12);
                    c.lineTo(x+35, y+42);
                    c.lineTo(x-35, y+42);
                    c.lineTo(x-35, y+12);
                    c.lineTo(x-3, y+12);
                    c.lineTo(x, y+7);
                    c.fill();

                    c.fillStyle = '#32425a';
                    c.textAlign = 'center';
                    c.textBaseLine = 'middle';
                    c.font = '22px serif';
                    c.fillText(largestData * 100 + '%', x, y+34);

                }
            }
        }
    };

    window.CreateChart = CreateChart;
})();
/**
 * Created by Administrator on 2017/3/22.
 */
var http = require('http');
var cheerio = require('cheerio');
var url = 'http://www.imooc.com/learn/348';
function filterChapters(html) {
    var $ = cheerio.load(html);
    var chapters = $('.chapter');
    /*[{
     chapterTitle:'',
     videos:[
     title:'',
     id:''
     ]
     }]*/
    var courseData = [], chapterData = {},chapter, videos;
    chapters.each(function (item) {
        chapter = $(this);
        videos = chapter.find('.video').children('li');
        chapterData.chapterTitle = chapter.find('strong').text();
        chapterData.videos = [];
        videos.each(function (item) {
            var video = $(this).find('.J-media-item');
            chapterData.videos.push({
                title: video.text(),
                id: video.attr('href').split('video/')[1]
            })
        });
        courseData.push(chapterData)
    });
    return courseData
}
function printCourseInfo(courseData) {
    var titleStr ='',videoStr='';
    courseData.forEach(function (item) {
        var chapterTitle = item.chapterTitle;
        titleStr += chapterTitle + '\n';
        item.videos.forEach(function (video) {
            videoStr += '['+video.id+']'+ video.title+'\n'
        });
        console.log(videoStr)
    });
    console.log(titleStr)
}
http.get(url, function (res) {
    var html = '';
    res.on('data', function (data) {
        html += data;
    });
    res.on('end', function () {
        var courseData = filterChapters(html);
        printCourseInfo(courseData)
    })
}).on('error', function () {
    console.log('获取文件出错')
});
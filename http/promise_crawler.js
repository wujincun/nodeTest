/**
 * Created by Administrator on 2017/3/23.
 */
var http = require('http');
var Promise = require('promise');
var cheerio = require('cheerio');
var baseUrl = "http://www.imooc.com/learn/";
var url = 'http://www.imooc.com/learn/348';
var videoIds = [348,197, 637, 782, 75];
function filterChapters(html) {
    var $ = cheerio.load(html);
    var chapters = $('.chapter');
    var title = $('.hd').find('h2').text();
    var number = Number($('.js-learn-num').text().trim());

    /*
     courseData={
     title:title,
     number:number,
     videos:[{
     chapterTitle:'',
     videos:[
     title:'',
     id:''
     ]
     }]
     }*/

    var courseData = {
        title: title,
        number: number,
        videos:[]
    };
    var chapterData = {}, chapter, videos;
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
        courseData.videos.push(chapterData);
    });
    return courseData
}
function printCourseInfo(coursesData) {
    coursesData.forEach(function (courseData) {
        console.log(courseData.number + '人学过' + courseData.title + '\n')
    });
    var titleStr = '', videoStr = '';
    coursesData.forEach(function (courseData) {
        console.log('###' + courseData.title + '\n');
        courseData.videos.forEach(function (item) {
            var chapterTitle = item.chapterTitle;
            titleStr += chapterTitle + '\n';
            item.videos.forEach(function (video) {
                videoStr += '[' + video.id + ']' + video.title + '\n'
            });
            console.log(videoStr)
        })
    });
    console.log(titleStr)
}
function getPageAsync(url) {
    return new Promise(function (resolve, reject) {
        console.log('正在爬取' + url);
        http.get(url, function (res) {
            var html = '';
            res.on('data', function (data) {
                html += data;
            });
            res.on('end', function () {
                resolve(html);
            })
        }).on('error', function (e) {
            reject(e);
            console.log('获取文件出错')
        });
    })
}
var fetchCourseArray = [];
videoIds.forEach(function (id) {
    fetchCourseArray.push(getPageAsync(baseUrl + id));
});
Promise
    .all(fetchCourseArray)
    .then(function (pages) {
        var coursesData = [], courses;
        pages.forEach(function (html) {
            courses = filterChapters(html);
            coursesData.push(courses);
        });
        coursesData.sort(function (a, b) {
            return a.number < b.number
        });
        printCourseInfo(coursesData)
    });

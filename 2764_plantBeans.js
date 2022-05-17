/*
京东到家鲜豆庄园脚本,支持qx,loon,shadowrocket,surge,nodejs
兼容京东jdCookie.js
手机设备在boxjs里填写cookie
boxjs订阅地址:https://gitee.com/passerby-b/javascript/raw/master/JD/passerby-b.boxjs.json
TG群:https://t.me/passerbyb2021

[task_local]
10 0 * * * https://raw.githubusercontent.com/ahhflyf/jsbox_script/master/jddj_plantBeans.js

[Script]
cron "10 0 * * *" script-path=https://raw.githubusercontent.com/passerby-b/JDDJ/main/jddj_plantBeans.js,tag=京东到家鲜豆庄园

*/

const $ = new API("jddj_plantBeans");
let ckPath = './jdCookie.js';//ck路径,环境变量:JDDJ_CKPATH
let cookies = ['cart_uuid=a661152d-5d92-4f2c-9334-f5f0b10053a4; o2o_m_h5_sid=354bb018-2ddc-494f-947d-1de44789cefb; deviceid_pdj_jd=a661152d-5d92-4f2c-9334-f5f0b10053a4'];
let thisbody = 'djencrypt=qiLA1RMHO3q9mYI4QGMLt0KAml3srWD2T9WNzALpzU7%2F8ZK6%2BcTumitdSXx3muegB%2Fr75Y%2BG3%2FONzPRDlx22ZhDiSos%2BZ%2F%2FSPbHaY%2BAuBs%2FkX8evNpI4cTKzWrA5M%2BM0EbKn3RMKcFDWa1tqD3YD72aLR84vhy37A5r22tOX0IZVCuNWhCRXTSS0MCRlSx5PnA2MEFI74AagePcEg8UX%2FIhlFKNYB9dac6fRntN4JP%2F6f%2FN8lE2nYHBNpOjdLopT5aKSaAVi7JOaVFvEykpwLfHVRz5FI086nf%2BQ7BQw8ub2%2B%2F6AZXZamUrkA91CnooI1nhcF2FQJDsLmyNJus2SUPhzO8UIVIsJ6%2BTv2evBatpqH8HjOW%2BJ4XTk5FHoAPK1ekWyNK2ZdnBfCTV5YVVPffrXJeQeL2PUdeeLQu5rGMh%2Bt0hIR3OOfETGiGQjgOWgF4N5ijQKsylqunipUfvkVabrbtwrxvKHXE8%2FDv9ouv%2Buxa2KScG7jncFP02mtrBltY7v54oPQdqjQFVSj8VTB5JzzvW30EzaDnD6GaGPCAw5F06s70%2B4SxwQpPu90U1reK4fNOc1gjcgC745JQeHr2e5X9jXAIJ2LT01kigDWT%2BY1r744dpXHID2B6VoNncOMJd6avg9e9cEbAJVakTv5xOJxyaDWg7d0HiZfPZCnpOZ16H64ypa3F8y32BQgr%2BrC%2FhNIwe7oaeNAMyPQGkjoCdMIFSwiatp5iKD9xfWG740xEyyMKpdIKbiQJT%2FbnPMj5iBHf4lk9TgPT35tnoJ35VhoWkcEn4ZztJQNIF8DWo%3D';
let thistl='djencrypt=qiLA1RMHO3q9mYI4QGMLt0KAml3srWD2T9WNzALpzU7%2F8ZK6%2BcTumitdSXx3muegB%2Fr75Y%2BG3%2FONzPRDlx22ZhDiSos%2BZ%2F%2FSPbHaY%2BAuBs%2FkX8evNpI4cTKzWrA5M%2BM0EbKn3RMKcFDWa1tqD3YD72aLR84vhy37A5r22tOX0IZVCuNWhCRXTSS0MCRlSx5PnA2MEFI74AagePcEg8UX%2FIhlFKNYB9dac6fRntN4JP%2F6f%2FN8lE2nYHBNpOjdLopT5aKSaAVi7JOaVFvEykpwLfHVRz5FI086nf%2BQ7BQw8ub2%2B%2F6AZXZamUrkA91CnooI1nhcF2FQJDsLmyNJus2SUPhzO8UIVIsJ6%2BTv2evBatpqH8HjOW%2BJ4XTk5FHoAPK1ekWyNK2ZdnBfCTV5YVVPffrXJeQeL2PUdeeLQu5rGMh%2Bt0hIR3OOfETGiGQjgOWgF4N5ijQKsylqunipUfvkVabrbtwrxvKHXE8%2FDv9ouv%2BiJLGy8WhReKHc0TyFfdNerO%2FvLZxuBnb4zaG2VZZxBEvXhoawB2OnbCQ1%2FvCQ8b3CKgrAlUlZkMHFFmX%2FsVG6v6xGNPMNlDTyhCEHX4jbLUjiMhESjao7Mxa3IWuah%2F2gorRrbW4pcmYxZCWp51fpNiZ6%2BRshqjV462lGFGQCk%2BRo50M9WzSbUQWZNGwtAj%2FHar9Tp%2B8TRnyHzVqh%2F7%2BJloqS3xKaps58l1D4KzHGN8VhpNb45M5U77Hd1mS6NX6otVSbex9UT0nl4vtt0ky%2F'
let thisgua='djencrypt=Fpf3DH4RtGxjmylKZVIpHW4CkNAd6ZE4Kseac%2FJmT2QTWgtm8H3fbRYNUNaPqhqVkJpYWQjul%2FgrmW1cDlktx1XFEZTgO4yNgdG7aAcsM3g3kO6Dt2UFk57zH4Ub8e87U6TXPwd87YV6Lkyg4oX%2BCTZsnaA5d%2BcJvm%2BHLS6sQs0JCsAMq2f91R%2FtwBf5p47RV7VfFNQ%2B0IuFyln0y3ATwzYknbjd8kNsktsrKj4T2PERBvKMIzMeAOrMZmh2PzTL5Wrzby3L4DhxM%2FNxbrYCa9JbjpiofJjy65EDG%2F5RHwYWn8T5YC6WjRezNOdj7%2Bmb2MHxJAShOcXMgLnuR7Vi5urq%2BjL5EgipUo8%2BAmtQrU%2BEETylzOixBgvhFRPLCes%2FTNfPDGWyvC%2B64gRgJzsy4YtvSwxoWCh55eQPmEoKvxI9UTbk7N0%2FYohY7zydFAJT8tb6ZEbA3ODfb2flgPlOfYA0qZyXg76JlkVWlvODBcTrLyperKsgSFDzmvOUQ9EsJg5ieVSmtfp99pXka0ZGUKfzdQ2HSpZxjgYPM15GEs0lgSJTpEP4BsIoSoGGZE6qW4JoJdENR%2F%2FRr4n9UDYktl53%2FHJPwwUecwinlBBLStFs6kiZLKYJkNqG69WgMv%2BQhPSOzEwewq41Z1pTg9O77HdTRG4Gr6ILF49O0rU7M0%2Bf9bQtTXJcMfjGwpf9Q4gHi4%2FRuRzr%2BfqYt19n0QCjhRL%2FQVp%2FSSCkbmbyZYH9FwG%2F69sPxPRZRGyGs17I8FRhVsy%2FL4PbCCDhZTzt8fEo3z4TgULiD2xoy7Hl5ixYkwOCO0FG8lYDiwVWcbuh3PUaQA12%2FzdkbhUBKNDWm5HuiA%3D%3D'
let thiscookie = '', deviceid = '';
let lat = '30.' + Math.round(Math.random() * (99999 - 10000) + 10000);
let lng = '114.' + Math.round(Math.random() * (99999 - 10000) + 10000);
let cityid = Math.round(Math.random() * (1500 - 1000) + 1000);
!(async () => {
    if (cookies.length == 0) {
        if ($.env.isNode) {
            if (process.env.JDDJ_CKPATH) ckPath = process.env.JDDJ_CKPATH;
            let jdcookies = require(ckPath);
            for (let key in jdcookies) if (!!jdcookies[key]) cookies.push(jdcookies[key]);
        }
        else {
            let ckstr = $.read('#jddj_cookies');
            if (!!ckstr) {
                if (ckstr.indexOf(',') < 0) {
                    cookies.push(ckstr);
                } else {
                    cookies = ckstr.split(',');
                }
            }
        }
    }
    if (cookies.length == 0) {
        console.log(`\r\n请先填写cookie`);
        return;
    }

    for (let i = 0; i < cookies.length; i++) {
        console.log(`\r\n★★★★★开始执行第${i + 1}个账号,共${cookies.length}个账号★★★★★`);
        thiscookie = cookies[i];
        if (!thiscookie) continue;

        thiscookie = await taskLoginUrl(thiscookie);

        await userinfo();
        await $.wait(1000);

        let tslist = await taskList();
        if (tslist.code == 1) {
            $.notify('第' + (i + 1) + '个账号cookie过期', '请访问\nhttps://bean.m.jd.com/bean/signIndex.action\n抓取cookie', { url: 'https://bean.m.jd.com/bean/signIndex.action' });
            continue;
        }

        await sign();
        await $.wait(1000);

        //await beansLottery();
        //await $.wait(1000);

        //await getPoints();
        //await $.wait(1000);

        await runTask(tslist);
        await $.wait(1000);

        await watering();
        await $.wait(1000);

    }

})().catch((e) => {
    console.log('', `❌失败! 原因: ${e}!`, '');
}).finally(() => {
    $.done();
})

//个人信息
async function userinfo() {
    return new Promise(async resolve => {
        try {
            let option = urlTask('https://daojia.jd.com/client?functionId=mine/getUserAccountInfo&' + thisgua)

            $.http.get(option).then(response => {
                let data = JSON.parse(response.body);
                if (data.code == 0) {
                    nickname = data.result.userInfo.userBaseInfo.nickName;
                    console.log("●●●" + nickname + "●●●");
                }
            })
            resolve();

        } catch (error) {
            console.log('\n【个人信息】:' + error);
            resolve();
        }
    })
}

//任务列表
async function taskList() {
    return new Promise(async resolve => {
        try {
            let option = urlTask('https://daojia.jd.com/client?functionId=task/list&' + thistl);

            $.http.get(option).then(response => {
                var data = JSON.parse(response.body);
                //console.log(response.body);
                resolve(data);
            })

        } catch (error) {
            console.log('\n【任务列表】:' + error);
            resolve({});
        }
    })
}

//庄园签到
async function sign() {
    return new Promise(async resolve => {
        try {
            let option = urlTask('https://daojia.jd.com/client?_jdrandom=' + Math.round(new Date()) + '&functionId=signin%2FuserSigninNew&isNeedDealError=true&body=%7B%22channel%22%3A%22qiandao_indexball%22%2C%22cityId%22%3A' + cityid + '%2C%22longitude%22%3A' + lng + '%2C%22latitude%22%3A' + lat + '%2C%22ifCic%22%3A0%7D&lat=' + lat + '&lng=' + lng + '&lat_pos=' + lat + '&lng_pos=' + lng + '&city_id=' + cityid + '&channel=ios&platform=6.6.0&platCode=h5&appVersion=6.6.0&appName=paidaojia&deviceModel=appmodel&traceId=' + deviceid + Math.round(new Date()) + '&deviceToken=' + deviceid + '&deviceId=' + deviceid + '', ``);
            $.http.get(option).then(response => {
                let data = JSON.parse(response.body);
                console.log('\n【庄园签到】:' + data.msg);
                resolve();
            })

        } catch (error) {
            console.log('\n【庄园签到】:' + error);
            resolve();
        }
    })
}

//浇水
async function watering() {
    return new Promise(async resolve => {
        try {
            let option = urlTask('https://daojia.jd.com/client?functionId=plantBeans/watering');

            let waterStatus = 1, waterCount = 0;
            do {
                waterCount++;
                console.log(`\n**********开始执行第${waterCount}次浇水**********`);

                await $.http.post(option).then(async response => {
                    let data = JSON.parse(response.body);
                    console.log('\n【浇水】:' + data.msg);
                    waterStatus = data.code;
                })
                await $.wait(1000);
            } while (waterStatus == 0);
            resolve();

        } catch (error) {
            console.log('\n【浇水】:' + error);
            resolve();
        }

    })
}

//一轮结束领鲜豆并参加下一轮
async function getPoints() {
    return new Promise(async resolve => {
        try {
            let option = urlTask('https://daojia.jd.com/client?_jdrandom=' + Math.round(new Date()) + '&_funid_=plantBeans/getActivityInfo', 'functionId=plantBeans%2FgetActivityInfo&isNeedDealError=true&method=POST&body=%7B%7D&lat=' + lat + '&lng=' + lat + '&lat_pos=' + lat + '&lng_pos=' + lat + '&city_id=' + cityid + '&channel=ios&platform=6.6.0&platCode=h5&appVersion=6.6.0&appName=paidaojia&deviceModel=appmodel&traceId=' + deviceid + Math.round(new Date()) + '&deviceToken=' + deviceid + '&deviceId=' + deviceid);

            let perid = '', nextid = ''; activityDay = '', pre_buttonId = 0;
            await $.http.post(option).then(response => {
                //console.log(response.body);
                let data = JSON.parse(response.body);
                perid = data.result.pre.activityId;
                if (data.result.next) nextid = data.result.next.activityId;
                activityDay = data.result.cur.activityDay;
                pre_buttonId = data.result.pre.buttonId;
            })

            await $.wait(1000);

            //var date = new Date();
            //activityDay = activityDay.split('-')[1].split('.')[1];
            if (pre_buttonId == 1) {
                option = urlTask('https://daojia.jd.com/client?_jdrandom=' + Math.round(new Date()), 'functionId=plantBeans%2FgetPoints&isNeedDealError=true&method=POST&body=%7B%22activityId%22%3A%22' + perid + '%22%7D&lat=' + lat + '&lng=' + lng + '&lat_pos=' + lat + '&lng_pos=' + lng + '&city_id=' + cityid + '&channel=ios&platform=6.6.0&platCode=h5&appVersion=6.6.0&appName=paidaojia&deviceModel=appmodel&traceId=' + deviceid + Math.round(new Date()) + '&deviceToken=' + deviceid + '&deviceId=' + deviceid + '');

                await $.http.post(option).then(response => {
                    let data = JSON.parse(response.body);
                    console.log('\n【一轮结束领鲜豆】:' + data.msg);
                })

                await $.wait(1000);

                // option = urlTask('https://daojia.jd.com/client?_jdrandom=' + Math.round(new Date()), 'functionId=plantBeans%2FgetActivityInfo&isNeedDealError=true&method=POST&body=%7B%22activityId%22%3A%22' + nextid + '%22%7D&lat=' + lat + '&lng=' + lng + '&lat_pos=' + lat + '&lng_pos=' + lng + '&city_id=' + cityid + '&channel=ios&platform=6.6.0&platCode=h5&appVersion=6.6.0&appName=paidaojia&deviceModel=appmodel&traceId=' + deviceid + Math.round(new Date()) + '&deviceToken=' + deviceid + '&deviceId=' + deviceid + '');

                // await $.http.post(option).then(response => {
                //     let data = JSON.parse(response.body);
                //     console.log('\n【参加下一轮种鲜豆】:' + data.msg);
                // })
            }

        } catch (error) {
            console.log('\n【一轮结束领鲜豆】:' + error);
            resolve();
        } finally {
            resolve();
        }

    })

}

//发现露水
async function beansLottery() {
    return new Promise(async resolve => {
        try {
            for (let index = 0; index < 20; index++) {
                let option = urlTask('https://daojia.jd.com/client?_jdrandom=' + Math.round(new Date()) + '&_funid_=plantBeans/beansLottery', 'functionId=plantBeans%2FbeansLottery&isNeedDealError=true&method=POST&body=%7B%22activityId%22%3A%22241254dc8b9ae89%22%7D&lat=' + lat + '&lng=' + lng + '&lat_pos=' + lat + '&lng_pos=' + lng + '&city_id=' + cityid + '&channel=ios&platform=6.6.0&platCode=h5&appVersion=6.6.0&appName=paidaojia&deviceModel=appmodel&traceId=' + deviceid + '&deviceToken=' + deviceid + '&deviceId=' + deviceid);
                await $.http.post(option).then(response => {
                    let data = JSON.parse(response.body);
                    if (!!data.result.water) console.log('\n【发现露水】:' + data.result.water + 'g');
                    else console.log('\n【发现露水】:' + data.result.text.replace(/\n/g, ''));
                });
                await $.wait(1000);
            }
            resolve();

        } catch (error) {
            console.log('\n【发现露水】:' + error);
            resolve();
        }
    })
}

async function runTask(tslist) {
    return new Promise(async resolve => {
        try {
            for (let index = 0; index < tslist.result.taskInfoList.length; index++) {
                const item = tslist.result.taskInfoList[index];

                //领取任务
                let option = urlTask('https://daojia.jd.com/client?_jdrandom=' + Math.round(new Date()) + '&functionId=task%2Freceived&isNeedDealError=true&body=%7B%22modelId%22%3A%22' + item.modelId + '%22%2C%22taskId%22%3A%22' + item.taskId + '%22%2C%22taskType%22%3A' + item.taskType + '%2C%22plateCode%22%3A1%7D&channel=ios&platform=6.6.0&platCode=h5&appVersion=6.6.0&appName=paidaojia&deviceModel=appmodel&traceId=' + deviceid + Math.round(new Date()) + '&deviceToken=' + deviceid + '&deviceId=' + deviceid + '', ``);
                await $.http.get(option).then(response => {
                    var data = JSON.parse(response.body), msg = '';
                    if (data.code == 0) {
                        msg = data.msg + ',奖励:' + data.result.awardValue;
                    } else {
                        msg = data.msg;
                    }
                    console.log('\n领取任务【' + item.taskName + '】:' + msg);
                })

                if (item.browseTime > -1) {
                    for (let t = 0; t < parseInt(item.browseTime); t++) {
                        await $.wait(1000);
                        console.log('计时:' + (t + 1) + '秒...');
                    }
                }

                //结束任务
                option = urlTask('https://daojia.jd.com/client?_jdrandom=' + Math.round(new Date()) + '&functionId=task%2Ffinished&isNeedDealError=true&body=%7B%22modelId%22%3A%22' + item.modelId + '%22%2C%22taskId%22%3A%22' + item.taskId + '%22%2C%22taskType%22%3A' + item.taskType + '%2C%22plateCode%22%3A1%7D&channel=ios&platform=6.6.0&platCode=h5&appVersion=6.6.0&appName=paidaojia&deviceModel=appmodel&traceId=' + deviceid + Math.round(new Date()) + '&deviceToken=' + deviceid + '&deviceId=' + deviceid + '', ``);
                await $.http.get(option).then(response => {
                    var data = JSON.parse(response.body), msg = '';
                    if (data.code == 0) {
                        msg = data.msg + ',奖励:' + data.result.awardValue;
                    } else {
                        msg = data.msg;
                    }
                    console.log('\n任务完成【' + item.taskName + '】:' + msg);
                })

                //领取奖励
                option = urlTask('https://daojia.jd.com/client?_jdrandom=1618492672164&functionId=task%2FsendPrize&isNeedDealError=true&body=%7B%22modelId%22%3A%22' + item.modelId + '%22%2C%22taskId%22%3A%22' + item.taskId + '%22%2C%22taskType%22%3A' + item.taskType + '%2C%22plateCode%22%3A1%7D&channel=ios&platform=6.6.0&platCode=h5&appVersion=6.6.0&appName=paidaojia&deviceModel=appmodel&traceId=' + deviceid + Math.round(new Date()) + '&deviceToken=' + deviceid + '&deviceId=' + deviceid + '', ``);
                await $.http.get(option).then(response => {
                    var data = JSON.parse(response.body), msg = '';
                    if (data.code == 0) {
                        msg = data.msg + ',奖励:' + data.result.awardValue;
                    } else {
                        msg = data.msg;
                    }
                    console.log('\n领取奖励【' + item.taskName + '】:' + msg);
                })


            }
            resolve();
        } catch (error) {
            console.log('\n【执行任务】:' + error);
            resolve();
        }

    })
}

function urlTask(url, body) {
    let option = {
        url: url,
        headers: {
            'Host': 'daojia.jd.com',
            'Content-Type': 'application/x-www-form-urlencoded;',
            'Origin': 'https://daojia.jd.com',
            'Cookie': thiscookie,
            'Connection': 'keep-alive',
            'Accept': '*/*',
            'User-Agent': 'Mozilla/5.0 (iPhone; CPU iPhone OS 15_4_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 MicroMessenger/8.0.18(0x1800123f) NetType/WIFI Language/zh_CN',
            'Accept-Language': 'zh-cn'
        },
        body: thisbody
    };
    return option;
}

//根据京东ck获取到家ck
async function taskLoginUrl(thiscookie) {
    return new Promise(async resolve => {
        try {
            if (thiscookie.indexOf('deviceid_pdj_jd') > -1) {
                let arr = thiscookie.split(';');
                for (const o of arr) {
                    if (o.indexOf('deviceid_pdj_jd') > -1) {
                        deviceid = o.split('=')[1];
                    }
                }
                resolve(thiscookie);
            }
            else {
                deviceid = _uuid();
                let option = {
                    url: encodeURI('https://daojia.jd.com/client?_jdrandom=' + (+new Date()) + '&_funid_=login/treasure&functionId=login/treasure&body={}&lat=&lng=&lat_pos=&lng_pos=&city_id=&channel=h5&platform=6.6.0&platCode=h5&appVersion=6.6.0&appName=paidaojia&deviceModel=appmodel&isNeedDealError=false&traceId=' + deviceid + '&deviceToken=' + deviceid + '&deviceId=' + deviceid + '&_jdrandom=' + (+new Date()) + '&_funid_=login/treasure'),
                    headers: {
                        "Cookie": 'deviceid_pdj_jd=' + deviceid + ';' + thiscookie + ';',
                        "Host": "daojia.jd.com",
                        'Content-Type': 'application/x-www-form-urlencoded;',
                        "User-Agent": 'Mozilla/5.0 (iPhone; CPU iPhone OS 15_4_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 MicroMessenger/8.0.18(0x1800123f) NetType/WIFI Language/zh_CN'
                    }
                };
                let ckstr = '';
                await $.http.get(option).then(async response => {
                    //console.log(response);
                    let body = JSON.parse(response.body);
                    if (body.code == 0) {
                        for (const key in response.headers) {
                            if (key.toLowerCase().indexOf('cookie') > -1) {
                                ckstr = response.headers[key].toString();
                            }
                        }
                        ckstr += ';deviceid_pdj_jd=' + deviceid;
                    }
                    else {
                        console.log(body.msg);
                    }
                });
                resolve(ckstr);
            }

        } catch (error) {
            console.log(error);
            resolve('');
        }
    })
}

function _uuid() {
    function s4() {
        return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
    }
    return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
}

/*********************************** API *************************************/
function ENV() { const e = "undefined" != typeof $task, t = "undefined" != typeof $loon, s = "undefined" != typeof $httpClient && !t, i = "function" == typeof require && "undefined" != typeof $jsbox; return { isQX: e, isLoon: t, isSurge: s, isNode: "function" == typeof require && !i, isJSBox: i, isRequest: "undefined" != typeof $request, isScriptable: "undefined" != typeof importModule } } function HTTP(e = { baseURL: "" }) { const { isQX: t, isLoon: s, isSurge: i, isScriptable: n, isNode: o } = ENV(), r = /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&\/\/=]*)/; const u = {}; return ["GET", "POST", "PUT", "DELETE", "HEAD", "OPTIONS", "PATCH"].forEach(l => u[l.toLowerCase()] = (u => (function (u, l) { l = "string" == typeof l ? { url: l } : l; const h = e.baseURL; h && !r.test(l.url || "") && (l.url = h ? h + l.url : l.url); const a = (l = { ...e, ...l }).timeout, c = { onRequest: () => { }, onResponse: e => e, onTimeout: () => { }, ...l.events }; let f, d; if (c.onRequest(u, l), t) f = $task.fetch({ method: u, ...l }); else if (s || i || o) f = new Promise((e, t) => { (o ? require("request") : $httpClient)[u.toLowerCase()](l, (s, i, n) => { s ? t(s) : e({ statusCode: i.status || i.statusCode, headers: i.headers, body: n }) }) }); else if (n) { const e = new Request(l.url); e.method = u, e.headers = l.headers, e.body = l.body, f = new Promise((t, s) => { e.loadString().then(s => { t({ statusCode: e.response.statusCode, headers: e.response.headers, body: s }) }).catch(e => s(e)) }) } const p = a ? new Promise((e, t) => { d = setTimeout(() => (c.onTimeout(), t(`${u} URL: ${l.url} exceeds the timeout ${a} ms`)), a) }) : null; return (p ? Promise.race([p, f]).then(e => (clearTimeout(d), e)) : f).then(e => c.onResponse(e)) })(l, u))), u } function API(e = "untitled", t = !1) { const { isQX: s, isLoon: i, isSurge: n, isNode: o, isJSBox: r, isScriptable: u } = ENV(); return new class { constructor(e, t) { this.name = e, this.debug = t, this.http = HTTP(), this.env = ENV(), this.node = (() => { if (o) { return { fs: require("fs") } } return null })(), this.initCache(); Promise.prototype.delay = function (e) { return this.then(function (t) { return ((e, t) => new Promise(function (s) { setTimeout(s.bind(null, t), e) }))(e, t) }) } } initCache() { if (s && (this.cache = JSON.parse($prefs.valueForKey(this.name) || "{}")), (i || n) && (this.cache = JSON.parse($persistentStore.read(this.name) || "{}")), o) { let e = "root.json"; this.node.fs.existsSync(e) || this.node.fs.writeFileSync(e, JSON.stringify({}), { flag: "wx" }, e => console.log(e)), this.root = {}, e = `${this.name}.json`, this.node.fs.existsSync(e) ? this.cache = JSON.parse(this.node.fs.readFileSync(`${this.name}.json`)) : (this.node.fs.writeFileSync(e, JSON.stringify({}), { flag: "wx" }, e => console.log(e)), this.cache = {}) } } persistCache() { const e = JSON.stringify(this.cache, null, 2); s && $prefs.setValueForKey(e, this.name), (i || n) && $persistentStore.write(e, this.name), o && (this.node.fs.writeFileSync(`${this.name}.json`, e, { flag: "w" }, e => console.log(e)), this.node.fs.writeFileSync("root.json", JSON.stringify(this.root, null, 2), { flag: "w" }, e => console.log(e))) } write(e, t) { if (this.log(`SET ${t}`), -1 !== t.indexOf("#")) { if (t = t.substr(1), n || i) return $persistentStore.write(e, t); if (s) return $prefs.setValueForKey(e, t); o && (this.root[t] = e) } else this.cache[t] = e; this.persistCache() } read(e) { return this.log(`READ ${e}`), -1 === e.indexOf("#") ? this.cache[e] : (e = e.substr(1), n || i ? $persistentStore.read(e) : s ? $prefs.valueForKey(e) : o ? this.root[e] : void 0) } delete(e) { if (this.log(`DELETE ${e}`), -1 !== e.indexOf("#")) { if (e = e.substr(1), n || i) return $persistentStore.write(null, e); if (s) return $prefs.removeValueForKey(e); o && delete this.root[e] } else delete this.cache[e]; this.persistCache() } notify(e, t = "", l = "", h = {}) { const a = h["open-url"], c = h["media-url"]; if (s && $notify(e, t, l, h), n && $notification.post(e, t, l + `${c ? "\n多媒体:" + c : ""}`, { url: a }), i) { let s = {}; a && (s.openUrl = a), c && (s.mediaUrl = c), "{}" === JSON.stringify(s) ? $notification.post(e, t, l) : $notification.post(e, t, l, s) } if (o || u) { const s = l + (a ? `\n点击跳转: ${a}` : "") + (c ? `\n多媒体: ${c}` : ""); if (r) { require("push").schedule({ title: e, body: (t ? t + "\n" : "") + s }) } else console.log(`${e}\n${t}\n${s}\n\n`) } } log(e) { this.debug && console.log(`[${this.name}] LOG: ${this.stringify(e)}`) } info(e) { console.log(`[${this.name}] INFO: ${this.stringify(e)}`) } error(e) { console.log(`[${this.name}] ERROR: ${this.stringify(e)}`) } wait(e) { return new Promise(t => setTimeout(t, e)) } done(e = {}) { console.log('done!'); s || i || n ? $done(e) : o && !r && "undefined" != typeof $context && ($context.headers = e.headers, $context.statusCode = e.statusCode, $context.body = e.body) } stringify(e) { if ("string" == typeof e || e instanceof String) return e; try { return JSON.stringify(e, null, 2) } catch (e) { return "[object Object]" } } }(e, t) }
/*****************************************************************************/

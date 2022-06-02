auto; //开启无障碍服务 
//console.show() //开控制台
//console.log('开始...')
var width = device.width;
var height = device.height;

app.launchApp("微信"); //打开微信 
sleep(1000)
back()                 //确保返回微信初始页
sleep(1000)
back()
sleep(1000)
back()
sleep(1000)
app.launchApp("微信"); //再打开微信 
sleep(2000)
//console.log("开了开了");
var sousuo = className("android.widget.RelativeLayout").desc("搜索").findOne(2000); //找到搜索框; 
if (sousuo != null) {
    click(sousuo.bounds().centerX(), sousuo.bounds().centerY()); //点击搜索框 
} else {
    tost("找不到搜索框提前结束");
}
sleep(1000); //只是停止两秒之上 
setText("我在校园"); //设置搜索文字 
sleep(500);
var wps = className("android.widget.TextView").text("我在校园").findOne(2000); //找到公众号 
log(wps);
if (wps == null) { //找不到直接退出 
    toast("找不到我在校园");
    exit();
}
click(wps.bounds().centerX(),wps.bounds().centerY()+50); //点击进入 
sleep(1000);
var ling = className("android.widget.TextView").text("学生端").findOne(2000); //找到学生端 
log(ling);
if (ling == null) { //找不到退出 
    toast("找不到学生端");
    exit();
}
click(ling.bounds().centerX(), ling.bounds().centerY()); //点击学生端
sleep(4000);
for (var i = 0; i < 3; i++) {
    var starX = width / 2;
    var starY = height * 0.8;
    var endX = width / 2;
    var endY = height * 0.2;
    swipe(starX, starY, endX, endY, 500);
}    
toast("到学生端底部了");
var qiandao = className("android.view.View").text("健康打卡").findOne(2000);
log(qiandao);
if (qiandao == null) {
    toast("找不到健康打卡");
    exit();
}
qiandao.click();
sleep(1000)
//进来以后再划到低
for (var i = 0; i < 5; i++) {
    var starX = width / 2;
    var starY = height * 0.8;
    var endX = width / 2;
    var endY = height * 0.2;
    swipe(starX, starY, endX, endY, 500);
}
toast("到打卡内容底部了");
var dingwei = className("android.view.View").text("点击获取位置").findOne(2000);
log(dingwei);
if (dingwei == null) {
    toast("应该是打过卡了");
    home()
    exit();
}
//dingwei.click();
click(dingwei.bounds().centerX(), dingwei.bounds().centerY());
sleep(3000)
toast("已获取位置");

var tijiao = className("android.widget.Button").text("提交").findOne(2000);
log(tijiao);
if (tijiao == null) {
    toast("打卡失败");
    exit();
}
tijiao.click();
sleep(1000)
id("gv3").findOne().click()
sleep(5000)
home() //模拟按下Home键

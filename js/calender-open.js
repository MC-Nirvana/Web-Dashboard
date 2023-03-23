document.write(calendar());
function calendar() {
    var html = '<div class="calender-open">';
    //获取时间
    var date = new Date();
    var year = date.getFullYear();
    var month = date.getMonth() + 1;
    var day = 1;
    var today = new Date();
    //拼接每个月份的表格
    for (month = 1; month <= 12; month++) {
        html += '<table class="table-open">';
        html += '<tr class="title-open"><th colspan="7">' + year + '年' + month + '月</th></tr>';
        html += '<tr><td>一</td><td>二</td><td>三</td><td>四</td><td>五</td><td>六</td><td>日</td></tr>';
        //获取每个月份共有多少天
        var max = new Date(year, month, 0).getDate();
        html += '<tr>'; //开始<tr>标签
        for (day = 1; day <= max; day++) {
            var claender = new Date(year, month - 1, day - 1).getDay();
            if (day == 1 && claender > 0) { //如果该月的第1天不是星期日，则填充空白
                html += '<td colspan="' + claender + '"> </td>';
            }
            if (year == today.getFullYear() && month == today.getMonth() + 1 && day == today.getDate()) {
                html += '<td class="today-open">' + day + '</td>';
            } else {
                html += '<td>' + day + '</td>';
            }
            if (claender == 6 && day != max) { //如果星期六不是该月的最后一天，则换行
                html += '</tr><tr>';
            } else if (day == max) { //该月的最后一天，闭合</tr>标签
                html += '</tr>';
            }
        }
        html += '</table>';
    }
    html += '</div>';
    return html;
}
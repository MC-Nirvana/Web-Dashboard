// 获取屏幕宽度和高度
const screenWidth = window.innerWidth;
const screenHeight = window.innerHeight;

// 获取所有卡片元素
const cards = document.querySelectorAll('.card');

// 遍历所有卡片元素，计算并设置宽高
for (let i = 0; i < cards.length; i++) {
    const card = cards[i];

    // 获取卡片的初始宽高和位置
    const width = parseFloat(card.style.width);
    const height = parseFloat(card.style.height);
    const top = parseFloat(card.style.top);
    const left = parseFloat(card.style.left);

    // 计算百分比宽高和位置
    const newWidth = (width / screenWidth) * 100 + '%';
    const newHeight = (height / screenHeight) * 100 + '%';
    const newTop = (top / screenHeight) * 100 + '%';
    const newLeft = (left / screenWidth) * 100 + '%';

    // 设置新的百分比宽高和位置
    card.style.width = newWidth;
    card.style.height = newHeight;
    card.style.top = newTop;
    card.style.left = newLeft;
}
function expandCard(card) {
    //获取卡片状态
    var isExpanded = card.classList.contains('expanded');
    var cards = document.querySelectorAll('.card');
    var expandedCard = document.querySelector('.card.expanded');

    // 如果展开卡片存在，则移除被展开卡片的模糊效果
    if (expandedCard) {
        const backgroundCards = document.querySelectorAll('.card:not(.expanded)');
        backgroundCards.forEach(card => {
            card.classList.remove('blur');
        });
    }

    //点击卡片后居中展开到指定大小，并模糊其他卡片。再次点击后解除展开状态
    for (var i = 0; i < cards.length; i++) {
        if (cards[i] !== card) {
            cards[i].classList.toggle('blur', !isExpanded);
            cards[i].classList.toggle('unclickable', !isExpanded);
            cards[i].classList.remove('expanded');
            cards[i].style.width = "";
            cards[i].style.height = "";
            cards[i].style.position = "";
            cards[i].style.top = "";
            cards[i].style.left = "";
            cards[i].style.marginTop = "";
            cards[i].style.marginLeft = "";
            cards[i].style.zIndex = "";
        }
    }
    if (isExpanded) {
        card.classList.remove('expanded');
        card.style.width = "";
        card.style.height = "";
        card.style.position = "";
        card.style.top = "";
        card.style.left = "";
        card.style.marginTop = "";
        card.style.marginLeft = "";
        card.style.zIndex = "";
    } else {
        card.classList.add('expanded');
        var targetWidth = 1000;
        var targetHeight = 600;
        card.style.width = targetWidth + "px";
        card.style.height = targetHeight + "px";
        card.style.position = "fixed";
        card.style.top = "50%";
        card.style.left = "50%";
        card.style.marginTop = -targetHeight / 2 + "px";
        card.style.marginLeft = -targetWidth / 2 + "px";
        card.style.zIndex = "9999";
    }

    //点击背景后使卡片解除展开状态
    document.addEventListener('click', function(event) {
        var isClickInsideCard = event.target.closest('.card');
        if (!isClickInsideCard) {
            var cards = document.querySelectorAll('.card');
            for (var i = 0; i < cards.length; i++) {
                if (cards[i].classList.contains('expanded')) {
                    expandCard(cards[i]);
                }
            }
        }
    });
}
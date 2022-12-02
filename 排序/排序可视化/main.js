let aLi = document.querySelectorAll(".main ul li");
let quickSortBtn = document.querySelector(".quick_sort");
let bubbleSortBtn = document.querySelector(".bubble_sort");
let chooseSortBtn = document.querySelector(".choose_sort");
let reSet = document.querySelector(".reset");

//建立一个随机数组
let arr = new Array(20)
    .fill(0)
    .map((i, j) => j + 1)
    .sort(() => Math.random() - 0.5);

let left = []; //记录交换后左边的信息
let right = []; //记录交换后右边的信息
let count = 0;

//随机颜色
let randomColor = () => Math.floor(Math.random() * 256);

//将随机数组再次打乱   
let outOfOrder = (arr) => {

    let temp = 0;
    for (let i = 0; i < arr.length; i++) {
        temp = i;
        for (let j = i; j < arr.length; j++) {
            if (arr[temp] > arr[j]) {
                temp = j;
            }
        }

        let max = arr.splice(temp, 1);
        arr.unshift(...max);
    }

    let random = 0;
    for (let i = 0; i < arr.length; i++) {
        random = Math.floor(Math.random() * arr.length);
        let x = arr.shift();
        arr.splice(random, 0, x);
        random = Math.floor(Math.random() * arr.length);
        let y = arr.pop();
        arr.splice(random, 0, y);
    }
    return arr;
}

//初始化页面
let init = () => {

    arr = outOfOrder(arr);
    for (let i = 0; i < aLi.length; i++) {
        aLi[i].style.height = (i + 1) * 20 + "px";
        aLi[i].style.top = (20 - i - 1) * 20 + "px";
        aLi[i].style.backgroundColor = `rgb(${randomColor()}, ${randomColor()}, ${randomColor()})`;
    }
    arr.forEach((value, index) => {
        aLi[value - 1].style.left = index * 40 + "px";
    });
    left = [];
    right = [];
    count = 0;
};

//交换并将信息存入left和right
let swap = (start, end) => {
    if (arr[start] != arr[end]) {
        left.push([start, arr[end]]);
        right.push([end, arr[start]]);
    }
    [arr[start], arr[end]] = [arr[end], arr[start]];
};

//将left和right记录的信息渲染到页面上
let render = () => {
    aLi[left[count][1] - 1].style.left = (left[count][0]) * 40 + "px";
    aLi[right[count][1] - 1].style.left = (right[count][0]) * 40 + "px";
};

let go = (sort) => {
    if (left === null && right === null) {
        reSet.disabled = false;
        alert("已经排好了");
        return;
    }
    sort(arr, 0, arr.length - 1);
    let timer1 = setInterval(() => {
        render();
        count++;
    }, 600)
    let newaLi = [...aLi]; //将类数组转为数组，使其可以使用every函数
    let timer2 = setInterval(() => {
        let flag = newaLi.every((li, index) => {
            return li.offsetLeft === index * 40;
        });
        if (flag) {
            reSet.disabled = false;
            left = null;
            right = null;
            clearInterval(timer1);
            clearInterval(timer2);
        }
    }, 1000)
}

//快排
quickSortBtn.onclick = () => {
    reSet.disabled = true;
    go(quickSort);
};
//冒泡
bubbleSortBtn.onclick = () => {
    reSet.disabled = true;
    go(bubbleSort);
};
//选择
chooseSortBtn.onclick = () => {
};
//重置
reSet.onclick = init;

init();
let chooseSort = (arr) => {
    // let newarr = [];
    // while(arr.length > 0) {
    //     let temp = 0;
    //     for(let i = 0;i < arr.length;i++) {
    //         if(arr[temp] < arr[i]) {
    //             temp = i;
    //         }
    //     }
    //     let max = arr.splice(temp, 1);
    //     newarr.push(...max)
    // }
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
}
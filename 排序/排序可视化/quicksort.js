let findMid = (arr, start, end) => {
    let s = start,
        e = end;
    while (s < e) {
        while (s < e && arr[s] <= arr[e]) {
            e--;
        }
        swap(s, e);

        while (s < e && arr[s] <= arr[e]) {
            s++;
        }
        swap(s, e);
    }

    return s;
};

let quickSort = (arr, start, end) => {
    if (start > end) return;
    let mid = findMid(arr, start, end);

    quickSort(arr, start, mid - 1);
    quickSort(arr, mid + 1, end);
};
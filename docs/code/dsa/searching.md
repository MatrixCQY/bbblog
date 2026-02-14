# 查找算法 (Searching Algorithms)

## 1. 线性查找 (Linear Search)
- 时间复杂度：$O(n)$
- 适用于无序数组。

## 2. 二分查找 (Binary Search)
- 时间复杂度：$O(\log n)$
- 适用于有序数组。
```cpp
int binarySearch(vector<int>& arr, int x) {
    int l = 0, r = arr.size() - 1;
    while (l <= r) {
        int m = l + (r - l) / 2;
        if (arr[m] == x) return m;
        if (arr[m] < x) l = m + 1;
        else r = m - 1;
    }
    return -1;
}
```

## 3. 哈希查找 (Hash Search)
- 时间复杂度：$O(1)$
- 利用散列表 (Hash Table)。

## 推荐资源
- [GeeksforGeeks: Searching Algorithms](https://www.geeksforgeeks.org/searching-algorithms/)

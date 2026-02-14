# 排序算法 (Sorting Algorithms)

## 1. 常见排序
| 算法 | 平均时间复杂度 | 空间复杂度 | 稳定性 |
| :--- | :--- | :--- | :--- |
| **冒泡排序** | $O(n^2)$ | $O(1)$ | 稳定 |
| **选择排序** | $O(n^2)$ | $O(1)$ | 不稳定 |
| **插入排序** | $O(n^2)$ | $O(1)$ | 稳定 |
| **归并排序** | $O(n \log n)$ | $O(n)$ | 稳定 |
| **快速排序** | $O(n \log n)$ | $O(\log n)$ | 不稳定 |
| **堆排序** | $O(n \log n)$ | $O(1)$ | 不稳定 |

## 2. 实现示例 (Quick Sort)
```cpp
void quickSort(vector<int>& arr, int low, int high) {
    if (low < high) {
        int pi = partition(arr, low, high);
        quickSort(arr, low, pi - 1);
        quickSort(arr, pi + 1, high);
    }
}
```

## 推荐资源
- [Visual Algo: Sorting](https://visualgo.net/en/sorting)

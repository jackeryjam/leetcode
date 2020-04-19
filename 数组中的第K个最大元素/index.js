/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */

var findKthLargest = function (nums, k) {
    const quickSort = (() => {
        let arr;
        let k;
        const partition = (left, right) => {
            let pivot = arr[left];
            while (left < right) {
                while (left < right && arr[right] <= pivot) {
                    right--;
                }
                arr[left] = arr[right];
    
                while (left < right && arr[left] > pivot) {
                    left++;
                }
                arr[right] = arr[left];
            }
            arr[left] = pivot;
            return left;
        }
    
        const sort = (left, right) => {
            let mid = partition(left, right);
            if (mid === k) {
                return arr[k];
            } else if (mid > k) {
                return sort(left, mid - 1);
            } else {
                return sort(mid + 1, right);
            }
        }
    
        return (_arr, _k) => {
            arr = _arr;
            k = _k - 1;
            return sort(0, arr.length - 1);
        }
    })();

    return quickSort(nums, k);
};

console.log(findKthLargest([3,2,3,1,2,4,5,5,6], 4))
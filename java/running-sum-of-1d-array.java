class Solution {
     private static int sum(int[] nums, int endPosition) {
        int sum = 0;

        for(int i = 0; i < endPosition; i++) {
            sum += nums[i];
        }

        return sum;
    }

    public int[] runningSum(int[] nums) {
        int[] runningSum = new int[nums.length];

        for(int i = 0; i < nums.length; i++ ) {
            runningSum[i] = sum(nums, i+1);
        }

        return runningSum;
    }
}
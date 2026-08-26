class Solution {
    postOrder(root) {
        // code here
        let ans = []
        let curr = root;
        let st = []
        let visited = null;
        
        while(curr != null || st.length > 0) {
            
            while(curr != null) {
                st.push(curr);
                curr = curr.left;
            }
            
            curr = st[st.length -1];
            if(curr.right && curr.right != visited) {
                curr = curr.right;
            }else {
                visited = curr;
                st.pop();
                ans.push(curr.data);
                curr = null;
            }
        }
        return ans;
    }
}
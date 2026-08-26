/**
 * @param {string} s
 * @returns {string}
 */

let infixToPostfix = function (s) {
	// code here
	let st = []
        let prior = {
    		"(": 0,
    		"+": 1,
    		"-": 1,
    		"*": 2,
    		"/": 2,
    		"^": 3,
    	};
    	let ans = ""
        for(let i =0;i<s.length;i++) {
            if (
			(s[i] >= "A" && s[i] <= "Z") ||
			(s[i] >= "a" && s[i] <= "z") ||
			(s[i] >= "0" && s[i] <= "9")
		){
		    ans += s[i]
		}else if(s[i] == '(') {
		    st.push(s[i])
		}else if(s[i] == ')') {
		    while(st.length > 0 && st[st.length -1] != '(') {
		        ans += st.pop();
		    }
		    if(st.length > 0) {
		        st.pop()  
		    }
		}else {
		    if(s[i] == '^') {
		        while(st.length > 0 && prior[s[i]] < prior[st[st.length -1]]) {
		            ans += st.pop();
		        } 
		    }else {
		        while(st.length > 0 && prior[s[i]] <= prior[st[st.length -1]]) {
		            ans += st.pop();
		        }
		    }
		    
		    st.push(s[i]);
		}
            
            
        }
        
        while(st.length > 0) {
            ans += st.pop();
        }
        return ans;
};

let shortestPath = function (V, E, edges) {
	// code here.
	let adj = Array.from({ length: V }, () => []);
	for (let [u, v, vl] of edges) {
		adj[u].push([v, vl]);
	}


	let min = new Array(V).fill(Infinity);

	let dfs = function (i) {
		for (let [x, y] of adj[i]) {
			let m = min[i] + y;
			if (m < min[x]) {
				min[x] = m;
				dfs(x);
			}
		}
	};

	min[0] = 0;
	dfs(0);

	for (let i = 0; i < min.length; i++) {
		if (min[i] == Infinity) {
			min[i] = -1;
		}
	}
	console.log(min);
};

let shortestPathTopo = function (V, E, edges) {
	let adj = Array.from({ length: V }, () => []);
    let vis = new Array(V).fill(0)
    let min = new Array(V).fill(Infinity)
	for(let [u, v, vl] of edges) {
		adj[u].push([v, vl]);
	}

    let st = []
    let dfs = function(i) {
        for(let [x, y] of adj[i]) {
            if(!vis[x]) {
                vis[x] =1;
                dfs(x)
            }
        }
        st.push(i)
    }
	for (let i = 0; i < V; i++) {
		if (!vis[i]) {
            vis[i] =1;
			dfs(i);
		}
	}

    // console.log(st)
    if(st.length == 0) return;

    min[st[st.length -1]] =0;
    while(st.length > 0) {
        let last = st.pop();
        for(let [x, y] of adj[last]) {
            let m = min[last] + y;
            if(min[x] > m) {
                min[x] = m;
            }
        }
    }
    console.log(min)
    
};

let edges = [
	[0,1,2],
	[1,3,1],
    [2,3,3],
    [4,0,3],
    [4,2,1],
    [6,4,2],
    [6,5,3],
    [5,4,1],
];
let V = 7;
let E = 8;

shortestPath(V, E, edges);
shortestPathTopo(V, E, edges);

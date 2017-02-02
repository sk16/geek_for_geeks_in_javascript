'use strict';

var ds = require('algorithms').DataStructures;


function Graph(v){
	this.V = v;
	this.adj = new Array(v);
        
    for (let i=0; i < v; ++i)
       this.adj[i] = new ds.LinkedList();
}

Graph.prototype.addEdge = function(v,w){
	this.adj[v].add(w);
}

Graph.prototype.dfsUtil = function(v,visited){

        visited[v] = true;
        if(process.stdout.write)
            process.stdout.write(v + " ");
        else
            console.log(v);

        var adj = this.adj[v];

        for(var i = 0; i < adj.length; i++){ 
            var n = adj.get(i);
            if (!visited[n]){
                   this.dfsUtil(n, visited);
            }
        }

}

Graph.prototype.dfs = function(v){

        v = parseInt(v);
        var visited = new Array(this.V);
        // Call the recursive helper function to print DFS traversal
        this.dfsUtil(v, visited);
}

var g = new Graph(4);
g.addEdge(0, 1);
g.addEdge(0, 2);
g.addEdge(1, 2);
g.addEdge(2, 0);
g.addEdge(2, 3);
g.addEdge(3, 3);
console.log("Following is Depth First Traversal (Starting from vertex 2)");
g.dfs(2);
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

Graph.prototype.bfs = function(s){
	s = parseInt(s);
	var visited = new Array(this.V);
	var Que = new ds.Queue();
    visited[s] = true;
    Que.push(s);
    while (Que.length !== 0)
        {

            s = Que.pop();
            process.stdout.write(s + " ");
            this.adj[s].forEach(function(i){
                if (!visited[i])
                {
                    visited[i] = true;
                    Que.push(i);
                }
            });
        }
}

var g = new Graph(4);
g.addEdge(0, 1);
g.addEdge(0, 2);
g.addEdge(1, 2);
g.addEdge(2, 0);
g.addEdge(2, 3);
g.addEdge(3, 3);
console.log("Following is Breadth First Traversal");
g.bfs(2);




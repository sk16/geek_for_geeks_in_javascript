'use strict';

var buckets = require('buckets-js');


function Graph(v){
	this.V = v;
	this.adj = new Array(v);
        
    for (let i=0; i < v; ++i)
       this.adj[i] = new buckets.LinkedList();
}

Graph.prototype.addEdge = function(v,w){
	this.adj[v].add(w);
}

Graph.prototype.bfs = function(s){
	s = parseInt(s);
	var visited = new Array(this.V);
	var Que = new buckets.Queue();
    visited[s] = true;
    Que.add(s);
    var adj;
    while (Que.size() !== 0)
        {

            s = Que.dequeue();
            if(process.stdout.write)
              process.stdout.write(s + " ");
            else
              console.log(s);
            
            adj = this.adj[s];

            for(var i = 0; i < adj.size(); i++){ 
                var n = adj.elementAtIndex(i);
                if (!visited[n]){
                   visited[n] = true;
                   Que.add(n);
               }
            }
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




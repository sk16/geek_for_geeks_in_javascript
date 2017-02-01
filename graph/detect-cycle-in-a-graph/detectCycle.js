'use strict';

var ds = require('algorithms').DataStructures;

function Graph(v){
    v = parseInt(v);
    this.V = v;
    this.adj = new Array(v);
        
    for (let i=0; i < v; ++i)
       this.adj[i] = new ds.LinkedList();
}

Graph.prototype.addEdge = function(v,w){
    this.adj[v].add(w);
}

Graph.prototype.isCyclicUtil = function(v,visited,recStack){
  if(visited[v] === false)
    {
        // Mark the current node as visited and part of recursion stack
        visited[v] = true;
        recStack[v] = true;
 
        // Recur for all the vertices adjacent to this vertex

        for(var i = 0; i < this.adj[v].length; i++){
            var n = this.adj[v].get(i);
            if (!visited[n] && this.isCyclicUtil(n,visited,recStack))
                    return true;
            else if(recStack[n])
                    return true;
        }
    }
    recStack[v] = false;  // remove the vertex from recursion stack
    return false;
}

Graph.prototype.isCyclic = function(){

    var visited = new Array(this.V).fill(false);
    var recStack = new Array(this.V).fill(false);
    
    // Call the recursive helper function to detect cycle in different
    // DFS trees
    for(var i = 0; i < this.V; i++)
        if (this.isCyclicUtil(i, visited ,recStack))
            return true;
 
    return false;

}

var g = new Graph(4);
g.addEdge(0, 1);
g.addEdge(0, 2);
g.addEdge(1, 2);
g.addEdge(2, 0);
g.addEdge(2, 3);
g.addEdge(3, 3);
if(g.isCyclic())
    console.log("Graph contains cycle");
else
    console.log("Graph doesn't contain cycle");
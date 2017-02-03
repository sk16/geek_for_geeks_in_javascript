'use strict';

var ds = require('algorithms').DataStructures;

function Graph(v,e){
    v = parseInt(v);
    e = parseInt(e);
    this.V = v;
    this.E = e;
    this.edge = new Array(this.E); 

    for (let i=0; i < e; ++i)
       this.edge[i] = new Edge();
}

function Edge(){
    this.src = null;
    this.dest = null;
}

Graph.prototype.find = function(parent,i){
    i = parseInt(i);
    if(parent[i] === -1){
       return i;
    }
    return this.find(parent,parent[i]);
}

Graph.prototype.Union = function(parent,x,y){
    x = parseInt(x);
    y = parseInt(y);
    var xset = this.find(parent, x);
    var yset = this.find(parent, y);
    parent[xset] = yset;
}

Graph.prototype.isCycle = function(graph){
    if(!(graph instanceof Graph)){
        console.error('Object passed is not instance of Graph');
        return ;
    }         
    
    var parent = new Array(graph.V);
 
    for (let i=0; i<graph.V; ++i)
        parent[i] = -1;
 
        // Iterate through all edges of graph, find subset of both
        // vertices of every edge, if both subsets are same, then
        // there is cycle in graph.
    for (let i = 0; i < graph.E; ++i)
    {
        var x = graph.find(parent, graph.edge[i].src);
        var y = graph.find(parent, graph.edge[i].dest);

        if (x === y)
            return 1;

        graph.Union(parent, x, y);
    }
    return 0;
}



var g = new Graph(3,3);

g.edge[0].src = 0;
g.edge[0].dest = 1;

// add edge 1-2
g.edge[1].src = 1;
g.edge[1].dest = 2;

// add edge 0-2
g.edge[2].src = 0;
g.edge[2].dest = 2;

if (g.isCycle(g) === 1)
    console.log( "graph contains cycle" );
else
    console.log( "graph doesn't contain cycle" );
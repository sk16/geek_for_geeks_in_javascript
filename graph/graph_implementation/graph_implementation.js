'use strict'

var ds = require('algorithms').DataStructures;

function print(s){
    s = s.toString();
    if(process.stdout.write)
        process.stdout.write(s);
    else
        console.log(s);
}

function Graph(v){
    this.V = v;
    this.adj = new Array(v);
    for (let i=0; i < v; ++i)
       this.adj[i] = new ds.LinkedList();
}

Graph.prototype.addEdge = function(v,w){
	this.adj[v].add(w);
	this.adj[w].add(v);
}

Graph.prototype.printGraph = function(){

    var adj;
	for(let i = 0 ; i < this.V ; ++i){
       print('\n Adjacency list of vertex '+i);
       print('\n');
       // this.adj[i].forEach(function(v){
       //    print(v);
       // });
       adj = this.adj[i];
	   for(var j = 0; j < adj.length; j++){ 
            var n = adj.get(j);
            print(n+' ');
	    }
	}
}


var g = new Graph(5);
g.addEdge(0, 1);
g.addEdge(0, 4);
g.addEdge(1, 2);
g.addEdge(1, 3);
g.addEdge(1, 4);
g.addEdge(2, 3);
g.addEdge(3, 4);

g.printGraph();



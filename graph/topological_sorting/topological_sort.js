var ds = require('algorithms').DataStructures;

function print(s){
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
}

Graph.prototype.topologicalSortUtil = function(v,visited,stack){
     
     v = parseInt(v);
     visited[v] = true;
     var adj = this.adj[v];
     for(var i = 0; i < adj.length; i++){ 
            var n = adj.get(i);
            if (!visited[n]){
               this.topologicalSortUtil(n, visited, stack);
           }
      }

     stack.push(v);
}


Graph.prototype.topologicalSort = function(){
     
     var stack = new ds.Stack();
     var visited = new Array(this.V).fill(false);

     for (let i = 0; i < this.V; i++)
            if (visited[i] === false)
                this.topologicalSortUtil(i, visited, stack);
 
     while (stack.isEmpty() === false)
        print(stack.pop() + " ");
}


var g = new Graph(6);
g.addEdge(5, 2);
g.addEdge(5, 0);
g.addEdge(4, 0);
g.addEdge(4, 1);
g.addEdge(2, 3);
g.addEdge(3, 1);

console.log("Following is a Topological sort of the above graph");
g.topologicalSort();
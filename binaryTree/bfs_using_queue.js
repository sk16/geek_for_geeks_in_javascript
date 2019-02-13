class Node {
	constructor(item) {
        this.data = item;
        this.leftNode = null;
        this.rightNode = null;
	}
}



class BinaryTree {

	constructor() {
       this.root = null
	}

	static bfs_queue(node) {
		if(!node) {
			return ;
		}
      const queue = []
      queue.push(node);
      while(queue.length !== 0) {
         var item = queue.shift();
         console.log(item.data);

         if(item.left) {
         	queue.push(item.left);
         }

         if(item.right) {
         	queue.push(item.right);
         }
      }

	} 
}

var tree = new BinaryTree()                     

tree.root = new Node(1);
tree.root.left = new Node(2);
tree.root.right = new Node(3);
tree.root.left.left = new Node(4);
tree.root.left.right = new Node(5);

BinaryTree.bfs_queue(tree.root);



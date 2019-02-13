class Node {
	constructor(item) {
        this.data = item;
        this.leftNode = null;
        this.rightNode = null;
	}
}


class BinaryTree{
	constructor(item) {
		this.root = item;
	}

    bfs_level_wise() {
         const height = this.getHeight(this.root);
         this.loopThroughLevel(this.root , height);
	}

    getHeight(node) {
         if(!node) {return 0;} else {
         	var leftHeight = this.getHeight(node.left);
         	var rightHeight = this.getHeight(node.right);

         	if(leftHeight < rightHeight) { 
         		return ++rightHeight;
         	} else {
         		return ++leftHeight;
         	}
         }
    }

    printGivenLevel(node , i) {

       if(!node) {
       	return ;
       }

       if(i === 1) {
       		console.log(node.data);
       } else {
	       	this.printGivenLevel(node.left , i - 1);
	       	this.printGivenLevel(node.right , i - 1);
       }
    }

    loopThroughLevel(node ,height) {
       for(let i = 1; i <= height ; i++) {
       	this.printGivenLevel(node , i);
       }
    }
}

var tree = new BinaryTree()                     

tree.root = new Node(1);
tree.root.left = new Node(2);
tree.root.right = new Node(3);
tree.root.left.left = new Node(4);
tree.root.left.right = new Node(5);

tree.bfs_level_wise();
   var allPathsSourceTarget = function(graph) {
        const n = graph.length-1;
            const result = [];
            const path = [];
            dfs(0);
            return result;
            function dfs(position) {
                //do 
                path.push(position);
                if(position == n) {
                    result.push([...path]);
                }
                // recurse
                const nextnodes = graph[position]
                for(let i=0; i<nextnodes.length; i++) {
                    dfs(nextnodes[i]);
                }
                // undo
                path.pop();
                
            }
        };
        //let x = allPathsSourceTarget([[1,2],[3],[3],[]]);
        //console.log(x);
          let x = allPathsSourceTarget([[4,3,1],[3,2,4],[3],[4],[]]);
          console.log(x);







// paths from a source to
// destination.
 
/*let  v;
 
let adjList;
 
// A directed graph using
// adjacency list representation
function Graph(vertices)
{
    // initialise vertex count
        v = vertices;
  
        // initialise adjacency list
        initAdjList();
}
 
// utility method to initialise
    // adjacency list
function initAdjList()
{
    adjList = new Array(v);
  
        for (let i = 0; i < v; i++) {
            adjList[i] = [];
        }
}
 
// add edge from u to v
function addEdge(u,v)
{
    // Add v to u's list.
        adjList[u].push(v);
}
 
// Prints all paths from
    // 's' to 'd'
function printAllPaths(s,d)
{
     let isVisited = new Array(v);
     for(let i=0;i<v;i++)
         isVisited[i]=false;
        let pathList = [];
  
        // add source to path[]
        pathList.push(s);
  
        // Call recursive utility
        printAllPathsUtil(s, d, isVisited, pathList);
}
 
// A recursive function to print
    // all paths from 'u' to 'd'.
    // isVisited[] keeps track of
    // vertices in current path.
    // localPathList<> stores actual
    // vertices in the current path
function printAllPathsUtil(u,d,isVisited,localPathList)
{
    if (u == (d)) {
            console.log(localPathList);
            // if match found then no need to
            // traverse more till depth
            return;
        }
  
        // Mark the current node
        isVisited[u] = true;
  
        // Recur for all the vertices
        // adjacent to current vertex
        for (let i=0;i< adjList[u].length;i++) {
            if (!isVisited[adjList[u][i]]) {
                // store current node
                // in path[]
                localPathList.push(adjList[u][i]);
                printAllPathsUtil(adjList[u][i], d,
                isVisited, localPathList);
  
                // remove current node
                // in path[]
                localPathList.splice(localPathList.indexOf
                (adjList[u][i]),1);
            }
        }
  
        // Mark the current node
        isVisited[u] = false;
}
 
 // Driver program
// Create a sample graph
Graph(4);
addEdge(1, 2);
addEdge(3);
addEdge(3);
addEdge();
//addEdge(2, 1);
//addEdge(1, 3);
 
// arbitrary source
let s = 2;
 
// arbitrary destination
let d = 3;
 
console.log(
"Following are all different paths from "
+ s + " to " + d);
printAllPaths(s, d);*/
     
 
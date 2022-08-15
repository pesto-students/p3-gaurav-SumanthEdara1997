// Javascript program to check if there is exist a path between two vertices
// of a graph.
let  V;
let adj;
 
function Graph(v)
{
        V = v;
        adj = new Array(v);
        for (let i = 0; i < v; ++i)
            adj[i] = [];
}
 
// Function to add an edge into the graph
function addEdge(v,w)
{
    adj[v].push(w);
}
 
// prints BFS traversal from a given source s
function isReachable(s,d)
{
    let n;
  
        // Mark all the vertices as not visited(By default set
        // as false)
        let visited = new Array(V);
         for(let i = 0; i < V; i++)
            visited[i] = false;
             
        // Create a queue for BFS
        let queue = [];
  
        // Mark the current node as visited and enqueue it
        visited[s] = true;
        queue.push(s);
  
        while (queue.length != 0)
        {
            // Dequeue a vertex from queue and print it
            n = queue.shift();
              
            if(n == d)
                return true;
            for(let i = 0; i < adj[n].length; i++)
            {
                if (visited[adj[n][i]] == false)
                {
                    queue.push(adj[n][i]);
                    visited[adj[n][i]] = true;
                }
            }
             
        }
  
        // If BFS is complete without visited d
        return false;
}
 
// Driver method
Graph(6);
addEdge(0, 1);
addEdge(0, 2);
addEdge(3, 5);
addEdge(5, 4);
addEdge(4, 3);
//addEdge(3, 3);
 
let u = 0;
let v = 5;
if (isReachable(u, v))
    console.log("There is a path from " + u +" to " + v);
else
    console.log("There is no path from " + u +" to " + v);
 
u = 0;
v = 1;
if (isReachable(u, v))
    console.log("There is a path from " + u +" to " + v);
else
    console.log("There is no path from " + u +" to " + v);
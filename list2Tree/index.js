var obj = [
    { id: 3, parent: 2 },
    { id: 1, parent: null },
    { id: 2, parent: 1 },
    { id: 5, parent: 4 },
    { id: 6, parent: 3 },
    { id: 9, parent: 5 },
    { id: 10, parent: 8 },
]

var map = {}

obj.forEach(val => map[val.id] = val)

obj.forEach(val => {
    if (map[val.id]) {
        val.parentNode = map[val.id]
        if (map[val.id].children) {
            map[val.id].children.push(val)
        } else {
            map[val.id].children = [val]
        }
    }
})

var rootNode = []

function traverse(node) {
    delete map[node.id]  
    node.children && node.children.forEach(subNode => traverse(subNode))
}
var len = Object.keys(map).length
var maxTime = 10;
while (obj.length && maxTime--) {
    let node = obj.pop()
    while (node.parentNode != null) {
        node = node.parentNode
    }
    rootNode.push(node)
    traverse(node)
    len = Object.keys(map).length
}
function BFS(root) {
    const quene = []
    quene.push(root)

    while(quene.length) {
        const top = quene[0]
        console.log(top);

        if(top.left) {
            quene.push(top.left)
        }
        if(top.right) {
            quene.push(top.right)
        }
        quene.shift()
    }
}
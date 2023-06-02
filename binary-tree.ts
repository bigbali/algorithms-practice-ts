export type BTree = {
    left: BTree,
    right: BTree,
    value: any
} | null;

export const buildBinaryTree = (maxDepth: number, depth: number = 0, nodeCounter: { count: number } = { count: 0 }): BTree | null => {
    if (depth >= maxDepth) {
        return null;
    }

    const createBranch = () => {
        if (depth < maxDepth - 1) {
            nodeCounter.count++;
        }

        return buildBinaryTree(maxDepth, depth + 1, nodeCounter);
    }

    const tree: BTree = {
        value: nodeCounter.count,
        left: createBranch(),
        right: createBranch(),
    }

    return tree;
}

export const invertBinaryTree = (tree: BTree): BTree => {
    if (!tree) return null;

    return {
        value: tree.value,
        left: invertBinaryTree(tree.right),
        right: invertBinaryTree(tree.left)
    }
}

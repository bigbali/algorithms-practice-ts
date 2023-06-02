import { BTree, buildBinaryTree } from "./binary-tree"

const testBinaryTreeDepth = (tree: BTree, depth: number = 0): number => {
    if (!tree) return depth;

    const depthLeft = testBinaryTreeDepth(tree.left, depth + 1);
    const depthRight = testBinaryTreeDepth(tree.right, depth + 1);

    return Math.max(depthLeft, depthRight);
}

test('generates binary tree with correct depth', () => {
    const binaryTree1 = buildBinaryTree(1);
    const binaryTree2 = buildBinaryTree(2);
    const binaryTree3 = buildBinaryTree(10);

    expect(binaryTree1).toMatchObject({
        value: 0,
        left: null,
        right: null
    })

    expect(binaryTree2).toMatchObject({
        value: 0,
        left: {
            value: 1,
            left: null,
            right: null
        },
        right: {
            value: 2,
            left: null,
            right: null
        }
    })

    expect(testBinaryTreeDepth(binaryTree3)).toBe(10);
})
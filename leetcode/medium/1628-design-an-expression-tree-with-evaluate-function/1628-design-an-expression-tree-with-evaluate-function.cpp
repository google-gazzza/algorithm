/*
1628-design-an-expression-tree-with-evaluate-function
leetcode/medium/1628. Design an Expression Tree With Evaluate Function
URL: https://leetcode.com/problems/design-an-expression-tree-with-evaluate-function/description/

*/

/**
 * This is the interface for the expression tree Node.
 * You should not remove it, and you can define some classes to implement it.
 */

class Node {
public:
    int value;

    virtual ~Node() {};

    virtual int evaluate() {
        return value;
    };

protected:
    // define your fields here
};


/**
 * This is the TreeBuilder class.
 * You can treat it as the driver code that takes the postinfix input
 * and returns the expression tree represnting it as a Node.
 */

class TreeBuilder {
public:
    int calculate(double num1, double num2, char op) {
        if (op == '+') {
            return num1 + num2;
        } else if (op == '-') {
            return num1 - num2;
        } else if (op == '*') {
            return num1 * num2;
        } else if (op == '/') {
            return num1 / num2;
        }
        return 0;
    }

    int findFistOperationIndex(vector <string> &postfix) {
        int index = -1;

        for (int i = 0; i < postfix.size(); i++) {
            if (postfix[i] == "+" || postfix[i] == "-" || postfix[i] == "*" || postfix[i] == "/") {
                index = i;
                break;
            }
        }

        return index;
    }

    Node *buildTree(vector <string> &postfix) {


        while (postfix.size() > 1) {
            int operationIndex = findFistOperationIndex(postfix);

            char op = postfix[operationIndex][0];
            double num1 = stod(postfix[operationIndex - 2]);
            double num2 = stod(postfix[operationIndex - 1]);

            double result = calculate(num1, num2, op);

            postfix.erase(postfix.begin() + operationIndex - 2, postfix.begin() + operationIndex + 1);
            postfix.insert(postfix.begin() + operationIndex - 2, to_string(result));
        }

        Node *node = new Node();
        node->value = stod(postfix[0]);

        return node;
    }
};


/**
 * Your TreeBuilder object will be instantiated and called as such:
 * TreeBuilder* obj = new TreeBuilder();
 * Node* expTree = obj->buildTree(postfix);
 * int ans = expTree->evaluate();
 */

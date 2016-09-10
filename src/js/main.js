/**
 * Created by lenovo on 2016/9/10.
 *
 * 难点：
 * 1、如何生成随机位置的方块：
 * 设置一个位置数组，每个元素都是一个位置对象，里面存放了每个位置的信息
 *
 * 生成位置对象
 * Position类：
 * 属性：
 * left
 * right
 *
 ***********或者说我可以用委托让body一个人来完成所有的判断和移动？
 *
 * 思路是这样的：
 *
 * 生成方块：
 * 1、先生成8个方块，这8个方块分别按1-8的顺序编号。
 * 2、编好号了以后，我们在九宫格内生成这8个方块内随机生成方块，每生成一个方块就从blocks数组里splice一个
 * 3、在生成的方块都添加className = 'block'，以及id = i，并且对应着数字value = i
 * 4、取的时候就blocks[random()];
 * 5、在css设置button的position:absolute
 * 6、创建一个位置数组
 *
 * 通过类来生成方块对象：
 * Block类：
 * 属性：
 * width = BLOCK_WIDTH
 * height = BLOCK_HEIGHT
 * 方法：
 * checkBoundary
 * // 判断走哪个方向（可优化之处）
 * // 1、用 elementFromPoint() 获取失去中某一特定点上最顶层的元素
 * // 2、用一个数组positionExist来记录某一位置是否有元素
 * // 3、上网查找碰撞检测的方法
 * direction
 * moveUp
 * moveDown
 * moveLeft
 * moveRight
 *
 * 方块移动：
 * 1、通过style的top left属性来移动
 */

var BLOCK_NUM = 8,
    BLOCK_WIDTH = 80 + 'px',
    BLOCK_HEIGHT = 80 + 'px';

var blocks = [];          // 存放button元素
var ids = [];             // 记录已appendChild的id
var randomPosition = [];  // 长度为8，

window.onload = function () {

    initBlocks();

};

var Block = function (blockId, blockClassName, blockInsideId, blockInsideClassName, blockNumber) {

    if (!blockNumber) {
        throw new Error('blockNumber 未定义！');
    }

    // block元素节点
    this.block = document.createElement('div');
    this.block.id = blockId || 'block_' + blockNumber;
    this.block.className = blockClassName || 'block';

    // block存放编号的元素节点
    this.blockInside = document.createElement('div');
    this.blockInside.id = blockInsideId || 'block_inside_' + blockNumber;
    this.blockInside.className = blockInsideClassName || 'block-inside';

    // block编号文本节点
    this.blockNumber = document.createTextNode(blockNumber);

    this.init();

};

Block.prototype = {

    init : function () {
        // 生成方块
        this.blockInside.appendChild(this.blockNumber);
        this.block.appendChild(this.blockInside);

        // 绑定事件
        this.bindEvent();

        blocks.push(this.block);

    },
    bindEvent : function () {

    },
    direction : function () {

    },
    checkBoundary : function () {

    },
    moveLeft : function () {

    },
    moveRight : function () {

    },
    moveUp : function () {

    },
    moveDown : function () {

    }

};

var initBlocks = function () {

    var i = 0;

    for (i = 0; i < BLOCK_NUM; i += 1) {

        var blockNumber = i + 1;

        var block = new Block('block_' + blockNumber, 'block', 'block_inside_' + blockNumber, 'block-inside', blockNumber);

    }

    // 检查高度和宽度是否设置正确
    for (i = 0; i < blocks.length; i += 1) {

        if (blocks[i].style.height !== BLOCK_HEIGHT && window.getComputedStyle(blocks[i]).height !== BLOCK_HEIGHT) {

            blocks[i].style.height = BLOCK_HEIGHT;

        }

        if (blocks[i].style.width !== BLOCK_WIDTH && window.getComputedStyle(blocks[i]).width !== BLOCK_WIDTH) {

            blocks[i].style.width = BLOCK_WIDTH;

        }

    }

    for (i = 0; i < blocks.length; i += 1) {
        document.body.appendChild(blocks[i]);
    }

};






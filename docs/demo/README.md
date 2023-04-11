### 基础用法

可以设置类似的data数据格式来生成树形组织图，并可以通过style精确配置每个节点的样式或className精确配置每个节点的class名
```
注：
1.如果需要拖动节点，或新增、编辑和删除节点功能，则节点必须有id（节点唯一标识）和pid（父级节点唯一标识）属性
或者通过props指定id和pid属性
2.由于节点拖拽功能阻止了节点文本选中，所以，在右键菜单中提供了复制节点文本功能。
```


#### 基础示例

:::demo

baseTree

:::


#### 自定义节点

节点和展开按钮支持自定义
使用`default`和`expand`插槽自定义字之书节点和展开按钮渲染内容
也可以通过`renderContent` 自定义节点渲染内容 使用`renderContent`指定渲染函数，该函数返回需要的节点区内容即可。 渲染函数的用法请参考 Vue 文档
:::tip
插槽优先级大于renderContent
:::

:::demo

slotTree

:::

#### 自定义右键菜单

节点右键菜单支持自定义
使用`define-menus`属性可以自定义右键菜单，接受包含`name`-菜单名称和`command`-事件指令属性的对象数组

:::tip
可通过on-contextmenu事件定义右键菜单执行事件<br />
command相同则执行事件相同，应避免重复
:::

:::demo

menuTree

:::

#### 组织树搜索
通过关键字过滤组织树节点
:::demo

searchTree

:::

#### 懒加载子节点
由于在点击节点时才进行该层数据的获取，默认情况下 Tree 无法预知某个节点是否为叶子节点，所以会为每个节点添加一个展开按钮，如果节点没有下层数据，则点击后展开按钮会消失。同时，你也可以提前告知 Tree 某个节点是否为叶子节点，从而避免在叶子节点前渲染下拉按钮
:::tip
启用懒加载之后，默认展开层级（default-expand-level）、默认展开节点数组（default-expand-keys）和工具栏全部展开按钮可能表现异常，应尽量避免使用
:::

:::demo

lazyTree

:::

### Attributes

| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| data     | 数据源,必须传入   | Object  |  —   |   —   |
| center     | 是否水平居中   | Boolean  |  —   |   false   |
| props    | 配置选项，具体看下表   | Object  |  —   |  {id: 'id', pid: 'pid', label: 'label', expand: 'expand',children: 'children'  }  |
| toolBar    | 工具栏   | [Object, Boolean] |  —   |  {scale: true, restore: true, expand: true, zoom: true, fullscreen: true,  }  |
| horizontal     | 是否是横向   | Boolean  | true,false  |  false  |
| collapsable     | 是否可以展开收起节点   | Boolean  | true,false  |  false  |
| filter-node-method | 对树节点进行筛选时执行的方法，返回 true 表示这个节点可以显示，返回 false 则表示这个节点会被隐藏 | Function(value, data) | —— | —— |
| default-expand-level     | 默认展开层级（如果层级内有节点展开属性值为false，该节点不会默认展开）   | Number  | ——  |  ——  |
| default-expand-keys     | 默认展开的节点的 key 的数组   | Array  | ——  |  ——  |
| disabled     | 禁止编辑，设为true后，所有节点不可新增下级、编辑和删除，单个节点禁止编辑，可将节点属性设置disabled为true   | Boolean  | true,false  |  true  |
| scalable     | 架构图是否可缩放   | Boolean  | true,false  |  true  |
| draggable     | 架构图是否可拖拽，单个节点禁止拖拽，可将节点属性设置noDragging为true   | Boolean  | true,false  |  true  |
| draggable-on-node     | 架构图拖拽在节点触发，node-draggable值为false时，设为true才有效  | Boolean  | true,false  |  false  |
| node-draggable     | 节点是否可拖拽   | Boolean  | true,false  |  true  |
| clone-node-drag     | 是否拷贝节点拖拽   | Boolean  | true,false  |  true  |
| only-one-node     | 是否仅拖动当前节点，如果true，仅拖动当前节点，子节点自动添加到当前节点父节点，如果false，则当前节点及子节点一起拖动   | Boolean  | true,false  |  true  |
| <span style="color:red">node-drag-start</span>  | 节点拖拽开始（参数当前节点node），<span style="color:red">4.0版本后将废弃此属性，改为on-node-drag-start事件</span>  | Function   |  —   |   —   |
| <span style="color:red">node-draging</span>   | 节点拖拽（参数当前节点node），<span style="color:red">4.0版本后将废弃此属性，改为on-node-drag事件</span>  | Function   |  —   |   —   |
| before-drag-end  | 节点拖拽结束前钩子（参数当前节点node, 目标节点targetNode），若返回 false 或者返回 Promise 且被 reject，则阻止节点拖拽  | Function   |  —   |   —   |
| <span style="color:red">node-drag-end</span>   | 节点拖拽结束（参数当前节点node, 判断当前节点和目标节点是否同一节点isSelf），<span style="color:red">4.0版本后将废弃此属性，改为on-node-drag-end事件</span>  | Function   |  —   |   —   |
| lazy  | 是否懒加载子节点，需与 load 方法结合使用，4.1版本新增  | boolean   |  —   |   —   |
| load  | 加载子树数据的方法，仅当 lazy 属性为true 时生效，4.1版本新增  | Function(node, resolve)   |  —   |   false  |
| node-add  | 自定义节点新增，覆盖默认新增行为（参数当前节点node）  | Function   |  —   |   —   |
| node-delete  | 自定义节点删除，覆盖默认新增行为（参数当前节点node） | Function   |  —   |   —   |
| node-edit  | 自定义节点编辑，覆盖默认新增行为（参数当前节点node） | Function   |  —   |   —   |
| node-copy  | 复制节点文本，覆盖默认复制节点文本行为（参数当前节点node） | Function   |  —   |   —   |
| define-menus  | 自定义右键菜单，接受包含name和command属性的对象数组，或者一个返回值为包含name和command属性的对象数组的函数（参数MouseEvent和node） | Array, Function   |  —  |   [{ name: '复制文本', command: 'copy' },{ name: '新增节点', command: 'add' },{ name: '编辑节点', command: 'edit' },{ name: '删除节点', command: 'delete' }]   |
| render-content     | 渲染函数   | Function  |  —   |   —   |
| label-style     | 自定义label标签的样式   | Object  |  —   |   —    |
| label-class-name     | 自定义label节点的样式名   | [Function, String]  |  —   |   —   |
| selected-key  | 选中的节点id 或 选中节点id的数组   | [Array, Number, String]  |  —   |   —   |
| selected-class-name  | 自定义选择节点的样式名   | [Function, String]  |  —   |   —   |
| click-delay  | 单机事件延迟（毫秒），解决双击鼠标时同时触发单击事件问题   | Number  |  —   |   260   |

```
注：
1.如果需要拖动节点，或新增、编辑和删除节点功能，则节点必须有id（节点唯一标识）和pid（父级节点唯一标识）属性
或者通过props指定id和pid属性
2.由于节点拖拽功能阻止了节点文本选中，所以，在右键菜单中提供了复制节点文本功能。
```

### Props
| 参数      | 说明    | 类型      | 可选值  | 默认值      |
|---------- |-------- |---------- |-------------  |-------- |
| label | 指定节点标签为节点对象的某个属性值 | String | —  |— |
| children | 指定子树为节点对象的某个属性值 | String | —  |— |
| id | 指定节点唯一标识为节点对象的某个属性值 | String | —  |— |
| pid | 指定父级节点唯一标识为节点对象的某个属性值 | String | —  |— |
| expand | 指定节点是否展开为节点对象的某个属性值 | String | —  |— |
| isLeaf | 指定节点对象的某个key用于判断是否叶子节点（该key对应的value应为boolean类型） | String | —  |— |

### Events

| 事件名      | 说明    | 返回值      |
|---------- |-------- |---------- |
| on-expand | 节点展开事件，注意，展开节点时如监听了label点击事件，则需要阻止冒泡 e.stopPropagation()  | e, data  |
| on-expand-all | 全部展开/收起事件  | boolean  |
| on-node-click | 节点点击事件  | e, data  |
| on-node-dblclick | 节点双击事件  | e, data  |
| on-node-focus | 节点获取焦点事件  | e, data  |
| on-node-blur | 节点失去焦点事件  | e, data  |
| on-node-copy | 复制节点文本事件，如果设置了node-copy属性，此事件将不会执行  | 复制的文本  |
| on-node-delete | 删除节点事件，如果设置了node-delete属性，此事件将不会执行  | 删除的节点  |
| on-node-drag-start | 节点拖拽开始事件，4.0版本后新增，代替原node-drag-start属性  | node  |
| on-node-drag | 节点拖拽事件，4.0版本后新增，代替原node-draging属性  | node  |
| on-node-drag-end | 节点拖拽结束事件，4.0版本后新增，代替原node-drag-end属性  | node, targetNode  |
| on-contextmenu | 右键菜单点击事件  | {command, node}  |
| on-zoom | 缩放事件  | scale缩放倍数  |
| on-drag | 拖拽事件  | x, y  |
| on-drag-stop | 拖拽结束事件  | x, y  |

### Methods

| 事件名      | 说明    | 返回值      |
|---------- |-------- |---------- |
| filter | 对树节点进行筛选操作  | 接收一个任意类型的参数，该参数会在 filter-node-method 中作为第一个参数  |
| getExpandKeys | 获取当前展开的key数组  | 返回节点的 key 的数组  |
| setExpandKeys | 设置展开的key数组，接收节点的 key 的数组作为参数  |   |

### Slot

| name      | 说明    |
|---------- |-------- |
| — | 自定义节点内容，参数为 { node }  |
| expand | 自定义节点展开按钮内容，参数为 { node }  |
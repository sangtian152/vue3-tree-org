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


### Attributes

| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| data     | 数据源,必须传入   | Object  |  —   |   —   |
| props    | 配置选项，具体看下表   | Object  |  —   |  {id: 'id', pid: 'pid', label: 'label', expand: 'expand',children: 'children'  }  |
| toolBar    | 工具栏   | [Object, Boolean] |  —   |  {scale: true, restore: true, expand: true, zoom: true, fullscreen: true,  }  |
| horizontal     | 是否是横向   | Boolean  | true,false  |  false  |
| collapsable     | 是否可以展开收起节点   | Boolean  | true,false  |  false  |
| default-expand-level     | 默认展开层级（如果层级内有节点展开属性值为false，该节点不会默认展开）   | Number  | ——  |  ——  |
| disabled     | 禁止编辑，设为true后，所有节点不可新增下级、编辑和删除，单个节点禁止编辑，可将节点属性设置disabled为true   | Boolean  | true,false  |  true  |
| scalable     | 架构图是否可缩放   | Boolean  | true,false  |  true  |
| draggable     | 架构图是否可拖拽，单个节点禁止拖拽，可将节点属性设置noDragging为true   | Boolean  | true,false  |  true  |
| draggable-on-node     | 架构图拖拽在节点触发，node-draggable值为false时，设为true才有效  | Boolean  | true,false  |  false  |
| node-draggable     | 节点是否可拖拽   | Boolean  | true,false  |  true  |
| clone-node-drag     | 是否拷贝节点拖拽   | Boolean  | true,false  |  true  |
| only-one-node     | 是否仅拖动当前节点，如果true，仅拖动当前节点，子节点自动添加到当前节点父节点，如果false，则当前节点及子节点一起拖动   | Boolean  | true,false  |  true  |
| node-add  | 自定义节点新增，覆盖默认新增行为（参数当前节点node）  | Function   |  —   |   —   |
| node-delete  | 自定义节点删除，覆盖默认新增行为（参数当前节点node） | Function   |  —   |   —   |
| node-edit  | 自定义节点编辑，覆盖默认新增行为（参数当前节点node） | Function   |  —   |   —   |
| node-copy  | 复制节点文本，覆盖默认复制节点文本行为（参数当前节点node） | Function   |  —   |   —   |
| define-menus  | 自定义右键菜单，接受包含name和command属性的对象数组 | Array   |  —  |   [{ name: '复制文本', command: 'copy' },{ name: '新增节点', command: 'add' },{ name: '编辑节点', command: 'edit' },{ name: '删除节点', command: 'delete' }]   |
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

### Events

| 事件名      | 说明    | 返回值      |
|---------- |-------- |---------- |
| on-expand | 节点展开事件，注意，展开节点时如监听了label点击事件，则需要阻止冒泡 e.stopPropagation()  | e, data  |
| on-node-click | 节点点击事件  | e, data  |
| on-node-dblclick | 节点双击事件  | e, data  |
| on-node-focus | 节点获取焦点事件  | e, data  |
| on-node-blur | 节点失去焦点事件  | e, data  |
| on-node-copy | 复制节点文本事件，如果设置了node-copy属性，此事件将不会执行  | 复制的文本  |
| on-node-delete | 删除节点事件，如果设置了node-delete属性，此事件将不会执行  | 删除的节点  |
| on-contextmenu | 右键菜单点击事件  | {command, node}  |
| on-zoom | 缩放事件  | scale缩放倍数  |
| on-drag | 拖拽事件  | x, y  |
| on-drag-stop | 拖拽结束事件  | x, y  |

### Slot

| name      | 说明    |
|---------- |-------- |
| — | 自定义节点内容，参数为 { node }  |
| expand | 自定义节点展开按钮内容，参数为 { node }  |
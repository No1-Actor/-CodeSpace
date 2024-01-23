/**
 * @func 就地编辑
 * @params {id: string, parent: string, value: string} 
 */
function EditInPlace(id, parent, value) {
    this.id = id;
    this.parent = parent;
    this.value = value || '这个家伙很懒，什么都没有留下'
    this.createElements() // 动态装载html结点
    this.attachEvents() // 绑定事件

}
EditInPlace.prototype = {
    createElements: function() {
        this.containerElement = document.createElement('div') // 创建容器元素
        this.containerElement.id = this.id // 为容器设置id
        // 签名文字部分
        this.staticElement = document.createElement('span') // 创建静态元素
        this.staticElement.innerHTML = this.value // 设置静态元素的内容
        this.containerElement.appendChild(this.staticElement) // 将元素添加到容器中
        // 输入框
        this.fieldElement = document.createElement('input') // 创建输入框元素
        this.fieldElement.type = 'text' // 设置输入框类型
        this.fieldElement.value = this.value // 设置输入框内容
        this.containerElement.appendChild(this.fieldElement) // 将输入框添加到容器中
        // save 确认
        this.saveButton = document.createElement('input') // 创建input按钮
        this.saveButton.type = 'button' // 设置按钮类型
        this.saveButton.value = '保存' // 设置按钮内容
        this.containerElement.appendChild(this.saveButton) // 将按钮添加到容器中
        // 取消按钮
        this.cancelButton = document.createElement('input') // 创建input按钮
        this.cancelButton.type = 'button' // 设置按钮类型
        this.cancelButton.value = '取消' // 设置按钮内容
        this.containerElement.appendChild(this.cancelButton) // 将按钮添加到容器中
        
        this.parent.appendChild(this.containerElement) // 将容器添加到父元素中
        this.convertToText() // 转换为文本模式

    },
    convertToText: function() {
        this.staticElement.style.display = 'inline' // 显示静态元素
        this.fieldElement.style.display = 'none' // 隐藏输入框
        this.saveButton.style.display = 'none' // 隐藏保存按钮
        this.cancelButton.style.display = 'none' // 隐藏取消按钮
    },
    convertToEdit: function() {
        this.staticElement.style.display = 'none' // 隐藏静态元素
        this.fieldElement.style.display = 'inline' // 显示输入框
        this.saveButton.style.display = 'inline' // 显示保存按钮
        this.cancelButton.style.display = 'inline' // 显示取消按钮
    },
    attachEvents: function() {
        // this 丢失 第一种方法 that
        // var that = this
        // this.saveButton.addEventListener('click', function() {
        //     that.value = that.fieldElement.value
        //     that.convertToText()
        // })   

        // this.staticElement.addEventListener('click', () => {
        //     // function() this丢失 第二种方法 用箭头函数
        //     this.convertToEdit()
        // }) // 绑定事件

        var that = this
        // this 丢失 第三种方法 bind
        this.staticElement.addEventListener('click', 
            this.convertToEdit.bind(this) 
        ) 
        this.cancelButton.addEventListener('click', 
            this.convertToText.bind(this) 
        )
        this.saveButton.addEventListener('click', function(){
            var val = that.fieldElement.value
            that.staticElement.innerText = val
            that.convertToText()            
        })
    }
}
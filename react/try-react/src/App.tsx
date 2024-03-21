// facebook JS Way 不用学api
// 函数就是组件
// 返回一段template的就是组件
// hooks
import * as React from 'react'
import Hello from './hello'
import NameEditComponent from './nameEdit'
function App() {
  // readctive hooks
  // name 是状态名
  // setName 调用它可以修改值 响应式
  // react 函数式
  const [name, setName] = React.useState('initialName')
  const obj = {a:1} // model
  // JSX 是 React表示模版的创新写法，在JS里面写HTML
  // HTML 是表示UI界面最直接，最简单

  
  const setUsernameState = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value) 
  } 

  return(
    // view
    <>  
      <div>
          App
          {/* ViewModel */}
          {obj.a}  
          <Hello userName="john"/>
          <NameEditComponent userName={name} onChange={setUsernameState}/>
      </div>
    </>
  )
}

export default App

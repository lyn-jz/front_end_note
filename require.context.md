require.context是webpack的api，用于获取一个特定的上下文,主要用来实现自动化导入模块。

参数：
1. directory：读取文件的目录路径
2. useSubdirectories = false：是否应用在子目录
3. regExp：匹配文件的正则

返回一个函数context，该函数具有3个属性：
1. resolve：函数，参数为keys返回数组的元素，返回该元素相对project的路径。
2. keys：函数，返回匹配成功模块的名字
3. id：字符串，内容是directory相对于project的相对路径、是否遍历子目录、匹配正则组成的字符串

context函数
1. 参数：keys返回数组的元素（模块名）
2. 返回：该元素导出的模块，等同于import

使用场景：导入模块较多、导入图标文件

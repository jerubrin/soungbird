// Create new element with one string
// tag_name.class-name.another-class-name.how-many-that-you-need-classes=content
// For example:
// div.main-block.red-color.display-none=this is content inside block
export function createNewElement(data){
    let vals = data.split("=")
    let htmlData = vals[0].split('.')
    let _contentData = vals.length > 1 ? vals.filter((_, i) => i != 0).join('=') : ''
    htmlData[0] = htmlData[0].split('').filter(ch => ch != ' ').join('')
    let _name = htmlData[0] == '' ? 'div' : htmlData[0];
    let _classList = htmlData.filter((_, i) => i != 0)
    let element = document.createElement(_name);
    _classList = _classList.map(it => 
        it.split('').filter(ch => ch != ' ').join('')
    )
    _classList.forEach(cls => {element.classList.add(cls)});
    element.innerHTML = _contentData
    return element
}
//The same, but you can use several args for creating element's array
export function createNewElements() {
    if(arguments.length == 0) return createNewElement('')
    let args = arguments.length == 1 ? arguments[0] : [...arguments]
    let resArr = [];
    args.forEach(data => {
        resArr.push(
            createNewElement(data)
        )
    })
    return resArr.length == 1 ? resArr[0] : resArr
}
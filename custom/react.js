function customRender(customRender,container){
const domElement=document.createElement(reactElement.type)
domElement.innerHTML=reactElement.children
for (const prop in reactElement.props) {
        if(prop==='children') continue;
        domElement.setAttribute(prop,reactElement.props[prop])
    }
    container.appendChild(domElement)
}
// domElement.setAttribute('herf',reactElement.props.herf)
// domElement.setAttribute('target',reactElement.props.target)
 
const reactElement={
    type:'a',
    props:{
        herf:'https://google.com',
        target:'_blank'
    },
    children:'click me to visit google for searching..',

}
const mainContainer=document.getElementById('root')
customRender(reactElement,mainContainer)

function chamarFuncaoElement(){

    let saida = document.getElementById("exemplos")
    let textoSaida = ""

    //Propriedade accessKey - Define ou retorna o atributo accesskey de um elemento. Especifica uma tecla de atalho para ativar ou focar um elemento. 
    let element_accessKey = document.getElementById("exemplos").accessKey = "w";

    //Método addEventListener() - Anexa um manipulador de eventos a um elemento.
    saida.addEventListener("click", funcao)
    function funcao() {
    alert('Método addEventListener() chamado com o click')
    }

    //Método appendChild() - anexa um elemento como o último filho de um elemento.
    const criarEelementoLi = document.createElement("li")
    const textoListaAppendChild = document.createTextNode("Item Criado com appendChild")
    criarEelementoLi.appendChild(textoListaAppendChild)
    document.getElementById("listaExemplo").appendChild(criarEelementoLi)

    //Propriedade attributes - Retorna uma coleção de atributos em um elemento.
    let element_attributes = document.getElementById("listaExemplo").attributes

    //Método blur() - Remove o foco de um elemento.
    document.getElementById("nome").blur()

    //Propriedade childNodes - Retorna uma coleção (lista) dos nós filhos de um elemento.
    let element_childNodes = document.getElementById("listaExemplo").childNodes
    let element_childNode = ""
    for (i=0; i < element_childNodes.length; i++) {
        element_childNode += element_childNodes[i] + " / "
    }

    //Propriedade children - Retorna uma coleção de elementos filho de um elemento.
    let element_children = document.getElementById("listaExemplo").children
    let element_child = ""
    for (i=0; i < element_children.length; i++) {
        element_child += element_children[i].innerHTML + " / "
    }

    //Propriedade classList - Retorna os nomes de classe CSS de um elemento.
    let element_classList = document.getElementById("divExemplo").classList

    //Propriedade className - Define ou retorna o atributo de classe de um elemento.
    let element_className = document.getElementById("divExemplo").className

    //Método click() - Simula um clique do mouse em um elemento.
    function funcaoClick() {    
        let checkbox = document.getElementById("checkboxClick")
        checkbox.click()
    }

    //Método cloneNode() - Cria uma cópia de um nó e retorna o clone.
    let element_original = document.getElementById("listaExemplo").lastChild
    let element_cloneNode = element_original.cloneNode(true)

    //Método contains() - Retorna true se um nó espeficiado for descendente de um nó.
    let element_contains = document.getElementById("listaExemplo").contains(document.getElementById("item1"))

    //Propriedade contentEditable - Define ou retorna se o conteúdo de um elemento é editável.
    let element_contentEditable = document.getElementById("listaExemplo").contentEditable

    //Propriedade firstChild - Retorna o primeiro nó filho de um nó. Os espaços em branco entre os elementos são considerados nós de texto.
    let element_firstChild = document.getElementById("listaExemplo").firstChild

    //Propriedade firstElementChild - Retorna o primeiro elemento filho do elemento especificado. Os espaços em branco entre os elementos NÃO são considerados nós de texto.
    let element_firstElementChild = document.getElementById("listaExemplo").firstElementChild

    //Método focus() - Dá foco a um elemento
    document.getElementById("sobrenome").focus()

    //Método getAttribute() - Retorna o valor do atributo de um elemento.
    let element_getAttribute = document.getElementById("nome").getAttribute("type")

    //Método getAttribute() - Retorna o atributo de um elemento.
    let element_getAttributeNode = document.getElementById("nome").getAttributeNode("type").value    

    //Método hasAttribute() - Retorna true se o atributo existir, caso contrário false.
    let element_hasAttribute = document.getElementById("nome").hasAttribute("type")    

    //Método hasAttributes() - Retorna truese um nó tiver atributos, caso contrário false, .
    let element_hasAttributes = document.getElementById("nome").hasAttributes()    

    //Método hasChildNodes() - Retorna verdadeiro se o nó especificado tiver algum nó filho, caso contrário, falso.
    let element_hasChildNodes = document.getElementById("nome").hasChildNodes()  

    //Propriedade id - Define ou retorna o valor do atributo id de um elemento.
    let element_id = document.getElementById("nome").id  

    //Propriedade innerHTML - Define ou retorna o conteúdo HTML de um elemento.
    let element_innerHTML = document.getElementById("item1").innerHTML  

    //Propriedade innerText - Define ou retorna o conteúdo de texto de um elemento.
    let element_innerText = document.getElementById("item1").innerText  

    //Método insertAdjacentElement() - Insere um elemento em uma posição especificada. Os valores são: afterbegin - After the beginning of the element (first child) /  
    //afterend - After the element / beforebegin - Before the element / beforeend   Before the end of the element (last child)
    let element_insertAdjacentElement = document.getElementById("item1").insertAdjacentElement("beforebegin", document.getElementById("item2"))  

    //Método insertAdjacentHTML() - Insere o código HTML em uma posição especificada. Os valores são: afterbegin - After the beginning of the element (first child) /  
    // afterend - After the element / beforebegin - Before the element / beforeend - Before the end of the element (last child)
    let element_insertAdjacentHTML = document.getElementById("item2").insertAdjacentHTML("beforebegin", "<li>Texto de exemplo 3</li>")  

    //Método insertAdjacentText() -  Insere um texto em uma posição especificada. Os valores são: afterbegin - After the beginning of the element (first child) /  
    // afterend - After the element / beforebegin - Before the element / beforeend - Before the end of the element (last child)
    let element_insertAdjacentText = document.getElementById("item2").insertAdjacentText("beforebegin", "Texto de exemplo 4")

    //Método insertBefore() - Insere um nó filho antes de um filho existente. Os valores são: new - The node (element) to insert / existing - The node (element) to insert before.
    const newNode = document.createElement("li");
    const textNode = document.createTextNode("Texto de Exemplo 5");
    newNode.appendChild(textNode);
    let element_insertBefore = document.getElementById("listaExemplo").insertBefore(newNode, document.getElementById("listaExemplo")[4])

    //Propriedade isContentEditable - Define ou retorna se o conteúdo de um elemento é editável.
    let element_isContentEditable = document.getElementById("listaExemplo").isContentEditable

    //Propriedade lang - Define ou retorna o valor do atributo lang de um elemento.
    let element_lang = document.getElementById("item1").lang

    //Propriedade lastChild - Retorna o último nó filho de um nó. Os espaços em branco entre os elementos são considerados nós de texto.
    let element_lastChild = document.getElementById("listaExemplo").lastChild

    //Propriedade lastElementChild - Retorna o último elemento filho do elemento especificado. Os espaços em branco entre os elementos NÃO são considerados nós de texto.
    let element_lastElementChild = document.getElementById("listaExemplo").lastElementChild

    //Método matches() - Retorna true se um elemento corresponder a um(s) seletor(es) CSS específico(s).
    let element_matches = document.getElementById("divExemplo").matches(".exemplo") 

    //Propriedade namespaceURI - Retorna o URI de um namespace de elementos.
    let element_namespaceURI = document.getElementById("listaExemplo").namespaceURI

    //Propriedade nextSibling - Retorna o próximo nó no mesmo nível de árvore. Os espaços em branco entre os elementos são considerados nós de texto.
    let element_nextSibling = document.getElementById("item1").nextSibling

    //Propriedade nextElementSibling - Retorna o próximo elemento no mesmo nível de árvore. Os espaços em branco entre os elementos NÃO são considerados nós de texto.
    let element_nextElementSibling = document.getElementById("item1").nextElementSibling

    //Propriedade nodeName - Retorna o nome de um nó.
    let element_nodeName = document.getElementById("item1").nodeName

    //Propriedade nodeType - Retorna o tipo de nó, como um número, do nó especificado. Se for um nó de elemento, retornará 1. Se for um nó de atributo, retornará 2.
    // Se for um nó de texto, retornará 3. Se for um nó de comentário, retornará 8.
    let element_nodeType = document.getElementById("item1").nodeType

    //Propriedade nodeValue - Define ou retorna o valor de um nó.
    let element_nodeValue = document.getElementById("item1").childNodes[0].nodeValue

    //Propriedade outerHTML - Define ou retorna o elemento HTML, incluindo atributos, marca inicial e marca final.
    let element_outerHTML = document.getElementById("item2").outerHTML

    //Propriedade outerText - Define ou retorna o conteúdo de texto do nó especificado.
    let element_outerText = document.getElementById("item2").outerText

    //Propriedade ownerDocument - Retorna o documento proprietário de um nó, como um objeto Document.
    let element_ownerDocument = document.getElementById("item2").ownerDocument

    //Propriedade parentNode - Retorna o nó pai de um elemento ou nó.
    let element_parentNode = document.getElementById("item2").parentNode

    //Propriedade parentElement - Retorna o nó pai de um elemento ou nó.
    let element_parentElement = document.getElementById("item2").parentElement

    //Propriedade previousSibling - Retorna o nó anterior no mesmo nível de árvore.
    let element_previousSibling = document.getElementById("item2").previousSibling

    //Propriedade previousElementSibling - Retorna o nó anterior no mesmo nível de árvore.
    let element_previousElementSibling = document.getElementById("item2").previousElementSibling

    //Método querySelector() - Retorna o primeiro elemento filho que corresponde a um( s) seletor(es) CSS especificado(s) de um elemento.
    let element_querySelector = document.querySelector(".item2")

    //Método querySelectorAll() - Retorna uma coleção de elementos filhos de um elemento que correspondem a um(s) seletor(es) CSS especificado(s).
    let element_querySelectorAll = document.querySelectorAll(".listaExemplo")

    //Método remove() - Remove um elemento (ou nó) do documento.
    let element_remove = document.getElementById("item3").remove()

    //Método removeAttribute() - Remove um atributo de um elemento.
    let element_removeAttribute = document.getElementById("nome").removeAttribute("value")

    //Método removeAttributeNode() - Remove um atributo de um elemento.
    let atributo = document.getElementById("sobrenome").getAttributeNode("value")
    let element_removeAttributeNode = document.getElementById("sobrenome").removeAttributeNode(atributo)

    //Método removeChild() - Remove um atributo de um elemento.
    let element_removeChild = document.getElementById("listaExemplo").removeChild(document.getElementById("listaExemplo").firstElementChild)

    //Método removeEventListener() - Remove um manipulador de eventos de um elemento.
    // let element_removeEventListener = myDiv.addEventListener("mousemove", myFunction);

    //Método replaceChild() - Substitui um nó filho por um novo nó.
    const novoNo = document.createTextNode("Texto do Novo Nó");
    const elementNovoNo = document.getElementById("listaExemplo").children[0];
    let element_replaceChild = elementNovoNo.replaceChild(novoNo, elementNovoNo.childNodes[0]);

    //Método setAttribute() - Define um novo valor para um atributo.
    let element_setAttribute = document.getElementById("item2").setAttribute("valor", "Texto do valor")

        
    textoSaida = 
    `element_accessKey = ${element_accessKey}<br>
     saida.addEventListener = Clique aqui para ver o evento<br>
     element_attributes = ${element_attributes.length} / ${element_attributes.id.name} / ${element_attributes.id.value}<br>
     element_childNodes length = ${element_childNodes.length}<br>
     element_childNode = ${element_childNode}<br>
     element_children length = ${element_children.length}<br>
     element_child = ${element_child}<br>
     element_classList = ${element_classList}<br>
     element_className = ${element_className}<br>
     element_cloneNode = ${element_cloneNode.innerHTML}<br>
     element_contains = ${element_contains}<br>
     element_contentEditable = ${element_contentEditable}<br>
     element_firstChild = ${element_firstChild}<br>
     element_firstElementChild = ${element_firstElementChild.innerHTML}<br>
     element_getAttribute = ${element_getAttribute}<br>
     element_getAttributeNode = ${element_getAttributeNode}<br>
     element_hasAttribute = ${element_hasAttribute}<br>
     element_hasAttributes = ${element_hasAttributes}<br>
     element_hasChildNodes = ${element_hasChildNodes}<br>
     element_id = ${element_id}<br>
     element_innerHTML = ${element_innerHTML}<br>
     element_innerText = ${element_innerText}<br>
     element_isContentEditable = ${element_isContentEditable}<br>
     element_lang = ${element_lang}<br>
     element_lastChild = ${element_lastChild}<br>
     element_lastElementChild = ${element_lastElementChild.innerHTML}<br>
     element_matches = ${element_matches}<br>
     element_namespaceURI = ${element_namespaceURI}<br>
     element_nextSibling = ${element_nextSibling}<br>
     element_nextElementSibling = ${element_nextElementSibling.innerHTML}<br>
     element_nodeName = ${element_nodeName}<br>
     element_nodeType = ${element_nodeType}<br>
     element_nodeValue = ${element_nodeValue}<br>
     element_outerHTML = ${element_outerHTML}<br>
     element_outerText = ${element_outerText}<br>
     element_ownerDocument = ${element_ownerDocument.nodeType}<br>
     element_parentNode = ${element_parentNode.nodeName}<br>
     element_parentElement = ${element_parentElement.nodeName}<br>
     element_previousSibling = ${element_previousSibling}<br>
     element_previousElementSibling = ${element_previousElementSibling.innerHTML}<br>
     element_querySelector = ${element_querySelector.innerHTML}<br>
     element_querySelectorAll = ${element_querySelectorAll[0].childNodes[1].innerHTML}<br>
     element_setAttribute = ${element_setAttribute}<br>
     `

    saida.innerHTML = textoSaida
}

//Método click() - Simula um clique do mouse em um elemento.
    function funcaoClick() {    
        let checkbox = document.getElementById("checkboxClick")
        checkbox.click()
    }
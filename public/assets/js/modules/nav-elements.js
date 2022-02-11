export function createRadio(title){
    const radio = document.createElement('input')
    radio.setAttribute('type', 'radio')
    radio.setAttribute('name', 'graph-link')
    radio.setAttribute('id', `${title}-input`)
    radio.setAttribute('data-radio', 'graph')
    radio.setAttribute('data-target', `${title}`)

    return radio
}

export function createLabel(title, text){
    const label = document.createElement('label')
    label.setAttribute('for', `${title}-input`)
    label.innerText = text

    return label
}

export default function fillNavContainer( obj ){
    const title = obj.title.toLowerCase().split(' ').join('-')
    const linksContainer = document.querySelector('[data-container="links"]')
    const label = createLabel(title, obj.title)
    const radio = createRadio(title)

    linksContainer.appendChild(label)
    linksContainer.appendChild(radio)

    return linksContainer
}
const leftdiv = (title1,  para1) => {
    let mydiv = document.createElement("mydiv")
    mydiv.className = "leftclass"
    mydiv.innerHTML = `<h1>${title1}</h1>        
                        <p>${para1}</p>
                        
                        `
    return mydiv
}

export {leftdiv}
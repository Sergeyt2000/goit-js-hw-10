import"./assets/modulepreload-polyfill-B5Qt9EMX.js";/* empty css                      */import{i as o}from"./assets/vendor-BbbuE1sJ.js";const n="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAE5SURBVHgB3VXtjcIwDHU36AZkhG5w3eDYgNuA26DdJGIC2AAxAWwQNigbGEe80Crkq8AfsPRUNbHfs1vHIfp0q3IOzFzLYyVoBArLF8FOcKiq6kzPmBArgebRjGAPDJN1jST8+CZF3oLEohMsEglYYeXt9RBvQuRLbB79wMLKHXlHkawMUL+VHA4aDopmWgm5cj+NZlqWHE5/fvbJTphDDset7ZopOQL7l8nhvLfw1rqYSIxc3v8tigRiIqnMYzyugwyFq7uL5D4L3w7nNrSxRuAiI5Iid524Cm3WqeCJyDqxr/1ODDkM/NxBy58jOFkBO4eKRwWqNxwYfCHnFpnkncekjohZUonxbaIaV3JICMQ9j2P9h+YYP144A48Xjpms61SlJVemkkcr+BW4/3IWnAQbuTIv9NV2BWowRs0sVifzAAAAAElFTkSuQmCC",s="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAEjSURBVHgBzVWBDYIwEDw3YAM7ghvICG6AG8gGuIFuwAjECRjBEXQD3eB9zCEf0lpASLzkE/iv99/eWYB/gogcNDIsASU+S4cT5oQSOhKXDTmfHeaCklUaNzZKNB4aNeaAEu05cWZyOXMpfgUnv3nyV9YSTIX++MhJt3zftztppmetwBRYYfm+My5Kmauoh8NY0DEft/QabM0Q4wU3ZIXJbfoNmC9GC+4T1hxZg7XJJxIwQog879vS1N7w5FvB8xi54zQlBu7M1GrqkXxrUFphAyQVwsM1OCGyYJqvERG83b588bSYP1qg7r+nxHPfBMhlxLqsTbghNhvagGvrj+DS3TcOEcSOyKzr7ik+lJgZdORjRUFSLIP7ikezxIf8qXHB0ngB0x4XMNg0o7IAAAAASUVORK5CYII=",l="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAEaSURBVHgBrZZhDoIwDIUL0fjXo3gUb7R5Er0BHsXD7A+bASlhYeC6V4WXGCHr3reNtkAkqG2D9T70mh/HSj4HybyqyPQ9PeuaXlRQ19GFY4c5dDodLSHNK3/fSam29Q+0k7/N1ZAt5hCyh7kIKZl77y/IMBezgEwXTW4ienBxcc65DCQ0PDYCQghGMDASJJpzTG4ue0KABEHmKeBAQEPx3LiIhmKy/M+aitDyGJoPAWsI32vNWTXpVQnXRal2kPQmO7pPx6XpPRCQmsdjSZ8JhIA0FbOllMKsRZqCQoMpXCy0GJRrFc7hVpGLSVqFWaxk52ZnVgPbIaL5HhBovgVSMv+qg7kt9JznZ+VL//pL+5hWFXei+mwRj+UDSHQ9vnHBEYAAAAAASUVORK5CYII=",e=document.querySelector(".form");document.querySelector(".form-input");e.addEventListener("submit",c);function c(t){t.preventDefault();const A=document.querySelector(".form-input").value;if(A<=0){o.warning({title:"Caution",position:"topRight",messageColor:"#fff",backgroundColor:"#ffa000",iconColor:"#fff",titleColor:"#fff",close:!0,closeColor:"#fff",iconUrl:s,message:"You forgot important data"}),e.reset();return}const r=document.querySelector('input[name="state"]:checked');new Promise((i,f)=>{setTimeout(()=>{r.value==="fulfilled"&&i(A),f(A)},A)}).then(()=>{o.success({title:"OK",position:"topRight",backgroundColor:"#59a10d",iconColor:"#fff",titleColor:"#fff",messageColor:"#fff",close:!0,closeColor:"#fff",iconUrl:n,message:`✅ Fulfilled promise in ${A}ms`})}).catch(()=>{o.error({title:"Error",position:"topRight",messageColor:"#fff",backgroundColor:"#ef4040",iconColor:"#fff",titleColor:"#fff",close:!0,closeColor:"#fff",iconUrl:l,message:`❌ Rejected promise in ${A}ms`})}).finally(()=>e.reset())}
//# sourceMappingURL=2-snackbar.js.map

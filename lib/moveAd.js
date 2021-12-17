window.addEventListener('load', function() {
    const js_el = this.document.getElementById('ecomScript')
    if (js_el){
    js_el.parentNode.removeChild(js_el)
    }
    const content_left = this.document.getElementById('content_left')
    for (let index = 0; index< content_left.childElementCount; index ++ ){
        let e = content_left.children[index];
        if (e.attributes.length==0) {
            console.log(e.attributes)
            e.parentNode.removeChild(e)
        } 
        else{
            if(e.textContent.split('')[1] == '广告'){
                console.log(e.textContent)
                e.parentNode.removeChild(e)
            }
            else{
                if (e && e.getElementsByTagName('span')){
                    const spans = e.getElementsByTagName('span')
                    if (spans.length>0){
                        for (let i =0; i<spans.length -1; i++){
                            try{
                            if (spans[index].textContent.indexOf('广告')>-1){
                                e.parentNode.removeChild(e)
                                break
                            }
                            }
                            catch(err){
                                console.log(spans, index)
                            }
                       }
                    }
                }
            }
        }
    }
    
})

window.addEventListener('click', function() {
  const js_el = this.document.getElementById('ecomScript')
  if (js_el){
    js_el.parentNode.removeChild(js_el)
  }
    const content_left = this.document.getElementById('content_left')
    for (let index = 0; index< content_left.childElementCount; index ++ ){
        let e = content_left.children[index];
        if (e.attributes.length==0) {
            console.log(e.attributes)
            e.parentNode.removeChild(e)
        } else{
            if (e.textContent.split('')[1] == '广告'){
                console.log(e.textContent)
                e.parentNode.removeChild(e)
            }
            else{
                               if (e && e.getElementsByTagName('span')){
                    const spans = e.getElementsByTagName('span')
                    if (spans.length>0){
                        for (let i =0; i<spans.length -1; i++){
                            try{
                            if (spans[index].textContent.indexOf('广告')>-1){
                                e.parentNode.removeChild(e)
                                break
                            }
                            }
                            catch(err){
                                console.log(spans, index)
                            }
                       }
                    }
                }
            }
        }
    }
    
})

window.addEventListener('scroll', function () {
    const js_el = this.document.getElementById('ecomScript')
    if (js_el) {
        js_el.parentNode.removeChild(js_el)
    }
    const content_left = this.document.getElementById('content_left')
    for (let index = 0; index < content_left.childElementCount; index++) {
        let e = content_left.children[index];
        if (e.attributes.length == 0) {
            console.log(e.attributes)
            e.parentNode.removeChild(e)
        } else {
            if (e.textContent.split('')[1] == '广告') {
                console.log(e.textContent)
                e.parentNode.removeChild(e)
            } else {
                if (e && e.getElementsByTagName('span')) {
                    const spans = e.getElementsByTagName('span')
                    if (spans.length > 0) {
                        for (let i = 0; i < spans.length - 1; i++) {
                            try {
                                if (spans[index].textContent.indexOf('广告') > -1) {
                                    e.parentNode.removeChild(e)
                                    break
                                }
                            } catch (err) {
                                console.log(spans, index)
                            }
                        }
                    }
                }
            }
        }
    }

})

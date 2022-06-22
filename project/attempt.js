

 var dataName=fetch("/data.json")                   //data.json dosyasını fetch ile çekip dataName değişkenine atadım.
.then(response=>response.json())
.then(dataName=>makeGroup(dataName))
.then(data => console.log("grups", data))
.catch(error=>console.log("error",error))


function makeGroup(dataName){                        // aynı gruptaki bireyleri reduce fonsiyonu kullanarak bir araya getirdim.

return dataName?.reduce((result,item) => {
        (result[item.group] = result[item.group] || [] ).push(item);
        return result ;
        console.log(result)
       
    },{}) }

var newArray=fetch("/data.json") 
.then(response=>response.json())
.then(dataName=>assistantName(dataName))
.then(data => console.log("assistant", data))
.catch(error=>console.log("error",error))

function assistantName(newArray){                 // grup assistanlarını filter fonksiyonu ile getirttim.
       
return newArray?.filter(name =>name.assistant == true )  
   
    }
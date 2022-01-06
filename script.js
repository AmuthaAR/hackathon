let res=fetch("https://www.anapioficeandfire.com/api/books");
res.then((data)=>{
  return data.json();
}).then((data)=>{
  console.log(data)
  for(var i in data){
    console.log(`
                 [{
                 "name:${data[i].name}"

                 "isbn:${data[i].isbn}" 

                 "numberOfPages:${data[i].numberOfPages}"

                 "publisher:${data[i].publisher}"

                 "released:${data[i].released}" 

                 "authors:${data[i].authors}"

                 "characters:${data[5].characters}"
                 }]`)
  }
}).catch((error)=>console.log(error));

async function getdata(){
  try{
    let result=await fetch("https://www.anapioficeandfire.com/api/characters")
    let res1=await result.json();
    console.log(res1);
    for(var i in res1){ 
      console.log()
    }
  }
   
  catch(error){
     }
  }
  getdata();

  
  let res2=fetch("https://www.anapioficeandfire.com/api/books");
  res2.then((data)=>{
    return data.json();
  }).then((data)=>{
    console.log(data);
  
   

  var books={
    
      "name" :"string",
      "isbn" :"string",
      "numberOfPages" :"integer",
      "publisher" :"string",
      "released" :"date",
      "authors" :"string",
      "characters" :"array of string"
    
  };
   var name=document.createElement('name');
  name.innerHTML=data.name;
 
  var isbn=document.createElement('isbn');
  isbn.innerHTML=data.isbn;
  
  var numberOfPages=document.createElement('numberOfPages');
  numberOfPages.innerHTML=data.numberOfPages;
  
  var publisher=document.createElement('publisher');
  publisher.innerHTML=data.publisher;
  
  var released=document.createElement('released');
  released.innerHTML=data.released;
  
  var authors=document.createElement('authors');
  authors.innerHTML=data.authors;
  
  var characters=document.createElement('characters');
  characters.innerHTML=data.characters;

  function foo(){

  
  for(var i in data){
    console.log(data);
  }
}
});

  
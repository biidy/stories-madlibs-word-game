/*for changing the element to fill*/
function assigner (cont,elem){
     for(ech of elem) {
        ech.innerText = cont;
         ech.style.color= 'orange';
}
}

let adverbs = document.querySelectorAll('.adverb');
    assigner('[adverb]',adverbs);

let verbs =document.querySelectorAll('.verb');
    assigner('[verb]',verbs);

let adjectifs =document.querySelectorAll('.adjectif');
    assigner('[adjectif]',adjectifs);

let nouns =document.querySelectorAll('.noun');
    assigner('[noun]',nouns);

/*here we will go to make the button storie to be clicked*/
function display( storie){
    let story1=document.getElementById(storie);
            story1.style.display='block';
    let back= document.getElementById('back');
        back.style.display='block';       

    let gomad= document.getElementById('gomad');
        gomad.style.display='none';
    let random= document.getElementById('random');
        random.style.display='none';    
    let guide= document.getElementById('guide');
        guide.style.display='none';  
    let clear =document.getElementById('clear');
        clear.style.display='none';
        
    let tab= document.getElementById('tab');
        tab.style.display='none';    
    
        
}
/*fonction for the back button*/
function back (storie){
    let tab= document.getElementById('tab');
        tab.style.display='block';  
        
        let gomad= document.getElementById('gomad');
        gomad.style.display='block';
    let random= document.getElementById('random');
        random.style.display='block';    
    let guide= document.getElementById('guide');
        guide.style.display='block';  
    let clear =document.getElementById('clear');
        clear.style.display='block';     

        let back= document.getElementById('back');
        back.style.display='none'; 
        let story1=document.getElementById(storie);
            story1.style.display='none';
}



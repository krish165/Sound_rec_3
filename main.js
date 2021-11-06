function start()
{
    navigator.mediaDevices.getUserMedia({audio:true});
    classifier=ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/lWOErEdVx/model.json",modelReady);
}
function modelReady()
{
    classifier.classify(gotResults);
    
}

function gotResults(error,results)
{
  

   if(error)
   {
       console.log(error);
   }
   else{
       console.log(results);

       random_r=Math.floor(Math.random()*255)+1;
       random_g=Math.floor(Math.random()*255)+1;
       random_b=Math.floor(Math.random()*255)+1; 

       document.getElementById("result_confidence").innerHTML="Detected lion roaring"+"  :  "+Math.floor(results[4].confidence*100).toFixed(2)+" , "+"Detected dog barking"+" :  "+Math.floor(results[3].confidence*100).toFixed(2)+" , "+"Detected cat meowing"+" :  "+Math.floor(results[2].confidence*100).toFixed(2)+" , "+"Detected budgies chirping"+" : "+Math.floor(results[0].confidence*100).toFixed(2);
       document.getElementById("result_label").innerHTML="Detected Animal Sound"+" : "+results[0].label;
    }

   budgie=0;
   lion=0;
   dog=0;
   cat=0;

   img=document.getElementById("image_results");

   if(results[0].label=="Budgie Chirping")
   {
       document.getElementById("result_label").style.color="rgb("+random_r+","+random_g+","+random_b+")";
       img.src="budgies.gif";
       
    }
    else if(results[0].label=="Cat Meow")
   {
       document.getElementById("result_label").style.color="rgb("+random_r+","+random_g+","+random_b+")";
       img.src="cat.gif";
       
    }

    else if(results[0].label=="Dog Bark")
    {
        document.getElementById("result_label").style.color="rgb("+random_r+","+random_g+","+random_b+")";
        img.src="dog.gif";
        
     }
     else if(results[0].label=="Lion Roar")
     {
         document.getElementById("result_label").style.color="rgb("+random_r+","+random_g+","+random_b+")";
         img.src="lion_roar.gif";
         
      }
    else
     {
        img.src="https://images.squarespace-cdn.com/content/v1/550297e8e4b0bbcda6d9cd85/1563863770484-2WKAZ1P9YJ8TP04D7KWU/Ear.gif?format=2500w";

        
     }
}

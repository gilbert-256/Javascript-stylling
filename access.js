 /**Defining function access with parameters */
 function access(a,b,c,d,e){
  const demoid=document.getElementById(a)
  const democlas=document.getElementsByClassName(b)
  const demotag=document.getElementsByTagName(c)
  const  demoquery=document.querySelector(d)
  const demoqueryall=document.querySelectorAll(e)

  
  demoid.style.border='1px solid purple'
  
   for (i=0; i<democlas.length; i++)
   {
     democlas[i].style.border="1px solid orange"
   }
   /**looping through the elements */

   for (i=0;i<demotag.length; i++)
   {
    demotag[1].style.border="1px solid  blue"
   }
    demoquery.style.border="1px solid green"
    /**A function that accepts all the three arguemets
     * ForEach calls the callbackfn function one time for each element in the list
     */
    demoqueryall.forEach(query=>{
      query.selector.border='1 px solid gray'
    })
  
}

access('demo','demo','article','#demo-query','.demo-query-all')


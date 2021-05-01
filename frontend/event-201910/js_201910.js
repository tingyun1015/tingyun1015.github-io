var a = document.getElementById('timeline');
setInterval( function(){
setTimeout(
  function(){
    a.preventDefault;
    a.classList.remove("banner_timeline");
    void a.offsetWidth;
    a.classList.add("banner_timeline");
    a.textContent = '10/17 (四) 台南';
  },0);

setTimeout(
  function(){
    a.preventDefault;
    a.classList.remove("banner_timeline");
    void a.offsetWidth;
    a.classList.add("banner_timeline");
    a.textContent = '10/17 (四) 高雄';},2000);
    setTimeout(
      function(){
        a.preventDefault;
        a.classList.remove("banner_timeline");
        void a.offsetWidth;
        a.classList.add("banner_timeline");
        a.textContent = '10/18 (五) 台中';},4000);
},6000)

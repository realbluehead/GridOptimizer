

onmessage = function (e) {
    console.log(e);
  for(let i=0;i<10000000;i++) {
    if(i%100000==0) {postMessage(i);}
  }
};
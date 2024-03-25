onmessage = function (e) {
    const action = e.data.action;

  for(let i=0;i<10000000;i++) {
    if(i%100000==0) {postMessage(i);}
  }
};
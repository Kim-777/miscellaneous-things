let url = 'https://api.github.com/repos/javascript-tutorial/ko.javascript.info/commits';


const loadData = async () => {

  console.log('시작')
  try {
    const response = await fetch(url)

    console.log('response ====> ', response);

    if(response.ok) {
      let json = await response.json()
      console.log(json);
    }

  } catch (e) {
    console.log(e);
  } 
  console.log('끝');
}


setTimeout(() => {
  console.log('????')
  loadData();
}, 300)

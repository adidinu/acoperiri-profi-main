const msg = document.querySelector('textarea');
const count = document.querySelector('.char-count');
  const inputs = document.querySelectorAll('input');

for(let i = 0; i < inputs.length; i++){
  inputs[i].addEventListener('keyup', (e) => {
    if(inputs[i].value.length >= parseInt(inputs[i].getAttribute('maxlength'))){
      inputs[i].parentElement.classList.add('error');
      inputs[i].parentElement.querySelector('.error-count').classList.add('show');
    }
    else{
      inputs[i].parentElement.classList.remove('error');
      inputs[i].parentElement.querySelector('.error-count').classList.remove('show');
    }
  });
  inputs[i].addEventListener('blur', (e) => {
    inputs[i].parentElement.classList.remove('error');
    inputs[i].parentElement.querySelector('.error-count').classList.remove('show');
  });
}

msg.addEventListener('keyup', (e) => {
  let countText = count.innerText;
  let countNum = countText.split('/')[0];
  countNum = msg.value.length;
  count.innerText = `${countNum}/${countText.split('/')[1]}`;
  if(countNum >= 500){
    msg.parentElement.parentElement.classList.add('error');
    msg.parentElement.parentElement.querySelector('.error-count').classList.add('show');
  }
  else{
    msg.parentElement.parentElement.classList.remove('error');
    msg.parentElement.parentElement.querySelector('.error-count').classList.remove('show');
  }
})

msg.addEventListener('blur', (e) => {
  msg.parentElement.parentElement.classList.remove('error');
  msg.parentElement.parentElement.querySelector('.error-count').classList.remove('show');
})
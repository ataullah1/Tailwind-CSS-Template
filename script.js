function Menu(e) {
  let list = document.getElementById('togol');
  e.name === 'menu'
    ? ((e.name = 'close'), list.classList.add('translate-y-[110px]'))
    : ((e.name = 'menu'), list.classList.remove('translate-y-[110px]'));
}

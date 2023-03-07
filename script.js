const $form = document.getElementById('form');
const $diceQty = document.getElementById('dice-qty');
const $diceFace = document.getElementById('dice-face');
const $result = document.getElementById('result');

function check() {
if($diceQty.value == '') {
    alert('数字を2箇所に入力してください');
    return false;    
} 
if($diceFace.value == '') {
    alert('数字をを2箇所に入力してください');
    return false;

}else {
    return true;
}

}
$form.addEventListener('submit', function(event) {
    event.preventDefault();
    
    const numbers = [];
    for (let i = 0;i < $diceQty.value; i++) {
        const diceNumber = Math.floor(Math.random() * $diceFace.value) + 1
        numbers[i]=diceNumber
    }
    const sum = numbers.reduce(function(a, b) {
        return a + b;
    });
    
    $result.textContent = '合計:' + sum 
});




const $reset = document.getElementById('result-reset');
$reset.addEventListener('click', function() {
    $result.innerHTML = '';
});

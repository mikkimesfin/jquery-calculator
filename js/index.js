var $screen = $('#screen');
var $clear = $('#clear');
var $equals = $('#equals');
var $mathArray = [
  $('#zero'),
  $('#one'),
  $('#two'),
  $('#three'),
  $('#four'),
  $('#five'),
  $('#six'),
  $('#seven'),
  $('#eight'),
  $('#nine'),
  $('#multiply'),
  $('#divide'),
  $('#addition'),
  $('#minus')
];

var opCnt = 0;

$clear.click(function() {
  opCnt = 0;
  console.log(opCnt);
  $screen.text('');
})

$equals.click(function() {
  var total = eval($screen.text());
  console.log(total);
  $screen.text(total);
  opCnt = 0;
})

for (var i = 0; i < $mathArray.length; i++) {
  $mathArray[i].click(function() {
    if ($screen.text() !== 'Infinity') {
      var button = $(this).text()
      if (button !== '+' && button !== "/" && button !== '*' && button !== '-') {
        console.log(button);
        $screen.append(button);
      } else {
        if (opCnt > 0) {
          var total = eval($screen.text());
          console.log(total);
          $screen.text(total);
          opCnt = 0;
        } else {
          opCnt = 1;
          $screen.append(button);

        }
      }
    }
  })
}

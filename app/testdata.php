<?php

$aaa = 2;
// echo strtotime("2014-2-1");
// echo mktime(0,0,0, 1,2,2014);

 $pointTime = $_GET['point_time'];
 $interval =  $_GET['timeinterval'];
 $dataSize =  $_GET['dataSize'];
 // $offset = $_GET['offset'];
 // echo $offset;

if ($pointTime == '') {
  $lastPoint = time();
}
else {
  $lastPoint = $pointTime;
}

$time = $lastPoint + $interval;

$results1 = '[';
for ($i = 0; $i < $dataSize-1; $i++) {
  $ret = '{';
  $time -= $interval;
  $ret .= '"x":'. $time .',';
  $ret .= '"y":'. mt_rand(1, 50);
  $ret .= '},';
  $results1 .= $ret;
}
$ret = '{';
  $time -= $interval;
  $ret .= '"x":'. $time .',';
  $ret .= '"y":'. mt_rand(1, 50);
  $ret .= '}';
  $results1 .= $ret;
$results1 .= ']';

$results2 = '[';
for ($i = 0; $i < $dataSize-1; $i++) {
  $ret = '{';
  $time -= $interval;
  $ret .= '"x":'. $time .',';
  $ret .= '"y":'. mt_rand(1, 50);
  $ret .= '},';
  $results2 .= $ret;
}
$ret = '{';
  $time -= $interval;
  $ret .= '"x":'. $time .',';
  $ret .= '"y":'. mt_rand(1, 50);
  $ret .= '}';
  $results2 .= $ret;
$results2 .= ']';

echo '['. $results1 .','. $results2 . ']';

?>
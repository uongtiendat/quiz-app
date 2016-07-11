<?php
error_reporting("All");
mysql_connect("127.0.0.1","root","") or die ("Connect Error");
mysql_select_db("datuong") or die ("Can not connect to database");
mysql_query("set names utf8");
?>
import 'package:flutter/material.dart';
import 'package:get/get.dart';

import '../../config/constants.dart';

class PageController extends GetxController {
  late final Rx<int> _current;

  PageController(int current) {
    _current = current.obs;
  }

  int get current => _current.value;
  String get title => pages[_current.value][0];
  Widget get page => pages[_current.value][1];

  set current(int page) {
    _current.value = page;
  }
}

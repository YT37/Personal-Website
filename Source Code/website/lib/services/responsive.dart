import 'package:flutter/material.dart';
import 'package:get/get.dart';

class Responsive extends StatelessWidget {
  final Widget mobile;
  final Widget desktop;

  const Responsive({
    super.key,
    required this.mobile,
    required this.desktop,
  });

  static bool isMobile(BuildContext context) => context.width < 576;
  static bool isDesktop(BuildContext context) => context.width > 992;

  @override
  Widget build(BuildContext context) {
    final Size size = MediaQuery.of(context).size;

    if (size.width > 992) {
      return desktop;
    } else {
      return mobile;
    }
  }
}

import 'package:flutter/material.dart';

import '../config/constants.dart';

class AboutPage extends StatelessWidget {
  const AboutPage({super.key});

  @override
  Widget build(BuildContext context) {
    return Container(
      color: theme.colorScheme.secondary,
      height: 500,
      child: Center(
        child: Text(
          "About",
          style: theme.textTheme.titleLarge,
        ),
      ),
    );
  }
}

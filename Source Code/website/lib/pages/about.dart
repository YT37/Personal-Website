import 'package:flutter/material.dart';

import '../config/constants.dart';

class AboutPage extends StatelessWidget {
  const AboutPage({super.key});

  @override
  Widget build(BuildContext context) {
    return Container(
      decoration: BoxDecoration(
        gradient: LinearGradient(
          begin: Alignment.topRight,
          end: Alignment.bottomLeft,
          colors: [
            theme.colorScheme.secondary,
            theme.colorScheme.tertiary,
          ],
        ),
      ),
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

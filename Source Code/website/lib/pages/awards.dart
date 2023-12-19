import 'package:flutter/material.dart';

import '../config/constants.dart';

class AwardsPage extends StatelessWidget {
  const AwardsPage({super.key});

  @override
  Widget build(BuildContext context) {
    return SizedBox(
      height: 500,
      child: Center(
        child: Text(
          "Awards",
          style: theme.textTheme.titleLarge,
        ),
      ),
    );
  }
}

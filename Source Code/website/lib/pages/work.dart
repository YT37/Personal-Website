import 'package:flutter/material.dart';

import '../config/constants.dart';

class WorkPage extends StatelessWidget {
  const WorkPage({super.key});

  @override
  Widget build(BuildContext context) {
    return Container(
      height: 500,
      color: theme.colorScheme.secondary,
      child: Center(
        child: Text(
          "Work",
          style: theme.textTheme.titleLarge,
        ),
      ),
    );
  }
}

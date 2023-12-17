import 'package:flutter/material.dart';

import '../config/constants.dart';

class HomePage extends StatelessWidget {
  const HomePage({super.key});

  @override
  Widget build(BuildContext context) {
    return Center(
      child: Text(
        "Home",
        style: theme.textTheme.titleLarge,
      ),
    );
  }
}

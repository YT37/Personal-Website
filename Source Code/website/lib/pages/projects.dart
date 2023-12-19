import 'package:flutter/material.dart';

import '../config/constants.dart';

class ProjectsPage extends StatelessWidget {
  const ProjectsPage({super.key});

  @override
  Widget build(BuildContext context) {
    return SizedBox(
      height: 500,
      child: Center(
        child: Text(
          "Projects",
          style: theme.textTheme.titleLarge,
        ),
      ),
    );
  }
}

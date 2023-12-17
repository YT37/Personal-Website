import 'package:flutter/material.dart';

import '../config/constants.dart';

class ProjectsPage extends StatelessWidget {
  const ProjectsPage({super.key});

  @override
  Widget build(BuildContext context) {
    return Center(
      child: Text(
        "Projects",
        style: theme.textTheme.titleLarge,
      ),
    );
  }
}

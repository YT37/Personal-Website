import 'package:flutter/material.dart';

import '../config/constants.dart';
import '../config/data.dart';

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
      child: Padding(
        padding: const EdgeInsets.symmetric(horizontal: 20),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            Padding(
              padding: const EdgeInsets.symmetric(vertical: 25),
              child: Text(
                "About Me",
                style: theme.textTheme.displayMedium!
                    .copyWith(fontWeight: FontWeight.bold),
              ),
            ),
            // TODO: Deal with mobile
            Flexible(
              child: Text(
                ABOUT_ME,
                overflow: TextOverflow.clip,
                style: theme.textTheme.titleMedium,
              ),
            ),
          ],
        ),
      ),
    );
  }
}

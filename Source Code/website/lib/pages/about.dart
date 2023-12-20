import 'package:flutter/material.dart';
import 'package:get/get.dart';

import '../config/data.dart';

class AboutPage extends StatelessWidget {
  const AboutPage({super.key});

  @override
  Widget build(BuildContext context) {
    return Container(
      height: 500,
      decoration: BoxDecoration(
        gradient: LinearGradient(
          begin: Alignment.topRight,
          end: Alignment.bottomLeft,
          colors: [
            context.theme.colorScheme.secondary,
            context.theme.colorScheme.tertiary,
          ],
        ),
      ),
      child: Padding(
        padding: const EdgeInsets.symmetric(horizontal: 20),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            Padding(
              padding: const EdgeInsets.symmetric(vertical: 25),
              child: Text(
                "About Me",
                style: context.textTheme.displayMedium!.copyWith(
                  fontWeight: FontWeight.bold,
                  color: context.theme.colorScheme.onSecondary,
                ),
              ),
            ),
            // TODO: Deal with mobile
            Flexible(
              child: Text(
                ABOUT_ME,
                overflow: TextOverflow.clip,
                style: context.textTheme.titleMedium!
                    .copyWith(color: context.theme.colorScheme.onSecondary),
              ),
            ),
          ],
        ),
      ),
    );
  }
}
